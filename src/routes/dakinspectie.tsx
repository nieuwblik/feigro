import { createFileRoute } from "@tanstack/react-router";
import Dakinspectie from "@/pages/services/Dakinspectie";

export const Route = createFileRoute("/dakinspectie")({
  component: Dakinspectie,
});
