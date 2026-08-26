import { createFileRoute } from "@tanstack/react-router";
import Dakreparatie from "@/pages/services/Dakreparatie";

export const Route = createFileRoute("/dakreparatie")({
  component: Dakreparatie,
});
