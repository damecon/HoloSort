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
        img: "src/assets/chars/Tokino_Sora_2026_Portrait.png",
        colors: ["#4638AA", "#2A69FB"],
        debut: 2017,
        tags: ["brown", "idol", "daisenpai"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Roboco",
        img: "src/assets/chars/Robocosan_2022_Portrait.png",
        colors: ["#A36694", "#E198B0"],
        debut: 2018,
        tags: ["brown", "robot", "high-spec"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Sakura Miko",
        img: "src/assets/chars/Sakura_Miko_2020_Portrait.png",
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
        img: "src/assets/chars/Hoshimachi_Suisei_2019_Portrait.png",
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
        img: "src/assets/chars/AZKi_2022_Portrait.png",
        colors: ["#FA3689", "#FA3689"],
        debut: 2018,
        tags: ["pink", "idol", "musician"],
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Akai Haato",
        img: "src/assets/chars/Akai_Haato_Portrait.png",
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
        img: "src/assets/chars/Yozora_Mel_Portrait.png",
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
        img: "src/assets/chars/Natsuiro_Matsuri_Portrait.png",
        colors: ["#FF5606", "#FFA227"],
        debut: 2018,
        tags: ["orange", "gremlin", "lewd"],
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Aki Rosenthal",
        img: "src/assets/chars/Aki_Rosenthal_Portrait.png",
        colors: ["#4982FE", "#F93B88"],
        debut: 2018,
        tags: ["blonde", "elf", "dancing"],
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Shirakami Fubuki",
        img: "src/assets/chars/Shirakami_Fubuki_-_Portrait.png",
        colors: ["#53C7EA", "#76DFFF"],
        debut: 2018,
        tags: ["white", "ears"],
        opts: {
            generation: ["gen1", "gamers"],
        }
    },
    {
        name: "Oozora Subaru",
        img: "src/assets/chars/Oozora_Subaru_Portrait.png",
        colors: ["#BDE717", "#E0FF2C"],
        debut: 2018,
        tags: ["idol"],
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Yuzuki Choco",
        img: "src/assets/chars/Yuzuki_Choco_Portrait.png",
        colors: ["#FE739C", "#FFA4CF"],
        debut: 2018,
        tags: ["mature", "asmr"],
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Murasaki Shion",
        img: "src/assets/chars/Murasaki_Shion_Portrait.png",
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
        img: "src/assets/chars/Nakiri_Ayame_Portrait.png",
        colors: ["#9C3741", "#9C3741"],
        debut: 2018,
        tags: ["white", "horns"],
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Minato Aqua",
        img: "src/assets/chars/Minato_Aqua_Portrait.png",
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
        img: "src/assets/chars/Ookami_Mio_Portrait.png",
        colors: ["#DC1935", "#FF314A"],
        debut: 2018,
        tags: ["black", "ears", "mature"],
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Nekomata Okayu",
        img: "src/assets/chars/Nekomata_Okayu_Portrait.png",
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
        img: "src/assets/chars/Inugami_Korone_Portrait.png",
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
        img: "src/assets/chars/Usada_Pekora_-_Portrait.png",
        colors: ["#7DC4FC", "#7DC4FC"],
        debut: 2019,
        tags: ["ears", "gremlin"],
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Uruha Rushia",
        img: "src/assets/chars/Uruha_Rushia_-_Portrait.png",
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
        img: "src/assets/chars/Shiranui_Flare_December_2021_Portrait.png",
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
        img: "src/assets/chars/Shirogane_Noel_-_Portrait.png",
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
        img: "src/assets/chars/Houshou_Marine_-_Portrait.png",
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
        img: "src/assets/chars/Tsunomaki_Watame_-_Portrait.png",
        colors: ["#F6ECA5", "#F6ECA5"],
        debut: 2019,
        tags: ["blonde", "horns"],
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Tokoyami Towa",
        img: "src/assets/chars/Tokoyami_Towa_-_Portrait.png",
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
        img: "src/assets/chars/Kiryu_Coco_-_Portrait.png",
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
        img: "src/assets/chars/Amane_Kanata_-_Portrait.png",
        colors: ["#367CE5", "#367CE5"],
        debut: 2019,
        tags: ["white", "angel", "gremlin"],
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Himemori Luna",
        img: "src/assets/chars/Himemori_Luna_-_Portrait.png",
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
        img: "src/assets/chars/Yukihana_Lamy_Portrait.png",
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
        img: "src/assets/chars/Momosuzu_Nene_2021_Portrait.png",
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
        img: "src/assets/chars/Shishiro_Botan_Portrait.png",
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
        img: "src/assets/chars/Omaru_Polka_Portrait.png",
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
        img: "src/assets/chars/La__Darknesss_Portrait.png",
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
        img: "src/assets/chars/Takane_Lui_Portrait.png",
        colors: ["#28040D", "#831550"],
        height: 161,
        debut: 2021,
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Hakui Koyori",
        img: "src/assets/chars/Hakui_Koyori_Portrait.png",
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
        img: "src/assets/chars/Sakamata_Chloe_Portrait.png",
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
        img: "src/assets/chars/Kazama_Iroha_Portrait.png",
        colors: ["#44BFB7", "#93DCD8"],
        height: 156,
        debut: 2021,
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Hiodoshi Ao",
        img: "src/assets/chars/Hiodoshi_Ao_Portrait.png",
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
        img: "src/assets/chars/Otonose_Kanade_Portrait.png",
        colors: ["#FFE7B5", "#FFE7B5"],
        debut: 2023,
        tags: ["blonde", "singer"],
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Ichijou Ririka",
        img: "src/assets/chars/Ichijou_Ririka_Portrait.png",
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
        img: "src/assets/chars/Juufuutei_Raden_Portrait.png",
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
        img: "src/assets/chars/Todoroki_Hajime_Portrait.png",
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
        img: "src/assets/chars/Isaki_Riona_Portrait.png",
        colors: ["#C92655", "#FE3480"],
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Koganei Niko",
        img: "src/assets/chars/Koganei_Niko_Portrait.png",
        colors: ["#F25E11", "#F58017"],
        height: 172,
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Mizumiya Su",
        img: "src/assets/chars/Mizumiya_Su_Portrait.png",
        colors: ["#71E5FF", "#64CCE4"],
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Rindo Chihaya",
        img: "src/assets/chars/Rindo_Chihaya_Portrait.png",
        colors: ["#37BABA", "#2C8C8B"],
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Kikirara Vivi",
        img: "src/assets/chars/Kikirara_Vivi_Portrait.png",
        colors: ["#FF90CC", "#E6499B"],
        height: 161,
        debut: 2024,
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Yogiri",
        img: "src/assets/chars/Yogiri_-_Portrait.png",
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
        img: "src/assets/chars/Civia_-_Portrait.png",
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
        img: "src/assets/chars/Spade_Echo_-_Portrait.png",
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
        img: "src/assets/chars/Doris_-_Portrait.png",
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
        img: "src/assets/chars/Artia_-_Portrait.png",
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
        img: "src/assets/chars/Rosalyn_-_Portrait.png",
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
        img: "src/assets/chars/Ayunda_Risu_-_Portrait.png",
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
        img: "src/assets/chars/Moona_Hoshinova_Portrait.jpg",
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
        img: "src/assets/chars/Airani_Iofifteen_-_Portrait.png",
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
        img: "src/assets/chars/Kureiji_Ollie_Portrait.png",
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
        img: "src/assets/chars/Anya_Melfissa_Portrait.jpg",
        colors: ["#9E7C7E", "#DAB75B"],
        debut: 2020,
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Pavolia Reine",
        img: "src/assets/chars/Pavolia_Reine_Portrait.png",
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
        img: "src/assets/chars/Vestia_Zeta_Portrait.png",
        colors: ["#97A1AE", "#6073B5"],
        debut: 2022,
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kaela Kovalskia",
        img: "src/assets/chars/Kaela_Kovalskia_Portrait.png",
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
        img: "src/assets/chars/Kobo_Kanaeru_Portrait.png",
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
        img: "src/assets/chars/Mori_Calliope_Portrait.png",
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
        img: "src/assets/chars/Takanashi_Kiara_Portrait.png",
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
        img: "src/assets/chars/Ninomae_Ina_nis_Portrait.png",
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
        img: "src/assets/chars/Gawr_Gura_Portrait.png",
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
        img: "src/assets/chars/Watson_Amelia_Portrait.png",
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
        img: "src/assets/chars/IRyS_2022_Portrait.png",
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
        img: "src/assets/chars/Tsukumo_Sana_Portrait.png",
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
        img: "src/assets/chars/Ceres_Fauna_Portrait.png",
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
        img: "src/assets/chars/Ouro_Kronii_Portrait.png",
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
        img: "src/assets/chars/Nanashi_Mumei_Portrait.png",
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
        img: "src/assets/chars/Hakos_Baelz_Portrait.png",
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
        img: "src/assets/chars/Shiori_Novella_Portrait.png",
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
        img: "src/assets/chars/Koseki_Bijou_Portrait.png",
        colors: ["#6E5BF4", "#FC74FF"],
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Nerissa Ravencroft",
        img: "src/assets/chars/Nerissa_Ravencroft_Portrait.png",
        colors: ["#1E26AB", "#2233FC"],
        debut: 2023,
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Fuwawa Abyssgard",
        img: "src/assets/chars/Fuwawa_Abyssgard_Portrait.png",
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
        img: "src/assets/chars/Mococo_Abyssgard_Portrait.png",
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
        img: "src/assets/chars/Elizabeth_Rose_Bloodflame_Portrait.png",
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
        img: "src/assets/chars/Gigi_Murin_Portrait.png",
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
        img: "src/assets/chars/Cecilia_Immergreen_Portrait.png",
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
        img: "src/assets/chars/Raora_Panthera_Portrait.png",
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
        img: "src/assets/chars/Hanasaki_Miyabi_-_Portrait.png",
        colors: ["#B22B2B", "#B22B2B"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kagami Kira",
        img: "src/assets/chars/Kagami_Kira_-_Portrait.png",
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
        img: "src/assets/chars/Kanade_Izuru_-_Portrait.png",
        colors: ["#000000", "#4D65A6"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Arurandeisu",
        img: "src/assets/chars/Arurandeisu_new_Portrait.png",
        colors: ["#958C88", "#48756E"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Rikka",
        img: "src/assets/chars/Rikka_-_Portrait.png",
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
        img: "src/assets/chars/Astel_Leda_-_Portrait_Conductor.png",
        colors: ["#F7850A", "#0047AB"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kishido Temma",
        img: "src/assets/chars/Kishido_Temma_-_Portrait.jpg",
        colors: ["#EFD0A1", "#FFF799"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yukoku Roberu",
        img: "src/assets/chars/Yukoku_Roberu_-_Portrait.jpeg",
        colors: ["#734D57", "#EB6E00"],
        debut: 2019,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kageyama Shien",
        img: "src/assets/chars/Kageyama_Shien_-_Portrait.png",
        colors: ["#000000", "#7A559B"],
        debut: 2020,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Aragami Oga",
        img: "src/assets/chars/Aragami_Oga_-_Portrait.png",
        colors: ["#000000", "#A5C14F"],
        debut: 2020,
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Hitomi Chris",
        img: "src/assets/chars/Hitomi_Chris_-_Full_Illustration.jpg",
        debut: 2018,
        opts: {
            generation: ["gen1"],
            former: true,
        }
    },
    {
        name: "Mano Aloe",
        img: "src/assets/chars/Mano_Aloe_Portrait.png",
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
        img: "src/assets/chars/Yakushiji_Suzaku_-_Portrait.png",
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
        img: "src/assets/chars/Tsukishita_Kaoru_-_Portrait.png",
        debut: 2020,
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Regis Altare",
        img: "src/assets/chars/Regis_Altare_-_Portrait.png",
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
        img: "src/assets/chars/Magni_Dezmond_1.5_Portrait.png",
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
        img: "src/assets/chars/Axel_Syrios_-_Portrait.png",
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
        img: "src/assets/chars/Noir_Vesper_2.0_Portrait.png",
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
        img: "src/assets/chars/Gavis_Bettel_-_Portrait.png",
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
        img: "src/assets/chars/Machina_X_Flayon_-_Portrait.png",
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
        img: "src/assets/chars/Banzoin_Hakka_-_Portrait.png",
        colors: ["#BC83F4", "#3E214A"],
        debut: 2023,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Josuiji Shinji",
        img: "src/assets/chars/Josuiji_Shinri_-_Portrait.png",
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
        img: "src/assets/chars/Yatogami_Fuma_-_Portrait.png",
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
        img: "src/assets/chars/Utsugi_Uyu_-_Portrait.png",
        colors: ["#F9EEE2", "#CCA5F5"],
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Hizaki Gamma",
        img: "src/assets/chars/Hizaki_Gamma_-_Portrait.png",
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
        img: "src/assets/chars/Minase_Rio_-_Portrait.png",
        colors: ["#A4A8D4", "#5F64FC"],
        height: 170,
        debut: 2022,
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Achichi Mela",
        img: "src/assets/chars/Achichi_Mela_Portrait.png",
        colors: ["#7778E8", "#53D2CF"],
        height: 149,
        debut: 2026,
        tags: ["purple", "blue", "salamander", "firefighter"],
        opts: {
            generation: ["asobimawaritai"],
        }
    },
    {
        name: "Suzuna Tsuzuri",
        img: "src/assets/chars/Suzuna_Tsuzuri_Portrait.png",
        colors: ["#BB1F25", "#FFEECF"],
        height: 155,
        debut: 2026,
        tags: ["red", "goat", "courier"],
        opts: {
            generation: ["asobimawaritai"],
        }
    },
    {
        name: "Hyakuto Kyoko",
        img: "src/assets/chars/Hyakuto_Kyoko_Portrait.png",
        colors: ["#F56B24", "#0F4D8E"],
        height: 162,
        debut: 2026,
        tags: ["orange", "police", "gamer"],
        opts: {
            generation: ["asobimawaritai"],
        }
    },
    {
        name: "Sorashina Sopia",
        img: "src/assets/chars/Sorashina_Sopia_Portrait.png",
        colors: ["#7B85FF", "#FFFE03"],
        height: 153,
        debut: 2026,
        tags: ["purple", "science", "astronaut"],
        opts: {
            generation: ["asobimawaritai"],
        }
    },
    {
        name: "A-chan",
        img: "src/assets/chars/A-chan_Portrait.jpg",
        debut: 2017,
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Harusaki Nodoka",
        img: "src/assets/chars/Harusaki_Nodoka_Headshot.jpg",
        colors: ["#CEE5A2", "#E3F1CD"],
        debut: 2022,
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Hanazono Sayaka",
        img: "src/assets/chars/Hanazono_Sayaka_Portrait.png",
        colors: ["#D3B674", "#F3D086"],
        debut: 2025,
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Izuki Michiru",
        img: "src/assets/chars/Izuki_Michiru_Portrait.png",
        colors: ["#BF3966", "#CB4B85"],
        debut: 2025,
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Kazeshiro Yuki",
        img: "src/assets/chars/Kazeshiro_Yuki_Portrait.png",
        colors: ["#7AB4E2", "#92C3E8"],
        debut: 2025,
        opts: {
            generation: ["staff"],
        }
    }
];
