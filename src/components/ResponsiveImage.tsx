
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  caption?: string;
  priority?: boolean;
  sizes?: string;
}

const ResponsiveImage: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  caption,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}) => {
  // Generate srcset with different sizes and formats
  const generateSrcSet = () => {
    // Check if the image is from Unsplash, which already provides responsive images
    if (src.includes('unsplash.com')) {
      // Use Unsplash's built-in sizing parameters
      const baseSrc = src.split('?')[0]; // Remove any existing query params
      return {
        webp: `${baseSrc}?q=80&fm=webp&w=320 320w, ${baseSrc}?q=80&fm=webp&w=640 640w, ${baseSrc}?q=80&fm=webp&w=1280 1280w, ${baseSrc}?q=80&fm=webp&w=1920 1920w`,
        original: `${baseSrc}?q=80&w=320 320w, ${baseSrc}?q=80&w=640 640w, ${baseSrc}?q=80&w=1280 1280w, ${baseSrc}?q=80&w=1920 1920w`
      };
    }

    // For local images, handle with vite-imagetools
    // Note: This will only work with import statements in actual code
    // For runtime paths, we can add basic responsive sizing
    const imgSrc = src.startsWith('/') ? src : `/${src}`;
    const imgExt = imgSrc.split('.').pop() || 'jpg';
    const basePath = imgSrc.substring(0, imgSrc.lastIndexOf('.'));

    return {
      webp: `${basePath}-320.webp 320w, ${basePath}-640.webp 640w, ${basePath}-1280.webp 1280w, ${basePath}-1920.webp 1920w`,
      original: `${basePath}-320.${imgExt} 320w, ${basePath}-640.${imgExt} 640w, ${basePath}-1280.${imgExt} 1280w, ${basePath}-1920.${imgExt} 1920w`
    };
  };

  const srcSet = generateSrcSet();

  return (
    <figure className={`${className}`}>
      <picture>
        <source type="image/webp" srcSet={srcSet.webp} sizes={sizes} />
        <source type={`image/${src.split('.').pop()}`} srcSet={srcSet.original} sizes={sizes} />
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  );
};

export default ResponsiveImage;
