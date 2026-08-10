import { Helmet } from 'react-helmet-async';
import { PageSEO } from '@/types';

interface SEOProps extends PageSEO {
  siteName?: string;
  /** Zet de pagina op noindex (bijv. juridische pagina's en foutpagina's) */
  noindex?: boolean;
}

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 158;

/**
 * Kort een meta description netjes af op woordgrens (max 158 tekens).
 */
export function clampDescription(description: string) {
  const clean = description.replace(/\s+/g, ' ').trim();
  if (clean.length <= MAX_DESCRIPTION_LENGTH) return clean;

  const cut = clean.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:\-–]$/, '')}…`;
}


/**
 * Builds the document title:
 * - only appends the site name when the title has no branding (case-insensitive)
 * - falls back to the short brand and trims the base when the result exceeds 60 chars
 */
export function buildTitle(title: string, siteName: string) {
  const lower = title.toLowerCase();
  let base = title;
  let suffix = '';

  const separatorIndex = lower.lastIndexOf(' | ');
  if (separatorIndex > 0 && lower.slice(separatorIndex).includes('feigro')) {
    base = title.slice(0, separatorIndex);
    suffix = title.slice(separatorIndex);
  } else if (!lower.includes('feigro')) {
    suffix = ` | ${siteName}`;
  }

  if (base.length + suffix.length > MAX_TITLE_LENGTH && suffix.toLowerCase().includes('dakwerken')) {
    suffix = ' | Feigro';
  }

  if (base.length + suffix.length > MAX_TITLE_LENGTH) {
    base = base.slice(0, MAX_TITLE_LENGTH - suffix.length).trimEnd().replace(/[-–|,]$/, '').trimEnd();
  }

  return `${base}${suffix}`;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://storage.googleapis.com/gpt-engineer-file-uploads/3EEbbwIN3rTrzVglyQtstmL7FqT2/social-images/social-1769163940075-social%20image%20feigro.png',
  ogType = 'website',
  schema,
  keywords,
  siteName = 'FEIGRO Dakwerken',
  noindex = false,
}: SEOProps) {
  const fullTitle = buildTitle(title, siteName);
  const metaDescription = clampDescription(description);

  const baseUrl = 'https://feigro.nl';
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        }
      />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={fullCanonical} />


      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
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
