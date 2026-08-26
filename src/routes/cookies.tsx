import { createFileRoute } from "@tanstack/react-router";
import Cookies from "@/pages/Cookies";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/cookies")({
  head: () => buildRouteHead(seoMetadata.cookies),
  component: Cookies,
});
