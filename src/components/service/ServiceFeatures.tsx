import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ServiceFeaturesProps {
  title: string;
  features: string[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  title,
  features
}) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section className="section bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          <h2 className="mb-4">{title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="shrink-0 mt-1">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;