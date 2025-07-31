# Navigation Component Documentation

A modern, responsive navigation bar component with smooth animations and mobile-friendly design.

## 🎯 Features

### Core Functionality
- **Responsive Design**: Adapts to all screen sizes
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated scrolling to sections
- **Active Link Highlighting**: Shows current section
- **Scroll Effects**: Hides/shows navbar on scroll
- **Backdrop Blur**: Modern glassmorphism effect

### Visual Features
- **Fixed Position**: Stays at top of page
- **Gradient Underlines**: Animated hover effects
- **Brand Logo**: Customizable logo/brand name
- **Smooth Transitions**: All animations are smooth
- **Accessibility**: Screen reader friendly

## 📁 File Structure

```
_includes/
├── nav.html                    # Navigation component template

_sass/components/
├── _navbar.scss               # Navigation styling

assets/js/
├── navbar.js                  # Navigation functionality

_layouts/
├── default.html               # Includes navigation
```

## 🎨 Usage

### Basic Implementation
The navigation is automatically included in all pages through the default layout:

```html
<!-- Automatically included in _layouts/default.html -->
{% include nav.html %}
```

### Navigation Links

#### Main Page Navigation
On the homepage, the navigation includes links to all major sections:

- **Home** (`#hero`) - Hero section
- **About** (`#about`) - About section
- **Play** (`#play`) - Download/Play section
- **Showcase** (`#showcase`) - Gameplay showcase
- **Team** (`#team`) - Team section
- **News** (`#announcements`) - Announcements section
- **Contact** (`#contact`) - Contact section

#### Sub-Page Navigation
On individual pages (like announcements), the navigation shows:

- **Back to Home** - Returns to homepage
- **All News** - Goes to announcements archive
- **Team** - Goes to main page team section
- **Contact** - Goes to contact section on homepage

## 🔧 Customization

### Adding New Navigation Items
1. **Update HTML**: Add new items to `_includes/nav.html`
2. **Update JavaScript**: Add section tracking in `navbar.js`
3. **Update Styling**: Customize appearance in `_navbar.scss`

### Example: Adding a New Section
```html
<!-- In _includes/nav.html -->
<li class="nav-item">
    <a href="#new-section" class="nav-link" data-section="new-section">New Section</a>
</li>
```

### Page Detection Logic
The navigation automatically detects the current page type:

```liquid
{% if page.url == '/' or page.url == '/index.html' %}
    <!-- Main page navigation -->
{% else %}
    <!-- Sub-page navigation -->
{% endif %}
```

This ensures appropriate navigation links are shown based on the current page.

### Styling Customization

#### Colors
```scss
// Primary navigation color
$primary-color: #4A90E2;

// Hover and active states
.nav-link:hover {
  color: $primary-color;
}
```

#### Animations
```scss
// Transition duration
transition: all 0.3s ease-in-out;

// Hover effects
&:hover {
  transform: translateY(-2px);
}
```

#### Mobile Breakpoints
```scss
// Desktop (1024px and up)
@include desktop-up { }

// Mobile (below 1024px)
@media (max-width: #{$breakpoint-lg - 1px}) { }
```

## 📱 Responsive Behavior

### Desktop (1024px+)
- Horizontal menu layout
- Hover effects with underlines
- Active link indicators
- Smooth scroll animations

### Tablet (768px - 1023px)
- Hamburger menu toggle
- Vertical mobile menu
- Touch-friendly tap targets
- Backdrop blur effects

### Mobile (below 768px)
- Compact header height
- Full-width mobile menu
- Larger touch targets
- Optimized spacing

## 🚀 JavaScript Features

### Mobile Menu Toggle
```javascript
// Toggle mobile menu
toggleMobileMenu() {
  this.navToggle.classList.toggle('active');
  this.navMenu.classList.toggle('nav-menu-open');
}
```

### Smooth Scrolling
```javascript
// Smooth scroll to sections
handleSmoothScroll(e) {
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}
```

### Active Link Tracking
```javascript
// Update active link based on scroll position
updateActiveLink() {
  const scrollPosition = window.scrollY + 100;
  
  // Check which section is currently visible
  // Add/remove active classes accordingly
}
```

## 🎨 CSS Classes

### Main Classes
- `.navbar` - Main navigation container
- `.nav-container` - Inner container with max-width
- `.nav-brand` - Logo/brand section
- `.nav-menu` - Navigation menu container
- `.nav-list` - Unordered list of navigation items
- `.nav-item` - Individual navigation item
- `.nav-link` - Navigation link

### State Classes
- `.navbar-scrolled` - Applied when page is scrolled
- `.navbar-hidden` - Applied when navbar is hidden
- `.nav-menu-open` - Applied when mobile menu is open
- `.nav-link-active` - Applied to active navigation link
- `.nav-toggle.active` - Applied when hamburger is active

## 🔧 Configuration

### Breakpoints
```scss
$breakpoint-sm: 640px;   // Mobile
$breakpoint-md: 768px;   // Tablet
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Large Desktop
```

### Colors
```scss
$primary-color: #4A90E2;
$secondary-color: #7B68EE;
$gradient-primary: linear-gradient(135deg, $primary-color, $secondary-color);
```

### Spacing
```scss
$container-max-width: 1200px;
$container-padding: 1rem;
```

## 🚀 Performance

- **Minimal JavaScript**: Lightweight and efficient
- **CSS Transitions**: Hardware-accelerated animations
- **Lazy Loading**: Only loads when needed
- **Responsive Images**: Optimized for all devices

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant colors
- **Touch Targets**: Minimum 44px touch targets

## 🐛 Troubleshooting

### Common Issues

1. **Navigation not showing**: Check if `nav.html` is included in layout
2. **Mobile menu not working**: Verify JavaScript is loaded
3. **Smooth scroll not working**: Ensure sections have correct IDs
4. **Styling issues**: Check SCSS compilation

### Debug Mode
Add this to see navigation state:
```javascript
console.log('Navbar state:', {
  scrolled: this.navbar.classList.contains('navbar-scrolled'),
  hidden: this.navbar.classList.contains('navbar-hidden'),
  mobileOpen: this.navMenu.classList.contains('nav-menu-open')
});
``` 