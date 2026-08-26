import { createFileRoute } from "@tanstack/react-router";
import OverOns from "@/pages/OverOns";

export const Route = createFileRoute("/over-ons")({
  component: OverOns,
});
