import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/lib/structured-data';

/**
 * Sitewide JSON-LD: Organization en WebSite op elke pagina.
 * De RoofingContractor (LocalBusiness) wordt buiten de homepage geplaatst;
 * op de homepage levert de reviews-sectie dezelfde entiteit inclusief beoordelingen.
 */
export function SiteSchema() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const schemas: Record<string, unknown>[] = [
    generateOrganizationSchema() as unknown as Record<string, unknown>,
    generateWebsiteSchema() as unknown as Record<string, unknown>,
  ];

  if (!isHome) {
    schemas.push(generateLocalBusinessSchema() as unknown as Record<string, unknown>);
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
