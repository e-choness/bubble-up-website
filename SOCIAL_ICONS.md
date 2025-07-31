# Social Media Icons Documentation

This project uses Font Awesome icons for accurate social media branding. All icons are properly styled with platform-specific colors and hover effects.

## 🎯 Available Platforms

### Currently Supported
- **Steam** (`fa-steam`) - Gaming platform
- **Instagram** (`fa-instagram`) - Social media with gradient
- **YouTube** (`fa-youtube`) - Video platform
- **Twitter/X** (`fa-twitter`) - Social media
- **Discord** (`fa-discord`) - Communication platform
- **LinkedIn** (`fa-linkedin`) - Professional network
- **Patreon** (`fa-patreon`) - Creator platform
- **Bluesky** (`fa-cloud`) - Social media (cloud icon)
- **Linktree** (`fa-link`) - Link aggregator (link icon)
- **GitHub** (`fa-github`) - Code repository

### Additional Platforms Available
- **Facebook** (`fa-facebook`) - Social media
- **Twitch** (`fa-twitch`) - Streaming platform
- **Reddit** (`fa-reddit`) - Community platform
- **TikTok** (`fa-tiktok`) - Short videos

## 🔄 Alternative Icon Options

For platforms without specific Font Awesome icons, here are some alternatives:

### Bluesky Alternatives
- `fa-cloud` - Cloud icon (currently used)
- `fa-feather` - Feather icon
- `fa-dove` - Dove/bird icon
- `fa-wind` - Wind icon
- `fa-sun` - Sun icon

### Linktree Alternatives
- `fa-link` - Link icon (currently used)
- `fa-external-link-alt` - External link icon
- `fa-share-alt` - Share icon
- `fa-sitemap` - Sitemap icon

## 🎨 Usage Examples

### Footer Social Icons
```html
<a href="https://steam.com/..." target="_blank" rel="noopener" class="social-icon" data-platform="steam">
  <span class="sr-only">Steam</span>
  <i class="fab fa-steam"></i>
</a>
```

### Team Member Social Icons
```html
<a href="https://linkedin.com/..." target="_blank" rel="noopener" class="social-icon" data-platform="linkedin">
  <i class="fab fa-linkedin"></i>
</a>
```

## 🛠️ Adding New Platforms

### 1. Add to SCSS
Add the platform to `_sass/components/_social-icons.scss`:

```scss
&[data-platform="newplatform"]:hover {
  background: #platform-color;
  color: #fff;
}
```

### 2. Add to Data Files
Update `_data/team.yml` for team members:

```yaml
social_icons:
  newplatform: "<i class=\"fab fa-newplatform\"></i>"
```

### 3. Add to Templates
Update footer or team templates with the new platform.

## 🎨 Styling Features

### Default State
- Circular background with transparency
- White icons
- Subtle border
- Backdrop blur effect

### Hover Effects
- Platform-specific brand colors
- Scale and lift animation
- Enhanced shadow
- Smooth transitions

### Sizes
- **Footer**: 48px × 48px
- **Team**: 36px × 36px
- **Custom**: Adjustable via CSS

## 🔧 Customization

### Colors
All platform colors are defined in the SCSS file and can be easily modified:

```scss
&[data-platform="steam"]:hover {
  background: #1b2838; // Steam's brand color
  color: #fff;
}
```

### Animations
Hover animations include:
- `translateY(-2px)` - Lift effect
- `scale(1.05)` - Slight enlargement
- `box-shadow` - Enhanced shadow

### Accessibility
- Screen reader support with `sr-only` spans
- Proper `target="_blank"` and `rel="noopener"`
- High contrast colors

## 📱 Responsive Design

Icons are fully responsive and work on all screen sizes:
- Flexbox layout for proper spacing
- Consistent sizing across devices
- Touch-friendly tap targets

## 🚀 Performance

- Font Awesome loaded via CDN for optimal performance
- Minimal CSS footprint
- Efficient hover states
- No JavaScript required 