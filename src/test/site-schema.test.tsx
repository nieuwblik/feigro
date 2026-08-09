import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { SiteSchema } from '@/components/seo/SiteSchema';

/**
 * Controleert dat de site-brede JSON-LD daadwerkelijk in de head belandt.
 * De statische blokken in index.html zijn verwijderd, dus als dit component
 * stilvalt heeft de site helemaal geen structured data meer.
 */
function renderAt(path: string) {
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <SiteSchema />
      </MemoryRouter>
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
    renderAt('/');
    const types = (await readGraph()).map(node => node['@type']);

    expect(types).toContain('Organization');
    expect(types).toContain('WebSite');
    expect(types).toContain('RoofingContractor');
  });

  it('voegt breadcrumbs toe op een subpagina, maar niet op de homepage', async () => {
    renderAt('/dakrenovatie');
    const graph = await readGraph();
    const breadcrumb = graph.find(node => node['@type'] === 'BreadcrumbList');

    expect(breadcrumb).toBeDefined();
    expect((breadcrumb as { itemListElement: unknown[] }).itemListElement).toHaveLength(2);
  });
});
