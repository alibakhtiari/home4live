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
    imageSrc: '/public/images/services/home-renovation.jpg'
  },
  {
    id: 'basement-underpinning',
    title: 'Basement Underpinning',
    description: "Increase your basement ceiling height and create additional living space",
    imageSrc: '/public/images/basment underpinning/1.webp'
  },
  {
    id: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    description: "Professional waterproofing solutions for a dry and healthy basement",
    imageSrc: '/public/images/basment underpinning/2.webp'
  },
  {
    id: 'basement-finishing',
    title: 'Basement Finishing',
    description: "Transform your unfinished basement into a beautiful living space",
    imageSrc: '/public/images/basement finishing/1.webp'
  },
  {
    id: 'house-additions',
    title: 'House Additions',
    description: "Expand your living space with custom house additions",
    imageSrc: '/public/images/house additions/1.webp'
  },
  {
    id: 'demolition',
    title: 'Demolition',
    description: "Professional and safe demolition services",
    imageSrc: '/public/images/demolition/1.webp'
  },
  {
    id: 'framing-structural',
    title: 'Framing & Structural Work',
    description: "Expert framing and structural modifications",
    imageSrc: '/public/images/framing/1.webp'
  },
  {
    id: 'plumbing-electrical-hvac',
    title: 'Plumbing, Electrical & HVAC',
    description: "Complete mechanical systems installation and upgrades",
    imageSrc: '/public/placeholder.svg'
  },
  {
    id: 'insulation-drywall',
    title: 'Insulation & Drywall',
    description: "Professional insulation and drywall installation",
    imageSrc: '/public/images/insulation drywall taping/1.webp'
  },
  {
    id: 'flooring-finishes',
    title: 'Flooring & Finishes',
    description: "High-quality flooring installation and finishing services",
    imageSrc: '/public/images/flooring/1.webp'
  },
  {
    id: 'cabinetry-fixtures',
    title: 'Cabinetry & Fixtures',
    description: "Custom cabinetry and fixture installation",
    imageSrc: '/public/images/cabinetry fixtures & kitchen/1.webp'
  },
  {
    id: 'final-touches',
    title: 'Final Touches & Clean-up',
    description: "Meticulous final touches and thorough clean-up services",
    imageSrc: '/public/placeholder.svg'
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