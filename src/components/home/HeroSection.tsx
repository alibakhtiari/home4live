
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-full md:h-[700px] relative overflow-hidden pb-8 pt-24 lg:py-8">
        {/* Hero Background Image - LCP optimized */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/home-renovation.webp"
            alt="Professional home renovation showcase - beautifully transformed living space"
            priority={true}
            className="absolute inset-0"
            objectFit="cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        <div className="relative h-full container-custom flex flex-col justify-center z-20">
          <div className="max-w-2xl text-white animate-fade-in">
            <div className="flex items-center mb-3">
              <Star className="text-brand-teal mr-2" size={24} fill="#33cb98" />
              <span className="text-brand-teal font-semibold tracking-wider">TRUSTED RENOVATION EXPERTS</span>
            </div>
            <h1 className="text-5xl text-white mb-6">Transform Your Home with Expert Renovation Services</h1>
            <p className="text-xl mb-8 text-gray-100">
              Professional home renovation and basement underpinning services in Toronto and the GTA.
              We turn your vision into reality with quality craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" aria-label="Get a free quote for your home renovation project">
                <Button 
                  size="lg" 
                  className="bg-brand-teal hover:bg-teal-600 text-white font-semibold w-full sm:w-auto focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
                  aria-label="Get a Free Quote"
                >
                  Get a Free Quote
                  <ChevronRight className="ml-2" size={16} aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/services" aria-label="View our renovation services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black w-full sm:w-auto focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label="Our Services"
                >
                  Our Services
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Check className="text-brand-teal mr-1" size={16} aria-hidden="true" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Check className="text-brand-teal mr-1" size={16} aria-hidden="true" />
                <span className="text-sm">10+ Years Experience</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Check className="text-brand-teal mr-1" size={16} aria-hidden="true" />
                <span className="text-sm">Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
