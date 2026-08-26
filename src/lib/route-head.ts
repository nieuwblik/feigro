// Gedeelde server-side head()-helper voor alle routes.
// Bron van waarheid: dezelfde logica als de oude client-side SEOHead-component
// (seo-utils + og-images), zodat titels, descriptions en canonicals identiek zijn.
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  formatTitle,
  getCanonicalUrl,
  getSiteName,
  truncateDescription,
} from './seo-utils';
import { getAbsoluteOgUrl } from './og-images';
import type { ArticleMeta } from '@/types/seo';

const SITE_NAME = getSiteName();

export interface RouteHeadInput {
  title?: string;
  description?: string;
  keywords?: string[];
  /** Pad van de pagina zelf, bv. '/contact'. Self-referencing canonical. */
  canonicalUrl: string;
  canonicalParams?: Record<string, string>;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: object[];
  article?: ArticleMeta;
}

type MetaTag = Record<string, string>;

export function buildRouteHead(input: RouteHeadInput) {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = [],
    canonicalUrl,
    canonicalParams,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    noindex = false,
    structuredData = [],
    article,
  } = input;

  const fullTitle = formatTitle(title || SITE_NAME);
  const desc = truncateDescription(description, 160);
  const canonical = getCanonicalUrl(canonicalUrl, canonicalParams);
  const image = getAbsoluteOgUrl(ogImage);
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const meta: MetaTag[] = [
    { title: fullTitle },
    { name: 'description', content: desc },
    { name: 'robots', content: robots },
    { property: 'og:type', content: ogType },
    { property: 'og:locale', content: 'nl_NL' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: desc },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: image },
    { property: 'og:image:alt', content: fullTitle },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: desc },
    { name: 'twitter:image', content: image },
  ];

  if (keywords.length > 0) {
    meta.push({ name: 'keywords', content: keywords.join(', ') });
  }

  if (article && ogType === 'article') {
    meta.push({ property: 'article:published_time', content: article.publishedTime });
    if (article.modifiedTime) {
      meta.push({ property: 'article:modified_time', content: article.modifiedTime });
    }
    if (article.section) {
      meta.push({ property: 'article:section', content: article.section });
    }
    article.tags?.forEach((tag) => meta.push({ property: 'article:tag', content: tag }));
    article.authors?.forEach((author) =>
      meta.push({ property: 'article:author', content: author.name }),
    );
  }

  return {
    meta,
    links: [{ rel: 'canonical', href: canonical }],
    scripts: structuredData.map((schema) => ({
      type: 'application/ld+json',
      children: JSON.stringify(schema),
    })),
  };
}
