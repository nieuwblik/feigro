import { createFileRoute } from "@tanstack/react-router";
import VveVastgoedbeheer from "@/pages/services/VveVastgoedbeheer";

export const Route = createFileRoute("/vve-vastgoedbeheer")({
  component: VveVastgoedbeheer,
});
