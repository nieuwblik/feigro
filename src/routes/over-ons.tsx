import { createFileRoute } from "@tanstack/react-router";
import OverOns from "@/pages/OverOns";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/over-ons")({
  head: () => buildRouteHead(seoMetadata.overOns),
  component: OverOns,
});
