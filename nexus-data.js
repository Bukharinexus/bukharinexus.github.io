/* ========================================================
   Bukhari Nexus Pvt Ltd - Multi-CSS Splitting Engine
   ======================================================== */

const nexusDatabase = {
    modules: {
        home: {
            title: "Bukhari Nexus Enterprise Ecosystem",
            subtitle: "Select an enterprise sector below to access its unique operational framework, executive administration, and assets.",
            layout: "grid",
            cssFile: "style.css", // Uses core global style
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
            layout: "portal",
            cssFile: "traders.css", // Dedicated Traders Stylesheet
            content: `
                <div class="portal-showcase-view">
                    <div class="portal-hero" id="hero-traders"></div>
                    <div class="portal-grid-layout">
                        <div class="profile-main-card">
                            <h3>Operational Mandate</h3>
                            <p>Bukhari Traders directly oversees comprehensive harvest aggregation, milling supply lines, and industrial grain brokerage. We secure fluid commodity corridors between farming cooperatives and major commercial wholesale networks, stabilizing regional inventories with high-caliber quality assurance protocols.</p>
                            
                            <div class="sub-assets-row">
                                <div class="asset-sub-box">
                                    <div class="mini-img" id="img-traders-sub1"></div>
                                    <h4>Milled Wheat Processing Node</h4>
                                </div>
                                <div class="asset-sub-box">
                                    <div class="mini-img" id="img-traders-sub2"></div>
                                    <h4>Premium Paddy Supply</h4>
                                </div>
                            </div>
                        </div>
                        <div class="directory-sidebar">
                            <h4>Executive Directorate</h4>
                            <div class="meta-field">
                                <label>Managing Director</label>
                                <p>Sajjad Hussain</p>
                            </div>
                            <div class="meta-field">
                                <label>Corporate Trading Desk</label>
                                <p>+92 347 6051990</p>
                            </div>
                            <div class="meta-field">
                                <label>Primary Operations Base</label>
                                <p style="font-size: 0.9rem;">Dinga Road, Kotla Mehmood Shah, Post Office Thatha Alia, Tehsil Phalia, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        makkah: {
            title: "🛒 Al Makkah General Store",
            layout: "portal",
            cssFile: "makkah.css", // Dedicated Al Makkah Stylesheet
            content: `
                <div class="portal-showcase-view">
                    <div class="portal-hero" id="hero-makkah"></div>
                    <div class="portal-grid-layout">
                        <div class="profile-main-card">
                            <h3>Wholesale Portfolio & Big Customer Distribution</h3>
                            <p>Al Makkah General Store functions as a high-velocity fulfillment ecosystem structured for bulk merchant buying, larger family provisioning, and commercial sub-vendor supply. Our inventory tracks premium essential consumer packed goods, foundational grocery lines, and FMCG logistics to ensure immediate product availability at optimized commercial pricing.</p>
                            
                            <div class="sub-assets-row">
                                <div class="asset-sub-box">
                                    <div class="mini-img" id="img-makkah-sub1"></div>
                                    <h4>Wholesale Inventory Aisles</h4>
                                </div>
                                <div class="asset-sub-box">
                                    <div class="mini-img" id="img-makkah-sub2"></div>
                                    <h4>Daily Consumer Supply Lines</h4>
                                </div>
                            </div>
                        </div>
                        <div class="directory-sidebar">
                            <h4>Corporate Desk</h4>
                            <div class="meta-field">
                                <label>Managing Director</label>
                                <p>Zulqur Nain Haider</p>
                            </div>
                            <div class="meta-field">
                                <label>Wholesale Desk Line</label>
                                <p>+92 347 4888906</p>
                            </div>
                            <div class="meta-field">
                                <label>Central Warehouse Address</label>
                                <p style="font-size: 0.9rem;">Gujrat Sargodha Road, Pahranwali, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        pty: {
            title: "🚗 Bukhari Nexus PTY Ltd",
            layout: "portal",
            cssFile: "pty.css", // Dedicated Bukhari PTY Stylesheet
            content: `
                <div class="portal-showcase-view">
                    <div class="portal-hero" id="hero-pty"></div>
                    <div class="portal-grid-layout">
                        <div class="profile-main-card">
                            <h3>Tasmanian Mobility Fleet Infrastructure</h3>
                            <p>Bukhari Nexus PTY Ltd delivers highly structured commercial vehicle assets engineered directly for the contemporary passenger transport economy. We maintain a frontline fleet optimized for commercial food delivery drivers, verified Uber X ride-share configurations, and regional taxi platforms—maintaining highly specific operational density within the Hobart municipal sector while scaling capabilities across greater Tasmania.</p>
                            
                            <div class="sub-assets-row">
                                <div class="asset-sub-box">
                                    <div class="mini-img" id="img-pty-sub1"></div>
                                    <h4>Food Delivery Fleet Assets</h4>
                                </div>
                                <div class="asset-sub-box">
                                    <div class="mini-img" id="img-pty-sub2"></div>
                                    <h4>Uber X & Taxi Platforms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="directory-sidebar">
                            <h4>Oceania Administration</h4>
                            <div class="meta-field">
                                <label>Managing Director</label>
                                <p>Haseeb Sajjad</p>
                            </div>
                            <div class="meta-field">
                                <label>Fleet Operations Line</label>
                                <p>+61 474 024174</p>
                            </div>
                            <div class="meta-field">
                                <label>Registered Fleet Base</label>
                                <p style="font-size: 0.9rem;">83 Spring Farm Road, Kingston, TAS 7050, Australia</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        about: {
            title: "Corporate Mandate",
            layout: "single",
            cssFile: "style.css",
            content: `
                <div class="standalone-box">
                    <h3>Architecting Global Reliability</h3>
                    <p>Bukhari Nexus Pvt Ltd operates as a synchronized parent corporate shell overseeing distinct commercial and logistical divisions. From anchoring primary grain trade routes in South Asia to standardizing gig-economy transport networks in Oceania, we specialize in structural supply chain optimization.</p>
                </div>
            `
        },
        history: {
            title: "Our Trajectory",
            layout: "single",
            cssFile: "style.css",
            content: `
                <div class="standalone-box">
                    <h3>From Asset Development to Diversified Operations</h3>
                    <div class="history-timeline">
                        <div class="timeline-milestone">
                            <h4>Phase 1: Foundations in Agribusiness</h4>
                            <p>Established structural operations under Bukhari Traders, consolidating localized grain collection pipelines and processing setups.</p>
                        </div>
                        <div class="timeline-milestone">
                            <h4>Phase 2: Bulk Retail Expansion</h4>
                            <p>Deployed Al Makkah General Store to interface directly with consumer markets, supplying bulk grocery staples to sub-retail spaces and high-volume consumers.</p>
                        </div>
                        <div class="timeline-milestone">
                            <h4>Phase 3: International Logistics Integration</h4>
                            <p>Formed Bukhari Nexus PTY Ltd to anchor standard fleet asset provisions, bridging transport networks across crucial regional Tasmanian logistical sectors.</p>
                        </div>
                    </div>
                </div>
            `
        },
        contact: {
            title: "Global Coordination Desks",
            layout: "single",
            cssFile: "style.css",
            content: `
                <div class="standalone-box">
                    <p style="margin-bottom: 2rem; color: #94a3b8;">Direct contact channels for executive administration and trading inquiries across operations:</p>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <h4 style="color: #10b981;">🌾 Bukhari Traders (Sajjad Hussain)</h4>
                            <p>Line: +92 347 6051990</p>
                        </div>
                        <div>
                            <h4 style="color: #10b981;">🛒 Al Makkah General Store (Zulqur Nain Haider)</h4>
                            <p>Line: +92 347 4888906</p>
                        </div>
                        <div>
                            <h4 style="color: #10b981;">🚗 Bukhari Nexus PTY Ltd (Haseeb Sajjad)</h4>
                            <p>Line: +61 474 024174</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
};

/* THE DYNAMIC STYLESHEET HOT-SWAPPER */
function switchNexusModule(moduleId) {
    const module = nexusDatabase.modules[moduleId];
    if (!module) return;

    // Hot-swap the CSS layout link inside index.html header safely
    let styleLink = document.getElementById('nexus-dynamic-css');
    if (!styleLink) {
        styleLink = document.createElement('link');
        styleLink.id = 'nexus-dynamic-css';
        styleLink.rel = 'stylesheet';
        document.head.appendChild(styleLink);
    }
    styleLink.href = module.cssFile;

    // Toggle nav header active button selections
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
                    <div class="card-img-placeholder" id="preview-img-${item.targetModule}"></div>
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

    // Run media injection matching elements
    if (typeof triggerMediaInjection === 'function') {
        setTimeout(triggerMediaInjection, 80);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    switchNexusModule('home');
});
