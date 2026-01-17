import React, { useState, useEffect, useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { X } from 'lucide-react';

interface GalleryProps {
  folder: string;
}

const Gallery: React.FC<GalleryProps> = ({ folder }) => {
  const images = useMemo(() => {
    // Normalize folder to last segment, e.g. 'basement-finishing'
    const name = folder.replace(/^\/+|\/+$/g, '').split('/').pop()!;

    // Glob all supported images under public/images
    const modules = import.meta.glob<{ default: string }>(
      '/public/images/**/*.{jpg,jpeg,webp}',
      { eager: true }
    );

    return Object.entries(modules)
      .filter(([filePath]) => filePath.includes(`/${name}/`))
      .map(([filePath]) => {
        const filename = filePath.split('/').pop()!;
        // Construct URL to public folder
        const src = `/images/${name}/${filename}`;
        const alt = name.replace('-', ' ');
        return { src, alt };
      });
  }, [folder]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImages, setPrevImages] = useState(images);

  if (images !== prevImages) {
    setPrevImages(images);
    setCurrentImage(0);
  }

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);



  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
      else if (e.key === 'ArrowLeft') setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <section id="gallery" className="container-custom">
      {images.length === 0 ? (
        <p className="text-center text-gray-500">No gallery images available.</p>
      ) : (
        <>
          {/* Carousel View */}
          <div className="mt-12">
            <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {images.map((image, idx) => (
                  <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="cursor-pointer" onClick={() => openLightbox(idx)}>
                      <Card>
                        <CardContent className="p-0">
                          <div className="aspect-video overflow-hidden">
                            <img src={image.src} alt={image.alt + ' ' + idx} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <button className="absolute top-6 right-6 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70" onClick={closeLightbox}>
                <X size={24} />
              </button>
              <div className="relative w-full max-w-6xl px-4">
                <img src={images[currentImage].src} alt={images[currentImage].alt} className="w-full h-auto max-h-[80vh] object-contain" />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
                  <button className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70" onClick={e => { e.stopPropagation(); setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1)); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                  </button>
                  <button className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70" onClick={e => { e.stopPropagation(); setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1)); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Gallery;
