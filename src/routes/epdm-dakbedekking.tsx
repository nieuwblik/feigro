import { createFileRoute } from "@tanstack/react-router";
import EpdmDakbedekking from "@/pages/services/EpdmDakbedekking";
import { epdmDakbedekkingData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/epdm-dakbedekking")({
  head: () => buildRouteHead(epdmDakbedekkingData.seo),
  component: EpdmDakbedekking,
});
