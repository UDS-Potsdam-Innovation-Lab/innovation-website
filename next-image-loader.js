// This is a custom image loader function for Next.js
// It helps with optimizing images while maintaining compatibility with static export

module.exports = function customImageLoader({ src, width, quality }) {
  // For local images (those starting with a slash)
  if (src.startsWith('/')) {
    // Remove the leading slash to match the structure in the output folder
    const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
    return normalizedSrc;
  }
  
  // For external images, return as is
  return src;
};