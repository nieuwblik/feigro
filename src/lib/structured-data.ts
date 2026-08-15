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
  AggregateRatingData,
  ServiceSchema,
  ProductSchema,
  HowToSchema
} from '@/types/seo';
import { FAQItem } from '@/types';
import { getBaseUrl, getSiteName } from './seo-utils';

const BASE_URL = getBaseUrl();
const SITE_NAME = getSiteName();
const LOGO_URL = `${BASE_URL}/images/feigro-logo.webp`;

/**
 * Het nummer dat overal op de site staat (header, footer, alle CTA's).
 * Houd dit gelijk aan het nummer in Google Business Profile: afwijkende
 * NAP-gegevens verzwakken de lokale vindbaarheid.
 */
const PHONE = '+31613731303';

/**
 * Profielen waarop hetzelfde bedrijf te vinden is. Zoekmachines en LLM's
 * gebruiken sameAs om de website aan de juiste entiteit te koppelen.
 * Vul aan zodra de Google Business Profile- en social-URL's bekend zijn.
 */
const SAME_AS: string[] = [];

/**
 * Geocode van Kruitmolen 28c, 1601 MC Enkhuizen (het echte vestigingsadres,
 * zie het adres hieronder). Vervang door de exacte Google Business Profile-
 * geocode zodra die geverifieerd is.
 */
const GEO = { latitude: 52.7025, longitude: 5.2903 };

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
    sameAs: SAME_AS,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      areaServed: 'NL',
      availableLanguage: 'Dutch'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kruitmolen 28c',
      postalCode: '1601 MC',
      addressLocality: 'Enkhuizen',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL'
    }
  };
}


/**
 * Generate WebSite schema for homepage.
 *
 * `searchUrlTemplate` voegt een SearchAction toe (bv. '/zoeken?q={search_term_string}')
 * voor Google's sitelinks-zoekvak. De site heeft momenteel geen zoekfunctie,
 * dus dit blijft leeg totdat die er is - geef 'm dan het pad van de zoekpagina mee.
 */
export function generateWebsiteSchema(searchUrlTemplate?: string): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    ...(searchUrlTemplate && {
      potentialAction: {
        '@type': 'SearchAction',
        target: searchUrlTemplate.startsWith('http') ? searchUrlTemplate : `${BASE_URL}${searchUrlTemplate}`,
        'query-input': 'required name=search_term_string'
      }
    })
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
 * Generate breadcrumbs for an article, including its category as its own level
 * (Home > Nieuws > <category> > <title>). Path-based generateBreadcrumbsFromPath
 * can't produce this on its own: the URL only has a slug, not a category segment.
 *
 * De categorie-crumb linkt vooralsnog terug naar het bloglijst-overzicht - er is
 * nog geen aparte categoriepagina. Zodra die er komt, hier de href aanpassen.
 */
export function generateArticleBreadcrumbs(article: {
  category: string;
  title: string;
  slug: string;
  sectionLabel?: string;
  basePath?: string;
}): BreadcrumbItem[] {
  const basePath = article.basePath ?? '/nieuws';
  const sectionLabel = article.sectionLabel ?? 'Nieuws';

  return [
    { label: 'Home', href: '/' },
    { label: sectionLabel, href: basePath },
    { label: article.category, href: basePath },
    { label: article.title, href: `${basePath}/${article.slug}` }
  ];
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
 * Kernplaatsen binnen het werkgebied (Noord-Holland, Flevoland, Utrecht)
 */
export const SERVICE_AREAS = [
  'Noord-Holland',
  'Flevoland',
  'Utrecht',
  'Enkhuizen',
  'Hoorn',
  'Medemblik',
  'Purmerend',
  'Alkmaar',
  'Zaanstad',
  'Amsterdam',
  'Almere',
  'Lelystad',
  'Dronten',
  'Utrecht (stad)',
  'Amersfoort',
  'Nieuwegein',
];

/**
 * Generate LocalBusiness schema for FEIGRO
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${BASE_URL}/#organisatie`,
    name: SITE_NAME,
    description:
      'FEIGRO Dakwerken is dakdekker voor platte en hellende daken in Noord-Holland, Flevoland en Utrecht. Dakrenovatie, dakonderhoud, dakreparatie, valbeveiliging en 24/7 spoedhulp bij daklekkage.',
    image: LOGO_URL,
    logo: LOGO_URL,
    url: BASE_URL,
    telephone: PHONE,
    email: 'info@feigro.nl',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kruitmolen 28c',
      postalCode: '1601 MC',
      addressLocality: 'Enkhuizen',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...GEO
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: 'Uitsluitend 24/7 spoedservice bij acute daklekkage'
      }
    ],
    areaServed: SERVICE_AREAS,
    knowsLanguage: ['nl-NL'],
    sameAs: SAME_AS
  };
}

/**
 * Generate Service schema for a single service page.
 * Koppelt de dienst aan de RoofingContractor-entiteit via @id, zodat
 * zoekmachines en LLM's dienst en bedrijf als één geheel lezen.
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}): ServiceSchema {
  const path = service.url.startsWith('http') ? new URL(service.url).pathname : service.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}${path}#dienst`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType ?? service.name,
    url: service.url.startsWith('http') ? service.url : `${BASE_URL}${service.url}`,
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${BASE_URL}/#organisatie`,
      name: SITE_NAME,
      telephone: PHONE,
      url: BASE_URL
    },
    areaServed: SERVICE_AREAS.map(name => ({
      '@type': 'AdministrativeArea' as const,
      name
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}/contact`,
      servicePhone: PHONE
    }
  };
}

/**
 * Generate Product schema (voor eventuele productpagina's, bv. materialen/onderdelen).
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string | string[];
  sku?: string;
  brandName?: string;
  offer?: {
    price: string;
    priceCurrency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    url?: string;
    priceValidUntil?: string;
  };
  aggregateRating?: AggregateRatingData;
  reviews?: ReviewItem[];
}): ProductSchema {
  const toAbsolute = (path: string) => path.startsWith('http') ? path : `${BASE_URL}${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: Array.isArray(product.image) ? product.image.map(toAbsolute) : toAbsolute(product.image),
    ...(product.sku && { sku: product.sku }),
    ...(product.brandName && { brand: { '@type': 'Brand', name: product.brandName } }),
    ...(product.offer && {
      offers: {
        '@type': 'Offer',
        price: product.offer.price,
        priceCurrency: product.offer.priceCurrency ?? 'EUR',
        ...(product.offer.availability && { availability: `https://schema.org/${product.offer.availability}` }),
        ...(product.offer.url && { url: toAbsolute(product.offer.url) }),
        ...(product.offer.priceValidUntil && { priceValidUntil: product.offer.priceValidUntil })
      }
    }),
    ...(product.aggregateRating && { aggregateRating: generateAggregateRatingSchema(product.aggregateRating) }),
    ...(product.reviews && product.reviews.length > 0 && { review: generateReviewsSchema(product.reviews) })
  };
}

/**
 * Generate HowTo schema (voor stapsgewijze content, bv. "hoe herken je een
 * daklekkage" of onderhoudsinstructies). Stap-volgorde komt uit de array-
 * volgorde van `steps`, zoals schema.org's eigen voorbeelden dat ook doen -
 * een expliciete `position` per stap is voor HowToStep niet vereist.
 */
export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  image?: string;
  /** ISO 8601-duur, bv. 'PT2H30M' voor 2,5 uur. */
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  supplies?: string[];
  tools?: string[];
  steps: { name: string; text: string; image?: string }[];
}): HowToSchema {
  const toAbsolute = (path: string) => (path.startsWith('http') ? path : `${BASE_URL}${path}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    ...(howTo.image && { image: toAbsolute(howTo.image) }),
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: howTo.estimatedCost.currency,
        value: howTo.estimatedCost.value
      }
    }),
    ...(howTo.supplies &&
      howTo.supplies.length > 0 && {
        supply: howTo.supplies.map(name => ({ '@type': 'HowToSupply' as const, name }))
      }),
    ...(howTo.tools &&
      howTo.tools.length > 0 && {
        tool: howTo.tools.map(name => ({ '@type': 'HowToTool' as const, name }))
      }),
    step: howTo.steps.map(s => ({
      '@type': 'HowToStep' as const,
      name: s.name,
      text: s.text,
      ...(s.image && { image: toAbsolute(s.image) })
    }))
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
