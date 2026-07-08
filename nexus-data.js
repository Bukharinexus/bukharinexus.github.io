/* Bukhari Nexus Pvt Ltd - Database & Dynamic View Render Engine */

const nexusDatabase = {
    modules: {
        home: {
            title: "Global Sector Matrix",
            subtitle: "Orchestrating premium supply lines, automated grain distribution, and international asset mobility management.",
            layout: "grid",
            items: [
                {
                    badge: "Agriculture Sectors",
                    title: "Bukhari Traders & Commission Agent",
                    desc: "State-of-the-art wheat processing and direct agricultural grain distribution networks connecting regional farms with national wholesale trade hubs.",
                    specs: [
                        { label: "Core Commodity", value: "Premium Wheat & Grain" },
                        { label: "Operation Type", value: "B2B Supply Chain & Brokerage" },
                        { label: "Market Reach", value: "National Trading Floor" }
                    ],
                    hasExtended: true,
                    extId: "ext-traders"
                },
                {
                    badge: "FMCG Warehousing",
                    title: "Al Makkah Karyana Store",
                    desc: "An enterprise-grade consumer wholesale hub executing advanced inventory management, high-demand retail supply, and community distribution logistics.",
                    specs: [
                        { label: "Sector", value: "Wholesale Consumer Goods & FMCG" },
                        { label: "Inventory Model", value: "High-Velocity Turnaround" },
                        { label: "Distribution", value: "Bulk B2B & Direct Retail" }
                    ],
                    hasExtended: true,
                    extId: "ext-makkah"
                },
                {
                    badge: "Global Logistics",
                    title: "Bukhari Nexus PTY Ltd",
                    desc: "Our international mobility wing engineering specialized asset logistics, express delivery fleets, and secure private transport solutions across Australia.",
                    specs: [
                        { label: "Headquarters", value: "Australia Region" },
                        { label: "Fleet Type", value: "Active Ride-Share & Fleet Logistics" },
                        { label: "Service Index", value: "On-Demand Mobility Networks" }
                    ],
                    hasExtended: true,
                    extId: "ext-pty"
                }
            ]
        },
        about: {
            title: "Corporate Mandate",
            layout: "single",
            content: `
                <div class="detail-display-card">
                    <h3>Architecting Global Reliability</h3>
                    <p>Bukhari Nexus Pvt Ltd acts as a parent management structure supervising multi-sector economic verticals. From supplying fundamental agricultural staples to stabilizing regional commodity lines, we minimize frictions in trade.</p>
                    <p>Our core operational ethos utilizes scalable logistics networks and modernized tracking infrastructures to build consistent value across all asset pipelines. We bridge localized supply frameworks with global delivery mechanisms flawlessly.</p>
                </div>
            `
        },
        history: {
            title: "Our Trajectory",
            layout: "single",
            content: `
                <div class="detail-display-card">
                    <h3>From Local Trade to Group Infrastructure</h3>
                    <p><strong>Phase 1: Foundations in Agribusiness</strong> — Established as a leading regional commodities trading desk, consolidating critical grain storage assets and standardizing delivery lines.</p>
                    <p><strong>Phase 2: Wholesale Retail Footprint</strong> — Launched advanced warehousing solutions via high-volume FMCG hubs, providing essential food products directly to regional markets.</p>
                    <p><strong>Phase 3: International Multi-Sector Expansion</strong> — Reconstructed as a private limited ecosystem, establishing global transport operations across Australian distribution sectors to drive cross-border asset efficiency.</p>
                </div>
            `
        },
        contact: {
            title: "Global Coordination Desks",
            layout: "single",
            content: `
                <div class="detail-display-card" style="margin-bottom: 24px;">
                    <h3>Regional South Asia HQ (Agri & Wholesale)</h3>
                    <p><strong>Central Hub Address:</strong> Main Grain Market, Chishtian, Punjab, Pakistan</p>
                    <p><strong>Processing Center:</strong> Industrial Trade Corridor, Southern Zone</p>
                    <p><strong>Operations Matrix:</strong> Bulk Grain Freight, Wholesale Inventories</p>
                </div>
                <div class="detail-display-card">
                    <h3>International Logistics Control (Oceania Region)</h3>
                    <p><strong>Corporate Base:</strong> Melbourne Transit Node, Victoria, Australia</p>
                    <p><strong>Operational Focus:</strong> Fleet Operations & On-Demand Transit Logistics</p>
                </div>
            `
        }
    }
};

/* THE ORCHESTRATION ENGINE */
function switchNexusModule(moduleId) {
    const module = nexusDatabase.modules[moduleId];
    if (!module) return;

    // Update Nav Button Active States Safely
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.getElementById(`btn-${moduleId}`);
    if (targetedBtn) targetedBtn.classList.add('active');

    const holder = document.getElementById('dynamic-module-holder');
    
    // Build Header Zone
    let htmlContent = `
        <section class="hero-section">
            <h2>${module.title}</h2>
            ${module.subtitle ? `<p>${module.subtitle}</p>` : ''}
        </section>
    `;

    // Process Grid Layouts (Cards) vs Single Layouts (Text)
    if (module.layout === 'grid') {
        htmlContent += `<div class="cards-grid">`;
        module.items.forEach(item => {
            let specHtml = '';
            item.specs.forEach(s => {
                specHtml += `<div><span class="label">${s.label}:</span> <strong>${s.value}</strong></div>`;
            });

            htmlContent += `
                <div class="business-preview-card">
                    <span class="card-badge">${item.badge}</span>
                    <div class="card-bg-placeholder" id="bg-render-${item.extId}"></div>
                    <h3>${item.title}</h3>
                    <p class="desc">${item.desc}</p>
                    
                    <div class="vertical-specs">
                        ${specHtml}
                    </div>

                    ${item.hasExtended ? `
                        <button class="expand-inline-btn" onclick="toggleExtendedView('${item.extId}')">View Asset Details ↓</button>
                        <div class="inline-hidden-details" id="${item.extId}">
                            <div class="media-subgrid">
                                <div class="sub-media-box">
                                    <div class="card-bg-placeholder" id="sub-render-${item.extId}-1" style="height:120px;"></div>
                                    <h4>Operations Node</h4>
                                </div>
                                <div class="sub-media-box">
                                    <div class="card-bg-placeholder" id="sub-render-${item.extId}-2" style="height:120px;"></div>
                                    <h4>Infrastructure</h4>
                                </div>
                            </div>
                            <p class="extended-text" id="text-render-${item.extId}">Loading asset definitions...</p>
                        </div>
                    ` : ''}
                </div>
            `;
        });
        htmlContent += `</div>`;
    } else {
        htmlContent += `<div class="single-display-layout">${module.content}</div>`;
    }

    holder.innerHTML = htmlContent;

    // Run secondary engines to load flags, imagery backgrounds, and text expansions
    if (typeof applyFlagScreenOverlay === 'function') applyFlagScreenOverlay(moduleId);
    if (module.layout === 'grid' && typeof triggerMediaInjection === 'function') {
        triggerMediaInjection();
    }
}

// Inline Accordion Action handler
function toggleExtendedView(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    el.classList.toggle('open');
    const primaryBtn = el.previousElementSibling;
    if (el.classList.contains('open')) {
        primaryBtn.innerText = "Close Asset Details ↑";
    } else {
        primaryBtn.innerText = "View Asset Details ↓";
    }
}

// Self-Initialize Home Module on Load
document.addEventListener("DOMContentLoaded", () => {
    switchNexusModule('home');
});
