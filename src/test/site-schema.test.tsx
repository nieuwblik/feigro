import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { SiteSchema } from '@/components/seo/SiteSchema';

/**
 * Controleert dat de site-brede JSON-LD daadwerkelijk in de head belandt.
 * De statische blokken in index.html zijn verwijderd, dus als dit component
 * stilvalt heeft de site helemaal geen structured data meer.
 */
function renderSiteSchema() {
  render(
    <HelmetProvider>
      <SiteSchema />
    </HelmetProvider>
  );
}

async function readGraph(): Promise<Record<string, unknown>[]> {
  return waitFor(() => {
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    return JSON.parse(script!.textContent ?? '[]');
  });
}

describe('SiteSchema', () => {
  it('zet Organization, WebSite en RoofingContractor in de head', async () => {
    renderSiteSchema();
    const types = (await readGraph()).map(node => node['@type']);

    expect(types).toContain('Organization');
    expect(types).toContain('WebSite');
    expect(types).toContain('RoofingContractor');
  });

  it('bevat geen BreadcrumbList, want dat is nu exclusief de taak van <SEOBreadcrumb> per pagina', async () => {
    // Regressietest: dit voorkomt dat SiteSchema en een pagina's eigen
    // <SEOBreadcrumb> weer allebei een (mogelijk tegenstrijdige) BreadcrumbList
    // op dezelfde pagina zetten.
    renderSiteSchema();
    const graph = await readGraph();

    expect(graph.some(node => node['@type'] === 'BreadcrumbList')).toBe(false);
  });
});
