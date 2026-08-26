import { createFileRoute } from "@tanstack/react-router";
import BitumenDakbedekking from "@/pages/services/BitumenDakbedekking";

export const Route = createFileRoute("/bitumen-dakbedekking")({
  component: BitumenDakbedekking,
});
