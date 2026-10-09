// ==========================================
// 17LIVE 隨機袋圖鑑 - 資料庫檔案 (mysteryBagsData.js)
// ==========================================

const mysteryBagsDatabase = {
    MagicLamp: { //魔法神燈
        title: "魔法神燈隨機袋",
        maxCoins: "300 寶寶幣 / 次",
		img: "images/bags/MagicLamp/01.png",
        activityDesc: "【神燈降臨活動】開袋有機會獲得高倍率獎勵分數，觸發巨鯨動畫！",
        items: [
			{tag: "普獎",name: "魔術鸚鵡",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reward: "110 寶寶幣"},
			{tag: "普獎",name: "夢幻愛心",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reward: "150 寶寶幣"},
			{tag: "普獎",name: "月兔",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reward: "300 寶寶幣"},
            {tag: "二獎",name: "魔法鑽戒",rarity: "★★★☆☆",desc: "【特別獎勵】幸運中獎獎勵",reward: "800 寶寶幣"},
            {tag: "頭獎",name: "白鯨",rarity: "★★★★★",desc: "【超稀有】觸發全螢幕白鯨動畫與全區播報",reward: "6,000 寶寶幣"}
        ]
    },
	
    Pin_Pai_Star: { //品牌之星
        title: "隨機袋：品牌之星",
        maxCoins: "3000 寶寶幣 / 次",
		img: "images/bags/Pin_Pai_Star/01.png",
        activityDesc: "【品牌大使活動】",
        items: [
            {tag: "普獎",name: "???",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reward: "??? 寶寶幣"},
            {tag: "二獎",name: "???",rarity: "★★★☆☆",desc: "【特別獎勵】幸運中獎獎勵",reward: "??? 寶寶幣"},
            {tag: "頭獎",name: "你是最耀眼的 (20倍)",rarity: "★★★★★",desc: "【超稀有】觸發跑馬燈全區播報",reward: "60,000 寶寶幣"}
        ]
    },
	
    Lucky_Mystery: { //開運隨機袋
        title: "隨機袋：品牌之星",
        maxCoins: "3000 寶寶幣 / 次",
		img: "images/bags/Lucky_Mystery/01.png",
        activityDesc: "【品牌大使活動】",
        items: [
            {tag: "普獎",name: "???",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reward: "??? 寶寶幣"},
            {tag: "二獎",name: "???",rarity: "★★★☆☆",desc: "【特別獎勵】幸運中獎獎勵",reward: "??? 寶寶幣"},
            {tag: "頭獎",name: "發財金 (20倍)",rarity: "★★★★★",desc: "【超稀有】恭喜獲得最大獎",reward: "1,999 寶寶幣"}
        ]
    }	
	
};
