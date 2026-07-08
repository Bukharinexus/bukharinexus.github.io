function updateView(business) {
    // 1. Swap the CSS file dynamically
    const link = document.querySelector('link[href$=".css"]');
    if (business === 'traders') {
        link.href = 'traders.css';
    } else if (business === 'makkah') {
        link.href = 'makkah.css';
    } else if (business === 'pty') {
        link.href = 'pty.css';
    }

    // 2. Update the background gradient for visual distinction
    const bg = document.getElementById('active-bg');
    if (business === 'traders') bg.style.background = 'linear-gradient(45deg, #FF9933, #006600)';
    if (business === 'makkah') bg.style.background = 'linear-gradient(45deg, #00c6ff, #0072ff)';
    if (business === 'pty') bg.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
}
