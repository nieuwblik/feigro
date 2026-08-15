import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { StructuredData } from '@/components/seo/StructuredData';

/**
 * StructuredData is de generieke injectie-helper voor componenten die buiten
 * SEOHead om hun eigen schema toevoegen (FAQSection, en straks eventuele
 * HowTo-secties). Test dat het daadwerkelijk in de <head> belandt, falsy
 * waarden overslaat, en niets rendert als er niets geldigs overblijft.
 */
function readScripts() {
  return waitFor(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    expect(scripts.length).toBeGreaterThan(0);
    return scripts.map(s => JSON.parse(s.textContent ?? '{}'));
  });
}

describe('StructuredData', () => {
  it('zet elk schema in een eigen <script>-tag', async () => {
    render(
      <HelmetProvider>
        <StructuredData schemas={[{ '@type': 'FAQPage' }, { '@type': 'HowTo' }]} />
      </HelmetProvider>
    );
    const parsed = await readScripts();
    expect(parsed).toHaveLength(2);
    expect(parsed.map(s => s['@type'])).toEqual(['FAQPage', 'HowTo']);
  });

  it('negeert falsy schema-entries (null/undefined/false uit een voorwaardelijke aanroep)', async () => {
    render(
      <HelmetProvider>
        <StructuredData schemas={[null, { '@type': 'FAQPage' }, undefined, false]} />
      </HelmetProvider>
    );
    const parsed = await readScripts();
    expect(parsed).toHaveLength(1);
  });

  it('rendert niets als er geen geldig schema overblijft', () => {
    render(
      <HelmetProvider>
        <StructuredData schemas={[null, undefined, false]} />
      </HelmetProvider>
    );
    expect(document.querySelector('script[type="application/ld+json"]')).toBeNull();
  });
});
