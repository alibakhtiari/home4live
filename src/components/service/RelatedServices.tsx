import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface RelatedServicesProps {
  services: string[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Related Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our other services that may complement your renovation project
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link 
                to={`/services/${service}`}
                className="inline-block px-6 py-3 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                {service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;