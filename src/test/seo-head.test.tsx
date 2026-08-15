import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Controleert dat SEOHead daadwerkelijk een zelfverwijzende canonical-tag
 * (met genormaliseerde URL) en, waar opgegeven, rel="prev"/"next" in de head
 * zet. Dit is de output die zoekmachines/Bing daadwerkelijk lezen - een
 * geslaagde build zegt niets over wat er in de <head> belandt.
 */
function renderAt(path: string, ui: React.ReactElement) {
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>
    </HelmetProvider>
  );
}

async function readCanonical() {
  return waitFor(() => {
    const link = document.querySelector('link[rel="canonical"]');
    expect(link).not.toBeNull();
    return link!.getAttribute('href');
  });
}

describe('SEOHead canonical URLs', () => {
  it('is zelfverwijzend: canonicalUrl niet opgegeven -> canonical volgt het huidige pad', async () => {
    renderAt('/dakrenovatie', <SEOHead title="Dakrenovatie" />);
    expect(await readCanonical()).toBe('https://feigro.nl/dakrenovatie');
  });

  it('normaliseert een expliciet opgegeven canonicalUrl (hoofdletters, trailing slash)', async () => {
    renderAt('/', <SEOHead title="Test" canonicalUrl="/Dakrenovatie/" />);
    expect(await readCanonical()).toBe('https://feigro.nl/dakrenovatie');
  });

  it('voegt canonicalParams toe aan de canonical (bv. ?page=2)', async () => {
    renderAt('/nieuws', <SEOHead title="Nieuws" canonicalParams={{ page: '2' }} />);
    expect(await readCanonical()).toBe('https://feigro.nl/nieuws?page=2');
  });

  it('zet rel="prev" en rel="next" wanneer opgegeven', async () => {
    renderAt(
      '/nieuws',
      <SEOHead title="Nieuws" canonicalParams={{ page: '2' }} prevUrl="/nieuws" nextUrl="/nieuws?page=3" />
    );
    await readCanonical();

    const prev = document.querySelector('link[rel="prev"]');
    const next = document.querySelector('link[rel="next"]');
    expect(prev?.getAttribute('href')).toBe('https://feigro.nl/nieuws');
    expect(next?.getAttribute('href')).toBe('https://feigro.nl/nieuws?page=3');
  });

  it('zet geen rel="prev"/"next" wanneer niet opgegeven (niet-gepagineerde pagina)', async () => {
    renderAt('/contact', <SEOHead title="Contact" />);
    await readCanonical();

    expect(document.querySelector('link[rel="prev"]')).toBeNull();
    expect(document.querySelector('link[rel="next"]')).toBeNull();
  });
});
