
import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Hammer } from 'lucide-react';
import SEO from '@/components/SEO';

const ServiceDemolition = () => {
  return (
    <>
      <SEO 
        title="Professional Demolition Services in Toronto & GTA | Home4Live"
        description="Safe, efficient, and controlled demolition services for renovation projects. Interior and structural demolition throughout Toronto and the GTA."
        canonicalUrl="/services/demolition"
        keywords="demolition services, interior demolition, selective demolition, Toronto demolition, controlled demolition"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Demolition Services",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Professional, safe and efficient demolition services for renovation projects in Toronto and the GTA."
        }}
      />
      <ServicePage
        id="demolition"
        title="Demolition Services"
        description="Our professional demolition services provide safe, efficient, and controlled removal of structures or interior elements to prepare for your renovation project."
        icon={<Hammer size={48} />}
        content={{
          intro: "Professional demolition is a critical first step in many renovation and construction projects. Far from being simply about tearing things down, controlled demolition requires careful planning, precise execution, and proper disposal of materials. At Home4Live, our experienced team specializes in both selective interior demolition and complete structural demolition, providing the clean slate you need to begin your transformation project. We prioritize safety, efficiency, and environmental responsibility throughout the demolition process, ensuring minimal disruption to surrounding areas while preparing your space for its exciting new phase.",
          benefits: {
            title: "Benefits of Professional Demolition Services",
            description: [
              {
                title: "Safety and Compliance",
                description: "Professional demolition ensures all work meets safety standards and building codes, preventing injuries and structural issues."
              },
              {
                title: "Efficiency and Precision",
                description: "Our experienced team completes demolition quickly and precisely, minimizing project timelines and preventing damage to portions of the structure being preserved."
              },
              {
                title: "Proper Material Disposal",
                description: "We handle the sorting, removal, and disposal of demolition waste according to environmental regulations, including recycling applicable materials."
              },
              {
                title: "Structural Integrity Protection",
                description: "When performing selective demolition, we carefully preserve load-bearing elements and ensure the remaining structure maintains its integrity."
              },
              {
                title: "Thorough Site Preparation",
                description: "Beyond removal, we prepare the site for the next construction phase, including necessary cleaning and stabilization."
              },
              {
                title: "Utility Management",
                description: "Professional demolition includes proper disconnection and protection of utilities, preventing dangerous situations and service interruptions."
              }
            ]
          },
          process: {
            title: "Our Demolition Process",
            steps: [
              {
                title: "Initial Assessment",
                description: "We thoroughly evaluate the structure, identifying load-bearing elements, utility locations, and potential hazards to create a comprehensive demolition plan."
              },
              {
                title: "Planning and Permitting",
                description: "Our team develops a detailed demolition strategy and secures all necessary permits and approvals from local authorities."
              },
              {
                title: "Site Preparation",
                description: "We prepare the site by disconnecting utilities, establishing safety perimeters, and implementing dust control measures."
              },
              {
                title: "Controlled Demolition",
                description: "Using specialized equipment and techniques, we carefully execute the demolition according to the established plan, with constant monitoring for safety."
              },
              {
                title: "Material Sorting and Removal",
                description: "Demolition debris is sorted on-site into appropriate categories for recycling, repurposing, or disposal according to environmental guidelines."
              },
              {
                title: "Site Cleanup",
                description: "After demolition, we thoroughly clean the site to remove all debris and prepare it for the next phase of construction."
              },
              {
                title: "Final Inspection",
                description: "We conduct a comprehensive inspection to ensure all demolition work is complete and the site is properly prepared for subsequent construction phases."
              },
              {
                title: "Documentation and Reporting",
                description: "Detailed documentation of the completed demolition is provided, including disposal manifests and compliance verification for permits and regulations."
              }
            ]
          },
          features: {
            title: "Our Demolition Services Include",
            items: [
              "Interior selective demolition",
              "Complete structure demolition",
              "Wall removal and structural opening creation",
              "Kitchen and bathroom demolition",
              "Concrete removal and breaking",
              "Floor and ceiling removal",
              "Fixture and cabinet removal",
              "Structural demolition with engineering support",
              "Hazardous material identification and abatement coordination",
              "Load-bearing wall modifications with temporary support",
              "Masonry and chimney demolition",
              "Deck and porch removal",
              "Garage demolition",
              "Environmentally responsible waste management",
              "Preparation for renovation or new construction"
            ]
          }
        }}
        galleryFolder="demolition"
        faqs={[
          {
            question: "Do I need permits for demolition work?",
            answer: "In most cases, yes. Demolition work, especially when it involves structural elements, typically requires permits from local building authorities. The requirements vary depending on the scope of demolition and your location in the GTA. Our team handles the entire permitting process, ensuring all work is properly documented and compliant with local regulations. This includes securing demolition permits, arranging for necessary inspections, and coordinating with utility companies for safe disconnections when required."
          },
          {
            question: "How do you ensure safety during demolition?",
            answer: "Safety is our top priority during every demolition project. We implement comprehensive safety protocols including thorough pre-demolition inspections, identification of load-bearing elements, proper utility disconnection, installation of temporary supports when needed, use of appropriate personal protective equipment, implementation of dust control measures, establishment of clear work zones, and continuous monitoring throughout the process. Our team is fully trained in safe demolition practices, and we comply with all OSHA and local safety regulations."
          },
          {
            question: "What happens to the demolition waste?",
            answer: "We follow environmentally responsible waste management practices for all demolition projects. Materials are sorted on-site into categories such as metal, wood, concrete, and general debris. Recyclable materials are sent to appropriate recycling facilities, and any hazardous materials are handled according to environmental regulations. We provide documentation of proper disposal, including waste manifests when applicable. Our goal is to minimize landfill impact by recycling or repurposing as much material as possible."
          },
          {
            question: "How long does demolition typically take?",
            answer: "The timeline for demolition varies based on the size and complexity of the project. Small interior demolitions, such as a bathroom or kitchen, typically take 1-3 days. Larger selective demolition projects might take 1-2 weeks. Complete structure demolition can take anywhere from a few days to several weeks, depending on size, access, and complexity. During your consultation, we'll provide a specific timeline for your project based on its unique requirements."
          },
          {
            question: "Can you remove load-bearing walls?",
            answer: "Yes, we can safely remove or modify load-bearing walls as part of our demolition services. This process requires careful planning, engineering consultation, and proper temporary support installation before removal. We work with structural engineers to design appropriate permanent support solutions, such as beams or columns, that will replace the load-bearing function of the wall being removed. This ensures the structural integrity of your home is maintained throughout the process and after completion."
          },
          {
            question: "How do you minimize dust and disruption during interior demolition?",
            answer: "We implement several measures to control dust and minimize disruption during interior demolition. These include installing temporary dust barriers with plastic sheeting and zipper doors, using air scrubbers and negative air pressure systems, applying water misting during dusty operations, covering and protecting unaffected areas, utilizing specialized equipment with dust collection systems, and implementing thorough daily cleanup procedures. For occupied homes, we also carefully schedule work to minimize noise disruption and maintain clear pathways for residents when possible."
          }
        ]}
        relatedServices={[
          "home-renovation",
          "basement-underpinning",
          "house-additions",
          "framing-structural"
        ]}
      />
    </>
  );
};

export default ServiceDemolition;
