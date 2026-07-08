const NexusMediaAssets = {
    wheat: "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?q=80&w=800",
    paddy: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=800",
    tradersCard: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800",
    makkahCard: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800",
    ptyCard: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800",
    pakistanFlag: "https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600",
    australiaFlag: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600"
};

function fixMissingCardImages() {
    document.querySelectorAll('h2, h3, div').forEach(el => {
        const text = el.textContent.trim().toUpperCase();
        if (text === 'WHEAT' && el.parentElement && !el.parentElement.querySelector('.nexus-injected-bg')) {
            const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusMediaAssets.wheat}')`;
            el.parentElement.insertBefore(div, el);
        }
        if (text === 'PADDY' && el.parentElement && !el.parentElement.querySelector('.nexus-injected-bg')) {
            const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusMediaAssets.paddy}')`;
            el.parentElement.insertBefore(div, el);
        }
        if (el.textContent.trim() === 'Bukhari Traders' && el.closest('.block-card')) {
            const p = el.closest('.block-card'); if(!p.querySelector('.nexus-injected-bg')) {
                const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusMediaAssets.tradersCard}')`;
                p.insertBefore(div, p.firstChild);
            }
        }
        if (el.textContent.trim() === 'Al Makkah Store' && el.closest('.block-card')) {
            const p = el.closest('.block-card'); if(!p.querySelector('.nexus-injected-bg')) {
                const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusMediaAssets.makkahCard}')`;
                p.insertBefore(div, p.firstChild);
            }
        }
        if (el.textContent.trim() === 'Bukhari PTY LTD' && el.closest('.block-card')) {
            const p = el.closest('.block-card'); if(!p.querySelector('.nexus-injected-bg')) {
                const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusMediaAssets.ptyCard}')`;
                p.insertBefore(div, p.firstChild);
            }
        }
    });
}

function triggerFlagScreensaver(country) {
    let layer = document.getElementById('nexus-flag-screensaver');
    if (!layer) {
        layer = document.createElement('div');
        layer.id = 'nexus-flag-screensaver';
        document.body.appendChild(layer);
    }
    if (country === 'pk') {
        layer.style.backgroundImage = `url('${NexusMediaAssets.pakistanFlag}')`;
        layer.classList.add('active');
    } else if (country === 'au') {
        layer.style.backgroundImage = `url('${NexusMediaAssets.australiaFlag}')`;
        layer.classList.add('active');
    } else {
        layer.classList.remove('active');
    }
}

document.addEventListener("click", () => { setTimeout(fixMissingCardImages, 120); });
