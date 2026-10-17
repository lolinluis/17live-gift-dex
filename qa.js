// qa.js - 問題 QA 可伸縮手風琴邏輯

function renderQAList() {
    const qaContainer = document.getElementById("qaContainer");
    if (!qaContainer) return;
    qaContainer.innerHTML = "";

    const qaList = typeof qaDatabase !== "undefined" ? qaDatabase : [];

    if (qaList.length === 0) {
        qaContainer.innerHTML = `<div style="text-align:center; color:#a0a0a0; padding:20px;">暫無常見問題</div>`;
        return;
    }

    qaList.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "qa-item";

        // 標題區塊（含箭頭圖示）
        const headerDiv = document.createElement("div");
        headerDiv.className = "qa-header";
        headerDiv.innerHTML = `
            <span class="qa-title">${item.title}</span>
            <span class="qa-arrow">▼</span>
        `;

        // 展開/收合內容區塊
        const contentDiv = document.createElement("div");
        contentDiv.className = "qa-content";
        contentDiv.innerHTML = `<div class="qa-content-inner">${item.content}</div>`;

        // 點擊標題切換展開/收合狀態
        headerDiv.addEventListener("click", () => {
            const isActive = itemDiv.classList.contains("active");

            // 若要維持一次只展開一個，可取消下一行的註解：
            // closeAllQAItems();

            if (isActive) {
                itemDiv.classList.remove("active");
                contentDiv.style.maxHeight = null;
            } else {
                itemDiv.classList.add("active");
                contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
            }
        });

        itemDiv.appendChild(headerDiv);
        itemDiv.appendChild(contentDiv);
        qaContainer.appendChild(itemDiv);
    });
}

// 選擇性功能：關閉所有已展開項目
function closeAllQAItems() {
    const allItems = document.querySelectorAll(".qa-item");
    allItems.forEach(item => {
        item.classList.remove("active");
        const content = item.querySelector(".qa-content");
        if (content) content.style.maxHeight = null;
    });
}
