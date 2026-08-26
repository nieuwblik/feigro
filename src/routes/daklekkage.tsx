import { createFileRoute } from "@tanstack/react-router";
import Daklekkage from "@/pages/services/Daklekkage";
import { daklekkageData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/daklekkage")({
  head: () => buildRouteHead(daklekkageData.seo),
  component: Daklekkage,
});
