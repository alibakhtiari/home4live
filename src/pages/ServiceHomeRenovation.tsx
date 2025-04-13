
import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Home } from 'lucide-react';

const ServiceHomeRenovation = () => {
  return (
    <ServicePage
      id="home-renovation"
      title="Home Renovation"
      description="Our comprehensive home renovation services transform your living spaces into beautiful, functional areas that reflect your style and meet your needs."
      icon={<Home size={48} />}
      content={{
        intro: "Home renovation is more than just improving the look of your house; it's about creating spaces that better suit your lifestyle, increase functionality, and add value to your property. At Home4Live, we specialize in comprehensive home renovations that transform outdated or inefficient spaces into beautiful, personalized environments that you'll love coming home to. Our expert team handles every aspect of the renovation process, from initial design to final finishing touches, ensuring a seamless experience and exceptional results.",
        benefits: {
          title: "Benefits of Professional Home Renovation",
          description: [
            {
              title: "Increased Property Value",
              description: "Strategic renovations can significantly increase your home's market value, providing an excellent return on investment should you decide to sell in the future."
            },
            {
              title: "Enhanced Functionality",
              description: "Redesign your space to better suit your lifestyle, improving flow, storage, and usability while eliminating inefficient layouts."
            },
            {
              title: "Improved Energy Efficiency",
              description: "Modern materials and systems reduce energy consumption, lowering utility bills and reducing your environmental footprint."
            },
            {
              title: "Updated Aesthetics",
              description: "Transform outdated spaces with contemporary designs, fresh color schemes, and modern fixtures that reflect your personal style."
            },
            {
              title: "Better Quality of Life",
              description: "Create spaces that enhance daily living, whether it's a gourmet kitchen for the home chef, a spa-like bathroom retreat, or a functional home office."
            },
            {
              title: "Preventative Maintenance",
              description: "Address small issues before they become major problems, saving money and preventing future headaches."
            }
          ]
        },
        process: {
          title: "Our Home Renovation Process",
          steps: [
            {
              title: "Initial Consultation",
              description: "We start by understanding your vision, needs, budget, and timeline, discussing your goals and expectations for the renovation project."
            },
            {
              title: "Site Assessment & Conceptual Design",
              description: "Our team evaluates your existing space, takes measurements, and develops preliminary design concepts based on your requirements."
            },
            {
              title: "Detailed Design & Planning",
              description: "We create detailed plans, 3D renderings, and material selections, refining the design until it perfectly matches your vision."
            },
            {
              title: "Precise Estimation",
              description: "You'll receive a comprehensive estimate breaking down all costs, helping you understand the investment required for your renovation."
            },
            {
              title: "Permitting & Preparation",
              description: "We handle all necessary permits and approvals, ensuring your renovation complies with local building codes and regulations."
            },
            {
              title: "Professional Construction",
              description: "Our skilled craftsmen execute your renovation with precision, maintaining the highest standards of quality and craftsmanship."
            },
            {
              title: "Quality Assurance",
              description: "We conduct thorough inspections throughout the construction process to ensure everything meets our exacting standards."
            },
            {
              title: "Final Walkthrough & Handover",
              description: "Upon completion, we walk you through your newly renovated space, ensuring your complete satisfaction before final handover."
            }
          ]
        },
        features: {
          title: "Our Home Renovation Services Include",
          items: [
            "Complete kitchen renovations with custom cabinetry and premium countertops",
            "Bathroom transformations with luxury fixtures and custom tile work",
            "Open concept living space conversions",
            "Main floor renovations and layout improvements",
            "Aging-in-place and accessibility modifications",
            "Home office and multipurpose room design",
            "Custom millwork and built-in features",
            "Flooring installation and replacement",
            "Lighting design and electrical upgrades",
            "Plumbing fixture updates and relocations",
            "Custom paint schemes and wall treatments",
            "Window and door replacements",
            "Interior wall modifications",
            "Ceiling treatments and updates",
            "HVAC system improvements and replacements"
          ]
        }
      }}
      galleryImages={[
        {
          src: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
          alt: "Modern kitchen renovation with white cabinets and island",
          caption: "Complete Kitchen Transformation"
        },
        {
          src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
          alt: "Luxury bathroom with freestanding tub",
          caption: "Spa-Inspired Bathroom Remodel"
        },
        {
          src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
          alt: "Open concept living and dining area",
          caption: "Open Concept Main Floor Renovation"
        },
        {
          src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
          alt: "Modern home office with custom shelving",
          caption: "Custom Home Office Design"
        },
        {
          src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
          alt: "Elegant master bedroom renovation",
          caption: "Master Bedroom Suite Renovation"
        },
        {
          src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
          alt: "Contemporary living room with custom fireplace",
          caption: "Living Room Transformation"
        }
      ]}
      faqs={[
        {
          question: "How long does a typical home renovation take?",
          answer: "The duration of a home renovation depends on the scope and complexity of the project. A small bathroom renovation might take 3-4 weeks, while a full kitchen remodel could take 6-8 weeks. Whole-home renovations typically take 3-6 months. During your consultation, we'll provide a detailed timeline specific to your project."
        },
        {
          question: "Can I stay in my home during the renovation?",
          answer: "This depends on the extent of the renovation. For partial home renovations, many homeowners choose to stay, though there will be some disruption. For whole-home renovations, it's usually more comfortable to relocate temporarily. We'll discuss this during the planning phase and help you make the best decision for your situation."
        },
        {
          question: "How do you handle unexpected issues during renovation?",
          answer: "Unexpected challenges can arise during renovations, especially in older homes. Our process includes a thorough initial assessment to identify potential issues, but if something unexpected does come up, we immediately communicate with you, present options, and recommend the best solution. We build a contingency into our estimates to help manage these situations."
        },
        {
          question: "Do I need to obtain permits for my renovation?",
          answer: "Most significant renovations require permits, especially those involving structural changes, electrical or plumbing work, or changes to the home's footprint. As part of our service, we handle all necessary permitting to ensure your renovation is compliant with local building codes and regulations."
        },
        {
          question: "How do you help with design decisions?",
          answer: "Our design team works closely with you to understand your style preferences and functional needs. We provide concept designs, material samples, and 3D renderings to help you visualize the final result. We guide you through all design decisions, from layout to fixture selection, ensuring the final design aligns with your vision and budget."
        },
        {
          question: "What's the typical return on investment for a home renovation?",
          answer: "The ROI varies by project type and market conditions. Kitchen and bathroom renovations typically offer the highest returns, often 70-80% of the investment. However, the true value extends beyond financial return to include improved quality of life, functionality, and enjoyment of your home. We focus on renovations that provide both immediate enjoyment and long-term value."
        }
      ]}
      relatedServices={[
        "kitchen-renovation",
        "bathroom-renovation",
        "basement-finishing",
        "house-additions"
      ]}
    />
  );
};

export default ServiceHomeRenovation;
