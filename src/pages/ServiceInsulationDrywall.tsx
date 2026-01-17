import React from 'react';
import ServicePage from '@/components/ServicePage';
import SEO from '@/components/SEO';
import { Layers } from 'lucide-react';

const ServiceInsulationDrywall = () => {
  return (
    <>
      <SEO
        title="Insulation & Drywall Services - Toronto Home Renovation"
        description="Professional insulation and drywall services for Toronto homes. Improve energy efficiency and create beautiful interior spaces with our expert installation."
        canonicalUrl="/services/insulation-drywall"
        keywords="insulation installation, drywall installation, energy efficiency, soundproofing, home renovation Toronto"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Insulation & Drywall Services",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "City",
            "name": "Toronto"
          },
          "description": "Professional insulation and drywall installation services for residential properties in Toronto and the GTA"
        }}
      />
      <ServicePage
        id="insulation-drywall"
        title="Insulation & Drywall Services"
        description="Create a comfortable, energy-efficient space with our professional insulation and drywall services, using quality materials and expert installation techniques."
        icon={<Layers size={40} />}
        content={{
          intro: "Proper insulation and drywall installation are fundamental to creating comfortable, energy-efficient, and aesthetically pleasing living spaces. At Home4Live, we specialize in providing comprehensive insulation and drywall services that enhance your home's thermal performance, sound control, and interior appearance. Our expert team utilizes premium materials and proven techniques to deliver exceptional results for your renovation or new construction project.",
          benefits: {
            title: "Benefits of Professional Insulation & Drywall",
            description: [
              {
                title: "Energy Efficiency",
                description: "Quality insulation significantly reduces heat transfer, helping maintain comfortable indoor temperatures year-round while lowering heating and cooling costs by up to 30%."
              },
              {
                title: "Sound Control",
                description: "Proper insulation and drywall installation with acoustic considerations creates quieter, more peaceful living spaces by reducing sound transmission between rooms and from outside."
              },
              {
                title: "Improved Air Quality",
                description: "Modern insulation materials and proper installation techniques can reduce allergens, prevent moisture issues, and create healthier indoor environments."
              }
            ]
          },
          process: {
            title: "Our Insulation & Drywall Process",
            steps: [
              {
                title: "Comprehensive Assessment",
                description: "We evaluate your specific needs, considering factors like climate, existing insulation, acoustic requirements, and design preferences."
              },
              {
                title: "Material Selection",
                description: "We help you select the optimal insulation types and drywall specifications for your project, balancing performance, sustainability, and budget considerations."
              },
              {
                title: "Preparation",
                description: "Our team prepares the work area, addressing any existing issues like moisture problems, electrical considerations, or structural concerns before installation begins."
              },
              {
                title: "Expert Installation",
                description: "Our skilled professionals install insulation and drywall with precision, ensuring proper coverage, sealing, and technique for maximum performance."
              },
              {
                title: "Finishing & Cleanup",
                description: "We complete all taping, mudding, sanding, and finishing work to create smooth, ready-to-paint surfaces, followed by thorough cleanup of the work area."
              }
            ]
          },
          features: {
            title: "Our Insulation & Drywall Services Include",
            items: [
              "Batt and roll insulation installation (fiberglass, mineral wool)",
              "Blown-in insulation for attics and existing walls",
              "Spray foam insulation for superior air sealing",
              "Rigid foam board installation for basements and exteriors",
              "Acoustic insulation for sound control",
              "Standard drywall installation for walls and ceilings",
              "Moisture-resistant drywall for bathrooms and kitchens",
              "Fire-resistant drywall for increased safety",
              "Impact-resistant drywall for high-traffic areas",
              "Specialty drywall installation (curved walls, coffered ceilings)",
              "Textured finishes and custom drywall details",
              "Complete finishing services (taping, mudding, sanding)",
              "Insulation removal and replacement",
              "Insulation upgrades for improved energy efficiency"
            ]
          }
        }}
        galleryFolder="insulation-drywall-taping"
        faqs={[
          {
            question: "What type of insulation is best for my home?",
            answer: "The best insulation type depends on several factors, including your climate, the area being insulated, your budget, and performance goals. For example, spray foam offers excellent air sealing and high R-value for areas like attics and rim joists, while fiberglass batts may be more cost-effective for standard wall cavities. During our assessment, we'll recommend the optimal insulation types for your specific needs."
          },
          {
            question: "How much can I save on energy bills with proper insulation?",
            answer: "According to Energy Star, properly insulating your home can save approximately 15% to 30% on heating and cooling costs, depending on your existing insulation levels and climate. For the average Toronto home, this can translate to hundreds of dollars in annual savings. Beyond direct energy savings, proper insulation also reduces wear on HVAC systems, potentially extending their lifespan."
          },
          {
            question: "Is there special drywall for bathrooms and other moist areas?",
            answer: "Yes, moisture-resistant drywall (often called 'green board') is specifically designed for areas exposed to humidity but not direct water contact. For areas with direct water exposure, such as shower surrounds, we recommend cement board or other waterproof backer materials. We select the appropriate material for each area based on moisture exposure levels to prevent mold and structural issues."
          },
          {
            question: "How long does the drywall installation and finishing process take?",
            answer: "The timeline varies depending on the project size and complexity. For an average room, drywall installation typically takes 1-2 days, followed by 3-4 days for the finishing process (taping, mudding, and sanding), which requires multiple coats with drying time between each. We can provide a specific timeline during your consultation based on your project's scope."
          },
          {
            question: "Can you add insulation to my existing walls without removing the drywall?",
            answer: "Yes, we offer blown-in insulation services for existing walls, which requires only small access holes that are easily patched afterward. This method is ideal for adding insulation to finished walls without the disruption of complete drywall removal. We'll assess your walls to determine if this approach is suitable for your home."
          }
        ]}
        relatedServices={["home-renovation", "basement-finishing", "house-additions", "flooring-finishes"]}
      />
    </>
  );
};

export default ServiceInsulationDrywall;
