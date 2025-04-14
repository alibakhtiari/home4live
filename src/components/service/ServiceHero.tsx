import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-blue-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-brand-teal blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 blur-3xl -bottom-20 -right-20 animate-pulse"></div>
      </div>
      <div className="container-custom relative z-10">
        <Link to="/services" className="inline-flex items-center text-white mb-8 hover:text-brand-teal transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to All Services
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-3/4">
            <h1 className="text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <a href="#gallery" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
                View Our Work
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 flex justify-center md:w-1/4">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-blue">
                {icon}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;