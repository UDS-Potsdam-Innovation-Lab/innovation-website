import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

// Types for the custom image component
export interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  webpSrc?: string;
  sizes?: string;
}

/**
 * ResponsiveImage component that extends Next.js Image component with:
 * - Support for auto-resized images based on viewport size
 * - WebP fallback support
 * - Default sizing behavior
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  fallbackSrc,
  webpSrc,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  alt,
  width,
  height,
  className = '',
  ...props
}) => {
  // Track if the component is mounted to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract file info for responsive image handling
  const extension = src.split('.').pop()?.toLowerCase() || '';
  const basePath = src.substring(0, src.lastIndexOf('.'));
  
  // Check if we have a resized version
  const useSrcSet = isMounted && basePath && ['jpg', 'jpeg', 'png', 'webp'].includes(extension);
  
  // Check for WebP support
  const supportsWebP = isMounted && typeof window !== 'undefined' && 
    window.document && window.document.createElement && 
    (window.document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0);
  
  // Use WebP if supported and available
  const finalSrc = supportsWebP && webpSrc ? webpSrc : (fallbackSrc || src);
  
  // Build srcSet for different sizes - if we're in production mode
  const srcSizes = [400, 800, 1200, 1600];
  
  // In development, use next/image standard behavior
  // In production, use our resized images if they exist
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Generate srcSet for different sizes if appropriate
  let srcSet = undefined;
  if (isProduction && useSrcSet) {
    try {
      // Check if we have resized versions
      const sizesArray = [400, 800, 1200, 1600]; // Same as in resize-images.js
      srcSet = sizesArray
        .map(size => {
          const resizedPath = `${basePath}_${size}w${extension}`;
          return `${resizedPath} ${size}w`;
        })
        .join(', ');
    } catch (error) {
      console.error('Error generating srcSet:', error);
    }
  }
  
  return (
    <Image
      src={finalSrc}
      alt={alt || ''}
      width={width || 800}
      height={height || 600}
      className={`${className}`}
      sizes={sizes}
      quality={90}
      {...(srcSet ? { srcSet } : {})}
      {...props}
    />
  );
};

export default ResponsiveImage;