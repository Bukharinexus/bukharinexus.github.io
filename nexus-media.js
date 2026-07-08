/* Bukhari Nexus Pvt Ltd - Visual Content Delivery Network & Flag Routing Overlay */

const nexusMediaDatabase = {
    // Top-level main dashboard image buckets
    mainCards: {
        "ext-traders": "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800", // Bulk Silos / Grain Terminal
        "ext-makkah": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",  // Wholesale Logistics Center
        "ext-pty": "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800"      // Fleet Logistics Dashboard
    },
    
    // Deeper granular operational micro-images
    subMedia: {
        "ext-traders": {
            img1: "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?q=80&w=600", // Wheat Processing Plant
            img2: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=600", // Paddy Rice Fields Logistics
            copy: "Bukhari Traders directly manages standard grain collection points, deep storage processing depots, and commercial transport connections. We oversee bulk wheat shipping corridors and paddy processing hubs to fulfill national security food contracts and institutional demands seamlessly."
        },
        "ext-makkah": {
            img1: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600", // Organized Warehousing Aisles
            img2: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600", // Fast Moving Consumer Goods
            copy: "Al Makkah Karyana Store scales community consumer supply networks through specialized bulk merchant facilities. Our layout runs an active inventory strategy tracking daily grocery lines, premium essential items, and regional wholesale distributions to maintain supply stability across hundreds of localized businesses."
        },
        "ext-pty": {
            img1: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?q=80&w=600", // Compact Fuel-Efficient Cars (Uber Eats)
            img2: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600", // Modern Midsize Sedans (Uber X Standard)
            copy: "Bukhari Nexus PTY Ltd offers clean, reliable, modern, and comprehensively insured transport configurations for commercial contractors. We feature highly optimized compact vehicles perfectly engineered for long-distance gig economy operations including Uber Eats food delivery networks, alongside mid-size cars carefully selected to fully meet strict vehicle mandates for Uber X ride-share driver platforms."
        }
    },

    // High definition national backdrops
    flags: {
        pk: "https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600",
        au: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600"
    }
};

/* MASTER PHOTO INJECTION ROUTER */
function triggerMediaInjection() {
    // Inject images into primary card holders
    for (const [key, url] of Object.entries(nexusMediaDatabase.mainCards)) {
        const primaryPlaceholder = document.getElementById(`bg-render-${key}`);
        if (primaryPlaceholder) {
            primaryPlaceholder.style.backgroundImage = `url('${url}')`;
        }
    }

    // Inject data and images inside the hidden drop-down sections
    for (const [key, assets] of Object.entries(nexusMediaDatabase.subMedia)) {
        const node1 = document.getElementById(`sub-render-${key}-1`);
        const node2 = document.getElementById(`sub-render-${key}-2`);
        const textNode = document.getElementById(`text-render-${key}`);

        if (node1) node1.style.backgroundImage = `url('${assets.img1}')`;
        if (node2) node2.style.backgroundImage = `url('${assets.img2}')`;
        if (textNode) textNode.innerText = assets.copy;
    }
}

/* BACKDROP OVERLAY HANDLER */
function applyFlagScreenOverlay(moduleId) {
    const layer = document.getElementById('nexus-flag-screensaver');
    if (!layer) return;

    // Automatically trigger specific country flags if viewing the contact page
    if (moduleId === 'contact') {
        layer.style.backgroundImage = `url('${nexusMediaDatabase.flags.au}')`;
        layer.classList.add('active');
    } else {
        layer.classList.remove('active');
        setTimeout(() => {
            if (!layer.classList.contains('active')) {
                layer.style.backgroundImage = 'none';
            }
        }, 1500);
    }
}

// Independent fallback watcher to guarantee rendering stability
window.addEventListener("click", () => {
    setTimeout(triggerMediaInjection, 80);
});
