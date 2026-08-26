import { createFileRoute } from "@tanstack/react-router";
import Diensten from "@/pages/Diensten";

export const Route = createFileRoute("/diensten")({
  component: Diensten,
});
