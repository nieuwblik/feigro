// Dynamic Sitemap Edge Function for FEIGRO Dakwerken
// Generates sitemaps for projects and news articles

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/xml; charset=utf-8',
};

const CANONICAL_DOMAIN = 'https://feigro.nl';
const ITEMS_PER_PAGE = 1000;

interface SitemapItem {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type') || 'projects';
    const page = parseInt(url.searchParams.get('page') || '1', 10);

    console.log(`Generating sitemap for type: ${type}, page: ${page}`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let items: SitemapItem[] = [];

    // For now, since there's no database content, return empty sitemaps
    // This structure is ready for when database tables are added
    if (type === 'projects') {
      // When projects table exists:
      // const { data, error } = await supabase
      //   .from('projects')
      //   .select('slug, updated_at')
      //   .order('updated_at', { ascending: false })
      //   .range((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE - 1);
      
      // For now, return static project URLs based on existing data
      const staticProjects = [
        { slug: 'dakrenovatie-hoogwoud', date: '2026-02-03' },
        { slug: 'dakrenovatie-enkhuizen', date: '2026-02-03' },
        { slug: 'dakisolatie-ursem', date: '2026-02-03' },
        { slug: 'bitumensysteem-almere', date: '2026-02-03' },
      ];

      items = staticProjects.map(project => ({
        loc: `${CANONICAL_DOMAIN}/projecten/${project.slug}`,
        lastmod: project.date,
        changefreq: 'monthly',
        priority: '0.6',
      }));
    } else if (type === 'nieuws') {
      // When nieuws/blog table exists:
      // const { data, error } = await supabase
      //   .from('posts')
      //   .select('slug, updated_at')
      //   .eq('published', true)
      //   .order('updated_at', { ascending: false })
      //   .range((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE - 1);

      // For now, return empty news sitemap
      items = [];
    }

    // Generate XML
    const xml = generateSitemapXml(items);

    return new Response(xml, {
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    
    // Return empty but valid sitemap on error
    const emptyXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new Response(emptyXml, {
      headers: corsHeaders,
    });
  }
});

function generateSitemapXml(items: SitemapItem[]): string {
  const urlElements = items.map(item => `
  <url>
    <loc>${escapeXml(item.loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements}
</urlset>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
