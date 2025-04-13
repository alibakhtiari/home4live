
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Transform Your Home?",
  subtitle = "Contact us today for a free consultation and estimate",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
  bgColor = "bg-brand-blue"
}) => {
  return (
    <section className={`${bgColor} py-16 md:py-20`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link to={buttonLink}>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-brand-orange hover:bg-orange-600 text-white px-8"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
