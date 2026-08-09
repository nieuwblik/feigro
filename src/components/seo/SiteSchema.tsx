import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateBreadcrumbsFromPath,
} from '@/lib/structured-data';

/**
 * Site-brede JSON-LD, één keer per pagina gerenderd vanuit de layout.
 *
 * Vervangt de statische <script type="application/ld+json"> blokken die in
 * index.html stonden. Die kwamen op élke URL terecht en liepen uit de pas met
 * src/lib/structured-data.ts (verkeerde provincie, verkeerd telefoonnummer,
 * logo-URL die 404'de). Door het hier te renderen is er nog één bron.
 *
 * De BreadcrumbList wordt afgeleid van het huidige pad, zodat elke subpagina
 * automatisch breadcrumbs in de zoekresultaten kan krijgen zonder dat er
 * zichtbaar iets aan de pagina verandert.
 */
export function SiteSchema() {
  const { pathname } = useLocation();

  const graph: object[] = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
  ];

  // Op de homepage voegt een breadcrumb met één item niets toe.
  const breadcrumbs = generateBreadcrumbsFromPath(pathname);
  if (breadcrumbs.length > 1) {
    graph.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}

export default SiteSchema;
