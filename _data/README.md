# Data Structure Documentation

This folder contains all the content data for the website sections, separated from the presentation logic. This makes content management much easier and allows for easy updates without touching HTML files.

## ✅ All Sections Now Data-Driven

All section templates have been updated to use the data structure:

- ✅ **About section** - Uses `site.data.about`
- ✅ **Hero section** - Uses `site.data.hero`
- ✅ **Play section** - Uses `site.data.play`
- ✅ **Team section** - Uses `site.data.team`
- ✅ **Contact section** - Uses `site.data.contact`
- ✅ **Showcase section** - Uses `site.data.showcase`
- ✅ **Announcements section** - Uses `site.data.announcements`

## File Structure

### `about.yml`

Contains the About section content:

- **title**: Section title
- **subtitle**: Optional subtitle
- **heading**: Main heading within the section
- **description**: Array of paragraphs
- **features**: Array of feature items with icons and text
- **image**: Image configuration (src, alt)

### `hero.yml`

Contains the Hero section content:

- **title**: Object with line and main title parts
- **tagline**: Hero tagline text
- **cta**: Call-to-action button (text, link)
- **scroll_indicator**: Scroll indicator text
- **bubbles**: Array of bubble animation classes

### `play.yml`

Contains the Play/Download section content:

- **title**: Section title
- **subtitle**: Section subtitle
- **platforms**: Array of platform objects with:
  - platform name
  - icon
  - subtitle
  - link
  - data_platform attribute

### `team.yml`

Contains the Team section content:

- **title**: Section title
- **intro**: Team introduction (heading, description, image)
- **social_icons**: Social media icon mappings

### `contact.yml`

Contains the Contact section content:

- **title**: Section title
- **contact_info**: Contact information items
- **press_info**: Press and media information

### `showcase.yml`

Contains the Showcase section content:

- **title**: Section title
- **subtitle**: Section subtitle
- **items**: Array of showcase items with:
  - title
  - description
  - image configuration
  - reverse layout flag

### `announcements.yml`

Contains the Announcements section configuration:

- **title**: Section title
- **subtitle**: Section subtitle
- **limit**: Number of announcements to display
- **cta**: Call-to-action button

## Usage

In your HTML templates, access the data like this:

```liquid
{% assign about = site.data.about %}
<h2>{{ about.title }}</h2>
```

## Benefits

1. **Easy Content Updates**: Change content without touching HTML
2. **Non-Technical Editing**: Content editors can update YAML files
3. **Version Control**: Content changes are tracked separately
4. **Reusability**: Data can be used across multiple templates
5. **Localization Ready**: Easy to create multiple language versions

## Content Management Workflow

1. **Update Content**: Edit the appropriate `.yml` file in `_data/`
2. **Save File**: Changes are automatically reflected
3. **Build Site**: Run `bundle exec jekyll build` to generate updated site
4. **Preview**: View changes in your local development server

## Image Management

- **Team Photos**: `assets/images/team/`
- **Game Screenshots**: `assets/images/`
- **Announcement Images**: `assets/images/announcements/`
- **Placeholder Images**: Currently using placeholder.com for missing assets

See `assets/images/README.md` for detailed image requirements and guidelines.
