import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface EnhancedImageProps extends Omit<ImageProps, 'onClick'> {
  breathingEffect?: boolean;
}

const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  alt,
  className = '',
  breathingEffect = true,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <>
      <div 
        className={`relative cursor-pointer ${breathingEffect ? 'hover:animate-breathing' : ''}`}
        onClick={handleClick}
      >
        <Image
          src={src}
          alt={alt}
          className={`${className} transition-all duration-300`}
          {...props}
        />
      </div>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              className="rounded-lg shadow-2xl"
              width={1200}
              height={800}
              style={{ objectFit: 'contain' }}
              {...props}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              onClick={handleClose}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedImage; 