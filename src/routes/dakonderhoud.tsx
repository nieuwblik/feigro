import { createFileRoute } from "@tanstack/react-router";
import Dakonderhoud from "@/pages/services/Dakonderhoud";
import { dakonderhoudData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/dakonderhoud")({
  head: () => buildRouteHead(dakonderhoudData.seo),
  component: Dakonderhoud,
});
