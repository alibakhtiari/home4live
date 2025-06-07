
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-brand-blue py-16">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get your free consultation today and start your renovation journey with Toronto's trusted experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" aria-label="Get a free quote for your renovation project">
              <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-teal text-white hover:bg-teal-600 h-11 px-8 w-full sm:w-auto"
                aria-label="Get a Free Quote - Contact us for your renovation needs"
              >
                Get a Free Quote
                <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </button>
            </Link>
            <a 
              href="tel:+16478069089" 
              aria-label="Call us now at 647-806-9089 for immediate assistance"
            >
              <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-brand-blue h-11 px-8 w-full sm:w-auto"
                aria-label="Call Us Now - Speak directly with our renovation experts"
              >
                <Phone className="mr-2" size={16} aria-hidden="true" />
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
