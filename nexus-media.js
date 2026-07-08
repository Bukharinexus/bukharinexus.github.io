/* ==========================================================
   Bukhari Nexus Pvt Ltd - Master Media Routing Fix
   ========================================================== */

const nexusMediaUrls = {
    // High-resolution premium replacements from Unsplash
    traders: "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?auto=format&fit=crop&q=80&w=1200",
    tradersSub1: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600",
    tradersSub2: "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?auto=format&fit=crop&q=80&w=600",
    
    makkah: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1200",
    makkahSub1: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    makkahSub2: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
    
    pty: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
    ptySub1: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?auto=format&fit=crop&q=80&w=600",
    ptySub2: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600"
};

function triggerMediaInjection() {
    // 1. Core Card Previews on Home Hub
    const pTraders = document.getElementById('preview-img-traders');
    if (pTraders) pTraders.style.backgroundImage = `url('${nexusMediaUrls.traders}')`;

    const pMakkah = document.getElementById('preview-img-makkah');
    if (pMakkah) pMakkah.style.backgroundImage = `url('${nexusMediaUrls.makkah}')`;

    const pPty = document.getElementById('preview-img-pty');
    if (pPty) pPty.style.backgroundImage = `url('${nexusMediaUrls.pty}')`;

    // 2. Fullscreen Portal Top Banner Heroes
    const hTraders = document.getElementById('hero-traders');
    if (hTraders) hTraders.style.backgroundImage = `url('${nexusMediaUrls.traders}')`;

    const hMakkah = document.getElementById('hero-makkah');
    if (hMakkah) hMakkah.style.backgroundImage = `url('${nexusMediaUrls.makkah}')`;

    const hPty = document.getElementById('hero-pty');
    if (hPty) hPty.style.backgroundImage = `url('${nexusMediaUrls.pty}')`;

    // 3. Grid Row Secondary Asset Photos
    const tS1 = document.getElementById('img-traders-sub1');
    if (tS1) tS1.style.backgroundImage = `url('${nexusMediaUrls.tradersSub1}')`;

    const tS2 = document.getElementById('img-traders-sub2');
    if (tS2) tS2.style.backgroundImage = `url('${nexusMediaUrls.tradersSub2}')`;

    const mS1 = document.getElementById('img-makkah-sub1');
    if (mS1) mS1.style.backgroundImage = `url('${nexusMediaUrls.makkahSub1}')`;

    const mS2 = document.getElementById('img-makkah-sub2');
    if (mS2) mS2.style.backgroundImage = `url('${nexusMediaUrls.makkahSub2}')`;

    const pS1 = document.getElementById('img-pty-sub1');
    if (pS1) pS1.style.backgroundImage = `url('${nexusMediaUrls.ptySub1}')`;

    const pS2 = document.getElementById('img-pty-sub2');
    if (pS2) pS2.style.backgroundImage = `url('${nexusMediaUrls.ptySub2}')`;
}
