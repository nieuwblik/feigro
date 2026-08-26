import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/contact")({
  head: () => buildRouteHead(seoMetadata.contact),
  component: Contact,
});
