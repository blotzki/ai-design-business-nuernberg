// AI-Powered Design Business - Enhanced JavaScript Functionality
// Professional interactive features for German market optimization

document.addEventListener('DOMContentLoaded', function() {
    console.log('AI-Powered Design Business - Ready for Action! 🚀');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form enhancement
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            const requiredFields = ['name', 'email', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = contactForm.querySelector(`[name="${field}"]`);
                if (!formObject[field] || formObject[field].trim() === '') {
                    showFieldError(input, 'Dieses Feld ist erforderlich');
                    isValid = false;
                } else {
                    clearFieldError(input);
                }
            });
            
            // Email validation
            const emailInput = contactForm.querySelector('[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formObject.email && !emailRegex.test(formObject.email)) {
                showFieldError(emailInput, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                showFormSuccess('Vielen Dank für Ihre Nachricht! Ich melde mich so schnell wie möglich bei Ihnen.');
                contactForm.reset();
                console.log('Form submitted successfully:', formObject);
            }
        });
    }
    
    // Form validation helper functions
    function showFieldError(input, message) {
        clearFieldError(input);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        input.style.borderColor = '#ef4444';
        input.parentNode.appendChild(errorDiv);
    }
    
    function clearFieldError(input) {
        const existingError = input.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        input.style.borderColor = '';
    }
    
    function showFormSuccess(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message-success';
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            background-color: #10b981;
            color: white;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            font-weight: 500;
        `;
        
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
        
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .ai-feature, .stat-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('✅ AI-Powered Design Business initialized successfully!');
    console.log('🎯 Ready to serve Nürnberg businesses with AI-powered solutions');
});