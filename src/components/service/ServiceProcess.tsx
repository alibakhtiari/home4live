import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  steps: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({
  title,
  steps
}) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section className="section" ref={sectionRef}>
      <div className="container-custom">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          <h2 className="mb-4">{title}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-brand-teal hidden md:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-8 transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="shrink-0 relative">
                  <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center text-lg font-bold relative z-10">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;