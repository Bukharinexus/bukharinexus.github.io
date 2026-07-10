async function renderCompanyCards() {
    const response = await fetch('data/master-data.json');
    const data = await response.json();
    const grid = document.getElementById('company-grid');
    
    data.group_companies.forEach(company => {
        grid.innerHTML += `
            <div class="card">
                <h3>${company.name}</h3>
                <p><strong>Industry:</strong> ${company.industry}</p>
                <p><strong>MD:</strong> ${company.md}</p>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', renderCompanyCards);
