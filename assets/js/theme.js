/**
 * Bukhari NEXUS - Theme Manager
 * File: assets/js/theme.js
 * Description: Manages UI themes (Dark/Light mode) and user preferences.
 */

(function () {
    'use strict';

    const ThemeManager = {
        init() {
            this.themeKey = 'bukharinexus-theme';
            this.defaultTheme = 'dark';
            
            // Prevent flash of unstyled content: check local storage immediately
            this.applyTheme(this.getStoredTheme());
        },

        /**
         * Get user preference from LocalStorage or system settings
         */
        getStoredTheme() {
            return localStorage.getItem(this.themeKey) || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'); 
                   // Defaulting to 'dark' for premium brand identity
        },

        /**
         * Applies the theme class to the document body
         * @param {string} theme - 'dark' or 'light'
         */
        applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.themeKey, theme);
        },

        /**
         * Toggle between themes
         * Prepared for future implementation
         */
        toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            this.applyTheme(newTheme);
            
            // Optional: Dispatch event for other components to listen to
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
        }
    };

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
})();
