
import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Droplet } from 'lucide-react';
import SEO from '@/components/SEO';

const ServiceExteriorDrainage = () => {
  return (
    <>
      <SEO 
        title="Exterior Drainage Solutions in Toronto & GTA | Home4Live"
        description="Professional exterior drainage systems to protect your home from water damage. Serving Toronto and the Greater Toronto Area."
        canonicalUrl="/services/exterior-drainage"
        keywords="exterior drainage, yard drainage, french drains, downspout extensions, Toronto drainage"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Exterior Drainage Solutions",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Professional exterior drainage systems to protect your home from water damage and prevent foundation issues."
        }}
      />
      <ServicePage
        id="exterior-drainage"
        title="Exterior Drainage Solutions"
        description="Protect your home's foundation and landscaping with our comprehensive exterior drainage systems and solutions."
        icon={<Droplet size={48} />}
        content={{
          intro: "Proper exterior drainage is essential for protecting your home from water damage. When rainwater and melting snow aren't properly channeled away from your property, they can cause foundation damage, basement flooding, landscape erosion, and create breeding grounds for pests. At Home4Live, we design and install comprehensive exterior drainage solutions tailored to your property's specific needs. Our systems effectively manage surface water, redirecting it away from your home to protect your investment and prevent costly water damage repairs.",
          benefits: {
            title: "Benefits of Professional Exterior Drainage",
            description: [
              {
                title: "Foundation Protection",
                description: "Prevent water from pooling around your foundation, reducing the risk of cracks, settling, and structural damage."
              },
              {
                title: "Basement Flood Prevention",
                description: "Properly channeled water dramatically reduces the likelihood of basement flooding and moisture intrusion."
              },
              {
                title: "Landscape Preservation",
                description: "Prevent soil erosion, protect plantings, and maintain the beauty and functionality of your outdoor spaces."
              },
              {
                title: "Reduced Mosquito Breeding",
                description: "Eliminate standing water that serves as breeding grounds for mosquitoes and other pests."
              },
              {
                title: "Increased Property Value",
                description: "Well-designed drainage systems protect your investment and can increase your property's market value."
              },
              {
                title: "Drier, More Usable Yard",
                description: "Transform soggy areas into usable outdoor living spaces that your family can enjoy year-round."
              }
            ]
          },
          process: {
            title: "Our Exterior Drainage Process",
            steps: [
              {
                title: "Comprehensive Site Assessment",
                description: "We carefully evaluate your property's topography, soil type, existing drainage patterns, and problem areas."
              },
              {
                title: "Custom System Design",
                description: "Our team creates a tailored drainage plan addressing your specific issues and property characteristics."
              },
              {
                title: "Detailed Planning and Permitting",
                description: "We handle any necessary permits and create a detailed implementation plan that minimizes disruption."
              },
              {
                title: "Precise Installation",
                description: "Our experienced technicians carefully install your drainage system using quality materials and best practices."
              },
              {
                title: "Integration with Existing Systems",
                description: "We ensure new drainage components work seamlessly with existing systems including gutters and downspouts."
              },
              {
                title: "Landscape Restoration",
                description: "After installation, we carefully restore affected landscaping, leaving your property looking better than before."
              },
              {
                title: "System Testing",
                description: "We thoroughly test all installed components to verify proper water flow and system effectiveness."
              },
              {
                title: "Maintenance Guidance",
                description: "We provide detailed information on maintaining your new drainage system for optimal long-term performance."
              }
            ]
          },
          features: {
            title: "Our Exterior Drainage Services Include",
            items: [
              "French drain installation",
              "Surface drain and catch basin systems",
              "Downspout extensions and burial",
              "Swale creation and optimization",
              "Yard drainage solutions",
              "Driveway drainage systems",
              "Sump pump discharge lines",
              "Dry well installation",
              "Retaining wall drainage",
              "Grading and re-sloping services",
              "Erosion control measures",
              "Rain garden design and installation",
              "Permeable paving solutions",
              "Drainage for patios and hardscapes",
              "Green infrastructure solutions"
            ]
          }
        }}
        galleryImages={[
          {
            src: "https://images.unsplash.com/photo-1565809446861-57289f7bde4e",
            alt: "French drain installation process",
            caption: "Professional French Drain Installation"
          },
          {
            src: "https://images.unsplash.com/photo-1619362280026-6c605548bc74",
            alt: "Surface drain installation in yard",
            caption: "Surface Drainage System"
          },
          {
            src: "https://images.unsplash.com/photo-1567359399521-bb228e53e085",
            alt: "Downspout extension and burial",
            caption: "Downspout Management System"
          },
          {
            src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
            alt: "Yard grading and drainage improvement",
            caption: "Professional Grading Service"
          },
          {
            src: "https://images.unsplash.com/photo-1516722658162-2cd9bdad232a",
            alt: "Yard drainage system with catch basins",
            caption: "Complete Yard Drainage Solution"
          },
          {
            src: "https://images.unsplash.com/photo-1523867574998-1a336b0b1b0e",
            alt: "Properly drained and landscaped yard",
            caption: "Completed Drainage and Landscaping"
          }
        ]}
        faqs={[
          {
            question: "How can I tell if my property needs improved exterior drainage?",
            answer: "Signs your property needs better drainage include: standing water in your yard after rain, soggy lawn areas that take days to dry, water pooling near your foundation, basement moisture or flooding, eroded landscaping, water stains on foundation walls, mold or mildew growth, and landscaping that's failing to thrive. If you're experiencing any of these issues, a professional drainage assessment can identify the causes and solutions."
          },
          {
            question: "What type of exterior drainage system is best for my property?",
            answer: "The best system depends on your specific issues, property characteristics, and budget. For surface water issues, French drains, channel drains, or re-grading might be appropriate. For downspout management, extensions or underground drainage pipes work well. Properties with severe drainage problems might need comprehensive solutions combining multiple systems. Our experts will recommend the most effective and efficient options after a thorough assessment."
          },
          {
            question: "How long do exterior drainage systems typically last?",
            answer: "When properly installed and maintained, most exterior drainage systems have a lifespan of 15-25 years. Factors affecting longevity include material quality, soil conditions, installation techniques, maintenance practices, and the severity of water issues. Regular cleaning and inspection can significantly extend system life. Our drainage solutions use high-quality materials and installation methods to maximize longevity."
          },
          {
            question: "Will installing drainage systems damage my landscaping?",
            answer: "While drainage installation does require excavation in parts of your yard, our careful process minimizes landscape disruption. We precisely plan excavation routes, carefully remove and preserve plants when possible, and protect trees and established landscaping features. After installation, we restore all affected areas, including replacing sod, mulch, and repositioning plants. Many clients find their yards look even better after our work is completed."
          },
          {
            question: "Can I install exterior drainage systems myself?",
            answer: "While DIY drainage projects are possible for those with experience, professional installation is recommended for several reasons: Proper drainage requires understanding of water flow physics, soil properties, and local regulations. Incorrect installation can redirect water to problematic areas or neighboring properties, potentially creating liability issues. Professional installation includes proper sizing, slope calculations, and integration with existing systems to ensure optimal performance and longevity."
          },
          {
            question: "How much maintenance do exterior drainage systems require?",
            answer: "Maintenance requirements are relatively minimal but important. Typical maintenance includes regular inspection of inlets, outlets, and catch basins (2-4 times per year), removal of debris and sediment, checking for proper water flow, and ensuring downspouts remain connected and directed properly. More extensive cleaning might be needed every 3-5 years. We provide detailed maintenance guidance specific to your installed system. Many clients opt for our annual maintenance service to ensure optimal system performance."
          }
        ]}
        relatedServices={[
          "basement-waterproofing",
          "foundation-repair",
          "basement-underpinning",
          "home-renovation"
        ]}
      />
    </>
  );
};

export default ServiceExteriorDrainage;
