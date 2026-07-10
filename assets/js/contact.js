/**
 * Bukhari NEXUS - Contact Form Manager
 * File: assets/js/contact.js
 * Description: Manages form validation, submission states, and user feedback.
 */

(function () {
    'use strict';

    const ContactForm = {
        init() {
            this.form = document.querySelector('.contact-form');
            if (!this.form) return;

            this.submitBtn = this.form.querySelector('button[type="submit"]');
            this.msgInput = this.form.querySelector('textarea');
            this.bindEvents();
        },

        bindEvents() {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            
            // Character counter for message field
            if (this.msgInput) {
                this.msgInput.addEventListener('input', () => this.updateCharCount());
            }
        },

        updateCharCount() {
            const current = this.msgInput.value.length;
            // You can optionally add an element in your HTML to display this count
            console.log(`Characters: ${current}`);
        },

        validate() {
            let isValid = true;
            const requiredFields = this.form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                const value = field.value.trim();
                if (!value) {
                    this.setError(field, 'This field is required');
                    isValid = false;
                } else if (field.type === 'email' && !this.isValidEmail(value)) {
                    this.setError(field, 'Invalid email format');
                    isValid = false;
                } else {
                    this.clearError(field);
                }
            });

            return isValid;
        },

        isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        setError(element, message) {
            element.style.borderColor = 'var(--color-accent-red)';
            element.setAttribute('aria-invalid', 'true');
        },

        clearError(element) {
            element.style.borderColor = '';
            element.removeAttribute('aria-invalid');
        },

        async handleSubmit(e) {
            e.preventDefault();

            if (!this.validate()) return;

            this.setLoading(true);

            // Simulation of backend API call
            try {
                const formData = new FormData(this.form);
                // Replace this with your actual API endpoint
                // await fetch('/api/contact', { method: 'POST', body: formData });
                
                console.log('Form data ready for submission:', Object.fromEntries(formData));
                
                this.showFeedback('Thank you for reaching out. We will be in touch shortly.', 'success');
                this.form.reset();
            } catch (error) {
                console.error('Submission error:', error);
                this.showFeedback('Something went wrong. Please try again later.', 'error');
            } finally {
                this.setLoading(false);
            }
        },

        setLoading(isLoading) {
            this.submitBtn.disabled = isLoading;
            this.submitBtn.innerText = isLoading ? 'Sending...' : 'Send Message';
        },

        showFeedback(message, type) {
            alert(message); // Simple implementation; replace with a custom UI notification element
        }
    };

    document.addEventListener('DOMContentLoaded', () => ContactForm.init());
})();
