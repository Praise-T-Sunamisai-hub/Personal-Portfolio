/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    
    if(menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

/* ----- TESTIMONIALS CAROUSEL ----- */
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-box');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current testimonial
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Event listeners for navigation buttons
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
}

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-play testimonials
setInterval(nextTestimonial, 5000);

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

  /* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', {delay: 100});
sr.reveal('.featured-text-info', {delay: 200});
sr.reveal('.featured-text-btn', {delay: 200});
sr.reveal('.social_icons', {delay: 200});
sr.reveal('.featured-image', {delay: 300});

  /* -- PROJECT BOX -- */
sr.reveal('.project-box', {interval: 200});

  /* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* -- TESTIMONIALS -- */
sr.reveal('.testimonial-container', {delay: 200});
  
/* -- FAQ -- */
sr.reveal('.faq-item', {interval: 100});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
sr.reveal('.about-info', {origin: 'left'});
sr.reveal('.contact-info', {origin: 'left'});

  /* -- ABOUT SKILLS & FORM BOX -- */
sr.reveal('.skills-box', {origin: 'right'});
sr.reveal('.form-control', {origin: 'right'});

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ----- MODERN INTERACTIONS ----- */
// Add parallax effect to featured image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const featuredImage = document.querySelector('.featured-image');
    if (featuredImage) {
        featuredImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add smooth hover effects to project boxes
const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

/* ----- FAQ FUNCTIONALITY ----- */
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open the clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

/* ----- ENHANCED FORM FUNCTIONALITY ----- */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm?.querySelector('.btn-primary');
    
    if (contactForm) {
        // Form submission handling
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            submitBtn.classList.add('loading');
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                
                // Show success message
                showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset floating labels
                const labels = contactForm.querySelectorAll('.floating-label');
                labels.forEach(label => {
                    label.style.top = '20px';
                    label.style.fontSize = '16px';
                    label.style.color = '#999';
                });
            }, 2000);
        });
        
        // Enhanced input interactions
        const inputFields = contactForm.querySelectorAll('.input-field');
        
        inputFields.forEach(field => {
            // Focus and blur effects
            field.addEventListener('focus', function() {
                this.parentNode.classList.add('focused');
            });
            
            field.addEventListener('blur', function() {
                this.parentNode.classList.remove('focused');
                validateField(this);
            });
            
            // Real-time validation
            field.addEventListener('input', function() {
                validateField(this);
            });
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const inputGroup = field.parentNode;
    
    // Remove existing error states
    inputGroup.classList.remove('error', 'valid');
    
    // Email validation
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
            inputGroup.classList.add('valid');
        } else {
            inputGroup.classList.add('error');
        }
    }
    
    // Required field validation
    if (field.hasAttribute('required') && value) {
        inputGroup.classList.add('valid');
    } else if (field.hasAttribute('required') && !value) {
        inputGroup.classList.add('error');
    }
}

function showFormMessage(message, type) {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 5000);
}

// Add typing cursor effect
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.innerHTML = '|';
    cursor.style.animation = 'blink 1s infinite';
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        .typing-cursor {
            color: var(--first-color);
            font-weight: bold;
        }
        .input-group.focused .input-field {
            border-color: var(--first-color);
            box-shadow: 0 0 0 3px rgba(110, 87, 224, 0.1);
        }
        .input-group.valid .input-field {
            border-color: #4CAF50;
        }
        .input-group.error .input-field {
            border-color: #f44336;
        }
        .input-group.valid .input-icon {
            color: #4CAF50;
        }
        .input-group.error .input-icon {
            color: #f44336;
        }
    `;
    document.head.appendChild(style);
});
