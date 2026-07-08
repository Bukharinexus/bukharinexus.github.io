function initNexusChat() {
    if (document.getElementById('nexus-chat-box')) return;
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
                <div class="msg bot">Welcome to Bukhari Nexus Pvt Ltd. Please select the specific business division you wish to contact:</div>
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
            bMsg.textContent = "Which business segment would you like to explore or contact?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('traders_opt', '🌾 Bukhari Traders')">🌾 Bukhari Traders (Grains)</button>
                <button class="action-btn" onclick="runChatDialog('makkah_opt', '🛒 Al Makkah Store')">🛒 Al Makkah Store (FMCG)</button>
                <button class="action-btn" onclick="runChatDialog('pty_opt', '🚗 Bukhari PTY LTD')">🚗 Bukhari PTY LTD (Mobility)</button>
            `;
        }
        else if (step === 'traders_opt') {
            bMsg.textContent = "Which regional branch office for Bukhari Traders would you like to open on WhatsApp?";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('pk_desk', '🇵🇰 Pakistan Trading Operations')">🇵🇰 Pakistan Desk</button>
                <button class="action-btn" onclick="runChatDialog('au_desk', '🇦🇺 Australia Import Desk')">🇦🇺 Australia Desk</button>
            `;
        }
        else if (step === 'makkah_opt') {
            bMsg.textContent = "Select your desired region for Al Makkah Store wholesale support:";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('pk_desk', '🇵🇰 Pakistan Retail Desk')">🇵🇰 Pakistan Desk</button>
                <button class="action-btn" onclick="runChatDialog('au_desk', '🇦🇺 Australia Retail Desk')">🇦🇺 Australia Desk</button>
            `;
        }
        else if (step === 'pty_opt') {
            bMsg.textContent = "Choose the logistics and automotive operations support desk:";
            body.appendChild(bMsg);
            actions.innerHTML = `
                <button class="action-btn" onclick="runChatDialog('pk_desk', '🇵🇰 Pakistan Mobility Fleet')">🇵🇰 Pakistan Desk</button>
                <button class="action-btn" onclick="runChatDialog('au_desk', '🇦🇺 Australia Fleet Management')">🇦🇺 Australia Desk</button>
            `;
        }
        else if (step === 'pk_desk') {
            if (typeof triggerFlagScreensaver === "function") triggerFlagScreensaver('pk');
            bMsg.textContent = "Transferring you to the Pakistan branch WhatsApp desk now...";
            body.appendChild(bMsg);
            setTimeout(() => { window.open("https://wa.me/923476051990?text=Hello%20Bukhari%20Nexus%20Team,%20I%20am%20inquiring%20regarding%20Pakistan%20operations.", "_blank"); }, 1200);
        }
        else if (step === 'au_desk') {
            if (typeof triggerFlagScreensaver === "function") triggerFlagScreensaver('au');
            bMsg.textContent = "Transferring you to the Australia international operations WhatsApp desk now...";
            body.appendChild(bMsg);
            setTimeout(() => { window.open("https://wa.me/61474024174?text=Hello%20Bukhari%20Nexus%20Team,%20I%20am%20inquiring%20regarding%20Australia%20operations.", "_blank"); }, 1200);
        }

        body.scrollTop = body.scrollHeight;
    }, 350);
}
