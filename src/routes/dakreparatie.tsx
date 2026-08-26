import { createFileRoute } from "@tanstack/react-router";
import Dakreparatie from "@/pages/services/Dakreparatie";
import { dakreparatieData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/dakreparatie")({
  head: () => buildRouteHead(dakreparatieData.seo),
  component: Dakreparatie,
});
