import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Frame } from 'lucide-react';
import SEO from '@/components/SEO';

const ServiceFramingStructural = () => {
  return (
    <>
      <SEO 
        title="Framing & Structural Work | Toronto & GTA | Home4Live"
        description="Expert framing and structural work services for your renovation project. Our team handles load-bearing wall modifications, structural beam installations, and more."
        canonicalUrl="/services/framing-structural"
        keywords="framing, structural work, load-bearing walls, home renovation, Toronto renovations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Framing & Structural Work",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Expert framing and structural work services for your renovation project."
        }}
      />
      <ServicePage
        id="framing-structural"
        title="Framing & Structural Work"
        description="Our expert team handles all aspects of framing and structural work, establishing the essential framework for your renovation project."
        icon={<Frame size={48} />}
        content={{
          intro: "Framing and structural work form the backbone of any renovation or construction project. At Home4Live, our skilled team specializes in creating strong, precise structural elements that ensure your home's integrity and longevity. From load-bearing wall modifications to complex beam installations, we provide the expertise needed for safe, code-compliant structural modifications that support your renovation vision.",
          benefits: {
            title: "Benefits of Professional Framing & Structural Work",
            description: [
              {
                title: "Structural Integrity",
                description: "Our expert framing ensures your home maintains proper structural integrity, even when making significant modifications to load-bearing elements."
              },
              {
                title: "Code Compliance",
                description: "All structural work is performed to meet or exceed building codes, ensuring your renovation is safe, legal, and properly inspected."
              },
              {
                title: "Design Flexibility",
                description: "Professional structural modifications allow for opening up spaces, creating open floor plans, and implementing dramatic architectural features."
              },
              {
                title: "Long-term Value",
                description: "Quality framing work provides a solid foundation for the rest of your renovation, contributing to your home's long-term value and durability."
              },
              {
                title: "Precise Construction",
                description: "Our team uses advanced techniques and tools to ensure perfect alignment, level surfaces, and square corners for flawless finishing stages."
              },
              {
                title: "Future-Proofing",
                description: "Professional structural work anticipates and accommodates future needs, including proper support for heavy fixtures or potential additions."
              }
            ]
          },
          process: {
            title: "Our Framing & Structural Work Process",
            steps: [
              {
                title: "Structural Assessment",
                description: "We begin with a thorough assessment of your home's existing structure, identifying load-bearing elements and creating a safe modification plan."
              },
              {
                title: "Engineering Consultation",
                description: "For complex structural changes, we work with licensed structural engineers to develop detailed plans and specifications."
              },
              {
                title: "Permit Acquisition",
                description: "We handle all necessary building permits for structural modifications, ensuring your project is properly documented and approved."
              },
              {
                title: "Safety Preparation",
                description: "Before beginning structural work, we implement temporary support systems to maintain structural integrity during the modification process."
              },
              {
                title: "Precision Demolition",
                description: "When removing walls or other structural elements, we use controlled demolition techniques to minimize disruption to surrounding areas."
              },
              {
                title: "Beam and Support Installation",
                description: "We install proper header beams, support columns, and other structural elements according to engineered specifications."
              },
              {
                title: "Wall and Floor Framing",
                description: "Our team builds new wall and floor framing with precision, ensuring square corners, level surfaces, and proper spacing for utilities."
              },
              {
                title: "Inspection and Verification",
                description: "We coordinate with building inspectors to verify all structural work meets code requirements before proceeding to the next phase."
              }
            ]
          },
          features: {
            title: "Our Framing & Structural Services Include",
            items: [
              "Load-bearing wall removal and modification",
              "LVL and steel beam installation",
              "Support column installation",
              "Floor joist reinforcement and installation",
              "Ceiling joist and rafter installation",
              "Roof framing and modification",
              "Wall framing and reframing",
              "Staircase framing",
              "Window and door header installation",
              "Structural repairs and reinforcement",
              "Cantilever and overhang construction",
              "Subfloor installation and leveling",
              "Blocking and backing installation",
              "Engineered truss systems",
              "Seismic retrofitting and reinforcement"
            ]
          }
        }}
        galleryFolder="framing"
        faqs={[
          {
            question: "How do I know if a wall is load-bearing?",
            answer: "Determining if a wall is load-bearing requires professional assessment. Generally, walls that run perpendicular to floor joists, walls that are stacked vertically through multiple floors, or walls that support ceiling joists or roof rafters tend to be load-bearing. Our structural experts can perform a thorough assessment to identify which walls in your home are load-bearing before any renovation work begins."
          },
          {
            question: "Can any load-bearing wall be removed?",
            answer: "Yes, most load-bearing walls can be removed, but they must be properly supported with alternative structural elements. This typically involves installing appropriately sized beams (steel, LVL, or solid wood) and support posts to transfer the load to the foundation. We work with structural engineers to design a safe solution specific to your home and obtain necessary permits before performing such work."
          },
          {
            question: "How long does the framing phase of a renovation take?",
            answer: "The timeline for framing work varies based on the project scope and complexity. For a typical room addition, framing might take 1-2 weeks. Whole-house framing can take 3-4 weeks. Projects involving complex structural modifications might require additional time. During your consultation, we'll provide a detailed timeline specific to your project requirements."
          },
          {
            question: "Will my home be secure during structural modifications?",
            answer: "Absolutely. Safety is our priority during structural work. Before removing any load-bearing elements, we install temporary support systems to maintain structural integrity. Our team uses professional techniques and equipment to ensure your home remains secure throughout the renovation process. We also implement proper sealing and security measures to protect your home from weather and unauthorized access."
          },
          {
            question: "What types of beams do you use for structural support?",
            answer: "We use various beam types depending on the specific requirements of your project, including Laminated Veneer Lumber (LVL), Parallel Strand Lumber (PSL), steel I-beams, and traditional solid wood beams. The beam selection depends on factors like the span length, load requirements, and aesthetic considerations. Our structural engineers will specify the appropriate beam type and size for your specific situation."
          },
          {
            question: "Do I need engineering plans for structural changes?",
            answer: "Yes, most significant structural modifications require engineered plans, especially when removing load-bearing walls or making major changes to support systems. These plans ensure the modifications meet building code requirements and maintain your home's structural integrity. We coordinate with qualified structural engineers to develop these plans and obtain necessary approvals before beginning construction."
          }
        ]}
        relatedServices={[
          "home-renovation",
          "demolition",
          "house-additions",
          "insulation-drywall"
        ]}
      />
    </>
  );
};

export default ServiceFramingStructural;
