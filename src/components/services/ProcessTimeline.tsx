import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Our Renovation Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your renovation project is completed efficiently, on time, and to your complete satisfaction
            </p>
          </motion.div>
        </div>

        <div className="relative">

          {/* Process Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
