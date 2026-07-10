/**
 * Bukhari NEXUS - Data Loader
 * Fetches data from master-data.json and populates the UI.
 */
async function loadCompanyData() {
    try {
        const response = await fetch('data/master-data.json');
        const data = await response.json();
        
        // Example: Update Hero Headline if elements exist
        const companyNameEl = document.getElementById('company-name');
        if (companyNameEl) companyNameEl.textContent = data.company_info.name;
        
        console.log('Bukhari NEXUS Data Loaded Successfully');
    } catch (error) {
        console.error('Error loading site data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCompanyData);
