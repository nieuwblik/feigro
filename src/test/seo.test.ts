import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateWebPageSchema,
  generateServiceSchema,
  generateBreadcrumbsFromPath,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateArticleBreadcrumbs,
  generateProductSchema,
  generateHowToSchema,
  combineSchemas,
} from '@/lib/structured-data';
import {
  estimateReadingTime,
  getCanonicalUrl,
  getPaginationCanonical,
  getPaginationLinks,
  getUrlNormalizationRedirect,
} from '@/lib/seo-utils';
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

  it('nummert breadcrumb-posities aflopend vanaf 1, ongeacht de lengte', () => {
    const crumbs = generateArticleBreadcrumbs({ category: 'Materialen', title: 'EPDM', slug: 'epdm' });
    const schema = generateBreadcrumbSchema(crumbs);
    expect(schema.itemListElement.map(item => item.position)).toEqual([1, 2, 3, 4]);
  });

  it('zet geen SearchAction op WebSite zonder zoek-URL, want de site heeft geen zoekfunctie', () => {
    expect(generateWebsiteSchema().potentialAction).toBeUndefined();
  });

  it('zet wel een SearchAction als er een zoek-URL wordt meegegeven', () => {
    const schema = generateWebsiteSchema('/zoeken?q={search_term_string}');
    expect(schema.potentialAction?.target).toBe('https://feigro.nl/zoeken?q={search_term_string}');
    expect(schema.potentialAction?.['query-input']).toBe('required name=search_term_string');
  });

  it('geeft elke pagina een WebPage-schema dat naar de WebSite terugwijst', () => {
    const schema = generateWebPageSchema('Dakrenovatie', 'Test', '/dakrenovatie');
    expect(schema.url).toBe('https://feigro.nl/dakrenovatie');
    expect(schema.isPartOf?.url).toBe('https://feigro.nl');
  });

  it('geeft het bedrijf geo-coördinaten mee', () => {
    const geo = generateLocalBusinessSchema().geo;
    expect(geo?.latitude).toBeCloseTo(52.7047, 3);
    expect(geo?.longitude).toBeCloseTo(5.2891, 3);
  });

  it('combineSchemas zet meerdere schema-objecten in dezelfde volgorde in één array', () => {
    const org = generateOrganizationSchema();
    const site = generateWebsiteSchema();
    expect(combineSchemas(org, site)).toEqual([org, site]);
  });
});

describe('Product-schema', () => {
  it('zet prijs, valuta en beschikbaarheid als schema.org-URL neer', () => {
    const schema = generateProductSchema({
      name: 'EPDM rubber dakbedekking',
      description: 'Test',
      image: '/images/epdm-rol.webp',
      sku: 'EPDM-001',
      offer: { price: '29.95', availability: 'InStock' }
    });
    expect(schema.image).toBe('https://feigro.nl/images/epdm-rol.webp');
    expect(schema.offers?.price).toBe('29.95');
    expect(schema.offers?.priceCurrency).toBe('EUR');
    expect(schema.offers?.availability).toBe('https://schema.org/InStock');
  });

  it('laat offers weg als er geen aanbieding is opgegeven', () => {
    const schema = generateProductSchema({ name: 'Dakpan', description: 'Test', image: '/images/dakpan.webp' });
    expect(schema.offers).toBeUndefined();
  });
});

describe('HowTo-schema', () => {
  const howTo = {
    name: 'Hoe herken je een daklekkage',
    description: 'Test',
    totalTime: 'PT30M',
    supplies: ['Zaklamp', 'Emmer'],
    tools: ['Ladder'],
    steps: [
      { name: 'Controleer de zolder', text: 'Zoek naar vochtplekken.' },
      { name: 'Inspecteer de dakgoot', text: 'Kijk of hij verstopt zit.' }
    ]
  };

  it('behoudt de stapvolgorde uit de input-array', () => {
    const schema = generateHowToSchema(howTo);
    expect(schema.step.map(s => s.name)).toEqual(['Controleer de zolder', 'Inspecteer de dakgoot']);
    expect(schema.step.every(s => s['@type'] === 'HowToStep')).toBe(true);
  });

  it('zet supplies en tools om naar HowToSupply/HowToTool', () => {
    const schema = generateHowToSchema(howTo);
    expect(schema.supply).toEqual([{ '@type': 'HowToSupply', name: 'Zaklamp' }, { '@type': 'HowToSupply', name: 'Emmer' }]);
    expect(schema.tool).toEqual([{ '@type': 'HowToTool', name: 'Ladder' }]);
  });

  it('laat supply/tool weg als ze niet zijn opgegeven, in plaats van een lege array', () => {
    const schema = generateHowToSchema({ name: 'Test', description: 'Test', steps: [{ name: 'Stap 1', text: 'Doe iets' }] });
    expect(schema.supply).toBeUndefined();
    expect(schema.tool).toBeUndefined();
  });

  it('maakt een relatief image-pad absoluut', () => {
    const schema = generateHowToSchema({ ...howTo, image: '/images/lekkage.webp' });
    expect(schema.image).toBe('https://feigro.nl/images/lekkage.webp');
  });
});

describe('artikel-schema', () => {
  const article = {
    headline: 'EPDM Dakbedekking',
    description: 'Test',
    image: '/images/epdm.webp',
    datePublished: '2026-02-02',
    dateModified: '2026-03-01',
    authors: [{ name: 'Jan Feitsma' }, { name: 'Tommie Groen' }],
    url: '/nieuws/epdm-dakbedekking',
    section: 'Materialen',
    keywords: ['EPDM', 'Plat dak'],
  };

  it('zet BlogPosting neer met absolute image- en mainEntityOfPage-URL', () => {
    const schema = generateArticleSchema(article);
    expect(schema['@type']).toBe('BlogPosting');
    expect(schema.image).toBe('https://feigro.nl/images/epdm.webp');
    expect(schema.mainEntityOfPage['@id']).toBe('https://feigro.nl/nieuws/epdm-dakbedekking');
    expect(schema.publisher.logo).toBeTruthy();
  });

  it('zet meerdere auteurs als array van Person-schema neer', () => {
    const schema = generateArticleSchema(article);
    expect(Array.isArray(schema.author)).toBe(true);
    expect(schema.author).toHaveLength(2);
    expect(schema.author[0]).toMatchObject({ '@type': 'Person', name: 'Jan Feitsma' });
  });

  it('zet een enkele auteur als los Person-object neer, niet als array', () => {
    const schema = generateArticleSchema({ ...article, authors: [{ name: 'FEIGRO Dakwerken' }] });
    expect(Array.isArray(schema.author)).toBe(false);
    expect(schema.author).toMatchObject({ '@type': 'Person', name: 'FEIGRO Dakwerken' });
  });

  it('genereert een breadcrumb-pad met de categorie als eigen niveau', () => {
    const crumbs = generateArticleBreadcrumbs({
      category: 'Materialen',
      title: 'EPDM Dakbedekking',
      slug: 'epdm-dakbedekking',
    });
    expect(crumbs.map(c => c.label)).toEqual(['Home', 'Nieuws', 'Materialen', 'EPDM Dakbedekking']);
    expect(crumbs.at(-1)?.href).toBe('/nieuws/epdm-dakbedekking');
  });
});

describe('leestijdschatting', () => {
  it('schat minimaal 1 minuut, ook voor hele korte teksten', () => {
    expect(estimateReadingTime('Kort dak.')).toBe(1);
  });

  it('rondt naar boven af op basis van 200 woorden per minuut', () => {
    const text = Array.from({ length: 401 }, () => 'dak').join(' ');
    expect(estimateReadingTime(text)).toBe(3);
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
    const canonicals = pages.map(([, meta]) => meta.canonicalUrl);
    expect(new Set(canonicals).size).toBe(canonicals.length);
  });
});

describe('getCanonicalUrl', () => {
  it('forceert https en non-www', () => {
    expect(getCanonicalUrl('http://www.feigro.nl/dakrenovatie')).toBe('https://feigro.nl/dakrenovatie');
  });

  it('verwijdert een trailing slash, behalve op de root', () => {
    expect(getCanonicalUrl('/dakrenovatie/')).toBe('https://feigro.nl/dakrenovatie');
    expect(getCanonicalUrl('/')).toBe('https://feigro.nl/');
  });

  it('normaliseert het pad naar kleine letters', () => {
    expect(getCanonicalUrl('/DakRenovatie')).toBe('https://feigro.nl/dakrenovatie');
  });

  it('strip utm_*, ref, fbclid en gclid, ongeacht hoofdlettergebruik', () => {
    const url = getCanonicalUrl(
      '/contact?UTM_Source=nieuwsbrief&utm_id=42&ref=partner&fbclid=abc&gclid=xyz&behouden=ja'
    );
    expect(url).toBe('https://feigro.nl/contact?behouden=ja');
  });

  it('voegt extra, niet-tracking parameters toe zoals opgegeven', () => {
    expect(getCanonicalUrl('/nieuws', { filter: 'materialen' })).toBe(
      'https://feigro.nl/nieuws?filter=materialen'
    );
  });

  it('kan een tracking-naam niet alsnog via params terugzetten', () => {
    expect(getCanonicalUrl('/contact', { utm_source: 'x' })).toBe('https://feigro.nl/contact');
  });
});

describe('paginering', () => {
  it('canonicaliseert pagina 1 naar de kale basis-URL, zonder ?page', () => {
    expect(getPaginationCanonical('/nieuws', 1)).toBe('https://feigro.nl/nieuws');
  });

  it('voegt ?page toe vanaf pagina 2', () => {
    expect(getPaginationCanonical('/nieuws', 2)).toBe('https://feigro.nl/nieuws?page=2');
  });

  it('behoudt extra parameters naast ?page', () => {
    expect(getPaginationCanonical('/nieuws', 3, { filter: 'materialen' })).toBe(
      'https://feigro.nl/nieuws?filter=materialen&page=3'
    );
  });

  it('heeft geen rel=prev op de eerste pagina en geen rel=next op de laatste', () => {
    const first = getPaginationLinks('/nieuws', 1, 3);
    expect(first.prev).toBeUndefined();
    expect(first.next).toBe('https://feigro.nl/nieuws?page=2');

    const last = getPaginationLinks('/nieuws', 3, 3);
    expect(last.prev).toBe('https://feigro.nl/nieuws?page=2');
    expect(last.next).toBeUndefined();
  });

  it('laat rel=prev naar de kale basis-URL wijzen als pagina 2 teruggaat naar pagina 1', () => {
    const page2 = getPaginationLinks('/nieuws', 2, 5);
    expect(page2.prev).toBe('https://feigro.nl/nieuws');
  });
});

describe('getUrlNormalizationRedirect', () => {
  const base = { protocol: 'https:', hostname: 'feigro.nl', pathname: '/dakrenovatie', search: '', hash: '' };

  it('doet niets als de URL al genormaliseerd is', () => {
    expect(getUrlNormalizationRedirect(base)).toBeNull();
  });

  it('herschrijft http naar https', () => {
    expect(getUrlNormalizationRedirect({ ...base, protocol: 'http:' })).toBe(
      'https://feigro.nl/dakrenovatie'
    );
  });

  it('laat http op localhost met rust, voor lokale ontwikkeling', () => {
    expect(getUrlNormalizationRedirect({ ...base, protocol: 'http:', hostname: 'localhost' })).toBeNull();
  });

  it('strip het www-voorvoegsel', () => {
    expect(getUrlNormalizationRedirect({ ...base, hostname: 'www.feigro.nl' })).toBe(
      'https://feigro.nl/dakrenovatie'
    );
  });

  it('maakt het pad kleine letters', () => {
    expect(getUrlNormalizationRedirect({ ...base, pathname: '/DakRenovatie' })).toBe(
      'https://feigro.nl/dakrenovatie'
    );
  });

  it('verwijdert een trailing slash, behalve op de root', () => {
    expect(getUrlNormalizationRedirect({ ...base, pathname: '/dakrenovatie/' })).toBe(
      'https://feigro.nl/dakrenovatie'
    );
    expect(getUrlNormalizationRedirect({ ...base, pathname: '/' })).toBeNull();
  });

  it('behoudt query-parameters en hash ongewijzigd', () => {
    expect(
      getUrlNormalizationRedirect({ ...base, pathname: '/Dakrenovatie/', search: '?utm_source=x', hash: '#faq' })
    ).toBe('https://feigro.nl/dakrenovatie?utm_source=x#faq');
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

/**
 * Minimale robots.txt-parser voor de tests hieronder. Groepeert opeenvolgende
 * User-agent-regels tot één record met de erna volgende Allow/Disallow/
 * Crawl-delay-regels - exact zoals de spec (RFC 9309) en elke echte crawler
 * het lezen. Een los neergezette rule-regel zonder voorafgaande User-agent
 * hoort bij het laatst geopende record, niet bij alles daarboven; dat is
 * precies de valkuil die deze parser (en de tests erna) moet vangen.
 */
function parseRobots(text: string) {
  type Record_ = { agents: string[]; allow: string[]; disallow: string[]; crawlDelay?: string };
  const records: Record_[] = [];
  let current: Record_ | null = null;

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim().toLowerCase();
    const value = line.slice(separatorIndex + 1).trim();

    if (key === 'user-agent') {
      // Een User-agent-regel ná minstens één rule-regel in het huidige record
      // opent een nieuw, leeg record; opeenvolgende User-agent-regels delen er één.
      if (!current || current.allow.length || current.disallow.length || current.crawlDelay) {
        current = { agents: [], allow: [], disallow: [] };
        records.push(current);
      }
      current.agents.push(value);
    } else if (current) {
      if (key === 'allow') current.allow.push(value);
      else if (key === 'disallow') current.disallow.push(value);
      else if (key === 'crawl-delay') current.crawlDelay = value;
    }
  }

  return {
    records,
    rulesFor(agent: string): Record_ {
      return (
        records.find(r => r.agents.includes(agent)) ??
        records.find(r => r.agents.includes('*')) ?? { agents: [], allow: [], disallow: [] }
      );
    }
  };
}

describe('robots.txt', () => {
  const robots = readFileSync('public/robots.txt', 'utf8');
  const parsed = parseRobots(robots);

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
      expect(parsed.rulesFor(bot).allow).toContain('/');
    }
  });

  it('noemt geen crawlers meer die niet meer bestaan', () => {
    expect(robots).not.toContain('anthropic-ai');
    expect(robots).not.toContain('Claude-Web');
  });

  it('blokkeert /api/, /admin/ en /private/ voor met naam genoemde bots, niet alleen voor de laatst genoemde', () => {
    // Regressietest voor een structurele robots.txt-fout: los neergezette
    // Disallow-regels golden ooit alleen voor de laatst genoemde User-agent
    // (WhatsApp), niet voor Googlebot, GPTBot of de wildcard erboven.
    for (const bot of ['*', 'Googlebot', 'Bingbot', 'GPTBot', 'ClaudeBot', 'CCBot', 'WhatsApp']) {
      const rules = parsed.rulesFor(bot);
      expect(rules.allow).toContain('/');
      expect(rules.disallow).toEqual(expect.arrayContaining(['/api/', '/admin/', '/private/']));
    }
  });

  it('remt bekende agressieve SEO-crawlers af zonder ze te blokkeren', () => {
    for (const bot of ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot']) {
      const rules = parsed.rulesFor(bot);
      expect(rules.allow).toContain('/');
      expect(rules.disallow).toHaveLength(0);
      expect(rules.crawlDelay).toBe('10');
    }
  });

  it('blokkeert geen enkele query-parameter, want canonical-URLs dekken dat al af', () => {
    expect(robots).not.toMatch(/Disallow:.*\?/);
  });

  it('wijst naar de sitemap', () => {
    expect(robots).toContain('Sitemap: https://feigro.nl/sitemap.xml');
  });
});
