import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, type ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollManager } from "@/components/ui/ScrollManager";
import { CanonicalUrlGuard } from "@/components/seo/CanonicalUrlGuard";
import { HeadingHierarchyChecker } from "@/components/seo/HeadingHierarchyChecker";
import { MainLayout } from "@/components/layout/MainLayout";
import { reportLovableError } from "@/lib/lovable-error-reporting";
// ported from main.tsx
import { reportWebVitals } from "@/lib/web-vitals";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0" },
      // Basis-title; description/robots/canonical worden per route door de SEO-component gezet
      { title: "Dakdekker Noord-Holland, Flevoland & Utrecht | Feigro" },
      // Open Graph (fallback; per-route tags worden door de SEO-component gezet)
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "FEIGRO Dakwerken" },
      { property: "og:image", content: "https://feigro.nl/og-image.png" },
      { property: "og:image:width", content: "750" },
      { property: "og:image:height", content: "600" },
      { property: "og:image:alt", content: "FEIGRO Dakwerken" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://feigro.nl/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Resource hints
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://kcujsjibycqnngjhdzbp.supabase.co" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://kcujsjibycqnngjhdzbp.supabase.co" },
      // Favicon
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      // Kritiek lettertype (Lustra, alle koppen sitebreed) zelf gehost vanuit public/fonts
      {
        rel: "preload",
        href: "/fonts/lustra-text-semi-bold.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      // Inter, DM Sans én Aldrich in één request
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Aldrich&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl-NL" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => {
    // ported from main.tsx
    reportWebVitals();
  }, []);

  return (
    <QueryClientProviderFromContext>
      <HelmetProvider>
        <TooltipProvider>
          <ScrollManager>
            <Toaster />
            <Sonner />
            <CanonicalUrlGuard />
            <HeadingHierarchyChecker />
            <MainLayout>
              <Outlet />
            </MainLayout>
          </ScrollManager>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProviderFromContext>
  );
}

function QueryClientProviderFromContext({ children }: { children: ReactNode }) {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="font-heading text-2xl">This page didn't load</h1>
        <p className="text-muted-foreground">
          Er ging iets mis aan onze kant. Probeer het opnieuw of ga terug naar de homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              void router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="px-4 py-2 rounded-md border border-border text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
