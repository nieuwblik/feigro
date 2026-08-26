import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail";
import { projects } from "@/data/projects";
import { buildRouteHead } from "@/lib/route-head";

export const Route = createFileRoute("/projecten/$slug")({
  head: ({ params }) => {
    const project = projects[params.slug];
    if (!project) {
      return buildRouteHead({
        title: "Projecten | Feigro",
        canonicalUrl: `/projecten/${params.slug}`,
        noindex: true,
      });
    }
    return buildRouteHead({
      title: `${project.title} | Feigro`,
      description: project.shortDescription,
      canonicalUrl: `/projecten/${project.slug}`,
      ogImage: project.imageAfter,
    });
  },
  component: ProjectDetail,
});
