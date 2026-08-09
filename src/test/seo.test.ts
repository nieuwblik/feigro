import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbsFromPath,
  generateBreadcrumbSchema,
} from '@/lib/structured-data';
import { seoMetadata } from '@/data/seo-metadata';

/**
 * Regressietests voor de SEO-plumbing. Deze punten zijn eerder stilletjes
 * kapotgegaan: een schema dat niet meer klopte, een sitemap die pagina's miste
 * en routes die naar 404's wezen.
 */

const PHONE = '+31613731303';

describe('structured data', () => {
  it('gebruikt overal hetzelfde telefoonnummer als de site zelf', () => {
    expect(generateLocalBusinessSchema().telephone).toBe(PHONE);
    expect(generateOrganizationSchema().contactPoint?.telephone).toBe(PHONE);
  });

  it('zet het bedrijf in de juiste plaats en provincie', () => {
    const business = generateLocalBusinessSchema();
    expect(business.address.addressLocality).toBe('Enkhuizen');
    expect(business.address.addressRegion).toBe('Noord-Holland');
    expect(business['@type']).toBe('RoofingContractor');
  });

  it('verwijst naar een logo dat in de repo bestaat', () => {
    const logo = generateLocalBusinessSchema().image;
    expect(logo).toBe('https://feigro.nl/images/feigro-logo.webp');
    expect(() => readFileSync('public/images/feigro-logo.webp')).not.toThrow();
  });

  it('koppelt een dienst aan de bedrijfsentiteit', () => {
    const service = generateServiceSchema({
      name: 'Dakrenovatie',
      description: 'Test',
      url: '/dakrenovatie',
    });
    expect(service.url).toBe('https://feigro.nl/dakrenovatie');
    expect(service.provider['@id']).toBe('https://feigro.nl');
    expect(service.areaServed.map(a => a.name)).toContain('Noord-Holland');
  });

  it('laat het laatste breadcrumb-item zonder link, zoals schema.org voorschrijft', () => {
    const crumbs = generateBreadcrumbsFromPath('/dakrenovatie');
    const schema = generateBreadcrumbSchema(crumbs);
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].item).toBe('https://feigro.nl/');
    expect(schema.itemListElement[1].item).toBeUndefined();
  });
});

describe('paginametadata', () => {
  const pages = Object.entries(seoMetadata);

  it.each(pages)('%s heeft een titel binnen de knipgrens van Google', (_key, meta) => {
    expect(meta.title.length).toBeLessThanOrEqual(60);
  });

  it.each(pages)('%s heeft een bruikbare meta description', (_key, meta) => {
    expect(meta.description.length).toBeGreaterThanOrEqual(70);
    expect(meta.description.length).toBeLessThanOrEqual(160);
  });

  it('heeft geen dubbele canonicals', () => {
    const canonicals = pages.map(([, meta]) => meta.canonical);
    expect(new Set(canonicals).size).toBe(canonicals.length);
  });
});

describe('sitemap', () => {
  const sitemap = readFileSync('public/sitemap.xml', 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

  it('bevat de blogartikelen', () => {
    expect(locs).toContain('https://feigro.nl/nieuws/epdm-dakbedekking');
    expect(locs).toContain('https://feigro.nl/nieuws/duurzame-dakbedekking-trends-2026');
  });

  it('bevat elke gerouteerde dienstpagina', () => {
    const app = readFileSync('src/App.tsx', 'utf8');
    const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)]
      .map(m => m[1])
      .filter(path => !path.includes(':') && path !== '*' && path !== '/cookies');

    for (const route of routes) {
      const expected = route === '/' ? 'https://feigro.nl/' : `https://feigro.nl${route}`;
      expect(locs).toContain(expected);
    }
  });

  it('bevat geen dubbele URL’s', () => {
    expect(new Set(locs).size).toBe(locs.length);
  });
});

describe('robots.txt', () => {
  const robots = readFileSync('public/robots.txt', 'utf8');

  it('blokkeert geen enkele AI-zoekmachine', () => {
    const blocked = robots
      .split(/\r?\n/)
      .filter(line => line.trim().toLowerCase().startsWith('disallow:'))
      .map(line => line.split(':')[1].trim());

    expect(blocked).not.toContain('/');
  });

  it('laat de crawlers toe die AI-antwoorden voeden', () => {
    for (const bot of ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'ChatGPT-User']) {
      expect(robots).toContain(`User-agent: ${bot}`);
    }
  });

  it('noemt geen crawlers meer die niet meer bestaan', () => {
    expect(robots).not.toContain('anthropic-ai');
    expect(robots).not.toContain('Claude-Web');
  });

  it('wijst naar de sitemap', () => {
    expect(robots).toContain('Sitemap: https://feigro.nl/sitemap.xml');
  });
});
