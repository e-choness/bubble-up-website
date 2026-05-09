# Bubble UP! Website

A playful, animated Website designed for the Bubble UP! game website. Features modern animations, responsive design, and a bubbly aesthetic that brings joy to visitors.

## 🚀 Features

- **Modern Design**: Clean, playful interface with bubble animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **GSAP Animations**: Smooth, professional animations throughout
- **Jekyll Collections**: Easy content management for announcements and team
- **Multi-platform Downloads**: Support for all major platforms
- **Social Integration**: Complete social media integration
- **SEO Optimized**: Built-in SEO best practices
- **Performance Focused**: Optimized for fast loading times

## 🛠️ Installation

### Docker (recommended)

1. Clone this repository:

```bash
git clone https://github.com/e-choness/bubble-up-website.git
cd bubble-up-website
```

2. Build and start the container:

```bash
docker compose up -d
```

3. Visit `http://localhost:4000`

The site auto-regenerates when you edit files. To stop:

```bash
docker compose down
```

### Local Ruby

1. Clone this repository:

```bash
git clone https://github.com/e-choness/bubble-up-website.git
cd bubble-up-website
```

2. Install dependencies:

```bash
bundle install
```

3. Build and serve the site:

```bash
bundle exec jekyll serve --livereload
```

4. Visit `http://localhost:4000`

## 📁 Structure

```bash
bubble-up-website/
├── _config.yml          # Site configuration
├── _config_dev.yml      # Development URL override (Docker)
├── _data/               # Data files
├── _includes/           # Reusable components
│   └── sections/        # Page sections
├── _layouts/            # Page layouts
├── _sass/               # Sass stylesheets
├── _announcements/      # Game announcements
├── _team/               # Team member profiles
├── assets/
│   ├── css/
│   ├── js/
│   │   ├── main.js      # Main functionality
│   │   ├── animations.js # GSAP animations
│   │   ├── dark-mode.js  # Dark mode toggle
│   │   └── navbar.js     # Navigation
│   └── images/
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## ⚙️ Configuration

### Site Settings

Edit `_config.yml` to customize:

- Site title and description
- Social media links
- Download links for different platforms
- Contact information

### Colors and Styling

Update `_sass/` files to customize:

- Color palette
- Typography
- Spacing and layout
- Animation timings

### Content Management

#### Announcements

Create new announcement files in `_announcements/`:

```yaml
---
title: "Your Announcement Title"
date: 2024-01-15
image: "/assets/images/announcements/your-image.jpg"
excerpt: "Brief description of the announcement"
---
Your announcement content here...
```

#### Team Members

Add team members in `_team/`:

```yaml
---
name: "Team Member Name"
title: "Their Role"
avatar: "/assets/images/team/avatar.jpg"
social:
  linkedin: "https://linkedin.com/in/username"
  twitter: "https://twitter.com/username"
---
Team member bio...
```

## 🎨 Customization

### Adding New Sections

1. Create a new section file in `_includes/sections/`
2. Add corresponding SCSS in `_sass/`
3. Include the section in your page layout
4. Add animations in `assets/js/animations.js`

### Modifying Animations

Edit `assets/js/animations.js` to:

- Adjust animation timings
- Add new scroll triggers
- Customize hover effects
- Create new bubble effects

### Styling Changes

Update Sass files in `_sass/`:

- Variables for colors and fonts
- Component styles
- Section layouts
- Base global styles

## 📱 Responsive Design

The theme is fully responsive with breakpoints:

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `1024px+`

## 🔧 Development

### Prerequisites

- **Docker** (recommended) — no other dependencies needed
- Ruby 3.2+ (for local development without Docker)
- Jekyll 4.3+

### Local Development

```bash
# Docker (recommended)
docker compose up -d

# Or local Ruby
bundle install
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

## 🚀 Deployment

### GitHub Pages

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`

### Custom Server

Build the site and upload the `_site` directory:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## 🎮 Game Integration

### Download Links

Update download URLs in `_config.yml`:

```yaml
download_links:
  android: "your-play-store-url"
  ios: "your-app-store-url"
  windows: "your-windows-download"
  mac: "your-mac-download"
  linux: "your-linux-download"
```

### Analytics

Add your analytics tracking code to `_includes/head.html` or use Jekyll plugins.

## 📄 License

This theme is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:

- Create an issue on GitHub
- Check the documentation
- Contact the development team

## 🙏 Credits

- **GSAP**: Animation library
- **Jekyll**: Static site generator
- **Sass**: CSS preprocessing
- **Google Fonts**: Typography (Poppins)

---

Built with ❤️ for the Bubble UP! community
