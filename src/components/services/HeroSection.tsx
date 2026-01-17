import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, Sparkles, Home } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-linear-to-r from-brand-blue to-blue-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-brand-teal blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 blur-3xl -bottom-20 -right-20 animate-pulse"></div>
      </div>
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white mb-6">Transforming Toronto Homes</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Comprehensive renovation and construction services tailored to your vision,
            delivered with precision and excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="#service-overview" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
              Explore Services
            </Link>
          </div>
        </motion.div>
        
        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <HardHat className="text-brand-blue" size={32} />
            </div>
            <span className="text-white text-sm">Licensed</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <Sparkles className="text-brand-blue" size={32} />
            </div>
            <span className="text-white text-sm">10+ Years</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <Home className="text-brand-blue" size={32} />
            </div>
            <span className="text-white text-sm">100+ Projects</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;