import { createFileRoute } from "@tanstack/react-router";
import Valbeveiliging from "@/pages/services/Valbeveiliging";

export const Route = createFileRoute("/valbeveiliging")({
  component: Valbeveiliging,
});
