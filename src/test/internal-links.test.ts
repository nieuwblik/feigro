import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

/**
 * Orphan-page-regressietest: elke statische route moet als link-doel
 * voorkomen in minstens één ander bestand dan waar de pagina zelf staat -
 * anders is er geen daadwerkelijke interne link naar toe, alleen de
 * self-reference in z'n eigen canonical-tag.
 *
 * Link-doelen in deze codebase zijn zelden een letterlijke `to="/pad"` -
 * meestal `to={item.href}` met `href: '/pad'` verderop in een data-array
 * (Header, Footer, seo-metadata, related-content). Daarom wordt hier gezocht
 * naar het pad als quoted string ergens in de bron, niet specifiek als
 * JSX-attribuut - minder precies, maar dekt dit project se patroon wél.
 */

const SRC_DIR = 'src';
const EXCLUDED_DIRS = new Set(['test']);

function collectSourceFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      files.push(...collectSourceFiles(path.join(dir, entry.name)));
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const SOURCE_FILES = collectSourceFiles(SRC_DIR);

/** Bestanden (niet de losse route-component zelf) die het pad als quoted string bevatten. */
function filesReferencing(routePath: string): string[] {
  const quoted = [`'${routePath}'`, `"${routePath}"`, `\`${routePath}\``];
  return SOURCE_FILES.filter(file => {
    const content = readFileSync(file, 'utf8');
    return quoted.some(q => content.includes(q));
  });
}

const appTsx = readFileSync('src/App.tsx', 'utf8');
const staticRoutes = [...appTsx.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map(m => m[1])
  .filter(p => !p.includes(':') && p !== '*' && p !== '/');

describe('interne links (geen orphan pages)', () => {
  it.each(staticRoutes)('%s komt voor in minstens 2 bronbestanden (self-reference + een echte inkomende link)', route => {
    const files = filesReferencing(route);
    expect(files.length).toBeGreaterThanOrEqual(2);
  });

  it('elke dienstpagina staat in het overzicht op /diensten', () => {
    const diensten = readFileSync('src/pages/Diensten.tsx', 'utf8');
    const serviceRoutes = staticRoutes.filter(r =>
      ['dakinspectie', 'dakonderhoud', 'dakrenovatie', 'dakbedekking-vervangen', 'bitumen-dakbedekking',
       'epdm-dakbedekking', 'daklekkage', 'dakreparatie', 'valbeveiliging', 'vve-vastgoedbeheer'].includes(r.slice(1))
    );
    expect(serviceRoutes.length).toBe(10);
    serviceRoutes.forEach(route => {
      expect(diensten).toContain(route);
    });
  });
});
