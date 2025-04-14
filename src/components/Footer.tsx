
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const serviceLinks = [
  { name: 'Home Renovation', path: '/services/home-renovation' },
  { name: 'Basement Underpinning', path: '/services/basement-underpinning' },
  { name: 'Basement Waterproofing', path: '/services/basement-waterproofing' },
  { name: 'Basement Finishing', path: '/services/basement-finishing' },
  { name: 'House Additions', path: '/services/house-additions' },
  { name: 'Demolition', path: '/services/demolition' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-darkGray text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Home<span className="text-brand-teal">4</span>Live</h3>
            <p className="mb-4 text-gray-300">
              Transforming living spaces with exceptional craftsmanship and personalized service in Toronto and the GTA.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-gray-300 hover:text-brand-teal transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-brand-teal" />
                <span>Richmond Hill, ON, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-teal" />
                <a href="tel:+16478069089" className="hover:text-brand-teal transition-colors">
                  +1 647-806-9089
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-teal" />
                <a href="mailto:info@home4live.com" className="hover:text-brand-teal transition-colors">
                  info@home4live.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Home4Live. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link to="/privacy-policy" className="hover:text-brand-teal transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-brand-teal transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="hover:text-brand-teal transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
