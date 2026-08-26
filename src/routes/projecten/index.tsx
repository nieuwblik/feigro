import { createFileRoute } from "@tanstack/react-router";
import Projecten from "@/pages/Projecten";

export const Route = createFileRoute("/projecten/")({
  component: Projecten,
});
