import { describe, it, expect } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { SEOBreadcrumb } from '@/components/seo/SEOBreadcrumb';

function renderAt(path: string, props: React.ComponentProps<typeof SEOBreadcrumb> = {}) {
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <SEOBreadcrumb {...props} />
      </MemoryRouter>
    </HelmetProvider>
  );
}

async function readBreadcrumbSchema() {
  return waitFor(() => {
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    return JSON.parse(script!.textContent ?? '{}');
  });
}

describe('SEOBreadcrumb', () => {
  it('rendert niets op de homepage', () => {
    renderAt('/');
    expect(screen.queryByRole('navigation')).toBeNull();
  });

  it('gebruikt een semantisch <nav> met aria-label', async () => {
    renderAt('/dakrenovatie');
    const nav = await screen.findByRole('navigation', { name: 'Breadcrumb' });
    expect(nav.tagName).toBe('NAV');
  });

  it('genereert breadcrumbs uit het URL-pad als er geen custom items zijn', async () => {
    renderAt('/dakrenovatie');
    await screen.findByRole('navigation');
    expect(screen.getByText('Dakrenovatie')).toBeInTheDocument();
  });

  it('linkt elk item behalve de huidige pagina', async () => {
    renderAt('/dakrenovatie');
    await screen.findByRole('navigation');

    // Home-link is er (met sr-only tekst op mobiel, altijd met een href)
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
    links.forEach(link => expect(link).toHaveAttribute('href'));

    // De huidige pagina is GEEN link, maar een <span aria-current="page">
    const current = screen.getByText('Dakrenovatie');
    expect(current.tagName).not.toBe('A');
    expect(current).toHaveAttribute('aria-current', 'page');
  });

  it('zet een BreadcrumbList met correcte 1-based positienummering in de head', async () => {
    renderAt('/dakrenovatie');
    const schema = await readBreadcrumbSchema();

    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement.map((i: { position: number }) => i.position)).toEqual([1, 2]);
    expect(schema.itemListElement[1].name).toBe('Dakrenovatie');
  });

  it('gebruikt custom items in plaats van pad-gebaseerde generatie wanneer opgegeven', async () => {
    renderAt('/projecten/dakrenovatie-enkhuizen', {
      items: [
        { label: 'Home', href: '/' },
        { label: 'Projecten', href: '/projecten' },
        { label: 'Dakrenovatie Enkhuizen', href: '/projecten/dakrenovatie-enkhuizen' }
      ]
    });

    await screen.findByRole('navigation');
    expect(screen.getByText('Projecten')).toBeInTheDocument();
    expect(screen.getByText('Dakrenovatie Enkhuizen')).toBeInTheDocument();

    const schema = await readBreadcrumbSchema();
    expect(schema.itemListElement).toHaveLength(3);
  });

  it('laat het laatste item zonder item-URL in de JSON-LD (het is de huidige pagina)', async () => {
    renderAt('/dakrenovatie');
    const schema = await readBreadcrumbSchema();
    expect(schema.itemListElement.at(-1).item).toBeUndefined();
  });
});
