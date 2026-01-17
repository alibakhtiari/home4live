import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface BenefitItem {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  benefits: BenefitItem[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  title,
  benefits
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xs transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 text-brand-teal">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;