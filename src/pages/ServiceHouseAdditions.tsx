
import React from 'react';
import ServicePage from '@/components/ServicePage';
import { HardHat } from 'lucide-react';
import SEO from '@/components/SEO';

const ServiceHouseAdditions = () => {
  return (
    <>
      <SEO 
        title="House Additions & Home Extensions in Toronto & GTA | Home4Live"
        description="Expand your living space with custom house additions that blend seamlessly with your existing structure. Serving Toronto and the Greater Toronto Area."
        canonicalUrl="/services/house-additions"
        keywords="house additions, home extensions, second story addition, room addition, Toronto home addition"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "House Additions",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Expand your living space with custom house additions that blend seamlessly with your existing structure."
        }}
      />
      <ServicePage
        id="house-additions"
        title="House Additions"
        description="Expand your living space with custom house additions that blend seamlessly with your existing structure, providing the perfect solution for growing families."
        icon={<HardHat size={48} />}
        content={{
          intro: "House additions are a strategic way to expand your living space while increasing your property's value. Whether you need an extra bedroom, an expanded kitchen, a sunroom, or even a second-story addition, a well-designed addition can transform your home to better suit your family's evolving needs. At Home4Live, we specialize in seamless house additions that match your home's architectural style while incorporating modern elements and energy-efficient features. Our comprehensive approach ensures your addition not only provides the space you need but also enhances your home's overall functionality and aesthetic appeal.",
          benefits: {
            title: "Benefits of Professional House Additions",
            description: [
              {
                title: "Increased Living Space",
                description: "Gain the additional square footage your family needs without the hassle and expense of moving to a new home."
              },
              {
                title: "Customized to Your Needs",
                description: "Design the perfect space tailored specifically to your family's requirements and lifestyle."
              },
              {
                title: "Enhanced Home Value",
                description: "Well-designed additions typically offer a 50-70% return on investment through increased property value."
              },
              {
                title: "Stay in Your Neighborhood",
                description: "Expand your current home while maintaining your community connections and children's schools."
              },
              {
                title: "Modern Updates",
                description: "Incorporate contemporary features, energy-efficient systems, and smart home technology into your new space."
              },
              {
                title: "Improved Functionality",
                description: "Solve layout issues and improve flow throughout your home with a strategically designed addition."
              }
            ]
          },
          process: {
            title: "Our House Addition Process",
            steps: [
              {
                title: "Initial Consultation",
                description: "We discuss your needs, vision, and budget to understand exactly what you're looking to achieve with your addition."
              },
              {
                title: "Site Assessment",
                description: "Our team evaluates your property, considering zoning regulations, structural requirements, and architectural compatibility."
              },
              {
                title: "Design Development",
                description: "We create detailed plans for your addition, including 3D renderings to help you visualize the final result."
              },
              {
                title: "Permit Acquisition",
                description: "We handle all the necessary building permits and approvals, navigating municipal requirements on your behalf."
              },
              {
                title: "Pre-Construction Planning",
                description: "We finalize material selections, create a detailed construction schedule, and prepare your home for the building process."
              },
              {
                title: "Foundation and Framing",
                description: "Our team constructs a solid foundation and frames the new space according to engineered specifications."
              },
              {
                title: "Exterior and Interior Finishing",
                description: "We complete all exterior elements to match your existing home, then move to interior systems and finishes."
              },
              {
                title: "Final Inspections and Handover",
                description: "After thorough quality checks and municipal inspections, we walk you through your new addition and provide maintenance guidance."
              }
            ]
          },
          features: {
            title: "Our House Addition Services Include",
            items: [
              "Single and multi-room additions",
              "Second-story additions",
              "Kitchen expansions and bump-outs",
              "Primary bedroom suite additions",
              "Sunroom and four-season room additions",
              "Home office additions",
              "In-law suite additions",
              "Garage conversions and additions",
              "Mudroom and entryway additions",
              "Architectural design services",
              "Structural engineering",
              "Interior design and space planning",
              "Complete electrical and plumbing systems",
              "HVAC integration and expansion",
              "Exterior finishing to match existing home"
            ]
          }
        }}
        galleryImages={[
          {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            alt: "Two-story home with new addition",
            caption: "Seamless Two-Story Addition"
          },
          {
            src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            alt: "Kitchen extension with large windows",
            caption: "Bright Kitchen Extension"
          },
          {
            src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
            alt: "Primary bedroom suite addition",
            caption: "Spacious Primary Suite Addition"
          },
          {
            src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            alt: "Modern sunroom addition",
            caption: "Light-Filled Sunroom Addition"
          },
          {
            src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
            alt: "Home office addition with custom built-ins",
            caption: "Productive Home Office Addition"
          },
          {
            src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
            alt: "In-law suite addition",
            caption: "Comfortable In-Law Suite"
          }
        ]}
        faqs={[
          {
            question: "How much does a house addition cost in the Toronto area?",
            answer: "House addition costs in the Toronto area typically range from $200 to $450 per square foot, depending on the type of addition, complexity, finish level, and current market conditions. A basic room addition might start around $100,000, while larger or more complex additions like second stories can exceed $300,000. During your consultation, we'll provide a detailed estimate based on your specific project requirements."
          },
          {
            question: "How long does it take to complete a house addition?",
            answer: "The timeline for a house addition project depends on its size and complexity. Typically, a single-room addition takes 2-4 months, while a more extensive project like a second-story addition might take 4-6 months. Factors that can affect the timeline include permit approval times, weather conditions, material availability, and any unforeseen structural issues discovered during construction."
          },
          {
            question: "Can I live in my home during the addition construction?",
            answer: "In most cases, you can continue living in your home during construction of an addition. We take several measures to minimize disruption, including creating temporary walls to separate construction areas, carefully scheduling noisy work, and maintaining strict jobsite cleanliness. However, for extensive renovations like second-story additions, you might need alternative accommodations during certain phases of construction. We'll discuss this during the planning process."
          },
          {
            question: "Will my new addition match my existing home?",
            answer: "Yes, we design additions to blend seamlessly with your existing home while incorporating any desired modern elements. Our design team carefully analyzes your home's architectural style, materials, and features to ensure the addition looks like it has always been part of the structure. We pay particular attention to matching rooflines, siding or brick, window styles, and other exterior elements for a cohesive appearance."
          },
          {
            question: "Do I need permits for a house addition?",
            answer: "Yes, house additions require building permits and must comply with local zoning bylaws and building codes. Depending on your location and project, you might also need additional approvals from homeowners' associations or conservation authorities. Our team handles the entire permitting process, including preparing all necessary documentation and coordinating with municipal authorities."
          },
          {
            question: "What's the difference between a bump-out and a full addition?",
            answer: "A bump-out is a minor extension (typically 2-10 feet) that expands an existing room without requiring a new foundation, often achieved by cantilevering the floor joists beyond the existing foundation. A full addition is a more substantial expansion that requires its own foundation and typically adds entire rooms to your home. Bump-outs are less expensive and less invasive but provide limited additional space, while full additions offer more substantial square footage and design flexibility."
          }
        ]}
        relatedServices={[
          "home-renovation",
          "basement-finishing",
          "kitchen-renovation",
          "bathroom-renovation"
        ]}
      />
    </>
  );
};

export default ServiceHouseAdditions;
