import { createFileRoute } from "@tanstack/react-router";
import Dakrenovatie from "@/pages/services/Dakrenovatie";
import { dakrenovatieData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/dakrenovatie")({
  head: () => buildRouteHead(dakrenovatieData.seo),
  component: Dakrenovatie,
});
