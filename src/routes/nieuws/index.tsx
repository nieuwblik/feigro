import { createFileRoute } from "@tanstack/react-router";
import Nieuws from "@/pages/Nieuws";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/nieuws/")({
  head: () => buildRouteHead(seoMetadata.nieuws),
  component: Nieuws,
});
