// SEO Utility Functions for FEIGRO Dakwerken

const BASE_URL = 'https://feigro.nl';
const SITE_NAME = 'FEIGRO Dakwerken';

/**
 * Constructs the full canonical URL from a path
 * - Strips tracking params (?utm_*, ?ref=)
 * - Normalizes to lowercase
 * - Removes trailing slashes
 * - Forces https and non-www
 */
export function getCanonicalUrl(path: string, params?: Record<string, string>): string {
  // Start with base URL
  let url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  
  // Parse URL to work with it
  try {
    const urlObj = new URL(url);
    
    // Force https
    urlObj.protocol = 'https:';
    
    // Force non-www
    urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
    
    // Remove trailing slash (except for root)
    if (urlObj.pathname !== '/') {
      urlObj.pathname = urlObj.pathname.replace(/\/$/, '');
    }
    
    // Normalize to lowercase
    urlObj.pathname = urlObj.pathname.toLowerCase();
    
    // Remove tracking params
    const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'fbclid', 'gclid'];
    trackingParams.forEach(param => urlObj.searchParams.delete(param));
    
    // Add allowed params if provided
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (!trackingParams.includes(key)) {
          urlObj.searchParams.set(key, value);
        }
      });
    }
    
    return urlObj.toString();
  } catch {
    // Fallback for invalid URLs
    return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  }
}

/**
 * Safely truncate description to a maximum length
 * Tries to break at word boundaries
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  // Find the last space before maxLength
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > maxLength * 0.7) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated.substring(0, maxLength - 3) + '...';
}

/**
 * Calculate estimated reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function estimateReadingTime(content: string): number {
  if (!content) return 0;
  
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return Math.max(1, minutes); // Minimum 1 minute
}

/**
 * Format title with site name suffix
 */
export function formatTitle(title: string): string {
  if (!title) return SITE_NAME;
  if (title.includes(SITE_NAME)) return title;
  return `${title} | ${SITE_NAME}`;
}

/**
 * Get the base URL for the site
 */
export function getBaseUrl(): string {
  return BASE_URL;
}

/**
 * Get the site name
 */
export function getSiteName(): string {
  return SITE_NAME;
}

/**
 * Generate URL-friendly slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Default meta description for the site
 */
export const DEFAULT_DESCRIPTION = 'FEIGRO Dakwerken - Specialist in dakinspectie, dakonderhoud, dakrenovatie en spoedservice in Noord-Holland. Meer dan 25 jaar ervaring. Bel direct: 0229-274878.';

/**
 * Default OG image path
 */
export const DEFAULT_OG_IMAGE = '/og/default.png';
