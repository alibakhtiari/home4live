
import React, { Suspense, lazy, useEffect } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

// Use lazy loading for non-critical components
const WelcomeSection = lazy(() => import('@/components/sections/WelcomeSection'));

// Simple loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-blue rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  // Preload critical resources
  useEffect(() => {
    // Preload the WelcomeSection component
    const preloadWelcomeSection = () => {
      import('@/components/sections/WelcomeSection');
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      const win = window as unknown as { requestIdleCallback: (cb: () => void) => void };
      win.requestIdleCallback(preloadWelcomeSection);
    } else {
      setTimeout(preloadWelcomeSection, 200);
    }
  }, []);

  return (
    <Layout>
      <SEO
        title="Home4Live | Professional Home Renovation Services in Toronto & GTA"
        description="Your trusted partner for home renovations, basement waterproofing, underpinning, and more. Get expert services throughout the Greater Toronto Area."
        canonicalUrl="/"
        keywords="home renovation, basement waterproofing, basement underpinning, Toronto renovations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Home4Live",
          "url": "https://home4live.ca",
          "logo": "https://home4live.ca/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+16478069089",
            "contactType": "customer service"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Richmond Hill",
            "addressRegion": "ON",
            "addressCountry": "CA"
          }
        }}
      />
      <div className="min-h-screen">
        <Suspense fallback={<LoadingFallback />}>
          <WelcomeSection />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
