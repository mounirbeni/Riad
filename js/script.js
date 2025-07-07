// ===== PORTFOLIO WEBSITE JAVASCRIPT =====
// Author: Portfolio Replica
// Description: Interactive functionality for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initSkillBars();
    initResponsibilities();
    initTestimonialCarousel();
    initContactForm();
    initAOS();
    initSmoothScrolling();
});

// ===== NAVIGATION FUNCTIONALITY =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL EFFECTS =====

function initScrollEffects() {
    

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const elementsToObserve = document.querySelectorAll('.info-card, .service-card, .cert-item, .initiative-item, .language-item');
    elementsToObserve.forEach(el => observer.observe(el));
}

// ===== SKILL BARS ANIMATION =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const targetWidth = skillBar.getAttribute('data-width');
                
                // Animate the skill bar
                setTimeout(() => {
                    skillBar.style.width = targetWidth;
                }, 200);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}

// ===== RESPONSIBILITIES TOGGLE =====
function initResponsibilities() {
    const showButtons = document.querySelectorAll('.show-responsibilities');
    
    showButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const responsibilitiesDiv = document.getElementById(targetId);
            
            if (responsibilitiesDiv.classList.contains('show')) {
                responsibilitiesDiv.classList.remove('show');
                this.textContent = 'Show All Responsibilities';
            } else {
                responsibilitiesDiv.classList.add('show');
                this.textContent = 'Hide Responsibilities';
            }
        });
    });
}

// ===== TESTIMONIAL CAROUSEL =====
function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance testimonials every 5 seconds
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }
    
    // Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
                    showSlide(currentSlide);
                }
            }
        }
    }
}

// ===== CONTACT FORM HANDLING =====
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate form
            if (validateForm(formObject)) {
                // Show success message
                showFormMessage('Thank you for your message! I will get back to you within 2-4 hours.', 'success');
                
                // Reset form
                this.reset();
                
                // In a real implementation, you would send the data to a server
                console.log('Form submitted:', formObject);
            }
        });
    }
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message with at least 10 characters');
    }
    
    if (errors.length > 0) {
        showFormMessage(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 5px;
        font-weight: 500;
        ${type === 'success' ? 
            'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
            'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    // Insert message
    const form = document.getElementById('contact-form');
    form.insertBefore(messageDiv, form.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ===== CV DOWNLOAD FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show download message
            showNotification('CV download feature will be implemented by the website owner. Please use the contact form to request the CV.', 'info');
        });
    }
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #d4edda; color: #155724; border-left: 4px solid #28a745;' : 
          type === 'error' ? 'background: #f8d7da; color: #721c24; border-left: 4px solid #dc3545;' : 
          'background: #d1ecf1; color: #0c5460; border-left: 4px solid #17a2b8;'}
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        float: right;
        margin-left: 1rem;
        opacity: 0.7;
    `;
    
    closeBtn.addEventListener('click', function() {
        removeNotification(notification);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ===== AOS INITIALIZATION =====
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    const counters = document.querySelectorAll('.achievement-number, .impact-number, .stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
                const suffix = counter.textContent.replace(/[\d]/g, '');
                
                animateCounter(counter, 0, target, suffix, 2000);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, start, end, suffix, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Initialize counters when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initCounters, 1000); // Delay to ensure AOS has initialized
});

// ===== SOCIAL MEDIA LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp links
    const whatsappLinks = document.querySelectorAll('.social-link.whatsapp, .method-icon.whatsapp');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual WhatsApp number
            window.open('https://wa.me/212XXXXXXXXX?text=Hello%20Mounir,%20I%20am%20interested%20in%20your%20hospitality%20services.', '_blank');
        });
    });
    
    // Email links
    const emailLinks = document.querySelectorAll('.social-link.email, .method-icon.email');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual email
            window.location.href = 'mailto:mounir.banni@email.com?subject=Hospitality%20Services%20Inquiry';
        });
    });
    
    // LinkedIn links
    const linkedinLinks = document.querySelectorAll('.social-link.linkedin');
    linkedinLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual LinkedIn profile
            window.open('https://linkedin.com/in/mounir-banni', '_blank');
        });
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation support
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.tagName === 'BUTTON' || this.tagName === 'A') {
                    this.click();
                }
            }
        });
    });
    
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10001;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events for better performance
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations and effects are handled here
}, 16)); // ~60fps

// ===== CONSOLE MESSAGE =====
console.log(`
🌟 Portfolio Website Loaded Successfully!
📧 Contact: mounir.banni@email.com
📱 WhatsApp: +212 XXX-XXXXXX
🔧 Built with HTML, CSS, and JavaScript
`);

// ===== DEVELOPMENT HELPERS =====
// These functions help with customization and debugging
window.portfolioHelpers = {
    // Function to update contact information
    updateContactInfo: function(whatsapp, email, linkedin) {
        console.log('Use this function to update contact information in the code');
        console.log('WhatsApp:', whatsapp);
        console.log('Email:', email);
        console.log('LinkedIn:', linkedin);
    },
    
    // Function to add new skills
    addSkill: function(skillName, percentage) {
        console.log('Use this function to add new skills to the skills section');
        console.log('Skill:', skillName, 'Percentage:', percentage);
    },
    
    // Function to update personal information
    updatePersonalInfo: function(name, title, description) {
        console.log('Use this function to update personal information');
        console.log('Name:', name);
        console.log('Title:', title);
        console.log('Description:', description);
    }
};

// ===== CUSTOMIZATION COMMENTS =====
/*
CUSTOMIZATION GUIDE:

1. PERSONAL INFORMATION:
   - Update name, title, and description in the HTML hero section
   - Replace profile image in assets/images/profile.jpg
   - Update contact information (phone, email, social media links)

2. EXPERIENCE SECTION:
   - Modify job titles, companies, and descriptions in the timeline
   - Update responsibilities lists for each position
   - Add or remove timeline items as needed

3. SKILLS SECTION:
   - Update skill names and percentages in the HTML
   - Modify competency tags to match your skills
   - Add new skills by copying the skill-item structure

4. SERVICES SECTION:
   - Update service titles and descriptions
   - Change service icons by modifying the Font Awesome classes
   - Add or remove service cards as needed

5. CONTACT INFORMATION:
   - Update phone numbers, email addresses, and social media links
   - Modify the contact form fields if needed
   - Update location information

6. COLORS AND STYLING:
   - Primary color: #3498db (can be changed in CSS)
   - Secondary color: #2c3e50 (can be changed in CSS)
   - Gradient backgrounds can be modified in the CSS file

7. IMAGES:
   - Replace profile.jpg with your own photo
   - Add any additional images to the assets/images folder
   - Update image paths in the HTML accordingly

8. CONTENT:
   - All text content can be edited directly in the HTML file
   - Update achievements, certifications, and testimonials
   - Modify the about section to reflect your background

Remember to test the website on different devices and browsers after making changes!
*/

