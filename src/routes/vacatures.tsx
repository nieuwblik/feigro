import { createFileRoute } from "@tanstack/react-router";
import Vacatures from "@/pages/Vacatures";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/vacatures")({
  head: () => buildRouteHead(seoMetadata.vacatures),
  component: Vacatures,
});
