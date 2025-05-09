/** @type {import('next').NextConfig} */

// Load image sizes if available
let imageSizes = [400, 800, 1200, 1600];
try {
  const fs = require('fs');
  const path = require('path');
  const sizesPath = path.join(__dirname, 'public', 'image-sizes.json');
  
  if (fs.existsSync(sizesPath)) {
    const data = JSON.parse(fs.readFileSync(sizesPath, 'utf8'));
    if (data.sizes && Array.isArray(data.sizes) && data.sizes.length > 0) {
      imageSizes = data.sizes;
      console.log(`Using ${data.sizes.length} custom image sizes from manifest`);
    }
  }
} catch (error) {
  console.warn('Error loading image sizes:', error.message);
}

const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  // Use a relative path prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
  reactStrictMode: true,
  // Custom i18n solution instead of built-in i18n which doesn't work with static export
  // We'll handle localization in our components manually
  images: {
    unoptimized: false,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: imageSizes,
    path: '',
    domains: ['localhost'],
  },
  // This is important for GitHub Pages to properly handle static assets
  trailingSlash: true,
  // Enable webpack optimization when possible
  webpack(config) {
    return config;
  },
}

module.exports = nextConfig 