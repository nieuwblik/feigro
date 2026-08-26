// Kopniveau-audit voor SEO/toegankelijkheid: precies 1 <h1> per pagina, geen
// overgeslagen niveaus (h1 -> h3 zonder h2 ertussen).

export interface HeadingViolation {
  type: 'missing-h1' | 'multiple-h1' | 'skipped-level';
  message: string;
}

/**
 * Pure audit-functie: neemt de kopniveaus in document-volgorde (bv. [1, 2, 3, 2])
 * en geeft de gevonden problemen terug. Los van de DOM/React, zodat dit zonder
 * te renderen te testen is - HeadingHierarchyChecker levert de echte niveaus
 * uit de gerenderde pagina aan.
 */
export function auditHeadings(levels: number[]): HeadingViolation[] {
  const violations: HeadingViolation[] = [];
  const h1Count = levels.filter(level => level === 1).length;

  if (h1Count === 0) {
    violations.push({ type: 'missing-h1', message: 'Pagina heeft geen enkele <h1>.' });
  } else if (h1Count > 1) {
    violations.push({
      type: 'multiple-h1',
      message: `Pagina heeft ${h1Count} <h1>-elementen; er hoort er maar 1 te zijn.`
    });
  }

  for (let i = 1; i < levels.length; i++) {
    const previous = levels[i - 1]!;
    const current = levels[i]!;
    if (current > previous + 1) {
      violations.push({
        type: 'skipped-level',
        message: `Kopniveau springt van h${previous} naar h${current} (kop #${i + 1} in de DOM) - niveau h${previous + 1} ontbreekt ertussen.`
      });
    }
  }

  return violations;
}

/**
 * Leest de kopniveaus uit een gegeven DOM-root, in document-volgorde.
 * Los van React/router zodat dit ook buiten een component te gebruiken is.
 */
export function getHeadingLevels(root: ParentNode = document): number[] {
  return Array.from(root.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(el =>
    Number(el.tagName.slice(1))
  );
}
