/* Bukhari Nexus Pvt Ltd - Conversational Routing Engine */

function initNexusChat() {
    if (document.getElementById('nexus-chat-box')) return;
    
    const widget = document.createElement('div');
    widget.id = 'nexus-chat-box';
    widget.innerHTML = `
        <button id="chat-launcher">🤖</button>
        <div id="chat-window">
            <div id="chat-header">
                <span>Bukhari Nexus Digital Desk</span>
                <button id="chat-close" style="background:none; border:none; color:#94a3b8; cursor:pointer; font-size:16px;">✕</button>
            </div>
            <div id="chat-body">
                <div class="msg bot">Welcome to the Bukhari Nexus ecosystem. Please select the specific operation branch you want to reach:</div>
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
        const uMsg = document.createElement('div'); uMsg.className = 'msg user'; uMsg.textContent = userText;
        body.appendChild(uMsg); body.scrollTop = body.scrollHeight;
    }

    actions.innerHTML = '';

    setTimeout(() => {
        const bMsg = document.createElement('div'); bMsg.className = 'msg bot';

        if (step === 'start') {
            bMsg.textContent = "Which business segment can we assist you with today?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('traders_opt', '🌾 Bukhari Traders')">🌾 Bukhari Traders (Grains Desk)</button>
                <button class="action-btn" onclick="runChatDialog('makkah_opt', '🛒 Al Makkah Store')">🛒 Al Makkah Store (FMCG Desk)</button>
                <button class="action-btn" onclick="runChatDialog('pty_opt', '🚗 Bukhari PTY LTD')">🚗 Bukhari PTY LTD (Australia Mobility)</button>
            `;
        }
        else if (step === 'traders_opt') {
            bMsg.textContent = "Connecting to Bukhari Traders (Grains Desk). Initializing Pakistan region support setup...";
            body.appendChild(bMsg);
            
            // Trigger Pakistan background flag overlay
            const layer = document.getElementById('nexus-flag-screensaver');
            if (layer) {
                layer.style.backgroundImage = "url('https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600')";
                layer.classList.add('active');
            }
            
            setTimeout(() => { 
                window.open("https://wa.me/923476051990?text=Hello%20Bukhari%20Traders%20Team,%20I%20am%20inquiring%20regarding%20grain%20supply%20chains%20and%20brokerage.", "_blank"); 
            }, 1200);
        }
        else if (step === 'makkah_opt') {
            bMsg.textContent = "Connecting to Al Makkah Store (Wholesale & FMCG Desk). Initializing support panel...";
            body.appendChild(bMsg);
            
            // Trigger Pakistan background flag overlay
            const layer = document.getElementById('nexus-flag-screensaver');
            if (layer) {
                layer.style.backgroundImage = "url('https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600')";
                layer.classList.add('active');
            }
            
            setTimeout(() => { 
                window.open("https://wa.me/923474888906?text=Hello%20Al%20Makkah%20Store%20Team,%20I%20am%20inquiring%20regarding%20retail%20wholesale%20distribution.", "_blank"); 
            }, 1200);
        }
        else if (step === 'pty_opt') {
            bMsg.textContent = "Connecting to Bukhari PTY LTD (International Fleet Desk). Initializing Australia region mobility support...";
            body.appendChild(bMsg);
            
            // Trigger Australia background flag overlay
            const layer = document.getElementById('nexus-flag-screensaver');
            if (layer) {
                layer.style.backgroundImage = "url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600')";
                layer.classList.add('active');
            }
            
            setTimeout(() => { 
                window.open("https://wa.me/61474024174?text=Hello%20Bukhari%20PTY%20LTD%20Team,%20I%20am%20inquiring%20regarding%20Uber%20Eats%20or%20Uber%20X%20car%20fleets.", "_blank"); 
            }, 1200);
        }

        body.scrollTop = body.scrollHeight;
    }, 350);
}

// Safely boot the assistant widget once architecture scripts finish loading
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(initNexusChat, 400);
} else {
    document.addEventListener("DOMContentLoaded", () => { setTimeout(initNexusChat, 400); });
}
