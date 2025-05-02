/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // enables static exports
  basePath: '/innovation-website', // replace with your repository name
  reactStrictMode: true,
  images: {
    unoptimized: true, // required for static export
  },
}

module.exports = nextConfig 