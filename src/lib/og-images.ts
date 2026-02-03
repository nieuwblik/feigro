// Open Graph Image Helpers for FEIGRO Dakwerken

import { getBaseUrl } from './seo-utils';

const BASE_URL = getBaseUrl();

// Map of page names to their OG images
const OG_IMAGES: Record<string, string> = {
  'home': '/og/home.png',
  'diensten': '/og/diensten.png',
  'projecten': '/og/projecten.png',
  'contact': '/og/contact.png',
  'over-ons': '/og/over-ons.png',
  'spoedservice': '/og/spoedservice.png',
  'nieuws': '/og/nieuws.png',
  'vacatures': '/og/vacatures.png',
  'default': '/og/default.png'
};

/**
 * Get page-specific OG image path or fallback to default
 */
export function getOgImagePath(pageName?: string): string {
  if (!pageName) return OG_IMAGES.default;
  
  const normalizedName = pageName.toLowerCase().replace(/\s+/g, '-');
  return OG_IMAGES[normalizedName] || OG_IMAGES.default;
}

/**
 * Get absolute OG image URL with domain
 */
export function getAbsoluteOgUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Get OG image for a specific page with absolute URL
 */
export function getPageOgImage(pageName?: string): string {
  const path = getOgImagePath(pageName);
  return getAbsoluteOgUrl(path);
}

/**
 * List of pages that need custom OG images
 */
export const PAGES_NEEDING_OG_IMAGES = [
  { name: 'default', description: 'FEIGRO branding, dakwerken imagery', dimensions: '1200x630' },
  { name: 'home', description: 'Hero image with company name', dimensions: '1200x630' },
  { name: 'diensten', description: 'Service overview imagery', dimensions: '1200x630' },
  { name: 'projecten', description: 'Portfolio showcase', dimensions: '1200x630' },
  { name: 'contact', description: 'Contact/communication theme', dimensions: '1200x630' },
  { name: 'over-ons', description: 'Team/company story', dimensions: '1200x630' },
  { name: 'spoedservice', description: 'Emergency/24-7 theme', dimensions: '1200x630' },
  { name: 'nieuws', description: 'News/articles theme', dimensions: '1200x630' }
];
