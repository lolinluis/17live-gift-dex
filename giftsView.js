const GiftsView = {
    renderGrid(containerId, onSelectKey) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        const db = typeof giftsDatabase !== "undefined" ? giftsDatabase : {};

        Object.keys(db).forEach(key => {
            const gift = db[key];
            const firstLevelImg = gift.levels && gift.levels.length > 0 ? gift.levels[0].img : '';
            const priceText = gift.price || gift.maxCoins || "標價未知";

            const card = document.createElement("div");
            card.className = "gift-card-item";
            card.onclick = () => onSelectKey(key);

            card.innerHTML = `
                <img class="gift-card-thumb" src="${firstLevelImg}" alt="${gift.title}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23151a21\\'/></svg>';">
                <div class="gift-card-title">${gift.title}</div>
                <div class="gift-card-price">${priceText} 幣</div>
            `;
            container.appendChild(card);
        });
    },

    renderDetail(giftKey) {
        const db = typeof giftsDatabase !== "undefined" ? giftsDatabase : {};
        const data = db[giftKey];
        if (!data) return;

        document.getElementById("maxCoins").innerText = data.maxCoins || "尚未計算";
        this.renderLevelButtons(data.levels || [], giftKey);
        this.selectLevel(data.levels || [], 0);
    },

    renderLevelButtons(levels, giftKey) {
        const levelSelector = document.getElementById("levelSelector");
        if (!levelSelector) return;
        levelSelector.innerHTML = "";

        levels.forEach((lvlData, index) => {
            const btn = document.createElement("button");
            btn.className = "lvl-btn";
            btn.innerText = lvlData.level;
            btn.onclick = () => this.selectLevel(levels, index);
            levelSelector.appendChild(btn);
        });
    },

    selectLevel(levels, index) {
        const data = levels[index];
        if (!data) return;

        document.getElementById("giftName").innerText = data.name;
        document.getElementById("giftRarity").innerText = data.rarity;
        document.getElementById("giftDesc").innerText = data.desc;
        document.getElementById("reqCount").innerText = data.reqCount;

        const imgEl = document.getElementById("giftImg");
        if (imgEl) {
            imgEl.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="100%" height="100%" fill="%23151a21"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f1c40f" font-size="22" font-weight="bold">圖示</text></svg>`;
            };
            imgEl.src = data.img;
        }

        const buttons = document.querySelectorAll('.lvl-btn');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }
};
