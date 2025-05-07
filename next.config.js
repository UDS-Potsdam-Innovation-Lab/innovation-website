/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  // Use a relative path prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
  reactStrictMode: true,
  images: {
    // For static export on GitHub Pages
    unoptimized: true,
    // Some basic optimization settings
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // This is important for GitHub Pages to properly handle static assets
  trailingSlash: true,
}

module.exports = nextConfig 