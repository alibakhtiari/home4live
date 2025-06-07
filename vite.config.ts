import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from 'vite-imagetools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// This configuration separates image processing into two clear roles:
// 1. `vite-imagetools`: Handles images imported within your `src` folder.
//    This gives you component-level control to define exact sizes, formats,
//    and generate <picture> elements or srcsets.
//
// 2. `ViteImageOptimizer`: Handles all images in your `public` folder.
//    It automatically compresses and optimizes them during the build, without
//    needing any changes to your code. Ideal for static assets like favicons,
//    logos, or social media previews.

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),

    // A great tool for debugging in development
    mode === 'development' && componentTagger(),

    // ROLE 1: Flexible, on-demand processing for images imported from `src`
    imagetools(),

    // ROLE 2: Automatic optimization for all images in the `public` folder
    ViteImageOptimizer({
      // SVG optimization settings from your original config
      // Raster image optimization settings
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      // Changed from lossless to a quality setting for better file sizes
      webp: {
        quality: 80,
      },
      // Changed from lossless to a quality setting for better file sizes
      avif: {
        quality: 75,
      },
    }),

  ].filter(Boolean), // Cleans up any falsy values from conditional plugins
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));