// Interne linkbuilding tussen dienstpagina's: elke dienstpagina linkt
// contextueel door naar een paar andere diensten, met beschrijvende tekst
// (niet "klik hier") - zie RelatedContent.tsx voor de rendering.

import { seoMetadata } from '@/data/seo-metadata';
import { RelatedContentItem } from '@/types/seo';

/**
 * Sleutels van de dienstpagina's in seoMetadata, in vaste volgorde. Bewust
 * hardcoded (niet alle seoMetadata-keys, bv. 'home' en 'contact' horen hier
 * niet bij) en deterministisch, zodat de output stabiel en testbaar is.
 */
const SERVICE_KEYS = [
  'dakinspectie',
  'dakonderhoud',
  'dakrenovatie',
  'dakbedekkingVervangen',
  'bitumenDakbedekking',
  'epdmDakbedekking',
  'daklekkage',
  'dakreparatie',
  'valbeveiliging',
  'vveVastgoedbeheer'
] as const satisfies (keyof typeof seoMetadata)[];

/** Knipt de " | Feigro..."-merksuffix van een SEO-titel voor gebruik als korte kaarttitel. */
function shortTitle(fullTitle: string): string {
  return fullTitle.split(' | ')[0];
}

/**
 * Kies `count` andere dienstpagina's om vanaf de huidige dienstpagina naar
 * door te linken. `currentPath` (bv. '/dakinspectie') wordt uitgesloten zodat
 * een pagina nooit naar zichzelf linkt.
 *
 * Pakt een venster van `count` items die circulair ná de huidige pagina in
 * SERVICE_KEYS volgen, in plaats van steeds gewoon de eerste `count` van de
 * lijst. Met een simpele "eerste N" zou de laatste dienst in SERVICE_KEYS
 * (EPDM) door geen enkele andere pagina worden aanbevolen, want die valt
 * nooit binnen iemands eerste N - hier krijgt elke dienst evenveel
 * inkomende links.
 */
export function getRelatedServices(currentPath: string, count = 4): RelatedContentItem[] {
  const currentIndex = SERVICE_KEYS.findIndex(key => seoMetadata[key].canonicalUrl === currentPath);
  const total = SERVICE_KEYS.length;
  const windowSize = Math.min(count, total - 1);
  const startIndex = currentIndex === -1 ? 0 : currentIndex;

  const selected: (typeof SERVICE_KEYS)[number][] = [];
  for (let offset = 1; offset <= windowSize; offset++) {
    selected.push(SERVICE_KEYS[(startIndex + offset) % total]);
  }

  return selected
    .map(key => seoMetadata[key])
    .map(meta => ({
      title: shortTitle(meta.title),
      description: meta.description,
      href: meta.canonicalUrl
    }));
}
