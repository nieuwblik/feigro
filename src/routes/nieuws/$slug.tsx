import { createFileRoute } from "@tanstack/react-router";
import BlogDetail from "@/pages/BlogDetail";

export const Route = createFileRoute("/nieuws/$slug")({
  component: BlogDetail,
});
