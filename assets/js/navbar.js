// Navigation Bar JavaScript
// Handles mobile menu, scroll effects, and active link highlighting

class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.lastScrollTop = 0;
        this.scrollThreshold = 100;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateActiveLink();
    }
    
    bindEvents() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Scroll events
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Resize events
        window.addEventListener('resize', () => this.handleResize());
        
        // Smooth scrolling for anchor links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });
    }
    
    toggleMobileMenu() {
        this.navToggle.classList.toggle('active');
        this.navMenu.classList.toggle('nav-menu-open');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.navMenu.classList.contains('nav-menu-open') ? 'hidden' : '';
    }
    
    closeMobileMenu() {
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('nav-menu-open');
        document.body.style.overflow = '';
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > this.scrollThreshold) {
            this.navbar.classList.add('navbar-scrolled');
        } else {
            this.navbar.classList.remove('navbar-scrolled');
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > this.lastScrollTop && scrollTop > 200) {
            // Scrolling down
            this.navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up
            this.navbar.classList.remove('navbar-hidden');
        }
        
        this.lastScrollTop = scrollTop;
        
        // Update active link
        this.updateActiveLink();
    }
    
    handleResize() {
        // Close mobile menu on resize if screen becomes larger
        if (window.innerWidth >= 768) {
            this.closeMobileMenu();
        }
    }
    
    handleSmoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Only handle anchor links on the main page
        if (href.startsWith('#') && (window.location.pathname === '/' || window.location.pathname === '/index.html')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = this.navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // For other links (like "Back to Home"), let them navigate normally
    }
    
    updateActiveLink() {
        // Only update active links on the main page
        if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
            return;
        }
        
        const scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const sectionTop = targetElement.offsetTop;
                    const sectionBottom = sectionTop + targetElement.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        // Remove active class from all links
                        this.navLinks.forEach(l => l.classList.remove('nav-link-active'));
                        // Add active class to current link
                        link.classList.add('nav-link-active');
                    }
                }
            }
        });
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navbar;
} 