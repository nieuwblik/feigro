import { Helmet } from 'react-helmet-async';
import { PageSEO } from '@/types';

interface SEOProps extends PageSEO {
  siteName?: string;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  schema,
  siteName = 'FEIGRO Dakwerken',
}: SEOProps) {
  const fullTitle = title.includes('FEIGRO') ? title : `${title} | ${siteName}`;
  const baseUrl = 'https://feigro.nl';
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
