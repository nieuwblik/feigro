import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Vervangt de oude RoutePrefetcher (hover/touch preloading) uit App.tsx.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
