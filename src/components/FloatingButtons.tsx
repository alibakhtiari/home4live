
import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import QuoteModal from './QuoteModal';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = () => {
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Button
          onClick={scrollToTop}
          className={cn(
            "rounded-full bg-brand-blue hover:bg-blue-800 w-12 h-12 p-3 shadow-md transition-all duration-300",
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </Button>
        
        <Button
          className="rounded-full bg-brand-orange hover:bg-orange-600 w-12 h-12 p-3 shadow-md"
          onClick={openQuoteModal}
          aria-label="Get a quote"
        >
          <MessageSquare size={24} />
        </Button>
        
        <a href="tel:+16478069089">
          <Button
            className="rounded-full bg-green-600 hover:bg-green-700 w-12 h-12 p-3 shadow-md"
            aria-label="Call us"
          >
            <Phone size={24} />
          </Button>
        </a>
      </div>
      
      <QuoteModal isOpen={showQuoteModal} onClose={closeQuoteModal} />
    </>
  );
};

export default FloatingButtons;
