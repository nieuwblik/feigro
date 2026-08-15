import { describe, it, expect } from 'vitest';
import { getRelatedServices } from '@/lib/related-content';

const ALL_SERVICE_PATHS = [
  '/dakinspectie',
  '/dakonderhoud',
  '/dakrenovatie',
  '/dakbedekking-vervangen',
  '/bitumen-dakbedekking',
  '/epdm-dakbedekking',
  '/daklekkage',
  '/dakreparatie',
  '/valbeveiliging',
  '/vve-vastgoedbeheer'
];

describe('getRelatedServices', () => {
  it('linkt nooit naar de huidige pagina zelf', () => {
    for (const path of ALL_SERVICE_PATHS) {
      const related = getRelatedServices(path);
      expect(related.some(item => item.href === path)).toBe(false);
    }
  });

  it('geeft precies `count` items terug', () => {
    expect(getRelatedServices('/dakinspectie', 3)).toHaveLength(3);
    expect(getRelatedServices('/dakinspectie', 4)).toHaveLength(4);
  });

  it('gebruikt beschrijvende titel + omschrijving, geen "klik hier"', () => {
    const related = getRelatedServices('/dakinspectie', 4);
    for (const item of related) {
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.description.length).toBeGreaterThan(0);
      expect(item.title.toLowerCase()).not.toContain('klik hier');
      expect(item.title.toLowerCase()).not.toContain('click here');
    }
  });

  it('knipt de merksuffix van de titel, zodat kaarten geen dubbele branding tonen', () => {
    const related = getRelatedServices('/daklekkage', 4);
    for (const item of related) {
      expect(item.title.toLowerCase()).not.toContain('feigro');
    }
  });

  it('regressie: elke dienst wordt door minstens één andere dienstpagina aanbevolen (geen orphan in related content)', () => {
    // Was kapot met een simpele slice(0, count): de laatste dienst in de
    // vaste lijst (EPDM) kreeg dan van niemand een inkomende link.
    const recommended = new Set<string>();
    for (const path of ALL_SERVICE_PATHS) {
      getRelatedServices(path, 4).forEach(item => recommended.add(item.href));
    }
    for (const path of ALL_SERVICE_PATHS) {
      expect(recommended.has(path)).toBe(true);
    }
  });

  it('elke dienst krijgt evenveel inkomende related-content-links', () => {
    const incomingCount = new Map<string, number>(ALL_SERVICE_PATHS.map(p => [p, 0]));
    for (const path of ALL_SERVICE_PATHS) {
      getRelatedServices(path, 4).forEach(item => {
        incomingCount.set(item.href, (incomingCount.get(item.href) ?? 0) + 1);
      });
    }
    const counts = [...incomingCount.values()];
    expect(new Set(counts).size).toBe(1); // allemaal hetzelfde aantal
    expect(counts[0]).toBe(4);
  });

  it('geeft nog steeds `count` bruikbare items terug voor een onbekend pad', () => {
    const related = getRelatedServices('/onbekend-pad', 2);
    expect(related).toHaveLength(2);
    expect(related.every(item => ALL_SERVICE_PATHS.includes(item.href))).toBe(true);
  });
});
