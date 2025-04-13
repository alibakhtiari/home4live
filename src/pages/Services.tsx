
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { 
  Home, 
  Building, 
  Droplets, 
  PaintBucket, 
  HardHat, 
  Hammer, 
  FramerLogo,
  Wrench,
  Layers,
  Paintbrush,
  Cabinet,
  Sparkles
} from 'lucide-react';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceProps[] = [
  {
    id: 'home-renovation',
    title: 'Home Renovation',
    description: 'Our comprehensive home renovation services transform your living spaces into beautiful, functional areas that reflect your style and meet your needs. We handle everything from design to execution, ensuring a seamless renovation experience. Our team works closely with you to understand your vision and deliver exceptional results that enhance both the aesthetics and value of your home.',
    icon: <Home size={32} />
  },
  {
    id: 'basement-underpinning',
    title: 'Basement Underpinning',
    description: 'Increase your basement ceiling height and create additional living space with our professional underpinning services. This structural procedure allows you to expand your basement downward, potentially adding significant square footage to your home. Our experts handle all aspects of this complex process, from engineering and permits to excavation and reinforcement, ensuring structural integrity and compliance with building codes.',
    icon: <Building size={32} />
  },
  {
    id: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    description: 'Protect your home from water damage with our comprehensive basement waterproofing solutions. We address both interior and exterior water issues to ensure your basement remains dry year-round. Our waterproofing services include foundation crack repair, drainage system installation, sump pump installation, and exterior membrane application. Prevent costly water damage and create a healthier living environment with our professional waterproofing services.',
    icon: <Droplets size={32} />
  },
  {
    id: 'basement-finishing',
    title: 'Basement Finishing',
    description: 'Transform your unfinished basement into a beautiful, functional living space that adds value to your home. Our basement finishing services include design consultation, framing, electrical work, plumbing, insulation, drywall, flooring, and finishing touches. Whether you envision a family room, home office, gym, or entertainment area, we'll create a comfortable space that seamlessly integrates with your home's style.',
    icon: <PaintBucket size={32} />
  },
  {
    id: 'house-additions',
    title: 'House Additions',
    description: 'Expand your living space with custom house additions that blend seamlessly with your existing structure. Whether you need an extra bedroom, expanded kitchen, sunroom, or second-story addition, our team handles the entire process from design to construction. We ensure structural integrity, architectural harmony, and quality craftsmanship while working efficiently to minimize disruption to your daily life.',
    icon: <HardHat size={32} />
  },
  {
    id: 'demolition',
    title: 'Demolition',
    description: 'Our professional demolition services provide safe, efficient, and controlled removal of structures or interior elements to prepare for your renovation project. We handle selective interior demolition, wall removal, kitchen and bathroom demolition, and complete structural demolition when needed. Our team follows strict safety protocols and provides thorough cleanup, ensuring your project starts with a clean slate.',
    icon: <Hammer size={32} />
  },
  {
    id: 'framing-structural',
    title: 'Framing & Structural Work',
    description: 'Our expert team handles all aspects of framing and structural work, establishing the essential framework for your renovation project. We provide load-bearing wall modifications, structural beam installations, new wall framing, floor and ceiling joist installation, and roof framing. All work is performed to exact specifications, ensuring structural integrity and compliance with building codes.',
    icon: <FramerLogo size={32} />
  },
  {
    id: 'plumbing-electrical-hvac',
    title: 'Plumbing, Electrical & HVAC',
    description: 'Our licensed professionals handle all your plumbing, electrical, and HVAC needs for a complete renovation. Services include fixture installation, wiring upgrades, panel replacements, lighting design, heating and cooling system installations, and ventilation improvements. We ensure all systems are installed correctly, functioning efficiently, and meeting all current building codes and safety standards.',
    icon: <Wrench size={32} />
  },
  {
    id: 'insulation-drywall',
    title: 'Insulation & Drywall',
    description: 'Create a comfortable, energy-efficient space with our professional insulation and drywall services. We provide various insulation options including fiberglass, spray foam, and rigid foam to improve your home's thermal efficiency. Our drywall installation includes hanging, taping, mudding, sanding, and priming, creating smooth, perfect walls ready for painting.',
    icon: <Layers size={32} />
  },
  {
    id: 'flooring-finishes',
    title: 'Flooring & Finishes',
    description: 'Complete your renovation with our premium flooring and finishing services. We install hardwood, engineered wood, laminate, tile, vinyl, and carpet flooring to suit your style and needs. Our finishing services include trim work, door installation, painting, wallpaper, and decorative elements that add the perfect final touch to your newly renovated space.',
    icon: <Paintbrush size={32} />
  },
  {
    id: 'cabinetry-fixtures',
    title: 'Cabinetry & Fixtures',
    description: 'Enhance your home with custom cabinetry and fixture installations that combine beauty and functionality. We offer custom cabinet design and installation, countertop selection and installation, bathroom vanity installation, lighting fixture installation, and hardware selection and mounting. Our attention to detail ensures these important elements perfectly complement your space.',
    icon: <Cabinet size={32} />
  },
  {
    id: 'final-touches',
    title: 'Final Touches & Clean-up',
    description: 'We complete your renovation project with meticulous final touches and thorough clean-up. Our final phase includes touch-up painting, caulking and sealing, fixture adjustment, deep cleaning of all surfaces, debris removal, and a detailed final inspection. We ensure every aspect of your renovation is perfected before considering the project complete.',
    icon: <Sparkles size={32} />
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
      {/* Hero Section */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">Our Renovation Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive renovation and construction services for homeowners in Toronto and the Greater Toronto Area
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Comprehensive Renovation Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From basement underpinning to complete home renovations, we provide expert services for every aspect of your project
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      {service.icon}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                {/* Only add separator if not the last item */}
                {service.id !== services[services.length - 1].id && (
                  <div className="border-b border-gray-200 my-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Ready to Start Your Renovation Project?"
        subtitle="Contact us today for a free consultation and detailed estimate"
      />
    </Layout>
  );
};

export default ServicesPage;
