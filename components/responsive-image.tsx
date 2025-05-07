import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getLocalizedImagePath } from '../utils/localization';

// Types for the custom image component
export interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  webpSrc?: string;
  sizes?: string;
  localize?: boolean;
}

/**
 * ResponsiveImage component that extends Next.js Image component with:
 * - Support for auto-resized images based on viewport size
 * - WebP fallback support
 * - Default sizing behavior
 * - Locale-specific image support
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
  localize = true, // By default, try to use localized images
  ...props
}) => {
  // Track if the component is mounted to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { locale } = useRouter();
  
  // Set mounted state after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Try to use localized image path
  const localizedSrc = localize ? getLocalizedImagePath(src, locale) : src;
  
  // Extract file info for responsive image handling
  const extension = localizedSrc.split('.').pop()?.toLowerCase() || '';
  const basePath = localizedSrc.substring(0, localizedSrc.lastIndexOf('.'));
  
  // Check if we have a resized version
  const useSrcSet = isMounted && basePath && ['jpg', 'jpeg', 'png', 'webp'].includes(extension);
  
  // Check for WebP support
  const supportsWebP = isMounted && typeof window !== 'undefined' && 
    window.document && window.document.createElement && 
    (window.document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0);
  
  // Use WebP if supported and available
  const finalSrc = supportsWebP && webpSrc 
    ? (localize ? getLocalizedImagePath(webpSrc, locale) : webpSrc) 
    : (fallbackSrc && imageError ? fallbackSrc : localizedSrc);
  
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
  
  // Handle image loading error
  const handleError = () => {
    setImageError(true);
    
    // If using localized image and it fails, try to fall back to default locale (en)
    if (localize && locale !== 'en') {
      // Already tried localized version, now try the original
      console.warn(`Localized image not found: ${localizedSrc}, falling back to default`);
    }
  };
  
  return (
    <Image
      src={finalSrc}
      alt={alt || ''}
      width={width || 800}
      height={height || 600}
      className={`${className}`}
      sizes={sizes}
      quality={90}
      onError={handleError}
      {...(srcSet ? { srcSet } : {})}
      {...props}
    />
  );
};

export default ResponsiveImage;