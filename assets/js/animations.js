/**
 * Bukhari NEXUS - Animation Manager
 * File: assets/js/animations.js
 * Description: Orchestrates scroll-based interactions and dynamic UI effects.
 */

(function () {
    'use strict';

    const AnimationManager = {
        init() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            this.initScrollReveal();
            this.initCounters();
        },

        /**
         * Intersection Observer for Scroll Reveals
         * Animates elements as they enter the viewport.
         */
        initScrollReveal() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Apply animation class based on data-attribute or default
                        const animClass = entry.target.dataset.anim || 'animate-slide-up';
                        entry.target.classList.add(animClass);
                        observer.unobserve(entry.target); // Trigger only once
                    }
                });
            }, observerOptions);

            // Observe all target elements
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        },

        /**
         * Statistics Counter Animation
         * Counts up numbers when they enter the viewport.
         */
        initCounters() {
            const counters = document.querySelectorAll('[data-count]');
            
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const count = +target.dataset.count;
                        const updateCount = () => {
                            const speed = 200; // Lower is slower
                            const increment = count / speed;
                            const current = +target.innerText;

                            if (current < count) {
                                target.innerText = Math.ceil(current + increment);
                                setTimeout(updateCount, 10);
                            } else {
                                target.innerText = count;
                            }
                        };
                        updateCount();
                        observer.unobserve(target);
                    }
                });
            });

            counters.forEach(counter => counterObserver.observe(counter));
        }
    };

    // Initialize on load
    document.addEventListener('DOMContentLoaded', () => AnimationManager.init());
})();
