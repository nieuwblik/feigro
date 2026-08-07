import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

// Keep route loaders reusable so navigation can preload a page before it is opened.
const pageLoaders = {
  index: () => import('./pages/Index'),
  notFound: () => import('./pages/NotFound'),
  overOns: () => import('./pages/OverOns'),
  projecten: () => import('./pages/Projecten'),
  diensten: () => import('./pages/Diensten'),
  spoedservice: () => import('./pages/Spoedservice'),
  contact: () => import('./pages/Contact'),
  nieuws: () => import('./pages/Nieuws'),
  blogDetail: () => import('./pages/BlogDetail'),
  vacatures: () => import('./pages/Vacatures'),
  cookies: () => import('./pages/Cookies'),
  projectDetail: () => import('./pages/ProjectDetail'),
  vveVastgoedbeheer: () => import('./pages/services/VveVastgoedbeheer'),
  daklekkage: () => import('./pages/services/Daklekkage'),
  dakreparatie: () => import('./pages/services/Dakreparatie'),
  dakonderhoud: () => import('./pages/services/Dakonderhoud'),
  dakrenovatie: () => import('./pages/services/Dakrenovatie'),
  valbeveiliging: () => import('./pages/services/Valbeveiliging'),
};

const Index = lazy(pageLoaders.index);
const NotFound = lazy(pageLoaders.notFound);
const OverOns = lazy(pageLoaders.overOns);
const Projecten = lazy(pageLoaders.projecten);
const Diensten = lazy(pageLoaders.diensten);
const Spoedservice = lazy(pageLoaders.spoedservice);
const Contact = lazy(pageLoaders.contact);
const Nieuws = lazy(pageLoaders.nieuws);
const BlogDetail = lazy(pageLoaders.blogDetail);
const Vacatures = lazy(pageLoaders.vacatures);
const Cookies = lazy(pageLoaders.cookies);
const ProjectDetail = lazy(pageLoaders.projectDetail);
const VveVastgoedbeheer = lazy(pageLoaders.vveVastgoedbeheer);
const Daklekkage = lazy(pageLoaders.daklekkage);
const Dakreparatie = lazy(pageLoaders.dakreparatie);
const Dakonderhoud = lazy(pageLoaders.dakonderhoud);
const Dakrenovatie = lazy(pageLoaders.dakrenovatie);
const Valbeveiliging = lazy(pageLoaders.valbeveiliging);

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

const routeLoaders: Record<string, () => Promise<unknown>> = {
  '/': pageLoaders.index,
  '/diensten': pageLoaders.diensten,
  '/over-ons': pageLoaders.overOns,
  '/projecten': pageLoaders.projecten,
  '/spoedservice': pageLoaders.spoedservice,
  '/contact': pageLoaders.contact,
  '/nieuws': pageLoaders.nieuws,
  '/vacatures': pageLoaders.vacatures,
  '/cookies': pageLoaders.cookies,
  '/vve-vastgoedbeheer': pageLoaders.vveVastgoedbeheer,
  '/daklekkage': pageLoaders.daklekkage,
  '/dakreparatie': pageLoaders.dakreparatie,
  '/dakonderhoud': pageLoaders.dakonderhoud,
  '/dakrenovatie': pageLoaders.dakrenovatie,
  '/valbeveiliging': pageLoaders.valbeveiliging,
};

function RoutePrefetcher() {
  useEffect(() => {
    const preloadFromLink = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement) || anchor.origin !== window.location.origin) return;

      const loader = routeLoaders[anchor.pathname]
        ?? (anchor.pathname.startsWith('/projecten/') ? pageLoaders.projectDetail : undefined)
        ?? (anchor.pathname.startsWith('/nieuws/') ? pageLoaders.blogDetail : undefined);
      void loader?.();
    };

    document.addEventListener('pointerover', preloadFromLink, { passive: true });
    document.addEventListener('touchstart', preloadFromLink, { passive: true });

    const preloadPrimaryRoutes = () => {
      void Promise.allSettled([
        pageLoaders.diensten(),
        pageLoaders.overOns(),
        pageLoaders.projecten(),
        pageLoaders.nieuws(),
        pageLoaders.contact(),
        pageLoaders.spoedservice(),
      ]);
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = idleWindow.requestIdleCallback?.(preloadPrimaryRoutes, { timeout: 1200 });
    const timeoutId = idleId === undefined ? window.setTimeout(preloadPrimaryRoutes, 400) : undefined;

    return () => {
      document.removeEventListener('pointerover', preloadFromLink);
      document.removeEventListener('touchstart', preloadFromLink);
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

function PageLoadingFallback() {
  return (
    <div className="min-h-screen bg-feigro-white flex items-center justify-center px-6" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="h-1 w-28 overflow-hidden rounded-full bg-feigro-dark/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-green" />
        </div>
        <span className="font-heading text-sm uppercase text-feigro-dark">FEIGRO</span>
        <span className="sr-only">Pagina laden</span>
      </div>
    </div>
  );
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
              <RoutePrefetcher />
              <MainLayout>
                <Suspense fallback={<PageLoadingFallback />}>
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
