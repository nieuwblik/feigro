import { createFileRoute } from "@tanstack/react-router";
import Diensten from "@/pages/Diensten";
import { seoMetadata } from "@/data/seo-metadata";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/diensten")({
  head: () => buildRouteHead(seoMetadata.diensten),
  component: Diensten,
});
