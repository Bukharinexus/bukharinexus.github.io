// ===============================
// BUKHARI NEXUS WEBSITE
// script.js
// ===============================

// Navbar background on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.style.background = "#0D2B52";
        navbar.style.padding = "14px 8%";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    } else {
        navbar.style.background = "rgba(13,43,82,.90)";
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "none";
    }
});

// Fade in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .service-grid div, .about, .contact").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

console.log("Bukhari Nexus Website Loaded Successfully");
