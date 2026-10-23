const StreamersView = {
    renderList(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        const streamers = typeof streamersDatabase !== "undefined" ? streamersDatabase : [];

        streamers.forEach(item => {
            const dateStr = item.date || '未定';
            const zodiacStr = item.zodiac || '';

            const card = document.createElement("div");
            card.className = "streamer-card";

            card.innerHTML = `
                <div class="streamer-row-1">
                    <span class="streamer-date">${dateStr}</span>
                    <span class="streamer-name">
                        <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="streamer-link">
                            ${item.name || '未命名主播'}
                        </a>
                    </span>
                    ${zodiacStr ? `<span class="streamer-zodiac">${zodiacStr}</span>` : ''}
                </div>
                <div class="streamer-row-2">
                    ${item.intro || '暫無個人簡介...'}
                </div>
            `;
            container.appendChild(card);
        });
    }
};
