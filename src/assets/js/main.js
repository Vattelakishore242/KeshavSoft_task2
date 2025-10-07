// ===== MAIN JAVASCRIPT FOR KESHAVSOFT TASK 2 =====

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 KeshavSoft Task 2 - Nunjucks + Vite Implementation');
    
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeProgressBars();
    initializeScrollEffects();
    initializeTooltips();
    
    // Log tech stack
    console.log('📋 Tech Stack: Nunjucks + Vite + Bootstrap 5');
    console.log('⚡ Bundler: Vite');
    console.log('🎨 Templating: Nunjucks');
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Animation initialization
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animateElements = document.querySelectorAll('.card, .stats-card, .section-title');
    animateElements.forEach(el => observer.observe(el));
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Progress bar animations
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
}

// Scroll effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-bg');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Initialize Bootstrap tooltips
function initializeTooltips() {
    // Initialize tooltips if Bootstrap is loaded
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

// Utility functions
const Utils = {
    // Debounce function
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            
            if (callNow) func.apply(context, args);
        };
    },
    
    // Throttle function
    throttle: function(func, limit) {
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
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Performance monitoring
const Performance = {
    init: function() {
        // Log page load time
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`📊 Page Load Time: ${loadTime}ms`);
        });
        
        // Monitor scroll performance
        let scrollCount = 0;
        const throttledScroll = Utils.throttle(function() {
            scrollCount++;
        }, 100);
        
        window.addEventListener('scroll', throttledScroll);
        
        // Log scroll performance every 10 seconds
        setInterval(function() {
            if (scrollCount > 0) {
                console.log(`📈 Scroll Events (last 10s): ${scrollCount}`);
                scrollCount = 0;
            }
        }, 10000);
    }
};

// Initialize performance monitoring
Performance.init();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils, Performance };
}

// Global error handling
window.addEventListener('error', function(e) {
    console.error('🚨 JavaScript Error:', e.error);
});

// Console styling
console.log('%c🚀 KeshavSoft Task 2', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c📋 Nunjucks + Vite Implementation', 'color: #764ba2; font-size: 14px;');
console.log('%c⚡ All systems operational!', 'color: #4facfe; font-size: 12px;');
