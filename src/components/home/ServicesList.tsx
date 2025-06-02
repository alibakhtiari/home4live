import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';

interface Service {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const services: Service[] = [
  {
    id: 'home-renovation',
    title: 'Home Renovation',
    description: "Complete home renovation services that transform your living spaces",
    imageSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
  },
  {
    id: 'basement-underpinning',
    title: 'Basement Underpinning',
    description: "Increase your basement ceiling height and create additional living space",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    description: "Professional waterproofing solutions for a dry and healthy basement",
    imageSrc: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg'
  },
  {
    id: 'basement-finishing',
    title: 'Basement Finishing',
    description: "Transform your unfinished basement into a beautiful living space",
    imageSrc: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
  },
  {
    id: 'house-additions',
    title: 'House Additions',
    description: "Expand your living space with custom house additions",
    imageSrc: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
  },
  {
    id: 'demolition',
    title: 'Demolition',
    description: "Professional and safe demolition services",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'framing-structural',
    title: 'Framing & Structural Work',
    description: "Expert framing and structural modifications",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'plumbing-electrical-hvac',
    title: 'Plumbing, Electrical & HVAC',
    description: "Complete mechanical systems installation and upgrades",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'insulation-drywall',
    title: 'Insulation & Drywall',
    description: "Professional insulation and drywall installation",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'flooring-finishes',
    title: 'Flooring & Finishes',
    description: "High-quality flooring installation and finishing services",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'cabinetry-fixtures',
    title: 'Cabinetry & Fixtures',
    description: "Custom cabinetry and fixture installation",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  },
  {
    id: 'final-touches',
    title: 'Final Touches & Clean-up',
    description: "Meticulous final touches and thorough clean-up services",
    imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  }
];

const ServicesList = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive renovation and construction services for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="animate-on-scroll block h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                to={`/services/${service.id}`}
              />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link to="/services" className="inline-block">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;