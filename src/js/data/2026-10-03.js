dataSetVersion = "2026-10-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Generation",
        key: "generation",
        tooltip: "Check this to restrict to certain generations.",
        checked: false,
        sub: [
            { name: "0th gen", key: "gen0" },
            { name: "1st gen", key: "gen1" },
            { name: "2nd gen", key: "gen2" },
            { name: "3rd gen", key: "gen3" },
            { name: "4th gen", key: "gen4" },
            { name: "5th gen", key: "gen5" },
            { name: "6th gen", key: "gen6" },
            { name: "ReGLOSS", key: "regloss" },
            { name: "FLOW GLOW", key: "flowglow" },
            { name: "ASOBI★MAWARI-TAI! ", key: "asobimawaritai" },
            { name: "GAMERS", key: "gamers" },
            { name: "China", key: "cn" },
            { name: "Indonesia", key: "id" },
            { name: "Myth", key: "en" },
            { name: "Councilrys", key: "en2" },
            { name: "Advent", key: "en3" },
            { name: "Justice", key: "en4" },
            { name: "Holostars", key: "stars" },
            { name: "Staff", key: "staff" }
            
        ]
    },
    {
        name: "Remove Non-JP Holos",
        key: "notjphololive",
        tooltip: "Check this to remove all non-JP Hololive members. HyperPlease.",
        checked: false
    },
    {
        name: "Remove Non-Girls",
        key: "notgirl",
        tooltip: "Check this to remove all non-female members."
    },
    {
        name: "Remove Former Members",
        key: "former",
        tooltip: "Check this to remove all former members."
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Tokino Sora",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/38/Tokino_Sora_2026_Portrait.png/revision/latest/scale-to-width-down/500?cb=20260907164605",
        colors: ["#4638AA", "#2A69FB"],
        debut: 2017,
        tags: ["brown", "idol", "daisenpai"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Roboco",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e3/Robocosan_2022_Portrait.png/revision/latest/scale-to-width-down/500?cb=20221212164207",
        colors: ["#A36694", "#E198B0"],
        debut: 2018,
        tags: ["brown", "robot", "high-spec"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Sakura Miko",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/7f/Sakura_Miko_2020_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210802134259",
        colors: ["#FF4B74", "#FF9CB4"],
        height: 152,
        debut: 2018,
        tags: ["pink", "ears", "gremlin", "elite"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Hoshimachi Suisei",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/8b/Hoshimachi_Suisei_2019_Portrait.png/revision/latest/scale-to-width-down/500?cb=20191205132210",
        colors: ["#454A93", "#7BACEC"],
        height: 160,
        debut: 2018,
        tags: ["blue", "idol", "musician"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "AZKi",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a4/AZKi_2022_Portrait.png/revision/latest/scale-to-width-down/500?cb=20221115130810",
        colors: ["#FA3689", "#FA3689"],
        debut: 2018,
        tags: ["pink", "idol", "musician"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Akai Haato",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/77/Akai_Haato_Portrait.png/revision/latest/scale-to-width-down/500?cb=20260831230151",
        colors: ["#D9062A", "#FC123F"],
        height: 154,
        debut: 2018,
        tags: ["red", "gremlin", "blonde", "chaotic"],
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Yozora Mel",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/cf/Yozora_Mel_Portrait.png/revision/latest/scale-to-width-down/500?cb=20190215175632",
        colors: ["#FDD531", "#FF7709"],
        debut: 2018,
        tags: ["blonde", "undead"],
        opts: {
            generation: ["gen1"],
            former: true
        }
    },
    {
        name: "Natsuiro Matsuri",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/f7/Natsuiro_Matsuri_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220730002625",
        colors: ["#FF5606", "#FFA227"],
        debut: 2018,
        tags: ["orange", "gremlin", "lewd"],
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Aki Rosenthal",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/59/Aki_Rosenthal_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250302212307",
        colors: ["#4982FE", "#F93B88"],
        debut: 2018,
        tags: ["blonde", "elf", "dancing"],
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Shirakami Fubuki",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/45/Shirakami_Fubuki_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230627082355",
        colors: ["#53C7EA", "#76DFFF"],
        debut: 2018,
        tags: ["white", "ears"],
        opts: {
            generation: ["gen1", "gamers"],
        }
    },
    {
        name: "Oozora Subaru",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/49/Oozora_Subaru_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250907105359",
        colors: ["#BDE717", "#E0FF2C"],
        debut: 2018,
        tags: ["idol"],
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Yuzuki Choco",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a8/Yuzuki_Choco_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250630001247",
        colors: ["#FE739C", "#FFA4CF"],
        debut: 2018,
        tags: ["mature", "asmr"],
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Murasaki Shion",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3f/Murasaki_Shion_Portrait.png/revision/latest/scale-to-width-down/500?cb=20190702115949",
        colors: ["#8565FC", "#8565FC"],
        debut: 2018,
        tags: ["purple", "gaki"],
        opts: {
            generation: ["gen2"],
            former:true
        }
    },
    {
        name: "Nakiri Ayame",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/09/Nakiri_Ayame_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250221231720",
        colors: ["#9C3741", "#9C3741"],
        debut: 2018,
        tags: ["white", "horns"],
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Minato Aqua",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/8b/Minato_Aqua_Portrait.png/revision/latest/scale-to-width-down/500?cb=20190215180705",
        colors: ["#404B83", "#F5BEDA"],
        height: 148,
        debut: 2018,
        tags: ["purple", "gremlin"],
        opts: {
            generation: ["gen2"],
            former: true
        }
    },
    {
        name: "Ookami Mio",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/18/Ookami_Mio_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250930005406",
        colors: ["#DC1935", "#FF314A"],
        debut: 2018,
        tags: ["black", "ears", "mature"],
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Nekomata Okayu",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/4b/Nekomata_Okayu_Portrait.png/revision/latest/scale-to-width-down/500?cb=20190405185910",
        colors: ["#B190FA", "#BC5BC6"],
        height: 152,
        debut: 2019,
        tags: ["purple", "ears", "mature"],
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Inugami Korone",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c6/Inugami_Korone_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250930010842",
        colors: ["#A7492F", "#FAE13F"],
        height: 156,
        debut: 2019,
        tags: ["ears", "gremlin", "gamer"],
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Usada Pekora",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/95/Usada_Pekora_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220729230439",
        colors: ["#7DC4FC", "#7DC4FC"],
        debut: 2019,
        tags: ["ears", "gremlin"],
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Uruha Rushia",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a2/Uruha_Rushia_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20240201054019",
        colors: ["#04E3CB", "#255073"],
        height: 143,
        debut: 2019,
        tags: ["gremlin"],
        opts: {
            generation: ["gen3"],
            former: true
        }
    },
    {
        name: "Shiranui Flare",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/62/Shiranui_Flare_December_2021_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250928160451",
        colors: ["#DC3813", "#FF5028"],
        height: 158,
        debut: 2019,
        tags: ["elf"],
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Shirogane Noel",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/03/Shirogane_Noel_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250708223806",
        colors: ["#AEBBC3", "#2B3E5C"],
        height: 158,
        debut: 2019,
        tags: ["white", "knight", "mature", "asmr"],
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Houshou Marine",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/4e/Houshou_Marine_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250512200250",
        colors: ["#A72413", "#CA3C28"],
        height: 150,
        debut: 2019,
        tags: ["red", "mature"],
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Tsunomaki Watame",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c6/Tsunomaki_Watame_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250321012210",
        colors: ["#F6ECA5", "#F6ECA5"],
        debut: 2019,
        tags: ["blonde", "horns"],
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Tokoyami Towa",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/35/Tokoyami_Towa_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250416210730",
        colors: ["#7B66A8", "#7B66A8"],
        height: 150,
        debut: 2020,
        tags: ["purple", "horns"],
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Kiryu Coco",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/09/Kiryu_Coco_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20191228224253",
        colors: ["#FD935F", "#FD935F"],
        height: 180,
        debut: 2019,
        tags: ["orange", "horns", "mature"],
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Amane Kanata",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/6c/Amane_Kanata_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250410202638",
        colors: ["#367CE5", "#367CE5"],
        debut: 2019,
        tags: ["white", "angel", "gremlin"],
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Himemori Luna",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/22/Himemori_Luna_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250410204015",
        colors: ["#E77DBC", "#E77DBC"],
        height: 140,
        debut: 2020,
        tags: ["pink", "princess", "baby"],
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Yukihana Lamy",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/ee/Yukihana_Lamy_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250410205454",
        colors: ["#6CCDF8", "#6CCDF8"],
        height: 158,
        debut: 2020,
        tags: ["blue", "elf"],
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Momosuzu Nene",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/bf/Momosuzu_Nene_2021_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250410210056",
        colors: ["#FFB65D", "#FFE5BD"],
        height: 159,
        debut: 2020,
        tags: ["orange"],
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Shishiro Botan",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/d9/Shishiro_Botan_Portrait.png/revision/latest/scale-to-width-down/500?cb=20260103214223",
        colors: ["#A4E5CF", "#A4E5CF"],
        height: 166,
        debut: 2020,
        tags: ["white", "ears"],
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Omaru Polka",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/33/Omaru_Polka_Portrait.png/revision/latest/scale-to-width-down/500?cb=20260103232033",
        colors: ["#AB0808", "#CF2830"],
        height: 153,
        debut: 2020,
        tags: ["red", "gremlin"],
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "La+ Darkness",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/7b/La%2B_Darknesss_Portrait.png/revision/latest/scale-to-width-down/500?cb=20211202201644",
        colors: ["#441495", "#936CC6"],
        height: 139,
        debut: 2021,
        tags: ["purple", "horns"],
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Takane Lui",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/04/Takane_Lui_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250614200325",
        colors: ["#28040D", "#831550"],
        height: 161,
        debut: 2021,
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Hakui Koyori",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c2/Hakui_Koyori_Portrait.png/revision/latest/scale-to-width-down/500?cb=20211202201357",
        colors: ["#FE68AD", "#FFACD3"],
        height: 153,
        debut: 2021,
        tags: ["pink", "ears"],
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Sakamata Chloe",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png/revision/latest/scale-to-width-down/500?cb=20211202204337",
        colors: ["#AB0E0C", "#CF4C4A"],
        height: 148,
        debut: 2021,
        tags: ["white"],
        opts: {
            generation: ["gen6"],
            former: true
        }
    },
    {
        name: "Kazama Iroha",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/96/Kazama_Iroha_Portrait.png/revision/latest/scale-to-width-down/500?cb=20211202200910",
        colors: ["#44BFB7", "#93DCD8"],
        height: 156,
        debut: 2021,
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Hiodoshi Ao",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/d3/Hiodoshi_Ao_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230908194658",
        colors: ["#1D3467", "#1D3467"],
        debut: 2023,
        tags: ["blue", "ikemen"],
        opts: {
            generation: ["regloss"],
            former: true
        }
    },
    {
        name: "Otonose Kanade",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/ac/Otonose_Kanade_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230908194806",
        colors: ["#FFE7B5", "#FFE7B5"],
        debut: 2023,
        tags: ["blonde", "singer"],
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Ichijou Ririka",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/87/Ichijou_Ririka_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230908195108",
        colors: ["#F47DA9", "#F47DA9"],
        height: 162,
        debut: 2023,
        tags: ["pink", "gyaru"],
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Juufuutei Raden",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/25/Juufuutei_Raden_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230908195248",
        colors: ["#3C7C71", "#3C7C71"],
        height: 159,
        debut: 2023,
        tags: ["green", "art"],
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Todoroki Hajime",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e1/Todoroki_Hajime_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230908195359",
        colors: ["#B6B9FF", "#B6B9FF"],
        height: 155,
        debut: 2023,
        tags: ["baby", "dancing"],
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Isaki Riona",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/da/Isaki_Riona_Portrait.png/revision/latest/scale-to-width-down/500?cb=20241107060152",
        colors: ["#C92655", "#FE3480"],
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Koganei Niko",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/13/Koganei_Niko_Portrait.png/revision/latest/scale-to-width-down/500?cb=20241107055708",
        colors: ["#F25E11", "#F58017"],
        height: 172,
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Mizumiya Su",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3b/Mizumiya_Su_Portrait.png/revision/latest/scale-to-width-down/500?cb=20241107055126",
        colors: ["#71E5FF", "#64CCE4"],
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Rindo Chihaya",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/81/Rindo_Chihaya_Portrait.png/revision/latest/scale-to-width-down/500?cb=20241107054628",
        colors: ["#37BABA", "#2C8C8B"],
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Kikirara Vivi",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/54/Kikirara_Vivi_Portrait.png/revision/latest/scale-to-width-down/500?cb=20241107054043",
        colors: ["#FF90CC", "#E6499B"],
        height: 161,
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Yogiri",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/bb/Yogiri_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20191205143652",
        colors: ["#C71944", "#C71944"],
        height: 164,
        debut: 2019,
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Civia",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c5/Civia_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200428061136",
        colors: ["#7AC7FF", "#7AC7FF"],
        height: 157,
        debut: 2019,
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Spade Echo",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/90/Spade_Echo_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200428063924",
        colors: ["#FF9AC2", "#F2D6E7"],
        height: 145,
        debut: 2020,
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Doris",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/aa/Doris_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200515132603",
        colors: ["#7BD3FC", "#7BD3FC"],
        height: 156,
        debut: 2020,
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Artia",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/d6/Artia_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200428064857",
        colors: ["#A59AC2", "#A59AC2"],
        height: 144,
        debut: 2020,
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Rosalyn",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b2/Rosalyn_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200517145422",
        colors: ["#354F71", "#354F71"],
        debut: 2020,
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ayunda Risu",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/de/Ayunda_Risu_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200427142410",
        colors: ["#EF8381", "#F6BBBB"],
        height: 153,
        debut: 2020,
        tags: ["orange", "ears"],
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Moona Hoshinova",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/94/Moona_Hoshinova_Portrait.jpg/revision/latest/scale-to-width-down/500?cb=20200411161426",
        colors: ["#B59DDD", "#CBB3FF"],
        height: 165,
        debut: 2020,
        tags: ["purple"],
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Airani Iofifteen",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/cb/Airani_Iofifteen_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200427135833",
        colors: ["#BEF167", "#495370"],
        height: 150,
        debut: 2020,
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kureiji Ollie",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/f4/Kureiji_Ollie_Portrait.png/revision/latest/scale-to-width-down/500?cb=20201201052431",
        colors: ["#B7030E", "#D60E54"],
        height: 162,
        debut: 2020,
        tags: ["undead"],
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Anya Melfissa",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/ff/Anya_Melfissa_Portrait.jpg/revision/latest/scale-to-width-down/500?cb=20201201054912",
        colors: ["#9E7C7E", "#DAB75B"],
        debut: 2020,
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Pavolia Reine",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/d2/Pavolia_Reine_Portrait.png/revision/latest/scale-to-width-down/500?cb=20201201063050",
        colors: ["#2A64AE", "#6FCCBB"],
        height: 172,
        debut: 2020,
        tags: ["blue", "mature"],
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Vesia Zeta",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b6/Vestia_Zeta_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220324053909",
        colors: ["#97A1AE", "#6073B5"],
        debut: 2022,
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kaela Kovalskia",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/61/Kaela_Kovalskia_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250326164943",
        colors: ["#DC2528", "#202020"],
        height: 173,
        debut: 2022,
        tags: ["red"],
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kobo Kanaeru",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3b/Kobo_Kanaeru_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220324054528",
        colors: ["#161C4F", "#CDEDFC"],
        height: 150,
        debut: 2022,
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Mori Calliope",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/39/Mori_Calliope_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250925202036",
        colors: ["#A1020B", "#C90D40"],
        height: 167,
        debut: 2020,
        tags: ["pink", "mature"],
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Takanashi Kiara",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/28/Takanashi_Kiara_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250925202735",
        colors: ["#DC3907", "#FF511C"],
        height: 165,
        debut: 2020,
        tags: ["orange"],
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ninomae Ina'nis",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/46/Ninomae_Ina%27nis_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250925203523",
        colors: ["#3F3E69", "#62567E"],
        height: 157,
        debut: 2020,
        tags: ["purple", "mature"],
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Gawr Gura",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/4f/Gawr_Gura_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250925210601",
        colors: ["#5D81C7", "#5D81C7"],
        height: 141,
        debut: 2020,
        tags: ["white", "gremlin"],
        opts: {
            generation: ["en"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Watson Amelia",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/97/Watson_Amelia_Portrait.png/revision/latest/scale-to-width-down/500?cb=20250925204645",
        colors: ["#F8DB92", "#F8DB92"],
        height: 150,
        debut: 2020,
        tags: ["blonde"],
        opts: {
            generation: ["en"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "IRyS",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/5b/IRyS_2022_Portrait.png/revision/latest/scale-to-width-down/500?cb=20221211122608",
        colors: ["#F8055D", "#3C0024"],
        debut: 2021,
        tags: ["pink", "horns"],
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Tsukumo Sana",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/69/Tsukumo_Sana_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210902020048",
        colors: ["#FEDE4A", "#F2D7C4"],
        height: 169,
        debut: 2021,
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ceres Fauna",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/73/Ceres_Fauna_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210902015951",
        colors: ["#A4E5CF", "#F6BCB8"],
        height: 164,
        debut: 2021,
        tags: ["green", "mature"],
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ouro Kronii",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b2/Ouro_Kronii_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210817022852",
        colors: ["#0869EC", "#2F2E31"],
        height: 168,
        debut: 2021,
        tags: ["black", "mature"],
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Nanashi Mumei",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/86/Nanashi_Mumei_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210817024548",
        colors: ["#998274", "#4799A5"],
        height: 156,
        debut: 2021,
        tags: ["brown"],
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Hakos Baelz",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a3/Hakos_Baelz_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210817022252",
        colors: ["#D2251E", "#322D2A"],
        height: 149,
        debut: 2021,
        tags: ["gremlin"],
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Shiori Novella",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/26/Shiori_Novella_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230726054616",
        colors: ["#373741", "#B8A0CD"],
        height: 163,
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Koseki Bijou",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/ee/Koseki_Bijou_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230726054859",
        colors: ["#6E5BF4", "#FC74FF"],
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Nerissa Ravencroft",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/66/Nerissa_Ravencroft_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230726055055",
        colors: ["#1E26AB", "#2233FC"],
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Fuwawa Abyssgard",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/f4/Fuwawa_Abyssgard_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230726055215",
        colors: ["#67B2FF", "#67B2FF"],
        height: 155,
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Mococo Abyssgard",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3e/Mococo_Abyssgard_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230726055318",
        colors: ["#F7A6CA", "#F7A6CA"],
        height: 155,
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Elizabeth Rose Bloodflame",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/87/Elizabeth_Rose_Bloodflame_Portrait.png/revision/latest/scale-to-width-down/500?cb=20240619035515",
        colors: ["#C63639", "#831F1E"],
        height: 171,
        debut: 2024,
        tags: ["red"],
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Gigi Murin",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3c/Gigi_Murin_Portrait.png/revision/latest/scale-to-width-down/500?cb=20240619041253",
        colors: ["#FEB543", "#FDDB63"],
        debut: 2024,
        tags: ["orange"],
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Cecilia Immergreen",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3c/Cecilia_Immergreen_Portrait.png/revision/latest/scale-to-width-down/500?cb=20240619034207",
        colors: ["#109D5B", "#57B085"],
        height: 162,
        debut: 2024,
        tags: ["green"],
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Raora Panthera",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/34/Raora_Panthera_Portrait.png/revision/latest/scale-to-width-down/500?cb=20240619042904",
        colors: ["#F086AA", "#CB4378"],
        debut: 2024,
        tags: ["pink", "ears"],
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Hanasaki Miyabi",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/2c/Hanasaki_Miyabi_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200622084724",
        colors: ["#B22B2B", "#B22B2B"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kagami Kira",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b7/Kagami_Kira_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200622085153",
        colors: ["#1EEEEB", "#77A1A2"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true
        }
    },
    {
        name: "Kanade Izuru",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/93/Kanade_Izuru_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200622090510",
        colors: ["#000000", "#4D65A6"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Arurandeisu",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/6f/Arurandeisu_new_Portrait.png/revision/latest/scale-to-width-down/500?cb=20221024081709",
        colors: ["#958C88", "#48756E"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Rikka",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a7/Rikka_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210319134651",
        colors: ["#674F54", "#EAB3B8"],
        height: 179,
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Astel Leda",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e4/Astel_Leda_-_Portrait_Conductor.png/revision/latest/scale-to-width-down/500?cb=20220626082314",
        colors: ["#F7850A", "#0047AB"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kishido Temma",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/7b/Kishido_Temma_-_Portrait.jpg/revision/latest/scale-to-width-down/500?cb=20200721115842",
        colors: ["#EFD0A1", "#FFF799"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yukoku Roberu",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/15/Yukoku_Roberu_-_Portrait.jpeg/revision/latest/scale-to-width-down/500?cb=20200622091448",
        colors: ["#734D57", "#EB6E00"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kageyama Shien",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/fe/Kageyama_Shien_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210729030716",
        colors: ["#000000", "#7A559B"],
        debut: 2020,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Aragami Oga",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/1c/Aragami_Oga_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20210729035244",
        colors: ["#000000", "#A5C14F"],
        debut: 2020,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Hitomi Chris",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/42/Hitomi_Chris_-_Full_Illustration.jpg/revision/latest/scale-to-width-down/500?cb=20190726053001",
        debut: 2018,
        opts: {
            generation: ["gen1"],
            former: true,
        }
    },
    {
        name: "Mano Aloe",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/fb/Mano_Aloe_Portrait.png/revision/latest/scale-to-width-down/500?cb=20200807015058",
        colors: ["#F38CC4", "#F38CC4"],
        height: 150,
        debut: 2020,
        opts: {
            generation: ["gen5"],
            former: true
        }
    },
    {
        name: "Yakushiji Suzaku",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/95/Yakushiji_Suzaku_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20201003163931",
        height: 180,
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Tsukishita Kaoru",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/ad/Tsukishita_Kaoru_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20221223070923",
        debut: 2020,
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Regis Altare",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/ca/Regis_Altare_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220727105221",
        colors: ["#54ACDC", "#4652B4"],
        height: 179,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Magni Dezmond",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/74/Magni_Dezmond_1.5_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230612163623",
        colors: ["#463464", "#DBC78C"],
        height: 184,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Axel Syrios",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/5b/Axel_Syrios_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220726172756",
        colors: ["#FF9603", "#2E2E2E"],
        height: 187,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Noir Vesper",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c8/Noir_Vesper_2.0_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230703071228",
        colors: ["#C8CCD0", "#3D4248"],
        height: 189,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Gavis Bettel",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/7c/Gavis_Bettel_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230105123308",
        colors: ["#EB3DA2", "#3C1E78"],
        height: 180,
        debut: 2023,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Machina X Flayon",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/65/Machina_X_Flayon_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230105124043",
        colors: ["#DD3F34", "#32363E"],
        height: 166,
        debut: 2023,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Banzoin Hakka",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/05/Banzoin_Hakka_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230105124602",
        colors: ["#BC83F4", "#3E214A"],
        debut: 2023,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Josuiji Shinji",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/40/Josuiji_Shinri_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20230105125821",
        colors: ["#A33926", "#F7932F"],
        height: 185,
        debut: 2023,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Yatogami Fuma",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/6f/Yatogami_Fuma_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220324162117",
        colors: ["#FABF13", "#B09A61"],
        height: 168,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Utsugi Uyu",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/be/Utsugi_Uyu_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220324162921",
        colors: ["#F9EEE2", "#CCA5F5"],
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Hizaki Gamma",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/5d/Hizaki_Gamma_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220324163522",
        colors: ["#E60012", "#FF9632"],
        height: 178,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true
        }
    },
    {
        name: "Minase Rio",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/19/Minase_Rio_-_Portrait.png/revision/latest/scale-to-width-down/500?cb=20220324164807",
        colors: ["#A4A8D4", "#5F64FC"],
        height: 170,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "A-chan",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/1e/A-chan_Portrait.jpg/revision/latest/scale-to-width-down/500?cb=20191121092034",
        debut: 2017,
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Harusaki Nodoka",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/2b/Harusaki_Nodoka_Headshot.jpg/revision/latest/scale-to-width-down/500?cb=20220401022613",
        colors: ["#CEE5A2", "#E3F1CD"],
        debut: 2022,
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Hanazono Sayaka",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/6e/Hanazono_Sayaka_Portrait.png/revision/latest/scale-to-width-down/500?cb=20251110043759",
        colors: ["#D3B674", "#F3D086"],
        debut: 2025,
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Izuki Michiru",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/7/79/Izuki_Michiru_Portrait.png/revision/latest/scale-to-width-down/500?cb=20251231073242",
        colors: ["#BF3966", "#CB4B85"],
        debut: 2025,
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Kazeshiro Yuki",
        img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e2/Kazeshiro_Yuki_Portrait.png/revision/latest/scale-to-width-down/500?cb=20251231073725",
        colors: ["#7AB4E2", "#92C3E8"],
        debut: 2025,
        opts: {
            generation: ["staff"],
        }
    }
];
