import { Suspense, lazy, useState } from "react";
import { Toaster } from "@/components/ui/toaster";

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
const ServiceFoundationRepair = lazy(() => import("./pages/ServiceFoundationRepair"));
const ServiceExteriorDrainage = lazy(() => import("./pages/ServiceExteriorDrainage"));
const ServiceFramingStructural = lazy(() => import("./pages/ServiceFramingStructural"));
const ServicePlumbingElectricalHVAC = lazy(() => import("./pages/ServicePlumbingElectricalHVAC"));
const ServiceInsulationDrywall = lazy(() => import("./pages/ServiceInsulationDrywall"));
const ServiceFlooringFinishes = lazy(() => import("./pages/ServiceFlooringFinishes"));
const ServiceCabinetryFixtures = lazy(() => import("./pages/ServiceCabinetryFixtures"));
const ServiceFinalTouches = lazy(() => import("./pages/ServiceFinalTouches"));
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
        <Toaster />


        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
              <Route path="/services/foundation-repair" element={<ServiceFoundationRepair />} />
              <Route path="/services/exterior-drainage" element={<ServiceExteriorDrainage />} />
              <Route path="/services/framing-structural" element={<ServiceFramingStructural />} />
              <Route path="/services/plumbing-electrical-hvac" element={<ServicePlumbingElectricalHVAC />} />
              <Route path="/services/insulation-drywall" element={<ServiceInsulationDrywall />} />
              <Route path="/services/flooring-finishes" element={<ServiceFlooringFinishes />} />
              <Route path="/services/cabinetry-fixtures" element={<ServiceCabinetryFixtures />} />
              <Route path="/services/final-touches" element={<ServiceFinalTouches />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

      </HelmetProvider>
    </QueryClientProvider >
  );
};

export default App;