import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { Helmet } from 'react-helmet-async';
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
  Sparkles
} from 'lucide-react';
import HeroSection from '@/components/services/HeroSection';
import ServicesList from '@/components/services/ServicesList';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import { ServiceProps } from '@/types/service';

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

const processSteps = [
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
      <HeroSection />

      {/* Services Overview */}
      <ServicesList services={services} />

      {/* Process Section */}
      <ProcessTimeline steps={processSteps} />

      {/* CTA */}
      <CTA  />
    </Layout>
  );
};

export default ServicesPage;