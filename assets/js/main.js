/**
 * Bukhari NEXUS - Main JavaScript
 * Description: Core functionality and site interactions.
 * File: assets/js/main.js
 */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initSmoothScrolling();
    initBackToTop();
    initMobileMenu();
    initScrollReveal();
});

/**
 * Sticky Header Effect
 * Adds a background to the header when user scrolls down.
 */
function initStickyHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(11, 11, 11, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
        }
    });
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Back-to-Top Button
 */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    btn.style.cssText = 'position:fixed; bottom:20px; right:20px; display:none; padding:10px 15px; background:var(--color-primary-gold); border:none; cursor:pointer; z-index:9999; border-radius:5px;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

/**
 * Scroll Reveal Animation Trigger
 * Toggles a class on elements when they enter the viewport.
 */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, section').forEach(el => observer.observe(el));
}

/**
 * Basic Form Validation Helper
 */
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--color-accent-red)';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

/**
 * Performance: Event Throttling (Utility)
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
