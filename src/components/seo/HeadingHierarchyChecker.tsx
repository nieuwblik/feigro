import { useEffect } from 'react';
import { useLocation } from '@/lib/router-compat';
import { auditHeadings, getHeadingLevels } from '@/lib/heading-audit';

/**
 * Dev-only waarschuwing voor kopniveau-problemen (geen/meerdere <h1>,
 * overgeslagen niveaus). Rendert niets, doet niets in productie - alleen een
 * console.warn in `npm run dev` zodra een pagina met een probleem klaar is
 * met renderen.
 *
 * Draait als losse checker op elke route-wissel in plaats van per-pagina
 * opt-in, zodat nieuwe pagina's 'm automatisch meekrijgen.
 */
export function HeadingHierarchyChecker() {
  const location = useLocation();

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    // Eén tick wachten zodat de nieuwe route klaar is met renderen
    // (animaties/lazy content) voordat de DOM wordt uitgelezen.
    const timeoutId = window.setTimeout(() => {
      const levels = getHeadingLevels();
      const violations = auditHeadings(levels);

      if (violations.length > 0) {
        console.warn(
          `[heading-hierarchy] ${violations.length} probleem(en) op ${location.pathname}:\n` +
            violations.map(v => `  - ${v.message}`).join('\n')
        );
      }
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname]);

  return null;
}

export default HeadingHierarchyChecker;
