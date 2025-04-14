
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';


const CTA = () => {
  return (
  <section className="section animate-on-scroll">
    <div className="container-custom bg-gray-100 rounded-lg p-8 md:p-12 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Ready to start your project?</h2>
          <p className="text-gray-600">Contact us today for a free consultation and estimate</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="animate-bounce-light">
            <Button variant="default" className="bg-brand-teal hover:bg-teal-600 w-full sm:w-auto">
              Get a Free Quote
            </Button>
          </Link>
          <a href="tel:+16478069089" className="inline-flex items-center justify-center">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full sm:w-auto">
              <Phone className="mr-2" size={18} />
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
  );

}

export default CTA;