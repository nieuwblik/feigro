import { Helmet } from '@/lib/helmet-compat';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateLocalBusinessSchema,
} from '@/lib/structured-data';

/**
 * Site-brede JSON-LD, één keer per pagina gerenderd vanuit de layout.
 *
 * Vervangt de statische <script type="application/ld+json"> blokken die in
 * index.html stonden. Die kwamen op élke URL terecht en liepen uit de pas met
 * src/lib/structured-data.ts (verkeerde provincie, verkeerd telefoonnummer,
 * logo-URL die 404'de). Door het hier te renderen is er nog één bron.
 *
 * Bevat GEEN BreadcrumbList: elke subpagina rendert daarvoor zelf
 * <SEOBreadcrumb />, dat zowel de zichtbare nav als de bijbehorende JSON-LD
 * levert. Eén component is de enige bron voor breadcrumbs, in plaats van dit
 * generieke, pad-gebaseerde schema hier én een rijkere variant per pagina -
 * dat gaf eerder dubbele/tegenstrijdige BreadcrumbList-schema's op dezelfde
 * pagina (zie de blogartikel-categorie-breadcrumb).
 */
export function SiteSchema() {
  const graph: object[] = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
  ];

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}

export default SiteSchema;
