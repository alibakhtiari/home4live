
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Sitemap = () => {
  const services = [
    { name: 'Home Renovation', path: '/services/home-renovation' },
    { name: 'Basement Underpinning', path: '/services/basement-underpinning' },
    { name: 'Basement Waterproofing', path: '/services/basement-waterproofing' },
    { name: 'Basement Finishing', path: '/services/basement-finishing' },
    { name: 'House Additions', path: '/services/house-additions' },
    { name: 'Demolition', path: '/services/demolition' },
  ];

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];
  
  return (
    <Layout>
      <SEO 
        title="Sitemap | Home4Live"
        description="Navigate through all pages and services offered by Home4Live."
        canonicalUrl="/sitemap"
      />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Sitemap</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.path}>
                    <Link 
                      to={page.path} 
                      className="flex items-center text-lg text-brand-blue hover:text-brand-teal transition-colors"
                    >
                      <ChevronRight size={20} className="mr-2" />
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/services" 
                    className="flex items-center text-lg text-brand-blue hover:text-brand-teal transition-colors font-medium"
                  >
                    <ChevronRight size={20} className="mr-2" />
                    All Services
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.path} className="ml-6">
                    <Link 
                      to={service.path} 
                      className="flex items-center text-lg text-brand-blue hover:text-brand-teal transition-colors"
                    >
                      <ChevronRight size={18} className="mr-2" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Legal Information</h2>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                {legalPages.map((page) => (
                  <li key={page.path}>
                    <Link 
                      to={page.path} 
                      className="flex items-center text-lg text-brand-blue hover:text-brand-teal transition-colors"
                    >
                      <ChevronRight size={20} className="mr-2" />
                      {page.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/sitemap" 
                    className="flex items-center text-lg text-brand-blue hover:text-brand-teal transition-colors"
                  >
                    <ChevronRight size={20} className="mr-2" />
                    Sitemap
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      {/* Structured Data for Sitemap */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            ...pages.map((page, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": page.name,
              "item": `https://home4live.ca${page.path}`
            })),
            ...services.map((service, index) => ({
              "@type": "ListItem",
              "position": pages.length + index + 1,
              "name": service.name,
              "item": `https://home4live.ca${service.path}`
            })),
            ...legalPages.map((page, index) => ({
              "@type": "ListItem",
              "position": pages.length + services.length + index + 1,
              "name": page.name,
              "item": `https://home4live.ca${page.path}`
            }))
          ]
        })}
      </script>
    </Layout>
  );
};

export default Sitemap;
