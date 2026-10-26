const BagsView = {
    renderList(containerId, onSelectKey) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        const db = typeof mysteryBagsDatabase !== "undefined" ? mysteryBagsDatabase : {};

        Object.keys(db).forEach(key => {
            const bag = db[key];
            const priceText = bag.maxCoins || bag.price || "單次金額未定";
            const descText = bag.activityDesc || "暫無活動說明。";
            const titleText = bag.title || "未命名隨機袋";

            const card = document.createElement("div");
            card.className = "bag-card-horizontal";
            card.onclick = () => onSelectKey(key);

            const imgEl = document.createElement("img");
            imgEl.className = "bag-card-thumb";
            imgEl.alt = titleText;
            imgEl.src = bag.img || '';
            imgEl.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="100%" height="100%" fill="%23151a21"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f1c40f" font-size="12" font-weight="bold">無圖片</text></svg>`;
            };

            const infoDiv = document.createElement("div");
            infoDiv.className = "bag-card-info";
            infoDiv.innerHTML = `
                <div class="bag-card-title">${titleText}</div>
                <div class="bag-card-price">${priceText}</div>
                <div class="bag-card-desc">${descText}</div>
            `;

            card.appendChild(imgEl);
            card.appendChild(infoDiv);
            container.appendChild(card);
        });
    },

    renderDetail(bagKey) {
        const db = typeof mysteryBagsDatabase !== "undefined" ? mysteryBagsDatabase : {};
        const data = db[bagKey];
        if (!data) return;
        
        document.getElementById("bagPrice").innerText = data.maxCoins || "單次金額未定";
        document.getElementById("bagDesc").innerText = data.activityDesc || "暫無活動說明。";

        const bagImgEl = document.getElementById("bagMainImg");
        if (bagImgEl) {
            bagImgEl.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="100%" height="100%" fill="%23151a21"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f1c40f" font-size="16" font-weight="bold">隨機袋圖示</text></svg>`;
            };
            bagImgEl.src = data.img || "";
        }

        this.renderBagItems(data.items || data.levels || []);
    },

    renderBagItems(items) {
        const bagItemsGrid = document.getElementById("bagItemsGrid");
        if (!bagItemsGrid) return;
        bagItemsGrid.innerHTML = "";

        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "bag-item-card";
            const reqText = item.reward || item.reqCount || "無備註";

            card.innerHTML = `
                <div class="bag-item-left">
                    <div class="bag-item-header">
                        <span class="bag-item-tag">${item.tag || item.level || '獎項'}</span>
                        <span class="bag-item-name">${item.name}</span>
                        <span class="bag-item-rarity">${item.rarity || ''}</span>
                    </div>
                    <div class="bag-item-desc">${item.desc || ''}</div>
                </div>
                <div class="bag-item-right">
                    <div class="bag-item-value">${reqText}</div>
                </div>
            `;
            bagItemsGrid.appendChild(card);
        });
    }
};
