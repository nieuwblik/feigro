/**
 * Genereert public/sitemap.xml uit de code zelf.
 *
 * Waarom uit de code en niet met de hand: er waren drie sitemaps die elkaar
 * tegenspraken (public/sitemap.xml, public/sitemap-static.xml en een Supabase
 * edge function), en geen van drieën kende de blogartikelen. Door de routes uit
 * App.tsx en de slugs uit de datafiles te lezen kan de sitemap niet meer uit de
 * pas lopen met wat er daadwerkelijk bestaat.
 *
 * Draait automatisch voor elke build (npm run build).
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE_URL = 'https://feigro.nl';

/** Pagina's die bewust niet in de sitemap horen. */
const EXCLUDED = new Set(['*', '/cookies']);

/**
 * Crawlprioriteit per pad. Alles wat hier niet in staat krijgt de default.
 * Priority is een zwak signaal, maar changefreq helpt Google inschatten hoe
 * vaak het loont om terug te komen.
 */
const HINTS = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/diensten': { changefreq: 'monthly', priority: '0.9' },
  '/spoedservice': { changefreq: 'monthly', priority: '0.9' },
  '/daklekkage': { changefreq: 'monthly', priority: '0.9' },
  '/projecten': { changefreq: 'weekly', priority: '0.8' },
  '/nieuws': { changefreq: 'weekly', priority: '0.7' },
  '/over-ons': { changefreq: 'monthly', priority: '0.7' },
  '/contact': { changefreq: 'monthly', priority: '0.7' },
  '/vacatures': { changefreq: 'monthly', priority: '0.5' },
};

const DEFAULT_HINT = { changefreq: 'monthly', priority: '0.8' };
const DETAIL_HINT = { changefreq: 'monthly', priority: '0.6' };

function read(relativePath) {
  return readFileSync(join(ROOT, relativePath), 'utf8');
}

/** Alle statische routes uit src/routes/ (TanStack file-based routing),
 *  dus zonder $params en zonder __root. */
function getStaticRoutes() {
  const routes = [];
  const walk = (dir, prefix) => {
    for (const entry of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(`${dir}/${entry.name}`, `${prefix}/${entry.name}`);
        continue;
      }
      if (!entry.name.endsWith('.tsx')) continue;
      const base = entry.name.replace(/\.tsx$/, '');
      if (base === '__root' || base.startsWith('$')) continue;
      routes.push(base === 'index' ? (prefix || '/') : `${prefix}/${base}`);
    }
  };
  walk('src/routes', '');
  return routes.filter(path => !EXCLUDED.has(path));
}

/** Projectslugs uit de projectdata. */
function getProjectUrls() {
  const projects = read('src/data/projects.ts');
  return [...projects.matchAll(/slug:\s*'([^']+)'/g)].map(m => `/projecten/${m[1]}`);
}

/** Blogslugs uit de nieuwsoverzichtspagina, waar de artikelen gedefinieerd staan. */
function getBlogUrls() {
  const nieuws = read('src/pages/Nieuws.tsx');
  const block = nieuws.slice(nieuws.indexOf('const blogPosts'), nieuws.indexOf('export default'));
  return [...block.matchAll(/id:\s*'([^']+)'/g)].map(m => `/nieuws/${m[1]}`);
}

function hintFor(path, isDetail) {
  if (HINTS[path]) return HINTS[path];
  return isDetail ? DETAIL_HINT : DEFAULT_HINT;
}

/**
 * Guard: een entry zonder geldig pad mag nooit een (leeg) <url>-blok worden.
 * Een <url> zonder <loc> is ongeldig volgens het sitemap-protocol en zorgt
 * ervoor dat Google de hele sitemap als onleesbaar verwerpt. Ongeldige items
 * worden overgeslagen met een waarschuwing zodat de oorzaak zichtbaar blijft.
 */
function isValidPath(path) {
  return typeof path === 'string' && path.trim().length > 0 && path.startsWith('/');
}

function buildSitemap() {
  // Bewust geen <lastmod>: we hebben geen betrouwbare, pagina-specifieke
  // wijzigingsdatum. Een builddatum voor alle URL's is een vals signaal dat
  // Google en Bing leren negeren, wat erger is dan geen lastmod.
  const sources = [
    ['routes', getStaticRoutes().map(path => ({ path, ...hintFor(path, false) }))],
    ['projects', getProjectUrls().map(path => ({ path, ...hintFor(path, true) }))],
    ['blog', getBlogUrls().map(path => ({ path, ...hintFor(path, true) }))],
  ];

  const entries = [];
  for (const [source, items] of sources) {
    for (const item of items) {
      if (!isValidPath(item.path)) {
        console.warn(`sitemap.xml: item uit '${source}' overgeslagen, ongeldig pad: ${JSON.stringify(item.path)}`);
        continue;
      }
      entries.push(item);
    }
  }

  const seen = new Set();
  const unique = entries.filter(entry => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });

  // Belangrijkste pagina's bovenaan, wat het bestand voor mensen leesbaar houdt.
  unique.sort((a, b) => Number(b.priority) - Number(a.priority) || a.path.localeCompare(b.path));

  const urls = unique
    .map(({ path, changefreq, priority }) => {
      const loc = path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`;
      // Laatste verdedigingslijn: zonder geldige absolute loc nooit een blok schrijven.
      if (!loc.startsWith(`${BASE_URL}/`)) {
        console.warn(`sitemap.xml: entry overgeslagen, ongeldige loc '${loc}' voor pad ${JSON.stringify(path)}`);
        return null;
      }
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .filter(Boolean)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Gegenereerd door scripts/generate-sitemap.mjs - niet met de hand aanpassen. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  writeFileSync(join(ROOT, 'public/sitemap.xml'), xml, 'utf8');
  console.log(`sitemap.xml: ${unique.length} URL's gegenereerd`);
}

buildSitemap();
