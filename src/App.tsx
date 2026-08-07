import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

// Pages
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OverOns = lazy(() => import('./pages/OverOns'));
const Projecten = lazy(() => import('./pages/Projecten'));
const Diensten = lazy(() => import('./pages/Diensten'));
const Spoedservice = lazy(() => import('./pages/Spoedservice'));
const Contact = lazy(() => import('./pages/Contact'));
const Nieuws = lazy(() => import('./pages/Nieuws'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Vacatures = lazy(() => import('./pages/Vacatures'));
const Cookies = lazy(() => import('./pages/Cookies'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Service Pages
const VveVastgoedbeheer = lazy(() => import('./pages/services/VveVastgoedbeheer'));
const Daklekkage = lazy(() => import('./pages/services/Daklekkage'));
const Dakreparatie = lazy(() => import('./pages/services/Dakreparatie'));
const Dakonderhoud = lazy(() => import('./pages/services/Dakonderhoud'));
const Dakrenovatie = lazy(() => import('./pages/services/Dakrenovatie'));
const Valbeveiliging = lazy(() => import('./pages/services/Valbeveiliging'));

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
                <Suspense fallback={<div className="min-h-screen" />}>
                  <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Index />} />
                  <Route path="/diensten" element={<Diensten />} />
                  <Route path="/over-ons" element={<OverOns />} />
                  <Route path="/projecten" element={<Projecten />} />
                  <Route path="/projecten/:slug" element={<ProjectDetail />} />
                  <Route path="/spoedservice" element={<Spoedservice />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/nieuws" element={<Nieuws />} />
                  <Route path="/nieuws/:slug" element={<BlogDetail />} />
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
                </Suspense>
              </MainLayout>
            </BrowserRouter>
          </ScrollManager>
        </TooltipProvider>
      </HelmetProvider>
  </QueryClientProvider>
);

export default App;
