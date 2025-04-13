
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import Gallery from '@/components/Gallery';
import FAQSection from '@/components/FAQSection';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: {
    intro: string;
    benefits: {
      title: string;
      description: string;
    }[];
    process: {
      title: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    features: {
      title: string;
      items: string[];
    };
  };
  galleryImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  id,
  title,
  description,
  icon,
  content,
  galleryImages,
  faqs,
  relatedServices
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${title} | Professional Home Renovation Services | Home4Live`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, home renovation, Toronto renovations, ${id.replace(/-/g, ' ')}`} />
        <link rel="canonical" href={`https://home4live.com/services/${id}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${title}",
              "description": "${description}",
              "provider": {
                "@type": "Organization",
                "name": "Home4Live",
                "url": "https://home4live.com"
              },
              "serviceType": "${title}",
              "areaServed": {
                "@type": "City",
                "name": "Toronto",
                "sameAs": "https://en.wikipedia.org/wiki/Toronto"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "CAD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Contact for custom pricing"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
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

      {/* Introduction */}
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
                {content.intro}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 text-brand-teal">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">{content.process.title}</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-brand-teal hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-12">
              {content.process.steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center text-lg font-bold relative z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">{content.features.title}</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.features.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery 
        title="Our Recent Work"
        subtitle={`See our recent ${title.toLowerCase()} projects`}
        images={galleryImages}
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle={`Common questions about our ${title.toLowerCase()} services`}
        faqs={faqs}
        schemaId={`https://home4live.com/services/${id}#faq`}
      />

      {/* Related Services */}
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
            {relatedServices.map((service, index) => (
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

      {/* CTA */}
      <CTA 
        title={`Ready to Transform Your Space with Our ${title} Services?`}
        subtitle="Contact us today for a free consultation and detailed estimate"
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        bgColor="bg-brand-blue"
      />
    </Layout>
  );
};

export default ServicePage;
