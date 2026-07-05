/**
 * Bukhari Nexus Pvt Ltd - Corporate Content & Configurations Matrix
 * Edit this file to update parent company descriptions, milestones, or backgrounds.
 */

const NexusCorporateData = {
    parentCompany: {
        legalName: "Bukhari Nexus Pvt Ltd",
        headline: "Diversified Enterprise Matrix",
        tagline: "A unified Private Limited parent organization managing a multi-sector ecosystem. We bridge foundational regional supply chains with modern mobility infrastructure.",
        established: "2007",
        structure: "1 Parent Conglomerate | 3 Core Business Verticals"
    },
    
    // Background rotation arrays for each segment
    backgrounds: {
        home: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600", // Corporate Headquarters
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600"  // Business Analytics Workspace
        ],
        traders: [
            "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?q=80&w=1600", // Wheat Field
            "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=1600"  // Paddy Agriculture
        ],
        makkah: [
            "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600", // Retail Supermarket Essentials
            "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1600"  // Modern Inventory Shelves
        ],
        pty: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600", // Fleet Transit Logistics
            "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600"  // Heavy Haul Shipping Units
        ]
    }
};

// Function to inject corporate profiles directly into the HTML user interface
function injectCorporateIdentity() {
    // Update main Hero section with explicit Pvt Ltd branding
    const heroTitle = document.querySelector('.hub-hero h1');
    const heroText = document.querySelector('.hub-hero p');
    
    if (heroTitle && heroText) {
        heroTitle.textContent = NexusCorporateData.parentCompany.legalName;
        heroText.textContent = NexusCorporateData.parentCompany.tagline;
    }

    // Append Enterprise Milestone row underneath the main introduction text
    const heroSection = document.querySelector('.hub-hero');
    if (heroSection && !document.getElementById('corporate-milestone-row')) {
        const milestoneRow = document.createElement('div');
        milestoneRow.id = 'corporate-milestone-row';
        milestoneRow.className = 'stats-row';
        milestoneRow.style.justifyContent = 'center';
        milestoneRow.style.maxWidth = '800px';
        milestoneRow.style.margin = '20px auto 0 auto';
        
        milestoneRow.innerHTML = `
            <div class="stat-item">
                <h4>${NexusCorporateData.parentCompany.established}</h4>
                <p>Group Origin Horizon</p>
            </div>
            <div class="stat-item" style="border-left: 1px solid var(--border-color); padding-left: 40px;">
                <h4>Corporate Structure</h4>
                <p>${NexusCorporateData.parentCompany.structure}</p>
            </div>
        `;
        heroSection.appendChild(milestoneRow);
    }
}

// Ensure execution when document tree loads safely
document.addEventListener("DOMContentLoaded", () => {
    injectCorporateIdentity();
});
