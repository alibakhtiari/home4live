
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import ServiceCard from './ServiceCard';
import { ServiceProps } from '@/types/service';

interface ServicesListProps {
  services: ServiceProps[];
}

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section id="service-overview" className="section scroll-mt-24" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <h2 className="mb-4">Our Renovation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From basement underpinning to complete home renovations, we provide expert services for every aspect of your project
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <Link to={`/services/${service.id}`}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={`/services/${service.id}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
