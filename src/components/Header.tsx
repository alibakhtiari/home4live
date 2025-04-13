
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-blue">Home<span className="text-brand-orange">4</span>Live</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-brand-darkGray hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-brand-darkGray hover:text-brand-blue transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium text-brand-darkGray hover:text-brand-blue transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-brand-darkGray hover:text-brand-blue transition-colors">
              Contact
            </Link>
            <a href="tel:+16478069089" className="flex items-center text-brand-orange font-medium">
              <Phone size={18} className="mr-2" />
              <span>647-806-9089</span>
            </a>
            <Link to="/contact">
              <Button variant="default" className="bg-brand-orange hover:bg-orange-600">Get a Quote</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a href="tel:+16478069089" className="mr-4 text-brand-orange">
              <Phone size={24} />
            </a>
            <button onClick={toggleMenu} className="text-brand-darkGray">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium text-brand-darkGray hover:text-brand-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-brand-darkGray hover:text-brand-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-brand-darkGray hover:text-brand-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-brand-darkGray hover:text-brand-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/contact"
                className="py-2 px-4"
                onClick={toggleMenu}
              >
                <Button variant="default" className="w-full bg-brand-orange hover:bg-orange-600">Get a Quote</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
