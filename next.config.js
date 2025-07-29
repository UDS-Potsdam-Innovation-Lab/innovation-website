// ✅ NO "i18n" field anywhere
const fs = require('fs');
const path = require('path');

let imageSizes = [400, 800, 1200, 1600];
try {
  const sizesPath = path.join(__dirname, 'public', 'image-sizes.json');
  if (fs.existsSync(sizesPath)) {
    const data = JSON.parse(fs.readFileSync(sizesPath, 'utf8'));
    if (Array.isArray(data.sizes) && data.sizes.length > 0) {
      imageSizes = data.sizes;
    }
  }
} catch (error) {
  console.warn('Error loading image sizes:', error.message);
}

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: './',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes,
  },
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
