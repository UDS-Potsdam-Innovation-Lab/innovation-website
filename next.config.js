/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  // Use a relative path prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // Allow image optimization, even in export mode
    loader: 'akamai',
    path: '',
  },
  // This is important for GitHub Pages to properly handle static assets
  trailingSlash: true,
}

module.exports = nextConfig 