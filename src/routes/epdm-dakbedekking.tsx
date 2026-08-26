import { createFileRoute } from "@tanstack/react-router";
import EpdmDakbedekking from "@/pages/services/EpdmDakbedekking";

export const Route = createFileRoute("/epdm-dakbedekking")({
  component: EpdmDakbedekking,
});
