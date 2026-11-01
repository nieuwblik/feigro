import { createFileRoute } from "@tanstack/react-router";
import Dakisolatie from "@/pages/services/Dakisolatie";
import { dakisolatieData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/dakisolatie")({
  head: () => buildRouteHead(dakisolatieData.seo),
  component: Dakisolatie,
});
