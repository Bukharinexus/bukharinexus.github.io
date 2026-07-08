/* Bukhari Nexus Pvt Ltd - Isolated Media Delivery Asset Module */

const NexusMediaAssets = {
    // Business Segment Cards
    tradersCard: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800",
    makkahCard: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800",
    ptyCard: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800",
    
    // Grains Division Detail Images
    wheat: "https://images.unsplash.com/photo-1574325131876-a7999fd7f2b1?q=80&w=800",
    paddy: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=800",
    
    // Flag Screensaver Backdrops
    pakistanFlag: "https://images.unsplash.com/photo-1627915836243-3a752355e64c?q=80&w=1600",
    australiaFlag: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600"
};

function fixMissingCardImages() {
    // Safely applies the background image source to placeholder containers if they exist on the current view
    const cardTraders = document.getElementById('img-card-traders');
    if (cardTraders) cardTraders.style.backgroundImage = `url('${NexusMediaAssets.tradersCard}')`;

    const cardMakkah = document.getElementById('img-card-makkah');
    if (cardMakkah) cardMakkah.style.backgroundImage = `url('${NexusMediaAssets.makkahCard}')`;

    const cardPty = document.getElementById('img-card-pty');
    if (cardPty) cardPty.style.backgroundImage = `url('${NexusMediaAssets.ptyCard}')`;

    const grainWheat = document.getElementById('img-grain-wheat');
    if (grainWheat) grainWheat.style.backgroundImage = `url('${NexusMediaAssets.wheat}')`;

    const grainPaddy = document.getElementById('img-grain-paddy');
    if (grainPaddy) grainPaddy.style.backgroundImage = `url('${NexusMediaAssets.paddy}')`;
}

function triggerFlagScreensaver(countryCode) {
    const layer = document.getElementById('nexus-flag-screensaver');
    if (!layer) return;

    if (countryCode === 'pk') {
        layer.style.backgroundImage = `url('${NexusMediaAssets.pakistanFlag}')`;
        layer.classList.add('active');
    } else if (countryCode === 'au') {
        layer.style.backgroundImage = `url('${NexusMediaAssets.australiaFlag}')`;
        layer.classList.add('active');
    } else {
        // Clear flag overlay completely when user returns to main hubs
        layer.classList.remove('active');
        setTimeout(() => {
            if(!layer.classList.contains('active')) {
                layer.style.backgroundImage = 'none';
            }
        }, 1000);
    }
}
