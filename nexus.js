// Bukhari Nexus Pvt Ltd - Comprehensive UI/UX Extension
// Real Flag Photography, High Contrast Overlay, and WhatsApp Chat Routing

const NexusData = {
    parentCompany: {
        legalName: "Bukhari Nexus Pvt Ltd",
        tagline: "A unified Private Limited parent organization managing a multi-sector ecosystem. We bridge foundational regional supply chains with modern mobility infrastructure."
    },
    backgrounds: {
        home: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600"
        ],
        traders: [
            "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?q=80&w=1600",
            "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=1600"
        ],
        makkah: [
            "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600",
            "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1600"
        ],
        pty: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600",
            "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600"
        ],
        pakistan: [
            "https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600"
        ],
        australia: [
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600"
        ]
    }
};

function startNexusEngine() {
    const styles = document.createElement('style');
    styles.innerHTML = `
        .bg-layer { opacity: 0 !important; transform: scale(1.02); transition: opacity 2s ease-in-out, transform 8s ease-in-out !important; }
        .bg-layer.active-layer { opacity: 0.65 !important; transform: scale(1) !important; }
        .bg-overlay-tint { background: linear-gradient(180deg, rgba(3, 5, 10, 0.92) 0%, #03050a 100%) !important; }
        .hub-hero h1, .block-card h2, .block-card h3 { text-shadow: 0 4px 16px rgba(0,0,0,1), 0 2px 4px rgba(0,0,0,1) !important; }
        .hub-hero p, .block-card p { color: #ffffff !important; font-weight: 500 !important; text-shadow: 0 2px 8px rgba(0,0,0,1) !important; }
        #nexus-chat-box { position: fixed; bottom: 20px; right: 20px; z-index: 10000; font-family: 'Inter', sans-serif; }
        #chat-launcher { width: 60px; height: 60px; border-radius: 50%; background: #10b981; border: none; color: white; font-size: 26px; cursor: pointer; box-shadow: 0 6px 20px rgba(16,185,129,0.4); display: flex; align-items: center; justify-content: center; transition: transform 0.2s; }
        #chat-launcher:hover { transform: scale(1.08); }
        #chat-window { width: 350px; height: 450px; background: #0b1120; border: 1px solid rgba(255,255,255,0.15); border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.7); display: none; flex-direction: column; overflow: hidden; }
        #chat-header { background: #111a2e; padding: 14px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; color: white; font-weight: 600; font-size: 14px; }
        #chat-body { flex: 1; padding: 14px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; font-size: 13px; }
        .msg { padding: 10px 12px; border-radius: 10px; max-width: 80%; line-height: 1.4; }
        .msg.bot { background: rgba(255,255,255,0.07); color: #e2e8f0; align-self: flex-start; border-bottom-left-radius: 2px; }
        .msg.user { background: #10b981; color: #060913; font-weight: 600; align-self: flex-end; border-bottom-right-radius: 2px; }
        #chat-actions { padding: 10px; display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3); }
        .action-btn { background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); color: #10b981; padding: 8px 12px; border-radius: 6px; text-align: left; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.2s; }
        .action-btn:hover { background: #10b981; color: #060913; }
    `;
    document.head.appendChild(styles);

    const title = document.querySelector('.hub-hero h1');
    const desc = document.querySelector('.hub-hero p');
    if (title) title.textContent = NexusData.parentCompany.legalName;
    if (desc) desc.textContent = NexusData.parentCompany.tagline;

    const widget = document.createElement('div');
    widget.id = 'nexus-chat-box';
    widget.innerHTML = `
        <button id="chat-launcher">🤖</button>
        <div id="chat-window">
            <div id="chat-header">
                <span>Nexus Group Assistant</span>
                <button id="chat-close" style="background:none; border:none; color:#94a3b8; cursor:pointer; font-size: 16px;">✕</button>
            </div>
            <div id="chat-body">
                <div class="msg bot">Hello! Welcome to the Bukhari Nexus Pvt Ltd desk. How can we help you look through our branches today?</div>
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

function runChatDialog(step, userText = '') {
    const body = document.getElementById('chat-body');
    const actions = document.getElementById('chat-actions');
    if (!actions) return;

    if (userText) {
        const uMsg = document.createElement('div');
        uMsg.className = 'msg user';
        uMsg.textContent = userText;
        body.appendChild(uMsg);
        body.scrollTop = body.scrollHeight;
    }

    actions.innerHTML = '';

    setTimeout(() => {
        const bMsg = document.createElement('div');
        bMsg.className = 'msg bot';

        if (step === 'start') {
            bMsg.textContent = "Which corporate division do you want to explore or contact?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('region', 'Bukhari Traders (Grains)')">🌾 Bukhari Traders</button>
                <button class="action-btn" onclick="runChatDialog('region', 'Al Makkah Store (Retail)')">🛒 Al Makkah Store</button>
                <button class="action-btn" onclick="runChatDialog('region', 'Bukhari PTY LTD (Mobility)')">🚗 Bukhari PTY LTD</button>
            `;
        } 
        else if (step === 'region') {
            bMsg.textContent = "Perfect. Which country regional operations desk do you want to connect with on WhatsApp?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('go_pk', 'Connect to Pakistan Office')">🇵🇰 Pakistan Desk</button>
                <button class="action-btn" onclick="runChatDialog('go_au', 'Connect to Australia Office')">🇦🇺 Australia Desk</button>
            `;
        }
        else if (step === 'go_pk') {
            syncTab('pakistan');
            bMsg.textContent = "Connecting you directly to our Pakistan operations desk on WhatsApp...";
            body.appendChild(bMsg);
            setTimeout(() => { window.open("https://wa.me/923476051990?text=Hello,%20I'm%20inquiring%20from%20the%20Bukhari%20Nexus%20website.", "_blank"); }, 1200);
        }
        else if (step === 'go_au') {
            syncTab('australia');
            bMsg.textContent = "Connecting you directly to our Australia international operations desk on WhatsApp...";
            body.appendChild(bMsg);
            setTimeout(() => { window.open("https://wa.me/61474024174?text=Hello,%20I'm%20inquiring%20from%20the%20Bukhari%20Nexus%20website%20regarding%20Australia%20operations.", "_blank"); }, 1200);
        }

        body.scrollTop = body.scrollHeight;
    }, 400);
}

let activeLayer = 1;
let activeTab = 'home';
let bgIndex = 0;

function runRotator() {
    const images = NexusData.backgrounds[activeTab];
    if (!images || images.length <= 1) return;

    bgIndex = (bgIndex + 1) % images.length;
    
    const layer1 = document.getElementById('bg-layer-1');
    const layer2 = document.getElementById('bg-layer-2');
    if (!layer1 || !layer2) return;

    if (activeLayer === 1) {
        layer2.style.backgroundImage = `url('${images[bgIndex]}')`;
        layer2.classList.add('active-layer');
        layer1.classList.remove('active-layer');
        activeLayer = 2;
    } else {
        layer1.style.backgroundImage = `url('${images[bgIndex]}')`;
        layer1.classList.add('active-layer');
        layer2.classList.remove('active-layer');
        activeLayer = 1;
    }
}

function syncTab(tabId) {
    activeTab = tabId;
    bgIndex = 0;
    const l1 = document.getElementById('bg-layer-1');
    const l2 = document.getElementById('bg-layer-2');
    if (l1 && l2) {
        l1.style.backgroundImage = `url('${NexusData.backgrounds[tabId][0]}')`;
        l1.classList.add('active-layer');
        l2.classList.remove('active-layer');
        activeLayer = 1;
    }
}

document.addEventListener("click", (e) => {
    if (e.target && e.target.id && e.target.id.startsWith('nav-')) {
        syncTab(e.target.id.replace('nav-', ''));
    }
    if (e.target && e.target.closest('.hub-card')) {
        const card = e.target.closest('.hub-card');
        if (card.classList.contains('hc-traders')) syncTab('traders');
        if (card.classList.contains('hc-makkah')) syncTab('makkah');
        if (card.classList.contains('hc-pty')) syncTab('pty');
    }
    if (e.target && e.target.classList.contains('logo')) {
        syncTab('home');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    startNexusEngine();
    const l1 = document.getElementById('bg-layer-1');
    if (l1) l1.style.backgroundImage = `url('${NexusData.backgrounds.home[0]}')`;
    setInterval(runRotator, 5000);
});
