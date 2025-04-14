import React from 'react';
import ServicePage from '@/components/ServicePage';
import { BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';

const ServiceCabinetryFixtures = () => {
  return (
    <>
      <SEO 
        title="Cabinetry & Fixtures Services | Toronto & GTA | Home4Live"
        description="Enhance your home with custom cabinetry and fixture installations that combine beauty and functionality."
        canonicalUrl="/services/cabinetry-fixtures"
        keywords="cabinetry, custom cabinets, fixtures, kitchen cabinets, bathroom vanities, home renovation, Toronto renovations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cabinetry & Fixtures Services",
          "provider": {
            "@type": "Organization",
            "name": "Home4Live"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Toronto and Greater Toronto Area"
          },
          "description": "Custom cabinetry and fixture installations that enhance your home with beauty and functionality."
        }}
      />
      <ServicePage
        id="cabinetry-fixtures"
        title="Cabinetry & Fixtures"
        description="Enhance your home with custom cabinetry and fixture installations that combine beauty and functionality."
        icon={<BookOpen size={48} />}
        content={{
          intro: "Cabinetry and fixtures are the cornerstone elements that define the character of your kitchen, bathroom, and other living spaces while providing essential storage and functionality. At Home4Live, we specialize in designing and installing custom and semi-custom cabinetry solutions paired with premium fixtures that elevate your home's aesthetics and enhance your daily experience. From kitchen cabinets that maximize efficiency to bathroom vanities that combine beauty with practicality, our craftsmanship and attention to detail ensure each installation reflects your personal style and meets your functional needs.",
          benefits: {
            title: "Benefits of Professional Cabinetry & Fixtures",
            description: [
              {
                title: "Customized Storage Solutions",
                description: "Custom and semi-custom cabinetry maximizes your available space with storage solutions designed specifically for your needs and belongings."
              },
              {
                title: "Enhanced Functionality",
                description: "Professionally designed cabinetry incorporates features like pull-out organizers, soft-close mechanisms, and specialized storage that improve daily usability."
              },
              {
                title: "Premium Aesthetics",
                description: "Quality cabinetry and fixtures serve as focal points that define your space's character and create a cohesive, designer-quality appearance."
              },
              {
                title: "Increased Home Value",
                description: "Kitchen and bathroom renovations with high-quality cabinetry and fixtures consistently provide the highest return on investment among home improvements."
              },
              {
                title: "Better Durability",
                description: "Professional-grade cabinetry and fixtures are built to withstand years of daily use, with superior materials and construction compared to budget options."
              },
              {
                title: "Perfect Integration",
                description: "Our comprehensive approach ensures cabinets, countertops, fixtures, and appliances work together seamlessly in both function and design."
              }
            ]
          },
          process: {
            title: "Our Cabinetry & Fixtures Process",
            steps: [
              {
                title: "Design Consultation",
                description: "We begin by understanding your aesthetic preferences, functional needs, and budget to create a customized design plan for your cabinetry and fixtures."
              },
              {
                title: "Material and Style Selection",
                description: "Our designers help you select cabinet materials, door styles, hardware, countertops, and fixtures that align with your vision and practical requirements."
              },
              {
                title: "Detailed Measurements",
                description: "We take precise measurements of your space to ensure perfect fit, accounting for walls, windows, doors, and existing mechanical elements."
              },
              {
                title: "Custom Design and Planning",
                description: "Our team creates detailed designs and 3D renderings, allowing you to visualize your space before committing to final choices."
              },
              {
                title: "Material Procurement",
                description: "We source high-quality materials, cabinetry, countertops, and fixtures, coordinating delivery timelines with your renovation schedule."
              },
              {
                title: "Professional Installation",
                description: "Our skilled craftsmen install cabinets with precision, ensuring they're level, plumb, and properly secured for maximum durability."
              },
              {
                title: "Countertop Installation",
                description: "We coordinate and install your selected countertops, ensuring perfect fit and proper integration with sinks and other fixtures."
              },
              {
                title: "Fixture and Hardware Installation",
                description: "The final stage includes installing sinks, faucets, lighting fixtures, and cabinet hardware with meticulous attention to detail and functionality."
              }
            ]
          },
          features: {
            title: "Our Cabinetry & Fixtures Services Include",
            items: [
              "Custom kitchen cabinetry design and installation",
              "Bathroom vanity selection and installation",
              "Built-in cabinetry for living spaces",
              "Kitchen and bathroom countertop installation",
              "Cabinet refacing and restoration",
              "Sink and faucet installation",
              "Cabinet hardware selection and installation",
              "Custom islands and peninsula construction",
              "Specialty cabinet features and organizers",
              "Pantry and storage solutions",
              "Open shelving design and installation",
              "Lighting fixture installation",
              "Smart home fixture integration",
              "Eco-friendly cabinetry options",
              "Luxury and premium fixture installation"
            ]
          }
        }}
        galleryImages={[
          {
            src: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7",
            alt: "Modern kitchen with custom cabinetry",
            caption: "Contemporary Kitchen Cabinetry"
          },
          {
            src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
            alt: "Luxury bathroom vanity installation",
            caption: "Elegant Bathroom Vanity"
          },
          {
            src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224",
            alt: "Kitchen with premium fixtures",
            caption: "Premium Kitchen Fixtures"
          },
          {
            src: "https://images.unsplash.com/photo-1574739782594-db4ead022697",
            alt: "Built-in cabinetry for living room",
            caption: "Custom Built-in Cabinetry"
          },
          {
            src: "https://images.unsplash.com/photo-1645327493445-93e925de47a3",
            alt: "Kitchen island with storage",
            caption: "Functional Kitchen Island"
          },
          {
            src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            alt: "Modern bathroom fixtures",
            caption: "Contemporary Bathroom Fixtures"
          }
        ]}
        faqs={[
          {
            question: "What's the difference between custom, semi-custom, and stock cabinetry?",
            answer: "Stock cabinetry comes in predetermined sizes, styles, and finishes, offering the most economical option but limited customization. Semi-custom cabinetry provides more flexibility with various size modifications and finish options while maintaining cost efficiency. Custom cabinetry is built specifically for your space with unlimited design possibilities, materials, and features—offering the highest quality and perfect fit at a premium price. The right choice depends on your budget, timeline, and how precisely you want to optimize your space. During consultation, we can show examples of each and help determine which approach best serves your needs."
          },
          {
            question: "How long does custom cabinetry installation typically take?",
            answer: "For a standard kitchen with custom cabinetry, the entire process from initial design to completed installation typically takes 8-12 weeks. This timeline includes 2-3 weeks for design and planning, 4-6 weeks for cabinet fabrication, and 1-2 weeks for installation. Semi-custom cabinetry may reduce the timeline by 2-3 weeks, while stock cabinetry can further compress the schedule. Bathroom vanities and smaller projects generally require less time. These timelines can vary based on project complexity, material availability, and current demand. We'll provide a detailed schedule during your project planning phase."
          },
          {
            question: "What cabinet materials are most durable for kitchens?",
            answer: "For kitchen cabinet boxes, plywood offers superior durability compared to particleboard or MDF, particularly in moisture-prone areas. For cabinet doors, solid wood provides excellent longevity but may expand and contract with humidity changes. Thermofoil (vinyl-wrapped MDF) offers good moisture resistance at a lower price point. High-pressure laminate provides outstanding durability against scratches and impact. For luxury kitchens, we recommend premium hardwoods like maple or cherry for cabinet frames with solid wood or high-quality veneered doors. Your best choice depends on your budget, aesthetic preferences, and how heavily your kitchen is used."
          },
          {
            question: "Should bathroom fixtures match throughout the house?",
            answer: "While maintaining some consistency in bathroom fixtures throughout your home creates a cohesive feel, identical fixtures aren't necessary. A better approach is coordinating fixtures within each bathroom while ensuring all bathrooms share a compatible design language. For example, all fixtures might feature similar finishes (like brushed nickel or matte black) or share design elements (contemporary, traditional, etc.) while allowing variation in specific styles. Primary bathrooms can feature more luxurious fixtures, while guest bathrooms might have simpler designs. Our designers can help create a cohesive yet interesting fixture strategy across your home."
          },
          {
            question: "What are the most popular cabinet storage features?",
            answer: "Today's most popular cabinet storage features prioritize accessibility and organization. Pull-out trash and recycling bins eliminate freestanding containers. Deep drawer organizers with dividers properly store cookware and dinnerware. Pull-out spice racks and pantry shelves bring items at the back within easy reach. Vertical dividers organize baking sheets and cutting boards efficiently. Specialized drawers for knives protect blades and fingers. Corner cabinet solutions like lazy Susans or pull-out systems maximize traditionally awkward spaces. During design, we'll discuss your cooking habits and storage needs to recommend the most beneficial features for your lifestyle."
          },
          {
            question: "How do I choose the right countertop material?",
            answer: "Selecting the ideal countertop involves balancing aesthetics, durability, maintenance, and budget. Quartz offers exceptional durability and minimal maintenance with consistent patterning. Granite provides natural beauty and heat resistance but requires periodic sealing. Marble delivers unmatched elegance but is more susceptible to staining and etching. Solid surface (like Corian) allows seamless integration with sinks and backsplashes. Butcher block brings warmth but needs regular maintenance. Porcelain and sintered stone are newer options offering extreme durability and heat resistance. During consultation, we'll discuss how you use your space and help select materials that balance beauty with practical performance for your lifestyle."
          }
        ]}
        relatedServices={[
          "home-renovation",
          "kitchen-renovation",
          "bathroom-renovation",
          "flooring-finishes"
        ]}
      />
    </>
  );
};

export default ServiceCabinetryFixtures;
