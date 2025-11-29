# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VOTIVA is a static jewelry website showcasing sensual pendant designs (Siren, Oculus, Eros) with customization options. The site features a modern, brutalist aesthetic with dark themes and artistic imagery.

## Architecture

This is a vanilla HTML/CSS/JavaScript website with no build process or package management. The architecture is straightforward:

### File Structure
- **`index.html`** - Main landing page with product collection, customization options, and contact form
- **`lips.html`, `eyes.html`, `boobs.html`** - Individual product detail pages for Siren, Oculus, and Eros pendants
- **`our-story.html`** - Brand narrative page with sketch imagery
- **`style.css`** - Main stylesheet with dark brutalist design system
- **`our-story.css`** - Additional styles specific to the story page
- **`product.css`** - Product page specific styles
- **`script.js`** - Vanilla JavaScript for navigation, smooth scrolling, and form handling

### Asset Organization
- **`Assets/Fonts/`** - Custom Army font files (ARMYD___.TTF, ARMYDI__.TTF)
- **`Assets/Product Photos/`** - Organized by product type (Boobs/, Eyes/, Lips/) with concrete and silver variants
- **`Assets/Gem Photos/`** - Gemstone images for customization (Black, Blue, Green, Purple, Red, White)
- **`Assets/Piercings/`** - Piercing options (Bar, Hoop, Horseshoe)
- **`Assets/Logos/`** - Brand logo files

## Development Commands

No build, lint, or test commands exist - this is a static website. For development:

```bash
# Open in browser or use live server
open index.html

# For local development server (if Python available)
python3 -m http.server 8000

# For Node.js live server (if available)
npx live-server
```

## Design System

### Typography
- Primary font: 'Army' (custom font) for logos and headers
- Body font: 'Helvetica Neue', 'Arial', sans-serif
- Dark theme with #0a0a0a background and #fafafa text

### Color Palette
- Background: #0a0a0a (dark)
- Text: #fafafa (light)
- Accent: Concrete textures and metallic silver tones

### Key Components
- **Navbar**: Fixed navigation with scroll-based transparency
- **Hero Section**: Large logo with tagline "Adorn the form, design the self"
- **Product Grid**: Hover effects showing silver variants
- **Gem Selection**: Interactive grid with tooltips for symbolic meanings
- **Video Integration**: Autoplay background video in about section

## Content Structure

### Products
Each product (Siren/Oculus/Eros) has:
- Concrete texture variant (default state)
- Silver pendant variant (hover state)
- Individual detail page with dimensions and customization
- $250 price point

### Customization System
- **Gemstones**: 6 colors with symbolic meanings (Black=mystery, Sapphire=wisdom, etc.)
- **Piercings**: 3 types (Bar, Hoop, Horseshoe)
- Tooltip system for gemstone meanings

## Technical Notes

- Pure vanilla JavaScript - no frameworks or libraries
- Responsive design using CSS Grid and Flexbox
- Video elements with autoplay/loop/muted attributes
- Form submission uses preventDefault with alert notification
- Smooth scrolling implementation for internal navigation
- No backend - contact form currently shows alert only

## File Naming Conventions

- HTML files: lowercase with hyphens (our-story.html)
- Asset folders: PascalCase (Product Photos, Gem Photos)
- Image files: Mixed case descriptive names
- CSS classes: kebab-case (.product-item, .gems-grid)