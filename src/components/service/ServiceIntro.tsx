import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ServiceIntroProps {
  intro: string;
}

const ServiceIntro: React.FC<ServiceIntroProps> = ({ intro }) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section className="section" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;