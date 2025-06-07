
import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  objectFit = 'cover'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  // Generate responsive image URLs with proper sizing
  const generateResponsiveUrls = (baseSrc: string) => {
    // Check if it's an external URL
    if (baseSrc.startsWith('http')) {
      return {
        webp: baseSrc,
        fallback: baseSrc,
        srcSet: baseSrc
      };
    }

    // For local images, generate different sizes with proper responsive sizing
    const cleanSrc = baseSrc.startsWith('/') ? baseSrc.substring(1) : baseSrc;
    const pathParts = cleanSrc.split('.');
    const extension = pathParts.pop() || 'jpg';
    const basePath = pathParts.join('.');

    // Generate srcsets with appropriate sizes for better performance
    const webpSrcSet = `/${basePath}.webp?w=320 320w, /${basePath}.webp?w=640 640w, /${basePath}.webp?w=800 800w, /${basePath}.webp?w=1200 1200w`;
    const fallbackSrcSet = `/${basePath}.${extension}?w=320 320w, /${basePath}.${extension}?w=640 640w, /${basePath}.${extension}?w=800 800w, /${basePath}.${extension}?w=1200 1200w`;

    return {
      webp: `/${basePath}.webp`,
      fallback: `/${basePath}.${extension}`,
      webpSrcSet,
      fallbackSrcSet
    };
  };

  useEffect(() => {
    const urls = generateResponsiveUrls(src);
    setImageSrc(urls.fallback);

    // Preload critical images with proper cache headers
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = urls.webp;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, [src, priority]);

  const urls = generateResponsiveUrls(src);

  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={urls.webpSrcSet}
        sizes={sizes}
      />
      <source
        type={`image/${src.split('.').pop()}`}
        srcSet={urls.fallbackSrcSet}
        sizes={sizes}
      />
      <img
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : objectFit === 'none' ? 'object-none' : 'object-scale-down'} w-full h-full`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Fallback to original format if WebP fails
          setImageSrc(src);
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
