// SEO Utility Functions for FEIGRO Dakwerken

const BASE_URL = 'https://feigro.nl';
const SITE_NAME = 'FEIGRO Dakwerken';

// Losse namen die altijd tracking zijn, ongeacht prefix.
const TRACKING_PARAM_NAMES = new Set(['ref', 'fbclid', 'gclid', 'msclkid', 'mc_cid', 'mc_eid']);
// Voorvoegsels die op zichzelf al genoeg zijn (dekt utm_id, utm_placement,
// enzovoort - niet alleen de vijf klassieke utm_-namen).
const TRACKING_PARAM_PREFIXES = ['utm_'];

function isTrackingParam(key: string): boolean {
  const lower = key.toLowerCase();
  return TRACKING_PARAM_NAMES.has(lower) || TRACKING_PARAM_PREFIXES.some(prefix => lower.startsWith(prefix));
}

/**
 * Constructs the full canonical URL from a path
 * - Strips tracking params (?utm_*, ?ref=, ?fbclid=, ?gclid=, ...), case-insensitief
 * - Normalizes the path to lowercase
 * - Removes trailing slashes (except root)
 * - Forces https and non-www
 *
 * `params` mag extra query-parameters toevoegen (bv. `page` voor paginering);
 * een tracking-naam wordt ook dan genegeerd, zodat een aanroeper 'm nooit
 * per ongeluk weer terug kan zetten.
 */
export function getCanonicalUrl(path: string, params?: Record<string, string>): string {
  // Start with base URL
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;

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

    // Remove tracking params (snapshot de keys eerst: verwijderen tijdens
    // itereren over urlObj.searchParams zelf is niet betrouwbaar)
    Array.from(urlObj.searchParams.keys()).forEach(key => {
      if (isTrackingParam(key)) urlObj.searchParams.delete(key);
    });

    // Add allowed params if provided
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (!isTrackingParam(key)) {
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
 * Canonical URL voor een paginanummer binnen gepagineerde content.
 * Pagina 1 canonicaliseert naar de kale basis-URL (geen ?page=1); vanaf
 * pagina 2 wordt ?page=N toegevoegd. `extraParams` mag andere, niet-tracking
 * query-parameters meesturen (bv. een filter) die op elke pagina moeten blijven.
 */
export function getPaginationCanonical(
  path: string,
  page: number,
  extraParams?: Record<string, string>
): string {
  const params = page > 1 ? { ...extraParams, page: String(page) } : extraParams;
  return getCanonicalUrl(path, params);
}

/**
 * rel="prev" / rel="next" URL's voor gepagineerde content. Bing gebruikt ze
 * nog (Google heeft prev/next in 2019 gedeprecieerd, maar negeert de tags
 * verder onschadelijk). Geeft `undefined` terug aan de randen van de reeks
 * in plaats van een link naar een niet-bestaande pagina 0 of N+1.
 */
export function getPaginationLinks(
  path: string,
  page: number,
  totalPages: number,
  extraParams?: Record<string, string>
): { prev?: string; next?: string } {
  return {
    prev: page > 1 ? getPaginationCanonical(path, page - 1, extraParams) : undefined,
    next: page < totalPages ? getPaginationCanonical(path, page + 1, extraParams) : undefined
  };
}

interface UrlLike {
  protocol: string;
  hostname: string;
  pathname: string;
  search: string;
  hash: string;
}

/**
 * Bepaalt of de zichtbare adresbalk-URL genormaliseerd moet worden (https,
 * non-www, kleine letters in het pad, geen trailing slash). Geeft de
 * genormaliseerde URL terug, of `null` als er niets te doen is.
 *
 * Puur (geen DOM/router), zodat dit los van CanonicalUrlGuard te testen is.
 * Query-parameters blijven bewust ongemoeid: tracking-params worden alleen
 * uit de canonical-tag gestript (zie getCanonicalUrl hierboven), niet uit de
 * echte adresbalk - dat zou landingspagina's met een lopende ad-campagne
 * breken voor tools die de attributie client-side uitlezen.
 */
export function getUrlNormalizationRedirect(current: UrlLike): string | null {
  const isLocalHost = current.hostname === 'localhost' || current.hostname === '127.0.0.1';

  let protocol = current.protocol;
  let hostname = current.hostname;
  let pathname = current.pathname;
  let changed = false;

  if (!isLocalHost && protocol === 'http:') {
    protocol = 'https:';
    changed = true;
  }

  if (hostname.toLowerCase().startsWith('www.')) {
    hostname = hostname.slice(4);
    changed = true;
  }

  if (pathname !== pathname.toLowerCase()) {
    pathname = pathname.toLowerCase();
    changed = true;
  }

  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.replace(/\/+$/, '');
    changed = true;
  }

  if (!changed) return null;

  return `${protocol}//${hostname}${pathname}${current.search}${current.hash}`;
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

const MAX_TITLE_LENGTH = 60;

/**
 * Format title with site name suffix, staying within Google's ~60 char cutoff:
 * - skips the suffix when the title is already branded (case-insensitive)
 * - shortens "FEIGRO Dakwerken" to "Feigro" when the full suffix doesn't fit
 * - trims the base as a last resort
 */
export function formatTitle(title: string): string {
  if (!title) return SITE_NAME;

  const lower = title.toLowerCase();
  let base = title;
  let suffix = '';

  const separatorIndex = lower.lastIndexOf(' | ');
  if (separatorIndex > 0 && lower.slice(separatorIndex).includes('feigro')) {
    base = title.slice(0, separatorIndex);
    suffix = title.slice(separatorIndex);
  } else if (!lower.includes('feigro')) {
    suffix = ` | ${SITE_NAME}`;
  }

  if (base.length + suffix.length > MAX_TITLE_LENGTH && suffix.toLowerCase().includes('dakwerken')) {
    suffix = ' | Feigro';
  }

  if (base.length + suffix.length > MAX_TITLE_LENGTH) {
    base = base.slice(0, MAX_TITLE_LENGTH - suffix.length).trimEnd().replace(/[-–|,]$/, '').trimEnd();
  }

  return `${base}${suffix}`;
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
export const DEFAULT_DESCRIPTION = 'FEIGRO Dakwerken - Specialist in dakinspectie, dakonderhoud, dakrenovatie en spoedservice in Noord-Holland. Meer dan 25 jaar ervaring. Bel direct: 06-13731303.';

/**
 * Default OG image path
 */
export const DEFAULT_OG_IMAGE = '/og-image.png';
