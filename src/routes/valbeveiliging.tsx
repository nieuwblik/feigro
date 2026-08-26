import { createFileRoute } from "@tanstack/react-router";
import Valbeveiliging from "@/pages/services/Valbeveiliging";
import { valbeveiligingssysteemData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/valbeveiliging")({
  head: () => buildRouteHead(valbeveiligingssysteemData.seo),
  component: Valbeveiliging,
});
