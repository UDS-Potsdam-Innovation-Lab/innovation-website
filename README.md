# German UDS Innovation Landing Page

A modern, responsive landing page for German UDS Innovation GmbH, showcasing their digital innovation ecosystem that connects academic excellence with entrepreneurial practice.

## Features

- Responsive design optimized for all device sizes
- Interactive UI with smooth scrolling and section highlighting
- Internationalization (i18n) with English and German language support
- Locale-specific images and content
- TypeScript implementation for type safety
- Component-based architecture for maintainability
- Tailwind CSS for styling with custom design elements
- Responsive image handling with various screen sizes
- Distinctive bottom-right rounded corner design language

## Project Structure

The project is organized into modular components:

- `navigation.tsx` - Header navigation with section highlighting and language switching
- `scroll-progress.tsx` - Scroll position indicator
- `hero-section.tsx` - Main banner section
- `ecosystem-section.tsx` - Information about the digital ecosystem
- `portfolio-section.tsx` - Investment portfolio overview
- `structure-section.tsx` - Vertical participation structure
- `business-section.tsx` - Business model explanation
- `invest-section.tsx` - Investment opportunities
- `contact-section.tsx` - Contact form and information
- `footer-component.tsx` - Footer with links and newsletter signup
- `responsive-image.tsx` - Enhanced image component with responsive and i18n support

## Internationalization

The project uses Next.js built-in i18n support with a custom React Context for translations:

- Translations stored in `/public/locales/[lang]/common.json`
- Supported languages: English (en), German (de)
- Automatic language detection based on browser settings
- Language switcher in the navigation bar
- Support for locale-specific images
- URL-based locale switching (e.g., `/de/page`)

### Adding New Languages

1. Create a new locale directory in `public/locales/`
2. Copy and translate the `common.json` file from an existing locale
3. Add the new locale to the array in `next.config.js`
4. Import the translations in `contexts/TranslationContext.tsx`
5. For locale-specific images, run `npm run create-locale-dirs` and add localized images

Example: Adding Spanish (es) support:

```js
// In next.config.js
i18n: {
  locales: ['en', 'de', 'es'],
  defaultLocale: 'en',
  localeDetection: true,
},

// In contexts/TranslationContext.tsx
import en from '../public/locales/en/common.json';
import de from '../public/locales/de/common.json';
import es from '../public/locales/es/common.json'; // Add this

const translations = {
  en,
  de,
  es, // Add this
};
```

## Getting Started

### Prerequisites

- Node.js and npm/pnpm
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   cd innovation-website
   ```

2. Install dependencies:
   ```
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

To deploy this website to GitHub Pages:

1. Build the project:
   ```
   npm run build
   # or
   pnpm build
   ```

2. The static files will be generated in the `out` directory.

3. Upload the contents to your GitHub Pages repository.

## Customization

### Colors

The primary color scheme uses orange and blue, which can be customized in the `tailwind.config.js` file.

### Content

Each component contains its own content that can be modified independently:

- Update translations in the `public/locales/[lang]/common.json` files
- Replace placeholder images with actual company images (add locale-specific versions in `/public/images/[lang]/`)
- Adjust layout and styling as needed

### Localized Images

To add locale-specific images:

1. Run `npm run create-locale-dirs` to create the locale image directories
2. Place localized versions of images in the respective locale directories (e.g., `/public/images/de/logo.png`)
3. The website will automatically use the localized image when the respective locale is selected

## Browser Support

The landing page is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.