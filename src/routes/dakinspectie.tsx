import { createFileRoute } from "@tanstack/react-router";
import Dakinspectie from "@/pages/services/Dakinspectie";
import { dakinspectieData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/dakinspectie")({
  head: () => buildRouteHead(dakinspectieData.seo),
  component: Dakinspectie,
});
