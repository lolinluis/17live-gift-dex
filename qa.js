// qa.js - 問題 QA 可伸縮手風琴邏輯 (CSS Grid 流暢版)

function renderQAList() {
    const qaContainer = document.getElementById("qaContainer");
    if (!qaContainer) return;
    qaContainer.innerHTML = "";

    const qaList = typeof qaDatabase !== "undefined" ? qaDatabase : [];

    if (qaList.length === 0) {
        qaContainer.innerHTML = `<div style="text-align:center; color:#a0a0a0; padding:20px;">暫無常見問題</div>`;
        return;
    }

    qaList.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "qa-item";

        // 標題區塊（含箭頭圖示）
        const headerDiv = document.createElement("div");
        headerDiv.className = "qa-header";
        
        const titleSpan = document.createElement("span");
        titleSpan.className = "qa-title";
        titleSpan.textContent = item.title; // 防禦 XSS

        const arrowSpan = document.createElement("span");
        arrowSpan.className = "qa-arrow";
        arrowSpan.textContent = "▼";

        headerDiv.appendChild(titleSpan);
        headerDiv.appendChild(arrowSpan);

        // 展開/收合內容區塊
        const contentDiv = document.createElement("div");
        contentDiv.className = "qa-content";
        contentDiv.innerHTML = `<div class="qa-content-inner">${item.content}</div>`;

        // 點擊標題切換 active 類別
        headerDiv.addEventListener("click", () => {
            const isActive = itemDiv.classList.contains("active");

            // 若要維持「一次只展開一個」，請取消下一行的註解：
            // closeAllQAItems(itemDiv);

            itemDiv.classList.toggle("active", !isActive);
        });

        itemDiv.appendChild(headerDiv);
        itemDiv.appendChild(contentDiv);
        qaContainer.appendChild(itemDiv);
    });
}

// 關閉所有已展開項目（可傳入 excludeItem 避免關閉目前點擊的項目）
function closeAllQAItems(excludeItem = null) {
    const allItems = document.querySelectorAll(".qa-item");
    allItems.forEach(item => {
        if (item !== excludeItem) {
            item.classList.remove("active");
        }
    });
}
