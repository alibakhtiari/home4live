
import { Suspense, lazy, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ServiceHomeRenovation = lazy(() => import("./pages/ServiceHomeRenovation"));
const ServiceBasementUnderpinning = lazy(() => import("./pages/ServiceBasementUnderpinning"));
const ServiceBasementWaterproofing = lazy(() => import("./pages/ServiceBasementWaterproofing"));
const ServiceBasementFinishing = lazy(() => import("./pages/ServiceBasementFinishing"));
const ServiceHouseAdditions = lazy(() => import("./pages/ServiceHouseAdditions"));
const ServiceDemolition = lazy(() => import("./pages/ServiceDemolition"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

// Loading component
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-blue rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  // Move QueryClient inside the component to avoid React hook issues
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/home-renovation" element={<ServiceHomeRenovation />} />
                <Route path="/services/basement-underpinning" element={<ServiceBasementUnderpinning />} />
                <Route path="/services/basement-waterproofing" element={<ServiceBasementWaterproofing />} />
                <Route path="/services/basement-finishing" element={<ServiceBasementFinishing />} />
                <Route path="/services/house-additions" element={<ServiceHouseAdditions />} />
                <Route path="/services/demolition" element={<ServiceDemolition />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
