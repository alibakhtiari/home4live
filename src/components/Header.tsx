import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, HomeIcon, Building, Droplets, PaintBucket, HardHat, Hammer, Wrench, Lightbulb, LayersIcon, Paintbrush, InspectionPanel } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import QuoteModal from './QuoteModal';

// Array of routes where nav should not be transparent
const nonTransparentRoutes = ['/privacy-policy', '/terms-of-service', '/sitemap'];

// Services data for mega menu grouped by category
const serviceGroups = [
  {
    title: "Home Renovation",
    services: [
      {
        title: "Home Renovation",
        path: "/services/home-renovation",
        icon: <HomeIcon className="w-5 h-5" />
      },
      {
        title: "House Additions",
        path: "/services/house-additions",
        icon: <HardHat className="w-5 h-5" />
      },
      {
        title: "Plumbing, Electrical & HVAC",
        path: "/services/plumbing-electrical-hvac",
        icon: <Lightbulb className="w-5 h-5" />
      },
      {
        title: "Cabinetry & Fixtures",
        path: "/services/cabinetry-fixtures",
        icon: <InspectionPanel className="w-5 h-5" />
      },
      {
        title: "Flooring & Finishes",
        path: "/services/flooring-finishes",
        icon: <Paintbrush className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Basement Renovation",
    services: [
      {
        title: "Basement Underpinning",
        path: "/services/basement-underpinning",
        icon: <Building className="w-5 h-5" />
      },
      {
        title: "Basement Waterproofing",
        path: "/services/basement-waterproofing",
        icon: <Droplets className="w-5 h-5" />
      },
      {
        title: "Basement Finishing",
        path: "/services/basement-finishing",
        icon: <PaintBucket className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Additional Services",
    services: [
      {
        title: "Demolition",
        path: "/services/demolition",
        icon: <Hammer className="w-5 h-5" />
      },
      {
        title: "Framing & Structural Work",
        path: "/services/framing-structural",
        icon: <Wrench className="w-5 h-5" />
      },
      {
        title: "Insulation & Drywall",
        path: "/services/insulation-drywall",
        icon: <LayersIcon className="w-5 h-5" />
      }
    ]
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const location = useLocation();

  // Check if current route should have non-transparent nav
  const shouldBeNonTransparent = nonTransparentRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50 || shouldBeNonTransparent) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldBeNonTransparent]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openQuoteModal = () => {
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };

  return (
    <header className={cn(
      "transition-all duration-300 fixed w-full top-0 z-50",
      scrolled || shouldBeNonTransparent
        ? "bg-white shadow-xs"
        : "bg-transparent"
    )}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-20">
            <img src="/logo.svg" alt="Home4Live Logo" className="h-12 mr-2" />
            <span className={cn(
              "text-2xl font-bold transition-colors",
              (scrolled || shouldBeNonTransparent) ? "text-brand-blue" : "text-white"
            )}>Home<span className="text-brand-teal">4</span>Live</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    (scrolled || shouldBeNonTransparent) ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
                  )}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "font-medium bg-transparent",
                    (scrolled || shouldBeNonTransparent) ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
                  )}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {serviceGroups.map((group, index) => (
                          <div key={index} className="space-y-4">
                            <h3 className="font-semibold text-lg text-brand-blue mb-3">{group.title}</h3>
                            <div className="space-y-2">
                              {group.services.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
                                >
                                  <span className="text-brand-blue">{service.icon}</span>
                                  <span className="text-sm font-medium text-gray-700">{service.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
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
                    (scrolled || shouldBeNonTransparent) ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
                  )}>
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={cn(
                    "font-medium px-4 py-2 transition-colors",
                    (scrolled || shouldBeNonTransparent) ? "text-brand-darkGray hover:text-brand-blue" : "text-white hover:text-brand-teal"
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
              (scrolled || shouldBeNonTransparent) ? "text-brand-teal" : "text-white"
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
              (scrolled || shouldBeNonTransparent) ? "text-brand-teal" : "text-white"
            )}>
              <Phone size={24} />
            </a>
            <button onClick={toggleMenu} className={(scrolled || shouldBeNonTransparent) ? "text-brand-darkGray" : "text-white"}>
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
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="font-semibold text-brand-blue">{group.title}</h4>
                      {group.services.map((service) => (
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
