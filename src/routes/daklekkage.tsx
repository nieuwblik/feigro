import { createFileRoute } from "@tanstack/react-router";
import Daklekkage from "@/pages/services/Daklekkage";

export const Route = createFileRoute("/daklekkage")({
  component: Daklekkage,
});
