/**
 * Dark Mode Toggle Functionality
 * Handles theme switching, localStorage persistence, and system preference detection
 */

class DarkModeManager {
    constructor() {
        this.theme = 'light';
        this.toggleButton = document.getElementById('dark-mode-toggle');
        this.htmlElement = document.documentElement;
        
        this.init();
    }
    
    init() {
        // Load saved theme or detect system preference
        this.loadTheme();
        
        // Add event listener to toggle button
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggleTheme());
        }
        
        // Listen for system theme changes
        this.watchSystemTheme();
    }
    
    loadTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }
    }
    
    setTheme(theme) {
        this.theme = theme;
        
        // Update HTML data attribute
        this.htmlElement.setAttribute('data-theme', theme);
        
        // Update toggle button state
        this.updateToggleButton();
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
        
        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
    
    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add animation class for smooth transition
        this.toggleButton.classList.add('theme-transitioning');
        setTimeout(() => {
            this.toggleButton.classList.remove('theme-transitioning');
        }, 300);
    }
    
    updateToggleButton() {
        if (!this.toggleButton) return;
        
        if (this.theme === 'dark') {
            this.toggleButton.classList.add('dark-mode-active');
            this.toggleButton.setAttribute('aria-label', 'Switch to light mode');
        } else {
            this.toggleButton.classList.remove('dark-mode-active');
            this.toggleButton.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
    
    watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    // Public method to get current theme
    getCurrentTheme() {
        return this.theme;
    }
    
    // Public method to check if dark mode is active
    isDarkMode() {
        return this.theme === 'dark';
    }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.darkModeManager = new DarkModeManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkModeManager;
} 