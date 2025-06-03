
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  title?: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({
  title = "Our Recent Work",
  subtitle = "Browse through our portfolio of successful projects",
  images
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <section className="section" id="gallery">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* {image.caption && (
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-600">{image.caption}</p>
                    </div>
                  )} */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Carousel View */}
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                  <div 
                    className="cursor-pointer" 
                    onClick={() => openLightbox(index)}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
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
            <button 
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-6xl px-4">
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {images[currentImage].caption && (
                <div className="text-center mt-4">
                  <p className="text-white">{images[currentImage].caption}</p>
                </div>
              )}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
                <button 
                  className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
