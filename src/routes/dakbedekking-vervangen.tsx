import { createFileRoute } from "@tanstack/react-router";
import DakbedekkingVervangen from "@/pages/services/DakbedekkingVervangen";
import { dakbedekkingVervangenData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/dakbedekking-vervangen")({
  head: () => buildRouteHead(dakbedekkingVervangenData.seo),
  component: DakbedekkingVervangen,
});
