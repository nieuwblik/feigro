// JSON-LD Structured Data Generators for FEIGRO Dakwerken

import { 
  OrganizationSchema, 
  WebSiteSchema, 
  WebPageSchema, 
  BreadcrumbListSchema,
  ArticleSchema,
  FAQPageSchema,
  LocalBusinessSchema,
  AggregateRatingSchema,
  ReviewSchema,
  PersonSchema,
  BreadcrumbItem,
  Author,
  ReviewItem,
  AggregateRatingData
} from '@/types/seo';
import { FAQItem } from '@/types';
import { getBaseUrl, getSiteName } from './seo-utils';

const BASE_URL = getBaseUrl();
const SITE_NAME = getSiteName();
const LOGO_URL = `${BASE_URL}/images/feigro-logo.png`;
const PHONE = '+31229274878';

/**
 * Generate Organization schema for homepage/about
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: LOGO_URL,
    sameAs: [
      // Add social profiles when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      areaServed: 'NL',
      availableLanguage: 'Dutch'
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL'
    }
  };
}

/**
 * Generate WebSite schema for homepage
 */
export function generateWebsiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL
  };
}

/**
 * Generate WebPage schema for all pages
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
): WebPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      url: BASE_URL
    }
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(index < items.length - 1 && {
        item: item.href.startsWith('http') ? item.href : `${BASE_URL}${item.href}`
      })
    }))
  };
}

/**
 * Generate breadcrumbs from URL path
 */
export function generateBreadcrumbsFromPath(path: string): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  const labelMap: Record<string, string> = {
    'diensten': 'Diensten',
    'over-ons': 'Over Ons',
    'projecten': 'Projecten',
    'nieuws': 'Nieuws',
    'contact': 'Contact',
    'spoedservice': 'Spoedservice',
    'vacatures': 'Vacatures',
    'cookies': 'Cookies',
    'dakinspectie': 'Dakinspectie',
    'dakonderhoud': 'Dakonderhoud',
    'dakrenovatie': 'Dakrenovatie',
    'dakreparatie': 'Dakreparatie',
    'daklekkage': 'Daklekkage',
    'valbeveiliging': 'Valbeveiliging',
    'vve-vastgoedbeheer': 'VvE & Vastgoedbeheer'
  };

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({ label, href: currentPath });
  });

  return breadcrumbs;
}

/**
 * Generate Article/BlogPosting schema for blog posts
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authors: Author[];
  url: string;
  section?: string;
  keywords?: string[];
}): ArticleSchema {
  const authorSchemas: PersonSchema[] = article.authors.map(author => ({
    '@type': 'Person',
    name: author.name,
    ...(author.url && { url: author.url })
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.headline,
    description: article.description,
    image: article.image.startsWith('http') ? article.image : `${BASE_URL}${article.image}`,
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
    author: authorSchemas.length === 1 ? authorSchemas[0] : authorSchemas,
    publisher: generateOrganizationSchema(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`
    },
    ...(article.section && { articleSection: article.section }),
    ...(article.keywords && { keywords: article.keywords })
  };
}

/**
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQSchema(faqs: FAQItem[]): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate LocalBusiness schema for FEIGRO
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': BASE_URL,
    name: SITE_NAME,
    image: LOGO_URL,
    url: BASE_URL,
    telephone: PHONE,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Enkhuizen',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    areaServed: ['Noord-Holland', 'Flevoland', 'Utrecht']
  };
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(rating: AggregateRatingData): AggregateRatingSchema {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    bestRating: rating.bestRating,
    worstRating: rating.worstRating,
    ratingCount: rating.ratingCount,
    ...(rating.reviewCount && { reviewCount: rating.reviewCount })
  };
}

/**
 * Generate Review schema
 */
export function generateReviewSchema(review: ReviewItem): ReviewSchema {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1
    }
  };
}

/**
 * Generate multiple reviews schema
 */
export function generateReviewsSchema(reviews: ReviewItem[]): ReviewSchema[] {
  return reviews.map(generateReviewSchema);
}

/**
 * Combine multiple schemas into a single array for injection
 */
export function combineSchemas(...schemas: Record<string, unknown>[]): Record<string, unknown>[] {
  return schemas;
}
