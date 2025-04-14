import React from 'react';
import { motion } from 'framer-motion';

interface ServiceIntroProps {
  intro: string;
}

const ServiceIntro: React.FC<ServiceIntroProps> = ({ intro }) => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              {intro}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;