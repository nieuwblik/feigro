import { createFileRoute } from "@tanstack/react-router";
import BitumenDakbedekking from "@/pages/services/BitumenDakbedekking";
import { bitumenDakbedekkingData } from "@/data/services";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/bitumen-dakbedekking")({
  head: () => buildRouteHead(bitumenDakbedekkingData.seo),
  component: BitumenDakbedekking,
});
