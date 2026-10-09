// ==========================================
// 17LIVE 升級禮圖鑑 - 資料庫檔案 (giftsData.js)
// ==========================================

// 協作者資料名單 (可自由增減)
const collaborators = [
        { name: "LolinLuis", url: "https://github.com/lolinluis" },
		{ name: "🎀伊娜いな", url: "https://17.live/zh-Hant/profile/u/ae0a569d-23ff-4f7d-b577-e955028ead32" },
		{ name: "🍋Nicksie🍋", url: "Https://17.live/s/u/8c195fe6-5882-4517-8104-27b670b224f5" }
];

// 禮物資料庫 (完整資料)
const giftsDatabase = {
banquet: { // 慶生大辦桌
            title: "慶生大辦桌 (117幣)",
            maxCoins: "50,076 寶寶幣", // 自行輸入欄位
            levels: [
                { level: "LV 0", name: "慶生大辦桌 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】傳統紅圓桌與幾盤經典小菜。", reqCount: "0 個 (初始解鎖)", img: "images/banquet/LV0.png" },
                { level: "LV 1", name: "慶生大辦桌 LV1", rarity: "★★☆☆☆", desc: "【升級型態】稍等片刻~好菜準備上桌", reqCount: "累計送出 30 個", img: "images/banquet/LV1.png" },
                { level: "LV 2", name: "慶生大辦桌 LV2", rarity: "★★☆☆☆", desc: "【升級型態】有飲料搭配的流水席！", reqCount: "累計送出 150 個", img: "images/banquet/LV2.png" },
                { level: "LV 3", name: "慶生大辦桌 LV3", rarity: "★★★☆☆", desc: "【升級型態】坐滿人的流水席！", reqCount: "累計送出 ??? 個", img: "images/banquet/LV3.png" },
                { level: "LV 4", name: "慶生大辦桌 LV4", rarity: "★★★☆☆", desc: "【華麗型態】人多多的大型流水席！", reqCount: "累計送出 ??? 個", img: "images/banquet/LV4.png" },
                { level: "LV 5", name: "慶生大辦桌 LV5", rarity: "★★★☆☆", desc: "【華麗型態】擺上壽桃的大型流水席！", reqCount: "累計送出 ??? 個", img: "images/banquet/LV5.png" },
                { level: "LV 6", name: "慶生大辦桌 LV6", rarity: "★★★★☆", desc: "【終極型態】金碧輝煌的巨型流水席，滿屏熱鬧煙火與熱烈慶祝動畫！", reqCount: "累計送出 428 個", img: "images/banquet/LV6.png" }
            ]
        },
        LoveYouMost: { // 堡證最愛你
            title: "堡證最愛你 (522幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "堡證最愛你 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/LoveYouMost/LV0.png" },
                { level: "LV 1", name: "堡證最愛你 LV1", rarity: "★★☆☆☆", desc: "【升級型態】", reqCount: "累計送出 75 個", img: "images/LoveYouMost/LV1.png" },
                { level: "LV 2", name: "堡證最愛你 LV2", rarity: "★★★☆☆", desc: "【升級型態】", reqCount: "累計送出 119 個", img: "images/LoveYouMost/LV2.png" },
                { level: "LV 3", name: "堡證最愛你 LV3", rarity: "★★★★☆", desc: "【終極型態】", reqCount: "累計送出 ??? 個", img: "images/LoveYouMost/LV3.png" }
            ]
        },
        myburger: { // 你是我的堡
            title: "你是我的堡 (52幣)",
            maxCoins: "51,948 寶寶幣",
            levels: [
                { level: "LV 0", name: "你是我的堡(LV0)", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/myburger/LV0.png" },
                { level: "LV 1", name: "你是我的堡(LV1)", rarity: "★★☆☆☆", desc: "【升級型態】", reqCount: "累計送出 ?? 個", img: "images/myburger/LV1.png" },
                { level: "LV 2", name: "你是我的堡(LV2)", rarity: "★★★☆☆", desc: "【升級型態】", reqCount: "累計送出 ?? 個", img: "images/myburger/LV2.png" },
                { level: "LV 3", name: "你是我的堡(LV3)", rarity: "★★★★☆", desc: "【終極型態】", reqCount: "累計送出 999 個", img: "images/myburger/LV3.png" }
            ]
        },
        capybara: { // 卡皮巴拉
            title: "卡皮巴拉 (20幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "水豚呆呆", rarity: "★☆☆☆☆", desc: "【基礎起點】頭頂著一顆橘子呆坐的水豚。", reqCount: "0 個 (初始解鎖)", img: "images/capybara/LV0.png" },
                { level: "LV 1", name: "泡湯卡皮巴拉", rarity: "★☆☆☆☆", desc: "【萌感升級】水豚舒適地泡在木桶溫泉中，冒出愛心蒸氣。", reqCount: "累計送出 ?? 個", img: "images/capybara/LV1.png" },
                { level: "LV 2", name: "卡皮巴拉派對", rarity: "★★☆☆☆", desc: "【熱鬧型態】一群小水豚圍繞疊羅漢，解鎖歡樂疊疊樂動畫。", reqCount: "累計送出 ?? 個", img: "images/capybara/LV2.png" },
                { level: "LV 3", name: "療癒水豚王國", rarity: "★★★☆☆", desc: "【終極型態】皇冠巨型水豚王者登場，滿屏療癒橘子雨與彩虹特效！", reqCount: "累計送出 ?? 個 (MAX)", img: "images/capybara/LV3.png" }
            ]
        },
        princess: { // 甜美公主風
            title: "甜美公主風 (500幣)",
            maxCoins: "150,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "甜美公主風 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】帶有粉色光芒的小巧蝴蝶結皇冠。", reqCount: "0 個 (初始解鎖)", img: "images/princess/LV0.png" },
                { level: "LV 1", name: "甜美公主風 LV1", rarity: "★★☆☆☆", desc: "【浪漫升級】華麗粉色蓬蓬裙，身邊圍繞飄落的花瓣。", reqCount: "累計送出 60 個", img: "images/princess/LV1.png" },
                { level: "LV 2", name: "甜美公主風 LV2", rarity: "★★★☆☆", desc: "【夢幻型態】由白馬拉著粉色水晶馬車劃過夜空。", reqCount: "累計送出 140 個", img: "images/princess/LV2.png" },
                { level: "LV 3", name: "甜美公主風 LV3", rarity: "★★★★☆", desc: "【終極型態】滿屏粉色浪漫櫻花雨與絕美夢幻城堡全景！", reqCount: "累計送出 300 個 (MAX)", img: "images/princess/LV3.png" }
            ]
        },
        hotgirl: { // 性感辣妹風
            title: "性感辣妹風 (500幣)",
            maxCoins: "150,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "性感辣妹風 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】微光耀眼的迪斯可鏡面球與斑駁光影。", reqCount: "0 個 (初始解鎖)", img: "images/hotgirl/LV0.png" },
                { level: "LV 1", name: "性感辣妹風 LV1", rarity: "★★☆☆☆", desc: "【動感升級】解鎖節奏光線與躍動的霓虹舞台。", reqCount: "累計送出 60 個", img: "images/hotgirl/LV1.png" },
                { level: "LV 2", name: "性感辣妹風 LV2", rarity: "★★★☆☆", desc: "【熱辣型態】炫目跑車登場，伴隨引擎轟鳴與閃光燈光束。", reqCount: "累計送出 140 個", img: "images/hotgirl/LV2.png" },
                { level: "LV 3", name: "性感辣妹風 LV3", rarity: "★★★★☆", desc: "【終極型態】震撼巨星演唱會舞台，全屏雷射光束與璀璨焰火狂歡！", reqCount: "累計送出 300 個 (MAX)", img: "images/hotgirl/LV3.png" }
            ]
        },
        beach: { // 度假海灘風
            title: "度假海灘風 (500幣)",
            maxCoins: "150,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "度假海灘風 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】插著小陽傘的鮮採冰鎮椰子汁。", reqCount: "0 個 (初始解鎖)", img: "images/beach/LV0.png" },
                { level: "LV 1", name: "度假海灘風 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】遮陽傘與沙灘躺椅，伴隨陣陣海浪聲。", reqCount: "累計送出 60 個", img: "images/beach/LV1.png" },
                { level: "LV 2", name: "度假海灘風 LV2", rarity: "★★★☆☆", desc: "【活力型態】海豚跳躍與浪花朵朵，解鎖海島風情特效。", reqCount: "累計送出 140 個", img: "images/beach/LV2.png" },
                { level: "LV 3", name: "度假海灘風 LV3", rarity: "★★★★☆", desc: "【終極型態】豪華遊艇馳騁於湛藍海洋，滿屏夕陽餘暉與海鷗翱翔！", reqCount: "累計送出 300 個 (MAX)", img: "images/beach/LV3.png" }
            ]
        },
        cake: { // 十周年蛋糕
            title: "十週年蛋糕 (17幣)",
            maxCoins: "85,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "十週年蛋糕(基礎)", rarity: "★☆☆☆☆", desc: "【基礎起點】盤子上面的一顆小草莓", reqCount: "0 個 (初始解鎖)", img: "images/cake/LV0.png" },
                { level: "LV 1", name: "十週年蛋糕(一層)", rarity: "★☆☆☆☆", desc: "【基礎起點】單層草莓小蛋糕，伴隨微弱星光粒子。", reqCount: "累計送出 10 個", img: "images/cake/LV1.png" },
                { level: "LV 2", name: "十週年蛋糕(二層)", rarity: "★☆☆☆☆", desc: "【基礎起點】二層草莓小蛋糕，伴隨微弱星光粒子。", reqCount: "累計送出 25 個", img: "images/cake/LV2.png" },
                { level: "LV 3", name: "十週年蛋糕(三層)", rarity: "★★☆☆☆", desc: "【基礎起點】三層草莓小蛋糕，伴隨微弱星光粒子。", reqCount: "累計送出 50 個", img: "images/cake/LV3.png" },
                { level: "LV 4", name: "十週年蛋糕(四層)", rarity: "★★☆☆☆", desc: "【基礎起點】四層草莓小蛋糕，伴隨微弱星光粒子。", reqCount: "累計送出 100 個", img: "images/cake/LV4.png" },
                { level: "LV 5", name: "十週年蛋糕(五層)", rarity: "★★☆☆☆", desc: "【初級升級】五層奶油蛋糕", reqCount: "累計送出 250 個", img: "images/cake/LV5.png" },
                { level: "LV 6", name: "十週年蛋糕(六層)", rarity: "★★☆☆☆", desc: "【璀璨特效】六層宴會蛋糕", reqCount: "累計送出 500 個", img: "images/cake/LV6.png" },
                { level: "LV 7", name: "十週年蛋糕(七層)", rarity: "★★★☆☆", desc: "【璀璨特效】七層宴會蛋糕", reqCount: "累計送出 1000 個", img: "images/cake/LV7.png" },
                { level: "LV 8", name: "十週年蛋糕(八層)", rarity: "★★★☆☆", desc: "【璀璨特效】八層宴會蛋糕", reqCount: "累計送出 2000 個", img: "images/cake/LV8.png" },
                { level: "LV 9", name: "十週年蛋糕(九層)", rarity: "★★★☆☆", desc: "【璀璨特效】九層宴會蛋糕", reqCount: "累計送出 4000 個", img: "images/cake/LV9.png" },
                { level: "LV 10", name: "十週年蛋糕(十層)", rarity: "★★★★☆", desc: "【頂級特效】十層閃耀大蛋糕！", reqCount: "累計送出 5000 個 (MAX)", img: "images/cake/LV10.png" }
            ]
        },
        mage: { // 魔法師修練
            title: "魔法師修練 (500幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "魔法師修練 LV.0", rarity: "★☆☆☆☆", desc: "【初生型態】", reqCount: "0 個 (初始解鎖)", img: "images/mage/LV0.png" },
                { level: "LV 1", name: "魔法師修練 LV.1", rarity: "★☆☆☆☆", desc: "【成長型態】", reqCount: "累計送出 30 個", img: "images/mage/LV1.png" }
            ]
        },
        chocolate: { // 巧克力
            title: "巧克力 (15幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "巧克力 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/chocolate/LV0.png" },
                { level: "LV 1", name: "巧克力 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/chocolate/LV1.png" },
                { level: "LV 2", name: "巧克力 LV2", rarity: "★★☆☆☆", desc: "【活力型態】", reqCount: "累計送出 ?? 個", img: "images/chocolate/LV2.png" },
                { level: "LV 3", name: "巧克力 LV3(MAX)", rarity: "★★★☆☆", desc: "【終極型態】", reqCount: "累計送出 ?? 個 (MAX)", img: "images/chocolate/LV3.png" }
            ]
        },
        SeaMonster: { // 神秘海怪
            title: "神秘海怪 (500幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "神秘海怪 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/SeaMonster/LV0.png" },
                { level: "LV 1", name: "神秘海怪 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/SeaMonster/LV1.png" },
                { level: "LV 2", name: "神秘海怪 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/SeaMonster/LV2.png" },
                { level: "LV 3", name: "神秘海怪 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ?? 個", img: "images/SeaMonster/LV3.png" }
            ]
        },
        bento: { // 便當
            title: "便當 (20幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "便當 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/bento/LV0.png" },
                { level: "LV 1", name: "便當 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/bento/LV1.png" },
                { level: "LV 2", name: "便當 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/bento/LV2.png" },
                { level: "LV 3", name: "便當 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ?? 個", img: "images/bento/LV3.png" }
            ]
        },
        medieval: { // 中世紀
            title: "中世紀 (20幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "中世紀 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/medieval/LV0.png" },
                { level: "LV 1", name: "中世紀 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/medieval/LV1.png" },
                { level: "LV 2", name: "中世紀 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/medieval/LV2.png" },
                { level: "LV 3", name: "中世紀 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/medieval/LV3.png" }
            ]
        },
        hunk: { // 猛男
            title: "猛男 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "猛男 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/hunk/LV0.png" },
                { level: "LV 1", name: "猛男 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/hunk/LV1.png" }
            ]
        },
        phoenix: { // 鳳凰
            title: "鳳凰 (15幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "鳳凰 LV.0", rarity: "★☆☆☆☆", desc: "【初生型態】", reqCount: "0 個 (初始解鎖)", img: "images/phoenix/LV0.png" },
                { level: "LV 1", name: "鳳凰 LV.1", rarity: "★☆☆☆☆", desc: "【成長型態】", reqCount: "累計送出 ?? 個", img: "images/phoenix/LV1.png" },
                { level: "LV 2", name: "鳳凰 LV.2", rarity: "★★☆☆☆", desc: "【成長型態】", reqCount: "累計送出 500 個", img: "images/phoenix/LV2.png" },
                { level: "LV 3", name: "鳳凰 LV.3", rarity: "★★☆☆☆", desc: "【進化型態】", reqCount: "累計送出 ?? 個", img: "images/phoenix/LV3.png" },
                { level: "LV 4", name: "鳳凰 LV.4", rarity: "★★★☆☆", desc: "【終極型態】", reqCount: "累計送出 ?? 個 (MAX)", img: "images/phoenix/LV4.png" }
            ]
        },
        firework: { // 煙火升級禮
            title: "煙火升級禮 (10幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "煙火升級禮 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/firework/LV0.png" },
                { level: "LV 1", name: "煙火升級禮 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/firework/LV1.png" },
                { level: "LV 2", name: "煙火升級禮 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/firework/LV2.png" },
                { level: "LV 3", name: "煙火升級禮 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ?? 個", img: "images/firework/LV3.png" }
            ]
        },
        fish: { // 魚
            title: "魚 (15幣)",
            maxCoins: "15,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "魚 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/fish/LV0.png" },
                { level: "LV 1", name: "魚 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/fish/LV1.png" },
                { level: "LV 2", name: "魚 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 500 個", img: "images/fish/LV2.png" },
                { level: "LV 3", name: "魚 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 1000 個", img: "images/fish/LV3.png" }
            ]
        },
        blackpanther: { // 神秘黑豹
            title: "神秘黑豹 (10幣)",
            maxCoins: "5,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "神秘黑豹 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/blackpanther/LV0.png" },
                { level: "LV 1", name: "神秘黑豹 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/blackpanther/LV1.png" },
                { level: "LV 2", name: "神秘黑豹 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 200 個", img: "images/blackpanther/LV2.png" },
                { level: "LV 3", name: "神秘黑豹 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 500 個", img: "images/blackpanther/LV3.png" }
            ]
        },
        ghost: { // 阿飄
            title: "阿飄 (10幣)",
            maxCoins: "15,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "阿飄 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/ghost/LV0.png" },
                { level: "LV 1", name: "阿飄 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/ghost/LV1.png" },
                { level: "LV 2", name: "阿飄 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/ghost/LV2.png" },
                { level: "LV 3", name: "阿飄 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 1500 個", img: "images/ghost/LV3.png" }
            ]
        },
        jelly: { // 果凍
            title: "果凍 (15幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "果凍 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/jelly/LV0.png" },
                { level: "LV 1", name: "果凍 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/jelly/LV1.png" },
                { level: "LV 2", name: "果凍 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/jelly/LV2.png" },
                { level: "LV 3", name: "果凍 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/jelly/LV3.png" }
            ]
        },
        brat: { // 小鬼
            title: "小鬼 (12幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "小鬼 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/brat/LV0.png" },
                { level: "LV 1", name: "小鬼 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/brat/LV1.png" },
                { level: "LV 2", name: "小鬼 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 400 個", img: "images/brat/LV2.png" },
                { level: "LV 3", name: "小鬼 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/brat/LV3.png" }
            ]
        },
        meat: { // 肉
            title: "肉 (20幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "肉 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/meat/LV0.png" },
                { level: "LV 1", name: "肉 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/meat/LV1.png" },
                { level: "LV 2", name: "肉 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/meat/LV2.png" },
                { level: "LV 3", name: "肉 LV3", rarity: "★★★★☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/meat/LV3.png" }
            ]
        },
        icecream: { // 冰淇淋
            title: "冰淇淋 (15幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "冰淇淋 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/icecream/LV0.png" },
                { level: "LV 1", name: "冰淇淋 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/icecream/LV1.png" },
                { level: "LV 2", name: "冰淇淋 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/icecream/LV2.png" },
                { level: "LV 3", name: "冰淇淋 LV3", rarity: "★★★★☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/icecream/LV3.png" }
            ]
        },
        whisky: { // 威士忌
            title: "威士忌 (15幣)",
            maxCoins: "22,500 寶寶幣",
            levels: [
                { level: "LV 0", name: "威士忌 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/whisky/LV0.png" },
                { level: "LV 1", name: "威士忌 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/whisky/LV1.png" },
                { level: "LV 2", name: "威士忌 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 400 個", img: "images/whisky/LV2.png" },
                { level: "LV 3", name: "威士忌 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 1500 個", img: "images/whisky/LV3.png" }
            ]
        },
        babyshark: { // 北鼻鯊嘟嘟嘟
            title: "北鼻鯊嘟嘟嘟 (200幣)",
            maxCoins: "40,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "北鼻鯊嘟嘟嘟 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/babyshark/LV0.png" },
                { level: "LV 1", name: "北鼻鯊嘟嘟嘟 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 20 個", img: "images/babyshark/LV1.png" },
                { level: "LV 2", name: "北鼻鯊嘟嘟嘟 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/babyshark/LV2.png" },
                { level: "LV 3", name: "北鼻鯊嘟嘟嘟 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 200 個", img: "images/babyshark/LV3.png" }
            ]
        },
        butterfly: { // 蝴蝶
            title: "蝴蝶 (10幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "蝴蝶 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/butterfly/LV0.png" },
                { level: "LV 1", name: "蝴蝶 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 200 個", img: "images/butterfly/LV1.png" },
                { level: "LV 2", name: "蝴蝶 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/butterfly/LV2.png" },
                { level: "LV 3", name: "蝴蝶 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ?? 個", img: "images/butterfly/LV3.png" }
            ]
        },
        watermelon: { // 西瓜
            title: "西瓜 (10幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "西瓜 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/watermelon/LV0.png" },
                { level: "LV 1", name: "西瓜 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/watermelon/LV1.png" },
                { level: "LV 2", name: "西瓜 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 500 個", img: "images/watermelon/LV2.png" },
                { level: "LV 3", name: "西瓜 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ?? 個", img: "images/watermelon/LV3.png" }
            ]
        },
        myhome: { // 我的家
            title: "我的家 (30幣)",
            maxCoins: "9,000 寶寶幣",
            levels: [
                { level: "LV 0", name: "我的家 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/myhome/LV0.png" },
                { level: "LV 1", name: "我的家 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/myhome/LV1.png" },
                { level: "LV 2", name: "我的家 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/myhome/LV2.png" },
                { level: "LV 3", name: "我的家 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 300 個", img: "images/myhome/LV3.png" }
            ]
        },
        basketball: { // 籃球
            title: "籃球 (30幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "籃球 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/basketball/LV0.png" },
                { level: "LV 1", name: "籃球 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/basketball/LV1.png" }
            ]
        },
        charizard: { // 噴火龍
            title: "噴火龍 (350幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "噴火龍 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/charizard/LV0.png" },
                { level: "LV 1", name: "噴火龍 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/charizard/LV1.png" }
            ]
        },	
        Qilin: { // 麒麟
            title: "麒麟 (500幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "麒麟 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Qilin/LV0.png" },
                { level: "LV 1", name: "麒麟 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/Qilin/LV1.png" }
            ]
        },		
        cockroach: { // 小強 蟑螂
            title: "小強 (500幣)",
            maxCoins: "357,500 寶寶幣",
            levels: [
                { level: "LV 0", name: "小強 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】心中一絲壞壞的想法正在萌芽。", reqCount: "0 個 (初始解鎖)", img: "images/cockroach/LV0.png" },
                { level: "LV 1", name: "小強 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】心中一絲壞壞的想法正在成長。", reqCount: "累計送出 15 個", img: "images/cockroach/LV1.png" },
                { level: "LV 2", name: "小強 LV2", rarity: "★★★☆☆", desc: "【休閒升級】心中一絲壞壞的想法正在進化。", reqCount: "累計送出 65 個", img: "images/cockroach/LV2.png" },
                { level: "LV 3", name: "小強 LV3", rarity: "★★★☆☆", desc: "【休閒升級】心中一絲壞壞的想法正在強大。", reqCount: "累計送出 165 個", img: "images/cockroach/LV3.png" },
                { level: "LV 4", name: "小強 LV4", rarity: "★★★★☆", desc: "【休閒升級】心中一絲壞壞的想法快要達成。", reqCount: "累計送出 365 個", img: "images/cockroach/LV4.png" },
                { level: "LV 5", name: "小強 LV5", rarity: "★★★★★", desc: "【豪華滿級】飛撲向螢幕的3D蟑螂，完全滿足您的惡趣味。", reqCount: "累計送出 715 個", img: "images/cockroach/LV5.png" }
            ]
        },
		Panda: { // 最幸福熊貓
            title: "最幸福熊貓 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "最幸福熊貓 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Panda/LV0.png" },
                { level: "LV 1", name: "最幸福熊貓 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/Panda/LV1.png" }
            ]
        },
		Deer: { // 最幸福小鹿
            title: "最幸福小鹿 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "最幸福小鹿 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Deer/LV0.png" },
                { level: "LV 1", name: "最幸福小鹿 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/Deer/LV1.png" }
            ]
        },
		piggy: { // 最幸福小豬
            title: "最幸福小豬 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "最幸福小豬 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/piggy/LV0.png" },
                { level: "LV 1", name: "最幸福小豬 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/piggy/LV1.png" }
            ]
        },
		hippo: { // 卡哇伊河馬
            title: "卡哇伊河馬 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "卡哇伊河馬 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/hippo/LV0.png" },
                { level: "LV 1", name: "卡哇伊河馬 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/hippo/LV1.png" }
            ]
        },		
        corgi: { // 萌寵柯基
            title: "萌寵柯基 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "萌寵柯基 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/corgi/LV0.png" },
                { level: "LV 1", name: "萌寵柯基 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/corgi/LV1.png" },
                { level: "LV 2", name: "萌寵柯基 LV2", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 ?? 個", img: "images/corgi/LV2.png" },
                { level: "LV 3", name: "萌寵柯基 LV3", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ?? 個", img: "images/corgi/LV3.png" }
            ]
        },
		biwingbird: { // 比翼鳥
            title: "比翼鳥 (200幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "比翼鳥 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/biwingbird/LV0.png" },
                { level: "LV 1", name: "比翼鳥 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 9 個", img: "images/biwingbird/LV1.png" }
            ]
        },
		Macaron: { // 給你馬卡龍
            title: "給你馬卡龍 (149幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "給你馬卡龍 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Macaron/LV0.png" },
                { level: "LV 1", name: "給你馬卡龍 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/Macaron/LV1.png" }
            ]
        },
		MyChocolate: { // 你是我的巧克力
            title: "你是我的巧克力 (149幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "你是我的巧克力 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/MyChocolate/LV0.png" },
                { level: "LV 1", name: "你是我的巧克力 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/MyChocolate/LV1.png" }
            ]
        },
		Three_Tailed_Fox: { // 三尾狐狸
            title: "三尾狐狸 (149幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "三尾狐狸 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Three_Tailed_Fox/LV0.png" },
                { level: "LV 1", name: "三尾狐狸 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 15 個", img: "images/Three_Tailed_Fox/LV1.png" }
            ]
        },
		Duck: { // 17小鴨
            title: "17小鴨 (149幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "17小鴨 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Duck/LV0.png" },
                { level: "LV 1", name: "17小鴨 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/Duck/LV1.png" }
            ]
        },
		Alpaca: { // 草泥馬
            title: "草泥馬 (149幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "草泥馬 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Alpaca/LV0.png" },
                { level: "LV 1", name: "草泥馬 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 300 個", img: "images/Alpaca/LV1.png" }
            ]
        },
		Dragon_and_Lion_Dances: { // 舞龍舞獅
            title: "舞龍舞獅 (350幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "舞龍舞獅 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Dragon_and_Lion_Dances/LV0.png" },
                { level: "LV 1", name: "舞龍舞獅 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 35 個", img: "images/Dragon_and_Lion_Dances/LV1.png" },
				{ level: "LV 2", name: "舞龍舞獅 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 115 個", img: "images/Dragon_and_Lion_Dances/LV2.png" }
            ]
        },
		Ms_Leti: { // Ms.Leti
            title: "Ms.Leti (250幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "Ms.Leti LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Ms_Leti/LV0.png" },
                { level: "LV 1", name: "Ms.Leti LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/Ms_Leti/LV1.png" }
            ]
        },
		Magical_Fireworks: { // 魔幻煙火
            title: "魔幻煙火 (350幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "魔幻煙火 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】", reqCount: "0 個 (初始解鎖)", img: "images/Magical_Fireworks/LV0.png" },
                { level: "LV 1", name: "魔幻煙火 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 30 個", img: "images/Magical_Fireworks/LV1.png" }
            ]
        },
		Love_Wishing_Well: { // 愛情許願池
            title: "愛情許願池 (50,000幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "愛情許願池 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】很高門檻的起點！", reqCount: "0 個 (初始解鎖)", img: "images/Love_Wishing_Well/LV0.png" },
                { level: "LV 1", name: "愛情許願池 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】您的財富正在起飛！", reqCount: "累計送出 100 個", img: "images/Love_Wishing_Well/LV1.png" }
            ]
        },
		Love_Wishing_Well: { // 美人魚
            title: "美人魚 (700幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "美人魚 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】很高門檻的起點！", reqCount: "0 個 (初始解鎖)", img: "images/Love_Wishing_Well/LV0.png" },
                { level: "LV 1", name: "美人魚 LV1", rarity: "★★☆☆☆", desc: "【休閒升級】您的財富正在起飛！", reqCount: "累計送出 100 個", img: "images/Love_Wishing_Well/LV1.png" }
            ]
        },		
        crown: { // 鑽石皇冠
            title: "鑽石皇冠 (20幣)",
            maxCoins: "約 ??? 寶寶幣",
            levels: [
                { level: "LV 0", name: "鑽石皇冠 LV0", rarity: "★☆☆☆☆", desc: "【基礎起點】只是一顆原石", reqCount: "0 個 (初始解鎖)", img: "images/crown/LV0.png" },
                { level: "LV 1", name: "鑽石皇冠 LV1", rarity: "★☆☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 20 個", img: "images/crown/LV1.png" },
                { level: "LV 2", name: "鑽石皇冠 LV2", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 50 個", img: "images/crown/LV2.png" },
                { level: "LV 3", name: "鑽石皇冠 LV3", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 100 個", img: "images/crown/LV3.png" },
                { level: "LV 4", name: "鑽石皇冠 LV4", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 250 個", img: "images/crown/LV4.png" },
                { level: "LV 5", name: "鑽石皇冠 LV5", rarity: "★★☆☆☆", desc: "【休閒升級】", reqCount: "累計送出 500 個", img: "images/crown/LV5.png" },
                { level: "LV 6", name: "鑽石皇冠 LV6", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 1000 個", img: "images/crown/LV6.png" },
                { level: "LV 7", name: "鑽石皇冠 LV7", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 2000 個", img: "images/crown/LV7.png" },
                { level: "LV 8", name: "鑽石皇冠 LV8", rarity: "★★★☆☆", desc: "【休閒升級】", reqCount: "累計送出 3000 個", img: "images/crown/LV8.png" },
                { level: "LV 9", name: "鑽石皇冠 LV9", rarity: "★★★★☆", desc: "【休閒升級】", reqCount: "累計送出 ??? 個", img: "images/crown/LV9.png" },
                { level: "LV 10", name: "鑽石皇冠 LV10", rarity: "★★★★☆", desc: "【豪華滿級】", reqCount: "累計送出 ??? 個", img: "images/crown/LV10.png" }
            ]
        }
};
