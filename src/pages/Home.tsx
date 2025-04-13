
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Building, 
  Droplets, 
  PaintBucket, 
  HardHat, 
  Hammer, 
  Check, 
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-brand-blue to-blue-900 h-[500px] md:h-[600px]">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative h-full container-custom flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-white mb-4">Transform Your Home with Expert Renovation Services</h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional home renovation and basement underpinning services in Toronto and the GTA
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
                    Get a Free Quote
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive renovation and construction services to transform your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Home Renovation"
              description="Complete home renovation services to modernize and enhance your living spaces."
              icon={<HomeIcon size={28} />}
              link="/services#home-renovation"
            />
            <ServiceCard 
              title="Basement Underpinning"
              description="Increase your basement ceiling height and create additional living space."
              icon={<Building size={28} />}
              link="/services#basement-underpinning"
            />
            <ServiceCard 
              title="Basement Waterproofing"
              description="Protect your home from water damage with our expert waterproofing solutions."
              icon={<Droplets size={28} />}
              link="/services#basement-waterproofing"
            />
            <ServiceCard 
              title="Basement Finishing"
              description="Convert your unfinished basement into a beautiful, functional living space."
              icon={<PaintBucket size={28} />}
              link="/services#basement-finishing"
            />
            <ServiceCard 
              title="House Additions"
              description="Expand your home with custom additions that blend seamlessly with your existing structure."
              icon={<HardHat size={28} />}
              link="/services#house-additions"
            />
            <ServiceCard 
              title="Demolition"
              description="Professional, safe and efficient demolition services for your renovation project."
              icon={<Hammer size={28} />}
              link="/services#demolition"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Why Choose Home4Live for Your Renovation Projects</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in construction and renovation, we deliver high-quality results that exceed expectations. Our team of professionals is committed to turning your vision into reality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-brand-orange" size={20} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Experienced Team</h3>
                    <p className="text-gray-600">Our skilled professionals have years of experience in renovations and construction.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-brand-orange" size={20} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Quality Workmanship</h3>
                    <p className="text-gray-600">We never compromise on quality, using only the finest materials and techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-brand-orange" size={20} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Timely Completion</h3>
                    <p className="text-gray-600">We complete projects on schedule without sacrificing quality or attention to detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-brand-orange" size={20} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
                    <p className="text-gray-600">Our client-focused approach ensures your complete satisfaction with the final result.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="default" className="bg-brand-blue hover:bg-blue-800">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-gray-500 italic">Image Placeholder - Construction team working on a home project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from homeowners who have trusted us with their renovation projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Michael Brown"
              location="Toronto, ON"
              text="Home4Live completely transformed our basement. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!"
              rating={5}
            />
            <TestimonialCard 
              name="Sarah Johnson"
              location="Richmond Hill, ON"
              text="We hired Home4Live for our complete home renovation, and we couldn't be happier with the results. The attention to detail and craftsmanship is outstanding."
              rating={5}
            />
            <TestimonialCard 
              name="David Chen"
              location="Markham, ON"
              text="The basement underpinning project was completed on time and on budget. The extra ceiling height has transformed our basement into a fully functional living space."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container-custom bg-gray-100 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to start your project?</h2>
              <p className="text-gray-600">Contact us today for a free consultation and estimate</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="default" className="bg-brand-orange hover:bg-orange-600">
                  Get a Free Quote
                </Button>
              </Link>
              <a href="tel:+16478069089" className="inline-flex items-center justify-center">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  <Phone className="mr-2" size={18} />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <CTA />
    </Layout>
  );
};

export default HomePage;
