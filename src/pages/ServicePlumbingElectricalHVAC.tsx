import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Wrench } from 'lucide-react';
import SEO from '@/components/SEO';

const ServicePlumbingElectricalHVAC = () => {
  return (
    <>
      <SEO 
        title="Plumbing, Electrical & HVAC Services | Toronto & GTA | Home4Live"
        description="Professional plumbing, electrical, and HVAC services for your renovation project. Our licensed professionals handle fixture installation, wiring upgrades, and more."
        canonicalUrl="/services/plumbing-electrical-hvac"
        keywords="plumbing, electrical, HVAC, home renovation, Toronto renovations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Plumbing, Electrical & HVAC Services",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Professional plumbing, electrical, and HVAC services for your renovation project."
        }}
      />
      <ServicePage
        id="plumbing-electrical-hvac"
        title="Plumbing, Electrical & HVAC"
        description="Our licensed professionals handle all your plumbing, electrical, and HVAC needs for a complete renovation."
        icon={<Wrench size={48} />}
        content={{
          intro: "The systems that bring your home to life—plumbing, electrical, and HVAC—are essential components of any renovation project. At Home4Live, our licensed professionals ensure these critical systems are designed, installed, and integrated properly to deliver comfort, efficiency, and peace of mind. From complete system replacements to minor upgrades, we handle all aspects of your home's mechanical infrastructure with expertise and precision.",
          benefits: {
            title: "Benefits of Professional Plumbing, Electrical & HVAC Services",
            description: [
              {
                title: "Code Compliance and Safety",
                description: "Our licensed professionals ensure all installations meet or exceed building codes, keeping your home safe and preventing future issues."
              },
              {
                title: "Energy Efficiency",
                description: "Modern plumbing, electrical, and HVAC systems are significantly more efficient than older ones, reducing utility bills and environmental impact."
              },
              {
                title: "Improved Home Comfort",
                description: "Properly designed systems deliver better temperature control, water pressure, and electrical capacity for an enhanced living experience."
              },
              {
                title: "Increased Home Value",
                description: "Updated mechanical systems are a significant selling point for potential buyers, often returning 70-80% of renovation costs."
              },
              {
                title: "System Integration",
                description: "Our holistic approach ensures your plumbing, electrical, and HVAC systems work together seamlessly for optimal performance."
              },
              {
                title: "Future-Proofing",
                description: "We design systems with capacity for future needs, such as additional fixtures, appliances, or smart home technology integration."
              }
            ]
          },
          process: {
            title: "Our Plumbing, Electrical & HVAC Process",
            steps: [
              {
                title: "System Assessment",
                description: "We begin by evaluating your existing systems, identifying issues, and determining what needs to be updated, repaired, or replaced."
              },
              {
                title: "Design and Planning",
                description: "Our team creates detailed plans for your new systems, including fixture placements, electrical layouts, and HVAC distribution designs."
              },
              {
                title: "Permit Acquisition",
                description: "We handle all necessary permits for plumbing, electrical, and HVAC work, ensuring compliance with local building codes and regulations."
              },
              {
                title: "Rough-In Installation",
                description: "During the framing stage, we install all necessary pipes, wires, ducts, and vents behind walls and under floors before closing up spaces."
              },
              {
                title: "System Integration",
                description: "We coordinate between different systems to ensure proper interaction and avoid conflicts during installation."
              },
              {
                title: "Fixture and Equipment Installation",
                description: "Once walls and finishes are complete, we install visible components like fixtures, outlets, switches, registers, and equipment."
              },
              {
                title: "Testing and Balancing",
                description: "We thoroughly test all systems, checking for leaks, proper electrical function, and balanced airflow throughout your space."
              },
              {
                title: "Final Inspection and Education",
                description: "After final inspections, we demonstrate how to operate and maintain your new systems for optimal performance and longevity."
              }
            ]
          },
          features: {
            title: "Our Plumbing, Electrical & HVAC Services Include",
            items: [
              "Complete plumbing system installation and upgrades",
              "Bathroom and kitchen fixture installation",
              "Water heater installation and replacement",
              "Pipe repair and replacement",
              "Electrical panel upgrades and replacements",
              "Interior and exterior lighting installation",
              "Outlet and switch installation",
              "Smart home wiring and integration",
              "Ceiling fan installation",
              "Furnace and air conditioner installation",
              "Ductwork design and installation",
              "Heat pump systems",
              "Radiant floor heating",
              "Ventilation system installation",
              "Smart thermostat integration"
            ]
          }
        }}
        galleryImages={[
          {
            src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
            alt: "Plumbing installation",
            caption: "Modern Plumbing Installation"
          },
          {
            src: "https://images.unsplash.com/photo-1595761545806-69d3e3173522",
            alt: "Electrical panel upgrade",
            caption: "Electrical Panel Installation"
          },
          {
            src: "https://images.unsplash.com/photo-1625061152282-1123525563cd",
            alt: "HVAC installation",
            caption: "HVAC System Installation"
          },
          {
            src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
            alt: "Modern bathroom fixtures",
            caption: "Premium Fixture Installation"
          },
          {
            src: "https://images.unsplash.com/photo-1629079448081-df57f53a0628",
            alt: "Smart home wiring",
            caption: "Smart Home Integration"
          },
          {
            src: "https://images.unsplash.com/photo-1631545989935-863f713319f4",
            alt: "Ductwork installation",
            caption: "Ductwork Installation"
          }
        ]}
        faqs={[
          {
            question: "Do I need to upgrade my electrical panel during a renovation?",
            answer: "It depends on your renovation scope and existing panel capacity. If you're adding significant electrical loads (like kitchen appliances, air conditioning, or electric vehicle charging), or if your panel is over 20 years old, an upgrade is often recommended. Modern homes typically need 200-amp service to accommodate today's electrical demands. Our electricians will assess your current panel and recommend upgrades if necessary for safety and functionality."
          },
          {
            question: "What plumbing issues should be addressed during a renovation?",
            answer: "A renovation provides an ideal opportunity to address existing plumbing issues and upgrade your system. We recommend replacing any outdated piping (like galvanized steel or polybutylene), addressing low water pressure problems, installing shut-off valves for individual fixtures, and considering water-saving fixtures. For kitchen and bathroom renovations, we also recommend updating supply lines, drains, and venting to meet current codes."
          },
          {
            question: "How do I know what size HVAC system my home needs?",
            answer: "Proper HVAC sizing requires professional calculation based on several factors including your home's square footage, insulation levels, window specifications, ceiling height, climate zone, and home layout. Both oversized and undersized systems cause problems—oversized systems cycle too frequently (wasting energy and causing temperature swings), while undersized systems run constantly without adequate heating or cooling. Our HVAC professionals perform detailed load calculations to determine the right size for your specific home."
          },
          {
            question: "Can I save money by keeping some of my existing systems?",
            answer: "Sometimes partial upgrades are cost-effective, particularly if certain components are relatively new and in good condition. For example, you might replace a furnace while keeping newer ductwork, or update bathroom fixtures while maintaining recent copper supply piping. Our approach is to thoroughly assess existing systems and recommend keeping components that are in good condition and compatible with your renovation plans. This balanced approach maximizes value while ensuring quality and reliability."
          },
          {
            question: "How do smart home technologies integrate with plumbing, electrical, and HVAC systems?",
            answer: "Smart home integration offers exciting possibilities for enhancing comfort, convenience, and efficiency. Options include smart thermostats that learn your preferences and optimize energy use, electrical systems that allow remote control of lighting and appliances, leak detection systems that alert you to plumbing issues, and automated water shut-off valves. During planning, we can design your systems to accommodate current smart technologies and ensure compatibility with future innovations."
          },
          {
            question: "How long do mechanical system renovations typically take?",
            answer: "Timelines vary based on project scope, but mechanical rough-ins typically take 1-2 weeks for average renovations. Complete system replacements in larger homes might require 2-3 weeks. Final fixture and equipment installation usually takes an additional 3-7 days after finishes are complete. These timeframes assume proper sequencing with other trades. During planning, we'll provide a detailed schedule specific to your project scope."
          }
        ]}
        relatedServices={[
          "home-renovation",
          "basement-finishing",
          "house-additions",
          "insulation-drywall"
        ]}
      />
    </>
  );
};

export default ServicePlumbingElectricalHVAC;