import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface RelatedServicesProps {
  services: string[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section className="section" ref={sectionRef}>
      <div className="container-custom">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          <h2 className="mb-4">Related Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our other services that may complement your renovation project
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <Link
                to={`/services/${service}`}
                className="inline-block px-6 py-3 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                {service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;