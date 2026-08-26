import { createFileRoute } from "@tanstack/react-router";
import Dakonderhoud from "@/pages/services/Dakonderhoud";

export const Route = createFileRoute("/dakonderhoud")({
  component: Dakonderhoud,
});
