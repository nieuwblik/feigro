import { createFileRoute } from "@tanstack/react-router";
import BlogDetail, { blogPosts } from "@/pages/BlogDetail";
import { buildRouteHead } from "@/lib/route-head";
import { generateArticleSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/nieuws/$slug")({
  head: ({ params }) => {
    const post = blogPosts[params.slug];
    if (!post) {
      return buildRouteHead({
        title: "Nieuws | Feigro",
        canonicalUrl: `/nieuws/${params.slug}`,
        noindex: true,
      });
    }
    return buildRouteHead({
      title: `${post.title} | Feigro`,
      description: post.excerpt,
      canonicalUrl: `/nieuws/${post.id}`,
      ogImage: post.image,
      ogType: "article",
      article: {
        publishedTime: post.date,
        ...(post.modifiedDate ? { modifiedTime: post.modifiedDate } : {}),
        authors: post.authors,
        section: post.category,
        ...(post.tags ? { tags: post.tags } : {}),
      },
      structuredData: [
        generateArticleSchema({
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          dateModified: post.modifiedDate,
          authors: post.authors,
          url: `/nieuws/${post.id}`,
          section: post.category,
          keywords: post.tags,
        }),
      ],
    });
  },
  component: BlogDetail,
});
