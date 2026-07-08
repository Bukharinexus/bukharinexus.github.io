/* ========================================================
   BUKHARI NEXUS - DYNAMIC SECTOR ARCHITECTURE
   ======================================================== */

const nexusDatabase = {
    modules: {
        home: {
            title: "Bukhari Nexus Enterprise Ecosystem",
            subtitle: "Select an enterprise sector below to access its unique operational framework, executive administration, and assets.",
            layout: "grid",
            cssFile: "style.css",
            // Home Hub Slideshow Images (Mixed Industries)
            slides: [
                "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?auto=format&fit=crop&q=80&w=1600", // Wheat
                "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600", // General Market
                "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1600"  // Fleet Vehicle
            ],
            items: [
                {
                    badge: "🇵🇰 Grains & Agriculture",
                    title: "Bukhari Traders & Commission Agent",
                    desc: "State-of-the-art wheat processing and structural agricultural grain distribution networks connecting regional farms with national wholesale trade hubs.",
                    targetModule: "traders"
                },
                {
                    badge: "🇵🇰 Wholesale FMCG & Retail",
                    title: "Al Makkah General Store",
                    desc: "An enterprise-grade consumer wholesale hub executing advanced inventory management, high-volume grocery supply, and bulk distribution logistics.",
                    targetModule: "makkah"
                },
                {
                    badge: "🇦🇺 Transit Logistics & Mobility",
                    title: "Bukhari Nexus PTY Ltd",
                    desc: "Specialized vehicle logistics, ride-share configurations, and delivery fleet solutions servicing active transport networks across the Tasmanian region.",
                    targetModule: "pty"
                }
            ]
        },
        traders: {
            title: "🌾 Bukhari Traders & Commission Agent",
            layout: "portal",
            cssFile: "traders.css",
            // Specific High-Quality Agriculture / Wheat / Rice Backgrounds
            slides: [
                "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?auto=format&fit=crop&q=80&w=1600", // Wheat field close up
                "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=1600", // Grain harvest
                "https://images.unsplash.com/photo-1532009877282-3340270e0529?auto=format&fit=crop&q=80&w=1600"  // Wheat processing/silos
            ],
            content: `
                <div class="portal-showcase-view">
                    <div class="portal-grid-layout">
                        <div class="profile-main-card">
                            <h3>Operational Mandate 🇵🇰</h3>
                            <p>Bukhari Traders directly oversees comprehensive harvest aggregation, milling supply lines, and industrial grain brokerage. We secure fluid commodity corridors between farming cooperatives and major commercial wholesale networks, stabilizing regional inventories with high-caliber quality assurance protocols.</p>
                        </div>
                        <div class="directory-sidebar">
                            <h4>Executive Directorate 🇵🇰</h4>
                            <div class="meta-field"><label>Managing Director</label><p>Sajjad Hussain</p></div>
                            <div class="meta-field"><label>Corporate Trading Desk</label><p>+92 347 6051990</p></div>
                            <div class="meta-field"><label>Primary Operations Base</label><p>Dinga Road, Kotla Mehmood Shah, Post Office Thatha Alia, Tehsil Phalia, Pakistan</p></div>
                        </div>
                    </div>
                </div>
            `
        },
        makkah: {
            title: "🛒 Al Makkah General Store",
            layout: "portal",
            cssFile: "makkah.css",
            // Specific High-Quality Store / Distribution Center Backgrounds
            slides: [
                "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600", // Full grocery shelves
                "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1600", // Clean modern wholesale store aisle
                "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1600"  // Supply distribution hub
            ],
            content: `
                <div class="portal-showcase-view">
                    <div class="portal-grid-layout">
                        <div class="profile-main-card">
                            <h3>Wholesale Portfolio & Large Scale Distribution 🇵🇰</h3>
                            <p>Al Makkah General Store functions as a high-velocity fulfillment ecosystem structured for bulk merchant buying, larger family provisioning, and commercial sub-vendor supply. Our inventory tracks premium essential consumer packed goods, foundational grocery lines, and FMCG logistics.</p>
                        </div>
                        <div class="directory-sidebar">
                            <h4>Corporate Desk 🇵🇰</h4>
                            <div class="meta-field"><label>Managing Director</label><p>Zulqur Nain Haider</p></div>
                            <div class="meta-field"><label>Wholesale Desk Line</label><p>+92 347 4888906</p></div>
                            <div class="meta-field"><label>Central Warehouse Address</label><p>Gujrat Sargodha Road, Pahranwali, Pakistan</p></div>
                        </div>
                    </div>
                </div>
            `
        },
        pty: {
            title: "🚗 Bukhari Nexus PTY Ltd",
            layout: "portal",
            cssFile: "pty.css",
            // Specific High-Quality Australian Rideshare / Car Fleet Backgrounds
            slides: [
                "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1600", // Premium white sedan/car
                "https://images.unsplash.com/photo-1494976388531-d1058094e2bd?auto=format&fit=crop&q=80&w=1600", // Elegant modern transit vehicle
                "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1600"  // Moving urban transit asset
            ],
            content: `
                <div class="portal-showcase-view">
                    <div class="portal-grid-layout">
                        <div class="profile-main-card">
                            <h3>Tasmanian Mobility Fleet Infrastructure 🇦🇺</h3>
                            <p>Bukhari Nexus PTY Ltd delivers highly structured commercial vehicle assets engineered directly for the contemporary passenger transport economy. We maintain a frontline fleet optimized for commercial food delivery drivers, verified Uber X ride-share configurations, and regional taxi platforms—maintaining highly specific operational density within the Hobart municipal sector while scaling capabilities across greater Tasmania.</p>
                        </div>
                        <div class="directory-sidebar">
                            <h4>Oceania Administration 🇦🇺</h4>
                            <div class="meta-field"><label>Managing Director</label><p>Haseeb Sajjad</p></div>
                            <div class="meta-field"><label>Fleet Operations Line</label><p>+61 474 024174</p></div>
                            <div class="meta-field"><label>Registered Fleet Base</label><p>83 Spring Farm Road, Kingston, TAS 7050, Australia</p></div>
                        </div>
                    </div>
                </div>
            `
        },
        about: { 
            title: "Corporate Mandate", 
            layout: "single", 
            cssFile: "style.css", 
            slides: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"],
            content: `<div class="profile-main-card" style="max-width:800px; margin:0 auto;"><h3>Architecting Global Reliability</h3><p>Bukhari Nexus Pvt Ltd operates as a synchronized parent corporate shell spanning across international borders.</p></div>` 
        },
        history: { 
            title: "Our Trajectory", 
            layout: "single", 
            cssFile: "style.css", 
            slides: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"],
            content: `<div class="profile-main-card" style="max-width:800px; margin:0 auto;"><h3>Chronology</h3><p>From asset development to multi-sector enterprise operations globally.</p></div>` 
        },
        contact: { 
            title: "Global Coordination Desks", 
            layout: "single", 
            cssFile: "style.css", 
            slides: ["https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600"],
            content: `<div class="profile-main-card" style="max-width:800px; margin:0 auto;"><h3>Global Offices</h3><p>Reach out directly to our managing directors via their specific communication desks displayed on the sector pages.</p></div>` 
        }
    }
};

let currentSlideIdx = 0;
let slideshowInterval = null;

function switchNexusModule(moduleId) {
    const module = nexusDatabase.modules[moduleId];
    if (!module) return;

    // Apply active CSS style link
    let styleLink = document.getElementById('nexus-dynamic-css');
    if (styleLink) styleLink.href = module.cssFile;

    // Toggle Button Focus
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.getElementById(`btn-${moduleId}`);
    if (targetedBtn) targetedBtn.classList.add('active');

    // Build Page Layout
    const holder = document.getElementById('dynamic-module-holder');
    let htmlContent = `
        <section class="hero-section">
            <h2>${module.title}</h2>
            ${module.subtitle ? `<p>${module.subtitle}</p>` : ''}
        </section>
    `;

    if (module.layout === 'grid') {
        htmlContent += `<div class="cards-grid">`;
        module.items.forEach(item => {
            htmlContent += `
                <div class="business-preview-card" onclick="switchNexusModule('${item.targetModule}')" style="cursor:pointer;">
                    <span class="card-badge">${item.badge}</span>
                    <h3>${item.title}</h3>
                    <p class="desc">${item.desc}</p>
                    <button class="expand-inline-btn">Open Sector Portal Page →</button>
                </div>
            `;
        });
        htmlContent += `</div>`;
    } else {
        htmlContent += `${module.content}`;
    }
    holder.innerHTML = htmlContent;

    // Reinitialize Custom Background Engine for this specific page
    setupBackgroundSlideshow(module.slides);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupBackgroundSlideshow(imagesArray) {
    const chassis = document.getElementById('nexus-slideshow-chassis');
    if (!chassis || !imagesArray || imagesArray.length === 0) return;

    clearInterval(slideshowInterval);
    chassis.innerHTML = ''; // Wipe out old background images
    currentSlideIdx = 0;

    // Create fresh images for the slide background
    imagesArray.forEach((url, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `bg-slide ${index === 0 ? 'active' : ''}`;
        slideDiv.style.backgroundImage = `url('${url}')`;
        chassis.appendChild(slideDiv);
    });

    // Start auto-play loop if more than 1 photo exists
    if (imagesArray.length > 1) {
        slideshowInterval = setInterval(() => {
            const slides = chassis.querySelectorAll('.bg-slide');
            if(slides.length === 0) return;
            slides[currentSlideIdx].classList.remove('active');
            currentSlideIdx = (currentSlideIdx + 1) % slides.length;
            slides[currentSlideIdx].classList.add('active');
        }, 5000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    switchNexusModule('home');
});
