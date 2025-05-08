# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a landing page for German UDS Innovation GmbH, built with Next.js. It's a responsive website with internationalization support (English and German), featuring various sections that showcase the company's digital innovation ecosystem.

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Languages**: TypeScript, JavaScript
- **Internationalization**: Custom i18n implementation with React Context
- **Image Handling**: Custom responsive image processing with various sizes

## Key Commands

### Development

```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

### Building & Deployment

```bash
# Build for production (includes image optimization and processing)
npm run build
# or
pnpm build

# Start production server (after build)
npm run start
# or
pnpm start

# Lint the codebase
npm run lint
# or
pnpm lint
```

### Image Processing

```bash
# Run image optimization script
npm run optimize-images
# or
pnpm optimize-images

# Run image resizing for responsive versions
npm run resize-images
# or
pnpm resize-images
```

### Localization

```bash
# Create locale directories for i18n image support
npm run create-locale-dirs
# or
pnpm create-locale-dirs
```

## Architecture

### Internationalization (i18n)

The project uses a custom internationalization setup:

1. **Contexts**:
   - `LocaleContext.tsx`: Provides locale detection, switching, and the `t()` translation function
   - `TranslationContext.tsx`: Provides access to translations using Next.js router locale

2. **Translations**:
   - Stored in `public/locales/[lang]/common.json`
   - English (`en`) is the default language
   - German (`de`) is also supported

3. **Localized Images**:
   - Custom `ResponsiveImage` component in `components/responsive-image.tsx`
   - Automatically uses locale-specific images when available
   - Image paths for non-default locales follow pattern: `/images/[locale]/path/to/image.png`

### Responsive Images

The project includes a custom responsive image system:

1. **Image Processing Pipeline**:
   - `optimize-images.js`: Basic optimization for all images
   - `resize-images.js`: Creates different size variants (400w, 800w, 1200w, 1600w)
   - `next.config.js`: Configures Next.js image handling

2. **ResponsiveImage Component**:
   - Extends Next.js Image component with responsive and i18n features
   - Automatically selects appropriately sized images based on viewport
   - Supports WebP format when browser compatible
   - Handles localization with fallback to default locale

### Component Structure

The site is built using modular components:

- Navigation bar with section highlighting
- Hero section
- Various content sections (ecosystem, portfolio, structure, business, etc.)
- Responsive footer
- Each component is designed to be responsive across all device sizes

## Workflow Notes

1. When adding new images:
   - Place images in the `/images` directory
   - Run `npm run optimize-images` and `npm run resize-images` to process them
   - For localized images, add them to `/public/images/[locale]/` directories

2. When adding new translations:
   - Edit the relevant file in `public/locales/[lang]/common.json`
   - Access translations in components using the `useLocale` hook and `t()` function

3. When adding new locales:
   - Add the locale code to the `locales` array in `next-i18next.config.js`
   - Add the locale code in `LocaleContext.tsx`
   - Create a translation file in `public/locales/[new-locale]/common.json`
   - Run `npm run create-locale-dirs` to create locale-specific image directories