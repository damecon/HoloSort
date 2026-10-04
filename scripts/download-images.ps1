# Downloads every remote `img:` URL in the data file into src/assets/chars/ and rewrites the data file to use them.
# Usage: powershell -File scripts/download-images.ps1 [-DataFile src/js/data/2026-10-03.js]
param([string]$DataFile = 'src/js/data/2026-10-03.js')

$outDir = 'src/assets/chars'
New-Item -ItemType Directory -Force $outDir | Out-Null
$path = (Resolve-Path $DataFile).Path
$text = [IO.File]::ReadAllText($path)
$urls = [regex]::Matches($text, 'img:\s*"(https?:[^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
$used = @{}
$failed = 0

foreach ($url in $urls) {
  $base = [uri]::UnescapeDataString(($url -split '/revision/')[0].Split('/')[-1]) -replace '[^\w.\-]', '_'
  if ($used.ContainsKey($base)) { $file = "$($used[$base])_$base"; $used[$base]++ } else { $file = $base; $used[$base] = 1 }
  try {
    Invoke-WebRequest $url -OutFile "$outDir/$file" -UserAgent 'Mozilla/5.0' -Headers @{ Referer = 'https://virtualyoutuber.fandom.com/' }
    $text = $text.Replace("`"$url`"", "`"$outDir/$file`"")
    Write-Host "ok   $file"
  } catch {
    $failed++
    Write-Host "FAIL $url $($_.Exception.Message)"
  }
}
[IO.File]::WriteAllText($path, $text, (New-Object Text.UTF8Encoding $false))
Write-Host "$($urls.Count - $failed)/$($urls.Count) downloaded"
