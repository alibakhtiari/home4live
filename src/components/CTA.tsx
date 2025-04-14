import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgColor = 'bg-brand-blue'
}) => {
  return (
    <section className={`${bgColor} py-16 md:py-24 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-white blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white blur-3xl -bottom-20 -right-20 animate-pulse"></div>
      </div>
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          <Link 
            to={buttonLink} 
            className="bg-white text-brand-blue px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;