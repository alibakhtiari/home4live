
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight,HomeIcon, Building, Droplets, PaintBucket ,HardHat ,Hammer} from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import QuoteModal from './QuoteModal';

// Services data for mega menu
const services = [
  {
    title: "Home Renovation",
    path: "/services/home-renovation",
    ic: <HomeIcon />
  },
  {
    title: "Basement Underpinning",
    path: "/services/basement-underpinning",
    ic: <Building/>
  },
  {
    title: "Basement Waterproofing",
    path: "/services/basement-waterproofing",
    ic: <Droplets/>
  },
  {
    title: "Basement Finishing",
    path: "/services/basement-finishing",
    ic: <PaintBucket/>
  },
  {
    title: "House Additions",
    path: "/services/house-additions",
    ic: <HardHat/>
  },
  {
    title: "Demolition",
    path: "/services/demolition",
    ic: <Hammer/>
  }
];

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
      "transition-all duration-300 fixed w-full top-0 z-50",
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
            )}>Home<span className="text-brand-teal">4</span>Live</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
                  )}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "font-medium bg-transparent",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
                  )}>
                    <Link to="/services" className="flex items-center">
                    Services
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[600px]">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex  gap-2 items-center content-center rounded-md hover:bg-gray-100"
                        > <span className='w-10 h-10 flex items-center justify-center rounded-full bg-brand-teal/10 text-gray-800'>{service.ic}</span>
                          <h3 className="text-base font-medium text-gray-800 mb-0">{service.title}</h3>
                        </Link>
                      ))}
                      <div className="col-span-2 border-t pt-2 ">
                        <Link to="/services" className="flex items-center text-brand-blue hover:text-brand-teal font-medium">
                          View all services <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
                  )}>
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    scrolled ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
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
              scrolled ? "text-brand-teal" : "text-white"
            )}>
              <Phone size={18} className="mr-2" />
              <span>647-806-9089</span>
            </a>
            <Button
              variant="default"
              className="bg-brand-teal hover:bg-orange-600"
              onClick={openQuoteModal}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-20">
            <a href="tel:+16478069089" className={cn(
              "mr-4",
              scrolled ? "text-brand-teal" : "text-white"
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
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block font-medium text-sm text-brand-darkGray hover:text-brand-blue py-1 px-4 rounded-md hover:bg-gray-100 transition-colors"
                      onClick={toggleMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
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
                className="w-full bg-brand-teal hover:bg-orange-600 mt-2"
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
