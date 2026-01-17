import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  return (
    <section className="section bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <h2 className="mb-4">Our Renovation Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your renovation project is completed efficiently, on time, and to your complete satisfaction
            </p>
          </div>
        </div>

        <div className="relative">

          {/* Process Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-700`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="shrink-0 relative">
                  <div className="w-20 h-20 bg-brand-teal text-white rounded-full flex items-center justify-center text-3xl font-bold relative z-10">
                    {step.number}
                  </div>
                </div>
                <div className={`grow ${index % 2 === 0 ? 'md:text-right' : 'md:order-first'}`}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
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

export default ProcessTimeline;
