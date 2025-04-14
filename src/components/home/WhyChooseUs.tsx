
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="mb-4">Why Choose Home4Live for Your Renovation Projects</h2>
            <p className="text-gray-600 mb-6">
              With years of experience in construction and renovation, we deliver high-quality results that exceed expectations. 
              Our team of professionals is committed to turning your vision into reality.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-start animate-on-scroll" style={{ transitionDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-brand-teal" size={20} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 animate-on-scroll">
              <Link to="/about">
                <Button variant="default" className="bg-brand-blue hover:bg-blue-800">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-gray-100 h-[400px] rounded-lg overflow-hidden shadow-lg">
              <div className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-brand-teal/10 mb-4">
                    <Building className="text-brand-teal" size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Professional Team</h3>
                  <p className="text-gray-600">Our experienced team brings expertise and dedication to every project, ensuring exceptional results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Experienced Team",
    description: "Our skilled professionals have years of experience in renovations and construction."
  },
  {
    title: "Quality Workmanship",
    description: "We never compromise on quality, using only the finest materials and techniques."
  },
  {
    title: "Timely Completion",
    description: "We complete projects on schedule without sacrificing quality or attention to detail."
  },
  {
    title: "Customer Satisfaction",
    description: "Our client-focused approach ensures your complete satisfaction with the final result."
  }
];

export default WhyChooseUs;
