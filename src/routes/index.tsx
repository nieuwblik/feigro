import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/")({
  head: () => buildRouteHead(seoMetadata.home),
  component: Index,
});
