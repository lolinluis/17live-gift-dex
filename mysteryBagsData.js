// ==========================================
// 17LIVE 隨機袋圖鑑 - 資料庫檔案 (mysteryBagsData.js)
// ==========================================

const mysteryBagsDatabase = {
    MagicLamp: { //魔法神燈
        title: "魔法神燈隨機袋",
        maxCoins: "300 寶寶幣 / 次",
        activityDesc: "【神燈降臨活動】開袋有機會獲得高倍率獎勵分數，觸發巨鯨動畫！",
        levels: [
			{level: "普獎",name: "???",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reqCount: "??? 寶寶幣",img: "images/bags/MagicLamp/1x.png"},
            {level: "二獎",name: "???",rarity: "★★★☆☆",desc: "【特別獎勵】幸運中獎獎勵",reqCount: "??? 寶寶幣",img: "images/bags/MagicLamp/5x.png"},
            {level: "頭獎",name: "你是最耀眼的 (20倍)",rarity: "★★★★★",desc: "【超稀有】觸發全螢幕白鯨動畫與全區播報",reqCount: "6,000 寶寶幣",img: "images/bags/MagicLamp/Max.png"}

        ]
    },
	
    Pin_Pai_Star: { //品牌之星
        title: "隨機袋：品牌之星",
        maxCoins: "3000 寶寶幣 / 次",
        activityDesc: "【品牌大使活動】",
        levels: [
            {level: "普獎",name: "???",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reqCount: "??? 寶寶幣",img: "images/bags/Pin_Pai_Star/1x.png"},
            {level: "二獎",name: "???",rarity: "★★★☆☆",desc: "【特別獎勵】幸運中獎獎勵",reqCount: "??? 寶寶幣",img: "images/bags/Pin_Pai_Star/5x.png"},
            {level: "頭獎",name: "你是最耀眼的 (20倍)",rarity: "★★★★★",desc: "【超稀有】觸發跑馬燈全區播報",reqCount: "60,000 寶寶幣",img: "images/bags/Pin_Pai_Star/Max.png"}
        ]
    },
	
    Lucky_Mystery: { //開運隨機袋
        title: "隨機袋：品牌之星",
        maxCoins: "3000 寶寶幣 / 次",
        activityDesc: "【品牌大使活動】",
        levels: [
            {level: "普獎",name: "???",rarity: "★☆☆☆☆",desc: "【常見獎勵】基本回饋分數",reqCount: "??? 寶寶幣",img: "images/bags/Lucky_Mystery/1x.png"},
            {level: "二獎",name: "???",rarity: "★★★☆☆",desc: "【特別獎勵】幸運中獎獎勵",reqCount: "??? 寶寶幣",img: "images/bags/Lucky_Mystery/5x.png"},
            {level: "頭獎",name: "發財金 (20倍)",rarity: "★★★★★",desc: "【超稀有】恭喜獲得最大獎",reqCount: "1,999 寶寶幣",img: "images/bags/Lucky_Mystery/Max.png"}
        ]
    }	
	
};