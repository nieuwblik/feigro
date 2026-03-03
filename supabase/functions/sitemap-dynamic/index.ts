const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/xml; charset=utf-8',
};

const CANONICAL_DOMAIN = 'https://feigro.nl';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const staticPages: SitemapUrl[] = [
  { loc: '/', lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
  { loc: '/diensten', lastmod: TODAY, changefreq: 'monthly', priority: '0.9' },
  { loc: '/spoedservice', lastmod: TODAY, changefreq: 'monthly', priority: '0.9' },
  { loc: '/daklekkage', lastmod: TODAY, changefreq: 'monthly', priority: '0.9' },
  { loc: '/over-ons', lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { loc: '/projecten', lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
  { loc: '/nieuws', lastmod: TODAY, changefreq: 'weekly', priority: '0.7' },
  { loc: '/contact', lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { loc: '/vacatures', lastmod: TODAY, changefreq: 'monthly', priority: '0.5' },
  // Service pages
  { loc: '/dakinspectie', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/dakonderhoud', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/dakrenovatie', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/dakreparatie', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/dakbedekking-vervangen', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/bitumen-dakbedekking', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/epdm-dakbedekking', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/valbeveiliging', lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { loc: '/vve-vastgoedbeheer', lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // Project detail pages
  { loc: '/projecten/dakrenovatie-hoogwoud', lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  { loc: '/projecten/dakrenovatie-enkhuizen', lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  { loc: '/projecten/dakisolatie-ursem', lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  { loc: '/projecten/bitumensysteem-almere', lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  // Legal
  { loc: '/cookies', lastmod: TODAY, changefreq: 'yearly', priority: '0.2' },
];

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildXml(urls: SitemapUrl[]): string {
  const entries = urls.map(u => `  <url>
    <loc>${escapeXml(CANONICAL_DOMAIN + u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Future: fetch dynamic content from DB here and merge with staticPages
    const xml = buildXml(staticPages);
    return new Response(xml, { headers: corsHeaders });
  } catch (error) {
    console.error('Sitemap error:', error);
    return new Response(buildXml(staticPages), { headers: corsHeaders });
  }
});
