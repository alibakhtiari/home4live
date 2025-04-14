
/**
 * Utility functions for image optimization and handling
 */

export const getOptimizedImagePath = (imagePath: string, size: 'small' | 'medium' | 'large' = 'medium'): string => {
  // Check if image path is external (starts with http)
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Remove leading slash if present for consistency
  const path = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  
  // If it's already optimized, return as is
  if (path.includes('-optimized')) {
    return `/${path}`;
  }

  // For local images, add size suffix
  const extension = path.split('.').pop() || 'jpg';
  const basePath = path.substring(0, path.lastIndexOf('.'));
  
  // Define sizes
  const sizes = {
    small: '320',
    medium: '640',
    large: '1280'
  };
  
  // Return optimized path
  return `/${basePath}-optimized-${sizes[size]}.${extension}`;
};

/**
 * Generates a responsive srcSet for an image
 * @param imagePath Base image path
 * @returns Object with srcset strings for different formats
 */
export const generateSrcSet = (imagePath: string): { webp: string; original: string } => {
  // Check if the image is from external source
  if (imagePath.startsWith('http')) {
    // For external images, we can't optimize them, so return as is
    return {
      webp: imagePath,
      original: imagePath
    };
  }

  // Remove leading slash if present
  const path = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  const extension = path.split('.').pop() || 'jpg';
  const basePath = path.substring(0, path.lastIndexOf('.'));
  
  return {
    webp: `/${basePath}-320.webp 320w, /${basePath}-640.webp 640w, /${basePath}-1280.webp 1280w`,
    original: `/${basePath}-320.${extension} 320w, /${basePath}-640.${extension} 640w, /${basePath}-1280.${extension} 1280w`
  };
};

/**
 * Preloads critical images to improve perceived performance
 * @param imagePaths Array of image paths to preload
 */
export const preloadCriticalImages = (imagePaths: string[]): void => {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path.startsWith('/') ? path : `/${path}`;
    document.head.appendChild(link);
  });
};
