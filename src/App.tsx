import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

// Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import OverOns from './pages/OverOns';
import Projecten from './pages/Projecten';
import Diensten from './pages/Diensten';
import Spoedservice from './pages/Spoedservice';
import Contact from './pages/Contact';

// Service Pages
import Dakinspectie from './pages/services/Dakinspectie';
import Dakonderhoud from './pages/services/Dakonderhoud';
import Dakrenovatie from './pages/services/Dakrenovatie';
import DakbedekkingVervangen from './pages/services/DakbedekkingVervangen';
import BitumenDakbedekking from './pages/services/BitumenDakbedekking';
import EpdmDakbedekking from './pages/services/EpdmDakbedekking';
import Daklekkage from './pages/services/Daklekkage';

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/spoedservice" element={<Spoedservice />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Pages */}
            <Route path="/dakinspectie" element={<Dakinspectie />} />
            <Route path="/dakonderhoud" element={<Dakonderhoud />} />
            <Route path="/dakrenovatie" element={<Dakrenovatie />} />
            <Route path="/dakbedekking-vervangen" element={<DakbedekkingVervangen />} />
            <Route path="/bitumen-dakbedekking" element={<BitumenDakbedekking />} />
            <Route path="/epdm-dakbedekking" element={<EpdmDakbedekking />} />
            <Route path="/daklekkage" element={<Daklekkage />} />

            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
