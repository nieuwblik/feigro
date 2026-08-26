import { createFileRoute } from "@tanstack/react-router";
import VveVastgoedbeheer from "@/pages/services/VveVastgoedbeheer";
import { vveVastgoedbeheerData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/vve-vastgoedbeheer")({
  head: () => buildRouteHead(vveVastgoedbeheerData.seo),
  component: VveVastgoedbeheer,
});
