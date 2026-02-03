// SEO Type Definitions for FEIGRO Dakwerken

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: Record<string, unknown>[];
  article?: ArticleMeta;
}

export interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  authors?: Author[];
  section?: string;
  tags?: string[];
}

export interface Author {
  name: string;
  url?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface OpenGraphMeta {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'website' | 'article';
  siteName: string;
  locale: string;
}

export interface TwitterCardMeta {
  card: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  image: string;
  site?: string;
}

export interface ReviewItem {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
}

export interface AggregateRatingData {
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  ratingCount: number;
  reviewCount?: number;
}

export interface RelatedContentItem {
  title: string;
  description: string;
  href: string;
}

// Schema.org JSON-LD Types
export interface OrganizationSchema {
  '@context': string;
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  address?: PostalAddressSchema;
}

export interface PostalAddressSchema {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

export interface WebSiteSchema {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

export interface WebPageSchema {
  '@context': string;
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
  isPartOf?: {
    '@type': 'WebSite';
    url: string;
  };
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }[];
}

export interface ArticleSchema {
  '@context': string;
  '@type': 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: PersonSchema | PersonSchema[];
  publisher: OrganizationSchema;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
  articleSection?: string;
  keywords?: string[];
}

export interface PersonSchema {
  '@type': 'Person';
  name: string;
  url?: string;
}

export interface FAQPageSchema {
  '@context': string;
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

export interface LocalBusinessSchema {
  '@context': string;
  '@type': 'LocalBusiness' | 'RoofingContractor';
  '@id': string;
  name: string;
  image: string;
  url: string;
  telephone: string;
  priceRange?: string;
  address: PostalAddressSchema;
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification?: {
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  areaServed?: string[];
}

export interface AggregateRatingSchema {
  '@type': 'AggregateRating';
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  ratingCount: number;
  reviewCount?: number;
}

export interface ReviewSchema {
  '@type': 'Review';
  author: PersonSchema;
  datePublished: string;
  reviewBody: string;
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
}
