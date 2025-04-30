# German UDS Innovation Landing Page

A modern, responsive landing page for German UDS Innovation GmbH, showcasing their digital innovation ecosystem that connects academic excellence with entrepreneurial practice.

## Features

- Responsive design optimized for all device sizes
- Interactive UI with smooth scrolling and section highlighting
- TypeScript implementation for type safety
- Component-based architecture for maintainability
- Tailwind CSS for styling with custom design elements
- Distinctive bottom-right rounded corner design language

## Project Structure

The project is organized into modular components:

- `german-uds-landing.tsx` - Main container component
- `scroll-progress.tsx` - Scroll position indicator
- `navigation.tsx` - Header navigation with section highlighting
- `hero-section.tsx` - Main banner section
- `ecosystem-section.tsx` - Information about the digital ecosystem
- `portfolio-section.tsx` - Investment portfolio overview
- `structure-section.tsx` - Vertical participation structure
- `business-section.tsx` - Business model explanation
- `invest-section.tsx` - Investment opportunities
- `contact-section.tsx` - Contact form and information
- `footer-component.tsx` - Footer with links and newsletter signup

## Getting Started

### Prerequisites

- Node.js and npm
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   cd german-uds-innovation-landing
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the project:
   ```
   npm run build
   ```

4. Start the local server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:8000`

## Deployment

To deploy this website to a production server:

1. Build the project:
   ```
   npm run build
   ```

2. Upload the contents of the `dist` directory to your web server.

3. Configure your web server to serve the `index.html` file as the default document.

## Customization

### Colors

The primary color scheme uses orange and blue, which can be customized in the `tailwind.config.js` file or directly in the HTML file's `<script>` tag if using the CDN version.

### Content

Each component contains its own content that can be modified independently:

- Update text in each component file
- Replace placeholder images with actual company images
- Adjust layout and styling as needed

## Browser Support

The landing page is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.