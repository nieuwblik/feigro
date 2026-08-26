import { createFileRoute } from "@tanstack/react-router";
import Dakrenovatie from "@/pages/services/Dakrenovatie";

export const Route = createFileRoute("/dakrenovatie")({
  component: Dakrenovatie,
});
