import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

// Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import OverOns from './pages/OverOns';
import Projecten from './pages/Projecten';
import Diensten from './pages/Diensten';
import Spoedservice from './pages/Spoedservice';
import Contact from './pages/Contact';
import Nieuws from './pages/Nieuws';
import Vacatures from './pages/Vacatures';
import Cookies from './pages/Cookies';

// Service Pages
import VveVastgoedbeheer from './pages/services/VveVastgoedbeheer';
import Daklekkage from './pages/services/Daklekkage';
import Dakreparatie from './pages/services/Dakreparatie';
import Dakonderhoud from './pages/services/Dakonderhoud';
import Dakrenovatie from './pages/services/Dakrenovatie';
import Valbeveiliging from './pages/services/Valbeveiliging';

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
}

import { ScrollManager } from '@/components/ui/ScrollManager';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <ScrollManager>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <MainLayout>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/diensten" element={<Diensten />} />
                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/projecten" element={<Projecten />} />
                <Route path="/spoedservice" element={<Spoedservice />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/nieuws" element={<Nieuws />} />
                <Route path="/vacatures" element={<Vacatures />} />
                <Route path="/cookies" element={<Cookies />} />

                {/* Service Pages */}
                <Route path="/vve-vastgoedbeheer" element={<VveVastgoedbeheer />} />
                <Route path="/daklekkage" element={<Daklekkage />} />
                <Route path="/dakreparatie" element={<Dakreparatie />} />
                <Route path="/dakonderhoud" element={<Dakonderhoud />} />
                <Route path="/dakrenovatie" element={<Dakrenovatie />} />
                <Route path="/valbeveiliging" element={<Valbeveiliging />} />

                {/* 404 - Must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </ScrollManager>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
