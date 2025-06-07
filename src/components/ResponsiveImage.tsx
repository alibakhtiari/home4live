import React from 'react';

/**
 * A component that renders a responsive `<img>` tag using vite-imagetools.
 * It generates a `srcset` of various image widths, all in WebP format.
 *
 * @param {object} props
 * @param {string} props.src The imported image metadata from vite-imagetools.
 * @param {string} props.alt The alternative text for the image.
 * @param {string} [props.sizes] The `sizes` attribute for the img tag.
 * @param {string} [props.className] Optional CSS class for styling.
 * @param {'lazy' | 'eager'} [props.loading] The loading attribute for the img tag.
 */
const ResponsiveImage = ({ src, alt, sizes, className, loading = 'lazy' }) => {
  // `src` here is not a string, but the object provided by vite-imagetools
  // which contains `src` and `srcset` properties.

  if (!src || !src.srcset) {
    console.error('ResponsiveImage requires an image imported with vite-imagetools', { src });
    return null;
  }

  return (
    <img
      className={className}
      // The `srcset` is a string of image URLs and their widths,
      // e.g., "image-480.webp 480w, image-800.webp 800w, ..."
      srcSet={src.srcset}
      // The `src` is a fallback, typically the smallest image in the set.
      src={src.src}
      // The `sizes` attribute is crucial for performance. It tells the browser
      // how much space the image will take up at different viewport sizes,
      // so it can download the right image from the srcset even sooner.
      sizes={sizes || '(max-width: 800px) 100vw, 800px'}
      alt={alt}
      // Lazy loading is a best practice for images below the fold.
      loading={loading}
      // Helps the browser decode the image off the main thread.
      decoding="async"
    />
  );
};

export default ResponsiveImage;