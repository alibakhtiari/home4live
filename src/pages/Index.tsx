
import React, { Suspense, lazy } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

// Use lazy loading for components
const WelcomeSection = lazy(() => import('@/components/sections/WelcomeSection'));

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Welcome to Home4Live"
        description="Your trusted partner for home renovations, basement waterproofing, underpinning, and more. Get expert services throughout the Greater Toronto Area."
        canonicalUrl="/"
        keywords="home renovation, basement waterproofing, basement underpinning, Toronto renovations"
      />
      <div className="min-h-screen">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <WelcomeSection />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
