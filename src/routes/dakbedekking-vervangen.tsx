import { createFileRoute } from "@tanstack/react-router";
import DakbedekkingVervangen from "@/pages/services/DakbedekkingVervangen";

export const Route = createFileRoute("/dakbedekking-vervangen")({
  component: DakbedekkingVervangen,
});
