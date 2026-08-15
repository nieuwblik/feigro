import { describe, it, expect } from 'vitest';
import { auditHeadings } from '@/lib/heading-audit';

describe('auditHeadings', () => {
  it('meldt niets bij een correcte hiërarchie zonder sprongen', () => {
    expect(auditHeadings([1, 2, 3, 2, 3])).toHaveLength(0);
  });

  it('mag altijd weer omhoog naar een eerder niveau, dat is geen sprong', () => {
    expect(auditHeadings([1, 2, 3, 3, 2, 3])).toHaveLength(0);
  });

  it('signaleert als er helemaal geen h1 is', () => {
    const violations = auditHeadings([2, 3]);
    expect(violations).toContainEqual(expect.objectContaining({ type: 'missing-h1' }));
  });

  it('signaleert meerdere h1-elementen', () => {
    const violations = auditHeadings([1, 2, 1, 3]);
    expect(violations).toContainEqual(
      expect.objectContaining({ type: 'multiple-h1', message: expect.stringContaining('2') })
    );
  });

  it('signaleert een overgeslagen niveau (h1 -> h3)', () => {
    const violations = auditHeadings([1, 3]);
    expect(violations).toContainEqual(expect.objectContaining({ type: 'skipped-level' }));
  });

  it('signaleert elke sprong apart bij meerdere sprongen in dezelfde pagina', () => {
    const violations = auditHeadings([1, 3, 5]);
    const skips = violations.filter(v => v.type === 'skipped-level');
    expect(skips).toHaveLength(2);
  });

  it('geeft een lege array voor een lege pagina (geen kopteksten), zonder te crashen', () => {
    // Geen headings is een ander probleem (geen h1) dan een sprong; dit test
    // vooral dat de functie niet crasht op een lege input.
    const violations = auditHeadings([]);
    expect(violations).toContainEqual(expect.objectContaining({ type: 'missing-h1' }));
  });

  it('h6 direct na h1 is één sprong, geen drie losse', () => {
    // De check kijkt alleen naar het verschil met de vorige kop, niet naar
    // hoeveel niveaus er precies ontbreken - dat is een bewuste, eenvoudige regel.
    const violations = auditHeadings([1, 6]);
    expect(violations.filter(v => v.type === 'skipped-level')).toHaveLength(1);
  });
});
