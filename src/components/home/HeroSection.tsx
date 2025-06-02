import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-[600px] md:h-[700px] relative overflow-hidden bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 opacity-20">
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
              <Link to="/contact">
                <Button size="lg" className="bg-brand-teal hover:bg-teal-600 text-white font-semibold w-full sm:w-auto">
                  Get a Free Quote
                  <ChevronRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Check className="text-brand-teal mr-1" size={16} />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Check className="text-brand-teal mr-1" size={16} />
                <span className="text-sm">10+ Years Experience</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Check className="text-brand-teal mr-1" size={16} />
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