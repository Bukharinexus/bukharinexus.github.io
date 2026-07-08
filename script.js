function updateView(business) {
    const bg = document.getElementById('active-bg');
    if (business === 'traders') bg.style.background = 'linear-gradient(45deg, #FF9933, #006600)';
    if (business === 'makkah') bg.style.background = 'linear-gradient(45deg, #00c6ff, #0072ff)';
    if (business === 'pty') bg.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
}
