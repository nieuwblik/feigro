import { createFileRoute } from "@tanstack/react-router";
import Spoedservice from "@/pages/Spoedservice";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/spoedservice")({
  head: () => buildRouteHead(seoMetadata.spoedservice),
  component: Spoedservice,
});
