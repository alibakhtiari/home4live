
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Home4Live</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-lg mx-auto">
          Your trusted partner for home renovations, basement waterproofing, 
          underpinning, and more in the Greater Toronto Area.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/services">
            <Button className="bg-brand-blue hover:bg-blue-800">
              Our Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
