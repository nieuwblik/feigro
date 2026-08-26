import { createFileRoute } from "@tanstack/react-router";
import Projecten from "@/pages/Projecten";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/projecten/")({
  head: () => buildRouteHead(seoMetadata.projecten),
  component: Projecten,
});
