
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import QuoteModal from './QuoteModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openQuoteModal = () => {
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "transition-all duration-300 sticky top-0 z-50",
      scrolled 
        ? "bg-white shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-20">
            <span className={cn(
              "text-2xl font-bold transition-colors",
              scrolled ? "text-brand-blue" : "text-white"
            )}>Home<span className="text-brand-orange">4</span>Live</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-orange"
                  )}>
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "font-medium bg-transparent",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-orange"
                  )}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-6 w-[500px]">
                      <Link to="/services/home-renovation" className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-base font-medium text-brand-blue">Home Renovation</h3>
                        <p className="text-sm text-gray-500">Complete home renovation services for every room</p>
                      </Link>
                      <Link to="/services" className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-base font-medium text-brand-blue">Basement Underpinning</h3>
                        <p className="text-sm text-gray-500">Increase your basement ceiling height</p>
                      </Link>
                      <Link to="/services" className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-base font-medium text-brand-blue">Basement Waterproofing</h3>
                        <p className="text-sm text-gray-500">Protect your home from water damage</p>
                      </Link>
                      <Link to="/services" className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-base font-medium text-brand-blue">Basement Finishing</h3>
                        <p className="text-sm text-gray-500">Convert your unfinished basement into a beautiful space</p>
                      </Link>
                      <Link to="/services" className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-base font-medium text-brand-blue">House Additions</h3>
                        <p className="text-sm text-gray-500">Expand your home with custom additions</p>
                      </Link>
                      <Link to="/services" className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-base font-medium text-brand-blue">Demolition</h3>
                        <p className="text-sm text-gray-500">Professional, safe and efficient demolition services</p>
                      </Link>
                      <div className="col-span-2 mt-3 border-t pt-3">
                        <Link to="/services" className="flex items-center text-brand-blue hover:text-brand-orange font-medium">
                          View all services <ChevronDown className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-orange"
                  )}>
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-orange"
                  )}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+16478069089" className={cn(
              "flex items-center font-medium",
              scrolled ? "text-brand-orange" : "text-white"
            )}>
              <Phone size={18} className="mr-2" />
              <span>647-806-9089</span>
            </a>
            <Button 
              variant="default" 
              className="bg-brand-orange hover:bg-orange-600"
              onClick={openQuoteModal}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-20">
            <a href="tel:+16478069089" className={cn(
              "mr-4",
              scrolled ? "text-brand-orange" : "text-white"
            )}>
              <Phone size={24} />
            </a>
            <button onClick={toggleMenu} className={scrolled ? "text-brand-darkGray" : "text-white"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 bg-white animate-fade-in absolute top-full left-0 w-full z-10 shadow-md">
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                to="/" 
                className="font-medium text-brand-darkGray hover:text-brand-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              
              <div className="relative">
                <Link 
                  to="/services" 
                  className="font-medium text-brand-darkGray hover:text-brand-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors w-full flex justify-between items-center"
                  onClick={toggleMenu}
                >
                  <span>Services</span>
                </Link>
                <div className="pl-6 mt-2 space-y-2">
                  <Link 
                    to="/services/home-renovation" 
                    className="block font-medium text-sm text-brand-darkGray hover:text-brand-blue py-1 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Home Renovation
                  </Link>
                  <Link 
                    to="/services" 
                    className="block font-medium text-sm text-brand-darkGray hover:text-brand-blue py-1 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Basement Underpinning
                  </Link>
                  <Link 
                    to="/services" 
                    className="block font-medium text-sm text-brand-darkGray hover:text-brand-blue py-1 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Basement Waterproofing
                  </Link>
                </div>
              </div>
              
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
              
              <Button 
                variant="default" 
                className="w-full bg-brand-orange hover:bg-orange-600 mt-2"
                onClick={() => {
                  toggleMenu();
                  openQuoteModal();
                }}
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={closeQuoteModal} />
    </header>
  );
};

export default Header;
