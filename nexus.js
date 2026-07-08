// Bukhari Nexus Pvt Ltd - Ultimate UI, Content & WhatsApp Core Extension

const NexusData = {
    parentCompany: {
        legalName: "Bukhari Nexus Pvt Ltd",
        tagline: "A unified Private Limited parent organization managing a multi-sector ecosystem. We bridge foundational regional supply chains with modern mobility infrastructure."
    },
    // Fresh high-contrast production imagery links
    images: {
        wheat: "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?q=80&w=800",
        paddy: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=800",
        tradersCard: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800",
        makkahCard: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800",
        ptyCard: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800",
        pakistanFlag: "https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600",
        australiaFlag: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600"
    }
};

function startNexusEngine() {
    // 1. INJECT POWERFUL CONTRAST CSS & FIX COMPONENT BLOCKS
    const styles = document.createElement('style');
    styles.innerHTML = `
        /* High Contrast Fixes */
        body { background-color: #060913 !important; }
        p, .block-card p, .hub-hero p { color: #f1f5f9 !important; font-weight: 500 !important; text-shadow: 0 2px 4px rgba(0,0,0,0.9) !important; }
        h1, h2, h3, .block-card h2 { color: #ffffff !important; text-shadow: 0 2px 8px rgba(0,0,0,1) !important; }
        
        /* Inject dynamic background slots into dark empty cards */
        .nexus-injected-bg { 
            background-size: cover; 
            background-position: center; 
            min-height: 200px; 
            border-radius: 8px; 
            margin-bottom: 15px;
            box-shadow: inset 0 0 100px rgba(0,0,0,0.6);
        }

        /* Flag Screensaver Overlay Panels */
        #nexus-flag-screensaver {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            z-index: 1; pointer-events: none; opacity: 0;
            transition: opacity 1.5s ease-in-out;
            background-size: cover; background-position: center;
        }
        #nexus-flag-screensaver.active { opacity: 0.25; }

        /* AI Chatbot System Interface */
        #nexus-chat-box { position: fixed; bottom: 20px; right: 20px; z-index: 10000; font-family: sans-serif; }
        #chat-launcher { width: 60px; height: 60px; border-radius: 50%; background: #10b981; border: none; color: white; font-size: 26px; cursor: pointer; box-shadow: 0 6px 20px rgba(16,185,129,0.4); display: flex; align-items: center; justify-content: center; }
        #chat-window { width: 340px; height: 440px; background: #0f172a; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.6); display: none; flex-direction: column; overflow: hidden; }
        #chat-header { background: #1e293b; padding: 12px; display: flex; justify-content: space-between; align-items: center; color: white; font-weight: bold; font-size: 14px; }
        #chat-body { flex: 1; padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; font-size: 13px; }
        .msg { padding: 8px 12px; border-radius: 8px; max-width: 80%; line-height: 1.4; }
        .msg.bot { background: rgba(255,255,255,0.1); color: #f1f5f9; align-self: flex-start; }
        .msg.user { background: #10b981; color: #000; font-weight: bold; align-self: flex-end; }
        #chat-actions { padding: 10px; display: flex; flex-direction: column; gap: 6px; background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.1); }
        .action-btn { background: rgba(16,185,129,0.15); border: 1px solid #10b981; color: #34d399; padding: 8px; border-radius: 6px; text-align: left; cursor: pointer; font-size: 12px; font-weight: bold; }
        .action-btn:hover { background: #10b981; color: #000; }
    `;
    document.head.appendChild(styles);

    // 2. INJECT BACKGROUND FLAG SCREENSAVER CONTAINER LAYER
    const flagLayer = document.createElement('div');
    flagLayer.id = 'nexus-flag-screensaver';
    document.body.appendChild(flagLayer);

    // 3. AUTO FIX BLANK ASSET CARDS ON LOADING DESTINATION PAGES
    fixMissingCardImages();

    // 4. INSTANTIATE INTERACTIVE ENGINE FOR THE WIDGET UI
    const widget = document.createElement('div');
    widget.id = 'nexus-chat-box';
    widget.innerHTML = `
        <button id="chat-launcher">🤖</button>
        <div id="chat-window">
            <div id="chat-header">
                <span>Bukhari Nexus AI Assistant</span>
                <button id="chat-close" style="background:none; border:none; color:#94a3b8; cursor:pointer; font-size:16px;">✕</button>
            </div>
            <div id="chat-body">
                <div class="msg bot">Welcome to Bukhari Nexus Pvt Ltd. Please select the specific business division you are looking to connect with:</div>
            </div>
            <div id="chat-actions"></div>
        </div>
    `;
    document.body.appendChild(widget);

    const launcher = document.getElementById('chat-launcher');
    const windowEl = document.getElementById('chat-window');
    const closeBtn = document.getElementById('chat-close');

    launcher.onclick = () => { windowEl.style.display = 'flex'; launcher.style.display = 'none'; };
    closeBtn.onclick = () => { windowEl.style.display = 'none'; launcher.style.display = 'flex'; };

    runChatDialog('start');
}

function fixMissingCardImages() {
    // Find structural blocks based on standard layout headers and append missing imagery
    document.querySelectorAll('h2, h3, div').forEach(el => {
        if (el.textContent.trim().toUpperCase() === 'WHEAT' && el.parentElement && !el.parentElement.querySelector('.nexus-injected-bg')) {
            const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusData.images.wheat}')`;
            el.parentElement.insertBefore(div, el);
        }
        if (el.textContent.trim().toUpperCase() === 'PADDY' && el.parentElement && !el.parentElement.querySelector('.nexus-injected-bg')) {
            const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusData.images.paddy}')`;
            el.parentElement.insertBefore(div, el);
        }
        if (el.textContent.trim() === 'Bukhari Traders' && el.closest('.block-card')) {
            const p = el.closest('.block-card'); if(!p.querySelector('.nexus-injected-bg')) {
                const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusData.images.tradersCard}')`;
                p.insertBefore(div, p.firstChild);
            }
        }
        if (el.textContent.trim() === 'Al Makkah Store' && el.closest('.block-card')) {
            const p = el.closest('.block-card'); if(!p.querySelector('.nexus-injected-bg')) {
                const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusData.images.makkahCard}')`;
                p.insertBefore(div, p.firstChild);
            }
        }
        if (el.textContent.trim() === 'Bukhari PTY LTD' && el.closest('.block-card')) {
            const p = el.closest('.block-card'); if(!p.querySelector('.nexus-injected-bg')) {
                const div = document.createElement('div'); div.className = 'nexus-injected-bg'; div.style.backgroundImage = `url('${NexusData.images.ptyCard}')`;
                p.insertBefore(div, p.firstChild);
            }
        }
    });
}

function triggerFlagScreensaver(country) {
    const layer = document.getElementById('nexus-flag-screensaver');
    if (!layer) return;
    if (country === 'pk') {
        layer.style.backgroundImage = `url('${NexusData.images.pakistanFlag}')`;
        layer.classList.add('active');
    } else if (country === 'au') {
        layer.style.backgroundImage = `url('${NexusData.images.australiaFlag}')`;
        layer.classList.add('active');
    } else {
        layer.classList.remove('active');
    }
}

function runChatDialog(step, userText = '') {
    const body = document.getElementById('chat-body');
    const actions = document.getElementById('chat-actions');
    if (!actions) return;

    if (userText) {
        const uMsg = document.createElement('div'); uMsg.className = 'msg user'; uMsg.textContent = userText;
        body.appendChild(uMsg); body.scrollTop = body.scrollHeight;
    }

    actions.innerHTML = '';

    setTimeout(() => {
        const bMsg = document.createElement('div'); bMsg.className = 'msg bot';

        if (step === 'start') {
            bMsg.textContent = "Which business would you like to explore or contact today?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('traders_opt', '🌾 Bukhari Traders')">🌾 Bukhari Traders (Grains)</button>
                <button class="action-btn" onclick="runChatDialog('makkah_opt', '🛒 Al Makkah Store')">🛒 Al Makkah Store (FMCG)</button>
                <button class="action-btn" onclick="runChatDialog('pty_opt', '🚗 Bukhari PTY LTD')">🚗 Bukhari PTY LTD (Mobility)</button>
            `;
        }
        // Bukhari Traders Options
        else if (step === 'traders_opt') {
            bMsg.textContent = "Bukhari Traders operates across multiple regions. Which regional desk do you want to transfer to on WhatsApp?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('pk_traders', '🇵🇰 Pakistan Trading Desk')">🇵🇰 Pakistan Operations</button>
                <button class="action-btn" onclick="runChatDialog('au_traders', '🇦🇺 Australia Trading Desk')">🇦🇺 Australia Operations</button>
            `;
        }
        // Al Makkah Store Options
        else if (step === 'makkah_opt') {
            bMsg.textContent = "Al Makkah Store Retail Management is ready to assist. Please pick your connection region:";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('pk_makkah', '🇵🇰 Pakistan Retail Desk')">🇵🇰 Pakistan Desk</button>
                <button class="action-btn" onclick="runChatDialog('au_makkah', '🇦🇺 Australia Retail Desk')">🇦🇺 Australia Desk</button>
            `;
        }
        // Bukhari PTY LTD Options
        else if (step === 'pty_opt') {
            bMsg.textContent = "Bukhari PTY LTD Mobility and Fleet infrastructure support channels. Choose your support desk:";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('pk_pty', '🇵🇰 Pakistan Mobility Desk')">🇵🇰 Pakistan Desk</button>
                <button class="action-btn" onclick="runChatDialog('au_pty', '🇦🇺 Australia Mobility Desk')">🇦🇺 Australia Desk</button>
            `;
        }
        // ROUTING EXECUTIONS (PAKISTAN INBOUNDS)
        else if (step === 'pk_traders' || step === 'pk_makkah' || step === 'pk_pty') {
            triggerFlagScreensaver('pk');
            bMsg.textContent = "Routing you immediately to the selected Pakistan Business Division on WhatsApp...";
            body.appendChild(bMsg);
            setTimeout(() => { window.open("https://wa.me/923476051990?text=Hello%20Bukhari%20Nexus%20Team,%20I%20am%20inquiring%20regarding%20Pakistan%20business%20operations.", "_blank"); }, 1500);
        }
        // ROUTING EXECUTIONS (AUSTRALIA INBOUNDS)
        else if (step === 'au_traders' || step === 'au_makkah' || step === 'au_pty') {
            triggerFlagScreensaver('au');
            bMsg.textContent = "Routing you immediately to the selected Australia International Business Division on WhatsApp...";
            body.appendChild(bMsg);
            setTimeout(() => { window.open("https://wa.me/61474024174?text=Hello%20Bukhari%20Nexus%20Team,%20I%20am%20inquiring%20regarding%20Australia%20international%20operations.", "_blank"); }, 1500);
        }

        body.scrollTop = body.scrollHeight;
    }, 400);
}

// Watch layout changes and re-verify images on tab clicks safely
document.addEventListener("click", () => {
    setTimeout(fixMissingCardImages, 100);
});

// Run Setup Engine
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startNexusEngine);
} else {
    startNexusEngine();
}
