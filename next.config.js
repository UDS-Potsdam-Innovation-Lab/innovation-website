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
  output: 'export',
  basePath: '',
  // Use a relative path prefix for GitHub Pages
  assetPrefix: '.',
  reactStrictMode: true,
  // Custom i18n solution instead of built-in i18n which doesn't work with static export
  // We'll handle localization in our components manually
  images: {
    unoptimized: true, // Set to true for static export
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: imageSizes,
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
