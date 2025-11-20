# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal portfolio website hosted on GitHub Pages. The site is built as a static website with modern web technologies and showcases projects, contains various educational apps, and includes specialized tools like mock exams.

## Architecture

### Core Structure
- **Static HTML Site**: Main entry point is `index.html` with bundled JavaScript (`assets/index-ChDW0BPW.js`) and CSS (`assets/index-BXFwmTMq.css`)
- **Multi-page Structure**: Individual HTML files for different sections (about, projects, contact, etc.)
- **Asset Management**: Centralized assets directory containing CSS, fonts, images, and project resources

### Key Pages
- `index.html` - Main landing page (React-based with bundled assets)
- `projects.html` - Project showcase with Apple-inspired design system
- `about.html` - Personal information page with dynamic age calculator
- `mock.html` - Comprehensive mock exam platform for SIIT students
- `contact.html` - Contact information and social links

### Specialized Features
- **Mock Exam System**: Located in `mock.html` with dark/light mode support and extensive CSS variables
- **3D Assets**: USDZ files in `src/` directory for AR/3D content (`hiherb-three.usdz`, `hiherb-two.usdz`, `tube.usdz`)
- **Project Applications**: Individual project directories like `xamio-proj/`, `color-master/`, `gts231-law-app/`

## Design System

### CSS Architecture
- **CSS Variables**: Extensive use of CSS custom properties for theming (light/dark mode)
- **Apple-inspired Design**: Clean, minimal aesthetic with careful typography and spacing
- **Responsive Grid Layouts**: Mobile-first approach with CSS Grid and Flexbox
- **Color Scheme**: Automatic dark mode detection with `prefers-color-scheme: dark`

### Typography
- Primary font: `-apple-system, BlinkMacSystemFont, 'SF Pro', 'Helvetica Neue', sans-serif`
- Consistent font weights and sizes following Apple's design guidelines

## Development Workflow

### File Organization
- Static assets in `assets/` directory with subdirectories for different content types
- Project-specific assets in `assets/project/`
- Source files and development assets in `src/`
- Individual project directories contain self-contained HTML applications

### GitHub Pages Deployment
- Repository is configured for GitHub Pages hosting
- Main branch serves as the deployment source
- Static files are served directly without build process for most content
- Bundled assets suggest a build process for the main React application

### Asset Management
- Images optimized for web delivery
- SVG icons for scalability
- USDZ files for 3D/AR content
- Font files stored locally for performance

## Common Tasks

When working with this codebase:
- Maintain the existing Apple-inspired design language
- Use CSS variables for consistent theming
- Ensure responsive design across all new pages
- Test dark mode compatibility for any new features
- Keep individual project pages self-contained
- Preserve the clean, minimal aesthetic throughout

## Notes

- No package.json or build configuration files suggest minimal tooling for most pages
- The main index.html appears to use a bundled React application
- Educational focus with multiple learning-oriented projects and apps
- Strong emphasis on accessibility and clean UX design