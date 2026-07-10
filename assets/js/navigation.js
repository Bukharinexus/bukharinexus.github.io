/**
 * Bukhari NEXUS - Navigation Management
 * File: assets/js/navigation.js
 * Purpose: Manages sticky headers, mobile menus, and accessibility.
 */

(function () {
    'use strict';

    const nav = {
        init() {
            this.cacheElements();
            this.bindEvents();
            this.highlightActivePage();
        },

        cacheElements() {
            this.header = document.querySelector('.header');
            this.menu = document.querySelector('.navbar-menu');
            this.hamburger = document.querySelector('.hamburger');
            this.body = document.body;
        },

        bindEvents() {
            // Sticky Header
            window.addEventListener('scroll', () => {
                this.header.classList.toggle('is-sticky', window.scrollY > 50);
            });

            // Mobile Menu Toggle
            if (this.hamburger) {
                this.hamburger.addEventListener('click', () => this.toggleMenu());
            }

            // Close menu on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.menu.classList.contains('is-active')) {
                    this.toggleMenu(false);
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.menu.contains(e.target) && !this.hamburger?.contains(e.target) && this.menu.classList.contains('is-active')) {
                    this.toggleMenu(false);
                }
            });

            // Close menu after clicking link
            this.menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.toggleMenu(false));
            });
        },

        toggleMenu(forceState) {
            const isActive = forceState !== undefined ? forceState : !this.menu.classList.contains('is-active');
            
            this.menu.classList.toggle('is-active', isActive);
            this.hamburger?.classList.toggle('is-active', isActive);
            
            // Prevent background scrolling
            this.body.style.overflow = isActive ? 'hidden' : '';
            
            // Accessibility attributes
            this.hamburger?.setAttribute('aria-expanded', isActive);
        },

        highlightActivePage() {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            this.menu.querySelectorAll('a').forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('is-active');
                }
            });
        }
    };

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', () => nav.init());
})();
