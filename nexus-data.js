/* Bukhari Nexus Pvt Ltd - High-Performance Multi-Page Tab Architecture */

const nexusDatabase = {
    modules: {
        home: {
            title: "Bukhari Nexus Enterprise Ecosystem",
            subtitle: "Select an enterprise sector below to access its dedicated operational matrix, corporate administration, and regional desks.",
            layout: "grid",
            items: [
                {
                    badge: "Grains & Agriculture",
                    title: "Bukhari Traders & Commission Agent",
                    desc: "State-of-the-art wheat processing and structural agricultural grain distribution networks connecting regional farms with national wholesale trade hubs.",
                    targetModule: "traders"
                },
                {
                    badge: "Wholesale FMCG & Retail",
                    title: "Al Makkah General Store",
                    desc: "An enterprise-grade consumer wholesale hub executing advanced inventory management, high-volume grocery supply, and bulk distribution logistics.",
                    targetModule: "makkah"
                },
                {
                    badge: "Transit Logistics & Mobility",
                    title: "Bukhari Nexus PTY Ltd",
                    desc: "Specialized vehicle logistics, ride-share configurations, and delivery fleet solutions servicing active transport networks across the Tasmanian region.",
                    targetModule: "pty"
                }
            ]
        },
        traders: {
            title: "🌾 Bukhari Traders & Commission Agent",
            layout: "dedicated-page",
            flagCode: "pk",
            content: `
                <div class="single-display-layout">
                    <div class="card-bg-placeholder" id="dedicated-hero-traders" style="height: 320px; margin-bottom: 30px;"></div>
                    
                    <div class="detail-display-card">
                        <h3>Executive Directorate</h3>
                        <p><strong>Managing Director:</strong> Sajjad Hussain</p>
                        <p><strong>Corporate Trading Desk:</strong> +92 347 6051990</p>
                        <p><strong>Primary Operations Address:</strong> Dinga Road, Kotla Mehmood Shah, Post Office Thatha Alia, Tehsil Phalia, Pakistan</p>
                        
                        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
                        
                        <h3>Operational Mandate & Logistics</h3>
                        <p>Bukhari Traders directly oversees comprehensive harvest aggregation, milling supply lines, and industrial grain brokerage. We secure fluid commodity corridors between farming cooperatives and major commercial wholesale networks, stabilizing regional inventories with high-caliber quality assurance protocols.</p>
                        
                        <div class="media-subgrid" style="margin-top: 25px;">
                            <div class="sub-media-box"><div class="card-bg-placeholder" id="img-grain-wheat" style="height:160px;"></div><h4>Milled Wheat Processing Node</h4></div>
                            <div class="sub-media-box"><div class="card-bg-placeholder" id="img-grain-paddy" style="height:160px;"></div><h4>Premium Paddy Supply Network</h4></div>
                        </div>
                    </div>
                </div>
            `
        },
        makkah: {
            title: "🛒 Al Makkah General Store",
            layout: "dedicated-page",
            flagCode: "pk",
            content: `
                <div class="single-display-layout">
                    <div class="card-bg-placeholder" id="dedicated-hero-makkah" style="height: 320px; margin-bottom: 30px;"></div>
                    
                    <div class="detail-display-card">
                        <h3>Executive Directorate</h3>
                        <p><strong>Managing Director:</strong> Zulqur Nain Haider</p>
                        <p><strong>Wholesale Desk Line:</strong> +92 347 4888906</p>
                        <p><strong>Central Warehouse Address:</strong> Gujrat Sargodha Road, Pahranwali, Pakistan</p>
                        
                        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
                        
                        <h3>Wholesale Portfolio & Big Customer Distribution</h3>
                        <p>Al Makkah General Store functions as a high-velocity fulfillment ecosystem structured for bulk merchant buying, larger family provisioning, and commercial sub-vendor supply. Our inventory tracks premium essential consumer packed goods, foundational grocery lines, and FMCG logistics to ensure immediate product availability at optimized commercial pricing.</p>
                        
                        <div class="media-subgrid" style="margin-top: 25px;">
                            <div class="sub-media-box"><div class="card-bg-placeholder" id="img-makkah-aisle" style="height:160px;"></div><h4>Wholesale Inventory Aisles</h4></div>
                            <div class="sub-media-box"><div class="card-bg-placeholder" id="img-makkah-fresh" style="height:160px;"></div><h4>Daily Consumer Supply Lines</h4></div>
                        </div>
                    </div>
                </div>
            `
        },
        pty: {
            title: "🚗 Bukhari Nexus PTY Ltd",
            layout: "dedicated-page",
            flagCode: "au",
            content: `
                <div class="single-display-layout">
                    <div class="card-bg-placeholder" id="dedicated-hero-pty" style="height: 320px; margin-bottom: 30px;"></div>
                    
                    <div class="detail-display-card">
                        <h3>Executive Directorate</h3>
                        <p><strong>Managing Director:</strong> Haseeb Sajjad</p>
                        <p><strong>Fleet Operations Line:</strong> +61 474 024174</p>
                        <p><strong>Registered Administrative Base:</strong> 83 Spring Farm Road, Kingston, TAS 7050, Australia</p>
                        
                        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
                        
                        <h3>Tasmanian Mobility Fleet Infrastructure</h3>
                        <p>Bukhari Nexus PTY Ltd delivers highly structured commercial vehicle assets engineered directly for the contemporary passenger transport economy. We maintain a frontline fleet optimized for commercial food delivery drivers, verified Uber X ride-share configurations, and regional taxi platforms—maintaining highly specific operational density within the Hobart municipal sector while scaling capabilities across greater Tasmania.</p>
                        
                        <div class="media-subgrid" style="margin-top: 25px;">
                            <div class="sub-media-box"><div class="card-bg-placeholder" id="img-pty-eats" style="height:160px;"></div><h4>Food Delivery Fleet Assets</h4></div>
                            <div class="sub-media-box"><div class="card-bg-placeholder" id="img-pty-rideshare" style="height:160px;"></div><h4>Uber X & Taxi Platforms</h4></div>
                        </div>
                    </div>
                </div>
            `
        },
        about: {
            title: "Corporate Mandate",
            layout: "single",
            content: `
                <div class="detail-display-card">
                    <h3>Architecting Global Reliability</h3>
                    <p>Bukhari Nexus Pvt Ltd operates as a synchronized parent corporate shell overseeing distinct commercial and logistical divisions. From anchoring primary grain trade routes in South Asia to standardizing gig-economy transport networks in Oceania, we specialize in structural supply chain optimization.</p>
                    <p>Our operational ethos relies upon professional accountability, modern inventory controls, and asset placement that supports regional market scalability.</p>
                </div>
            `
        },
        history: {
            title: "Our Trajectory",
            layout: "single",
            content: `
                <div class="detail-display-card">
                    <h3>From Asset Development to Diversified Operations</h3>
                    <p><strong>Phase 1: Foundations in Agribusiness</strong> — Established structural operations under Bukhari Traders, consolidating localized grain collection pipelines and processing setups.</p>
                    <p><strong>Phase 2: Bulk Retail Expansion</strong> — Deployed Al Makkah General Store to interface directly with consumer markets, supplying bulk grocery staples to sub-retail spaces and high-volume consumers.</p>
                    <p><strong>Phase 3: International Logistics Integration</strong> — Formed Bukhari Nexus PTY Ltd to anchor standard fleet asset provisions, bridging transport networks across crucial regional Tasmanian logistical sectors.</p>
                </div>
            `
        },
        contact: {
            title: "Global Coordination Desks",
            layout: "single",
            content: `
                <div class="detail-display-card" style="margin-bottom: 24px;">
                    <h3>Regional South Asia Headquarters</h3>
                    <p><strong>Bukhari Traders Desk (Sajjad Hussain):</strong> +92 347 6051990</p>
                    <p style="font-size:14px; color:#94a3b8; margin-left: 15px;">Dinga Road, Kotla Mehmood Shah, PO Thatha Alia, Tehsil Phalia, Pakistan</p>
                    <p style="margin-top: 15px;"><strong>Al Makkah Desk (Zulqur Nain Haider):</strong> +92 347 4888906</p>
                    <p style="font-size:14px; color:#94a3b8; margin-left: 15px;">Gujrat Sargodha Road, Pahranwali, Pakistan</p>
                </div>
                <div class="detail-display-card">
                    <h3>Oceania Logistics Headquarters</h3>
                    <p><strong>Bukhari Nexus PTY Ltd (Haseeb Sajjad):</strong> +61 474 024174</p>
                    <p style="font-size:14px; color:#94a3b8; margin-left: 15px;">83 Spring Farm Road, Kingston, TAS 7050, Australia</p>
                </div>
            `
        }
    }
};

/* MASTER SINGLE-PAGE ROUTING LAYER */
function switchNexusModule(moduleId) {
    const module = nexusDatabase.modules[moduleId];
    if (!module) return;

    // Update nav selections
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.getElementById(`btn-${moduleId}`);
    if (targetedBtn) targetedBtn.classList.add('active');

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
                    <div class="card-bg-placeholder" id="bg-render-${item.targetModule}"></div>
                    <h3>${item.title}</h3>
                    <p class="desc">${item.desc}</p>
                    <button class="expand-inline-btn" style="margin-top: auto;">Open Sector Portal Page →</button>
                </div>
            `;
        });
        htmlContent += `</div>`;
    } else {
        htmlContent += `${module.content}`;
    }

    holder.innerHTML = htmlContent;

    // Trigger visual flag backdrops and dynamic imagery
    if (typeof applyFlagScreenOverlay === 'function') {
        applyFlagScreenOverlay(module.flagCode || 'clear');
    }
    if (typeof triggerMediaInjection === 'function') {
        setTimeout(triggerMediaInjection, 60);
    }
    
    // Auto Scroll to Top for crisp transition feel
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    switchNexusModule('home');
});
