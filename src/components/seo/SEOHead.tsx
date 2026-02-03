// Enhanced SEOHead Component for FEIGRO Dakwerken
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOHeadProps } from '@/types/seo';
import { 
  getCanonicalUrl, 
  formatTitle, 
  truncateDescription,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  getBaseUrl,
  getSiteName
} from '@/lib/seo-utils';
import { getAbsoluteOgUrl } from '@/lib/og-images';

const BASE_URL = getBaseUrl();
const SITE_NAME = getSiteName();

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = [],
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  structuredData = [],
  article
}: SEOHeadProps) {
  const location = useLocation();
  
  // Format title with site name
  const fullTitle = formatTitle(title || SITE_NAME);
  
  // Truncate description to 160 chars
  const truncatedDescription = truncateDescription(description, 160);
  
  // Build canonical URL
  const canonical = canonicalUrl 
    ? getCanonicalUrl(canonicalUrl)
    : getCanonicalUrl(location.pathname);
  
  // Build OG image URL
  const fullOgImage = getAbsoluteOgUrl(ogImage);
  
  // Build robots directive
  const robotsContent = noindex 
    ? 'noindex, nofollow' 
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={truncatedDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Article-specific meta tags */}
      {article && ogType === 'article' && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          {article.authors?.map((author, index) => (
            <meta key={index} property="article:author" content={author.name} />
          ))}
        </>
      )}

      {/* JSON-LD Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEOHead;
