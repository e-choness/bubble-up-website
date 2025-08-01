# Image Assets

This directory contains all image assets for the website.

## Directory Structure

```
assets/images/
├── team/
│   └── team-photo.png          # Team group photo
├── announcements/              # Announcement images
└── README.md                   # This file
```

## Image Requirements

### Team Photos

- **Format**: PNG or JPG
- **Size**: Recommended 400x400px for avatars, 800x600px for group photos
- **Location**: `assets/images/team/`

### Game Screenshots & GIFs

- **Format**: PNG, JPG, or GIF for animations
- **Size**: Recommended 600x400px for showcase items
- **Location**: `assets/images/` (root of images directory)

### Announcement Images

- **Format**: PNG or JPG
- **Size**: Recommended 400x300px
- **Location**: `assets/images/announcements/`

## Current Placeholder Images

The following sections are using placeholder images until real assets are available:

1. **About Section**: Gameplay screenshot
2. **Showcase Section**: Three gameplay GIFs
   - Bubble Physics
   - Power-ups
   - Level Variety

## How to Replace Placeholders

1. Add your image files to the appropriate directory
2. Update the corresponding data file in `_data/`:
   ```yaml
   image:
     src: "assets/images/your-image.png"
     alt: "Your image description"
   ```

## Image Optimization

For best performance:

- Compress images before uploading
- Use appropriate formats (PNG for graphics, JPG for photos)
- Consider using WebP format for modern browsers
- Keep file sizes under 500KB when possible
