
import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Building2 } from 'lucide-react';
import SEO from '@/components/SEO';

const ServiceFoundationRepair = () => {
  return (
    <>
      <SEO 
        title="Foundation Repair Services in Toronto & GTA | Home4Live"
        description="Professional foundation repair services to ensure the structural integrity of your home. Serving Toronto and the Greater Toronto Area."
        canonicalUrl="/services/foundation-repair"
        keywords="foundation repair, foundation cracks, structural repair, Toronto foundation services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Foundation Repair",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Professional foundation repair services to ensure the structural integrity of your home."
        }}
      />
      <ServicePage
        id="foundation-repair"
        title="Foundation Repair"
        description="Protect your home's structural integrity with our comprehensive foundation repair solutions."
        icon={<Building2 size={48} />}
        content={{
          intro: "Foundation repair is essential for maintaining the structural integrity of your home. Over time, foundations can develop issues due to soil settlement, water damage, or structural stresses. At Home4Live, we specialize in identifying and addressing foundation problems before they escalate into major structural concerns. Our experienced team uses advanced techniques and high-quality materials to deliver lasting foundation repairs that protect your home and investment for years to come.",
          benefits: {
            title: "Benefits of Professional Foundation Repair",
            description: [
              {
                title: "Restored Structural Integrity",
                description: "Properly repaired foundations restore your home's structural stability and prevent further deterioration."
              },
              {
                title: "Increased Property Value",
                description: "A sound foundation significantly impacts your property's market value and makes it more appealing to potential buyers."
              },
              {
                title: "Prevention of Secondary Damage",
                description: "Fixing foundation issues prevents related problems like cracked walls, uneven floors, and damaged plumbing."
              },
              {
                title: "Energy Efficiency",
                description: "Repaired foundations eliminate gaps and cracks that can lead to air leaks and increased energy consumption."
              },
              {
                title: "Improved Living Conditions",
                description: "Foundation repairs reduce moisture intrusion, preventing mold growth and creating a healthier living environment."
              },
              {
                title: "Long-term Peace of Mind",
                description: "Our quality repairs come with warranties, giving you confidence in your home's stability for years to come."
              }
            ]
          },
          process: {
            title: "Our Foundation Repair Process",
            steps: [
              {
                title: "Comprehensive Inspection",
                description: "We perform a thorough evaluation of your foundation, identifying all issues and their underlying causes."
              },
              {
                title: "Customized Repair Plan",
                description: "Our engineers develop a targeted plan addressing your specific foundation issues using the most appropriate techniques."
              },
              {
                title: "Site Preparation",
                description: "We carefully prepare the area, protecting your property and ensuring efficient implementation of repairs."
              },
              {
                title: "Professional Repair Implementation",
                description: "Our experienced technicians execute the repair plan using industry-leading methods and materials."
              },
              {
                title: "Waterproofing Application",
                description: "When necessary, we apply waterproofing measures to prevent future moisture-related foundation damage."
              },
              {
                title: "Soil Stabilization",
                description: "We address soil issues that contributed to foundation problems, ensuring long-term stability."
              },
              {
                title: "Quality Verification",
                description: "After repairs, we thoroughly inspect all work to ensure it meets our strict quality standards."
              },
              {
                title: "Documentation and Recommendations",
                description: "We provide detailed documentation of repairs and recommendations for maintaining your foundation."
              }
            ]
          },
          features: {
            title: "Our Foundation Repair Services Include",
            items: [
              "Crack injection and sealing",
              "Carbon fiber reinforcement installation",
              "Foundation wall stabilization",
              "Foundation underpinning and support",
              "Waterproofing and drainage solutions",
              "Slab foundation repair",
              "Bowed wall correction",
              "Sinking foundation repair with piers",
              "Interior drain tile installation",
              "Exterior foundation excavation and repair",
              "Foundation settlement solutions",
              "Structural beam and column installation",
              "Preventative foundation maintenance",
              "Engineered repair design and implementation",
              "Post-repair inspections and documentation"
            ]
          }
        }}
        galleryFolder="foundation-repair"
        faqs={[
          {
            question: "What are the common signs of foundation problems?",
            answer: "Common signs include cracks in walls or floors (especially diagonal cracks), doors or windows that stick or won't close properly, sloping or uneven floors, gaps between walls and ceilings or floors, bowed or bulging foundation walls, and water intrusion in the basement or crawl space. If you notice any of these signs, it's important to have your foundation inspected by a professional as soon as possible."
          },
          {
            question: "How do you determine which foundation repair method is best for my home?",
            answer: "We determine the best repair method through a comprehensive assessment process. This includes a visual inspection of damage, measuring floor levels and wall movement, evaluating soil conditions, and sometimes using specialized equipment to assess structural integrity. Based on these findings, our engineers recommend the most appropriate and cost-effective solution for your specific foundation issues."
          },
          {
            question: "How long do foundation repairs typically take?",
            answer: "The timeline varies depending on the extent of damage and type of repair needed. Simple crack injections might be completed in a day, while more extensive repairs involving underpinning or wall stabilization typically take 3-7 days. Complex projects with multiple issues might take 1-2 weeks. During your consultation, we'll provide a specific timeline based on your home's unique situation."
          },
          {
            question: "Will foundation repairs disrupt my daily life?",
            answer: "We make every effort to minimize disruption. Interior repairs may require access to specific areas of your home, but you can typically continue living there during the process. Exterior repairs cause minimal interior disruption. Our team communicates clearly about work schedules, maintains a clean work area, and respects your property throughout the project."
          },
          {
            question: "Do foundation repairs come with a warranty?",
            answer: "Yes, all our foundation repair work comes with a transferable warranty. Depending on the type of repair, warranties typically range from 10 years to lifetime coverage. This gives you peace of mind knowing that your investment is protected, and the warranty can even be transferred to new owners if you sell your home in the future."
          },
          {
            question: "Can foundation problems be permanently fixed?",
            answer: "When properly diagnosed and repaired by experienced professionals, most foundation problems can be permanently resolved. Our comprehensive approach addresses not just the symptoms but the underlying causes of foundation issues, such as soil problems or water intrusion. By combining the right repair techniques with preventative measures like waterproofing and drainage improvements, we provide long-lasting solutions."
          }
        ]}
        relatedServices={[
          "basement-waterproofing",
          "basement-underpinning",
          "exterior-drainage",
          "home-renovation"
        ]}
      />
    </>
  );
};

export default ServiceFoundationRepair;
