
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '@/components/ServiceCard';
import { 
  Home, 
  Building, 
  Droplets, 
  PaintBucket, 
  HardHat, 
  Hammer, 
  Frame,
  Wrench,
  Layers,
  Paintbrush,
  BookOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceProps[] = [
  {
    id: 'home-renovation',
    title: 'Home Renovation',
    description: "Our comprehensive home renovation services transform your living spaces into beautiful, functional areas that reflect your style and meet your needs. We handle everything from design to execution, ensuring a seamless renovation experience.",
    icon: <Home size={32} />
  },
  {
    id: 'basement-underpinning',
    title: 'Basement Underpinning',
    description: "Increase your basement ceiling height and create additional living space with our professional underpinning services. This structural procedure allows you to expand your basement downward, potentially adding significant square footage to your home.",
    icon: <Building size={32} />
  },
  {
    id: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    description: "Protect your home from water damage with our comprehensive basement waterproofing solutions. We address both interior and exterior water issues to ensure your basement remains dry year-round.",
    icon: <Droplets size={32} />
  },
  {
    id: 'basement-finishing',
    title: 'Basement Finishing',
    description: "Transform your unfinished basement into a beautiful, functional living space that adds value to your home. Our basement finishing services include design consultation, framing, electrical work, plumbing, insulation, drywall, flooring, and finishing touches.",
    icon: <PaintBucket size={32} />
  },
  {
    id: 'house-additions',
    title: 'House Additions',
    description: "Expand your living space with custom house additions that blend seamlessly with your existing structure. Whether you need an extra bedroom, expanded kitchen, sunroom, or second-story addition, our team handles the entire process from design to construction.",
    icon: <HardHat size={32} />
  },
  {
    id: 'demolition',
    title: 'Demolition',
    description: "Our professional demolition services provide safe, efficient, and controlled removal of structures or interior elements to prepare for your renovation project. We handle selective interior demolition, wall removal, kitchen and bathroom demolition, and complete structural demolition when needed.",
    icon: <Hammer size={32} />
  },
  {
    id: 'framing-structural',
    title: 'Framing & Structural Work',
    description: "Our expert team handles all aspects of framing and structural work, establishing the essential framework for your renovation project. We provide load-bearing wall modifications, structural beam installations, new wall framing, floor and ceiling joist installation, and roof framing.",
    icon: <Frame size={32} />
  },
  {
    id: 'plumbing-electrical-hvac',
    title: 'Plumbing, Electrical & HVAC',
    description: "Our licensed professionals handle all your plumbing, electrical, and HVAC needs for a complete renovation. Services include fixture installation, wiring upgrades, panel replacements, lighting design, heating and cooling system installations, and ventilation improvements.",
    icon: <Wrench size={32} />
  },
  {
    id: 'insulation-drywall',
    title: 'Insulation & Drywall',
    description: "Create a comfortable, energy-efficient space with our professional insulation and drywall services. We provide various insulation options including fiberglass, spray foam, and rigid foam to improve your home's thermal efficiency.",
    icon: <Layers size={32} />
  },
  {
    id: 'flooring-finishes',
    title: 'Flooring & Finishes',
    description: "Complete your renovation with our premium flooring and finishing services. We install hardwood, engineered wood, laminate, tile, vinyl, and carpet flooring to suit your style and needs.",
    icon: <Paintbrush size={32} />
  },
  {
    id: 'cabinetry-fixtures',
    title: 'Cabinetry & Fixtures',
    description: "Enhance your home with custom cabinetry and fixture installations that combine beauty and functionality. We offer custom cabinet design and installation, countertop selection and installation, bathroom vanity installation, lighting fixture installation, and hardware selection.",
    icon: <BookOpen size={32} />
  },
  {
    id: 'final-touches',
    title: 'Final Touches & Clean-up',
    description: "We complete your renovation project with meticulous final touches and thorough clean-up. Our final phase includes touch-up painting, caulking and sealing, fixture adjustment, deep cleaning of all surfaces, debris removal, and a detailed final inspection.",
    icon: <Sparkles size={32} />
  }
];

const ServicesPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to the specific service section if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Professional Home Renovation Services | Toronto & GTA | Home4Live</title>
        <meta name="description" content="Expert renovation services in Toronto including basement underpinning, waterproofing, finishing, home additions, and complete home renovations. Free consultations." />
        <meta name="keywords" content="home renovation, basement underpinning, basement waterproofing, basement finishing, house additions, Toronto renovations" />
        <link rel="canonical" href="https://home4live.com/services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Home4Live Renovation Services",
              "description": "Professional home renovation and construction services in Toronto and the Greater Toronto Area",
              "url": "https://home4live.com/services",
              "logo": "https://home4live.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.653226",
                "longitude": "-79.383184"
              },
              "telephone": "+14165551234",
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Renovation Services",
                "itemListElement": [
                  ${services.map((service, index) => `
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "${service.title}",
                        "url": "https://home4live.com/services/${service.id}"
                      }
                    }${index < services.length - 1 ? ',' : ''}
                  `).join('')}
                ]
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

      {/* Services Overview */}
      <section id="service-overview" className="section scroll-mt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">Our Renovation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From basement underpinning to complete home renovations, we provide expert services for every aspect of your project
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link to={`/services/${service.id}`}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={`/services/${service.id}`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">Our Renovation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure your renovation project is completed efficiently, on time, and to your complete satisfaction
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-teal hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
            
            {/* Process Steps */}
            <div className="space-y-24">
              {[
                { 
                  number: "01", 
                  title: "Consultation & Planning", 
                  description: "We begin with a thorough consultation to understand your vision, needs, and budget. Our team will assess your space, discuss design possibilities, and provide initial recommendations." 
                },
                { 
                  number: "02", 
                  title: "Design & Estimation", 
                  description: "Our design team creates detailed plans for your project, including material selections, layout options, and 3D renderings when applicable. We provide a comprehensive estimate with transparent pricing." 
                },
                { 
                  number: "03", 
                  title: "Permitting & Preparation", 
                  description: "We handle all necessary permits and approvals to ensure your project complies with local building codes. Our team prepares the site for construction, including any required demolition or site preparation." 
                },
                { 
                  number: "04", 
                  title: "Construction & Implementation", 
                  description: "Our skilled craftsmen execute the renovation according to the approved plans, maintaining the highest standards of quality. We provide regular updates and address any questions or concerns throughout the process." 
                },
                { 
                  number: "05", 
                  title: "Final Inspection & Handover", 
                  description: "Upon completion, we conduct a thorough inspection to ensure everything meets our high standards. We walk you through the renovated space, provide maintenance guidance, and address any final adjustments needed." 
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-brand-teal text-white rounded-full flex items-center justify-center text-3xl font-bold relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className={`flex-grow ${index % 2 === 0 ? 'md:text-right' : 'md:order-first'}`}>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Ready to Start Your Renovation Project?"
        subtitle="Contact us today for a free consultation and detailed estimate"
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        bgColor="bg-brand-blue"
      />
    </Layout>
  );
};

export default ServicesPage;
