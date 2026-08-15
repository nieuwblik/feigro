import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUrlNormalizationRedirect } from '@/lib/seo-utils';

/**
 * Client-side vangnet dat de zichtbare adresbalk-URL normaliseert naar https,
 * non-www, kleine letters en geen trailing slash.
 *
 * Dit repo bevat geen hosting-config (geen vercel.json/netlify.toml/_redirects),
 * dus er is geen garantie dat de host zelf al 301-redirects afdwingt voor
 * http→https, www→non-www, hoofdletters of trailing slashes. Dit component
 * is de tweede verdedigingslinie: het corrigeert de URL zodra de SPA laadt.
 *
 * Belangrijk: dit is GEEN vervanging voor server-side 301-redirects. Een
 * crawler die geen JavaScript uitvoert (of afhaakt vóór de eerste render)
 * ziet nog altijd de niet-genormaliseerde URL met een 200-status. Configureer
 * bij de host ook een echte redirect voor protocol/www; dit vangt vooral
 * hoofdletter- en trailing-slash-varianten af die op DNS/CDN-niveau vaak niet
 * eens instelbaar zijn.
 *
 * Tracking-query-parameters (?utm_*, ?ref=) worden hier bewust NIET uit de
 * adresbalk gestript - dat gebeurt alleen in de canonical-tag (zie
 * getCanonicalUrl in lib/seo-utils.ts). Ze uit de zichtbare URL halen zou
 * client-side attributietools breken die er na de eerste render nog op lezen.
 */
export function CanonicalUrlGuard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const redirectUrl = getUrlNormalizationRedirect(window.location);
    if (!redirectUrl) return;

    const target = new URL(redirectUrl);
    const isCrossOrigin =
      target.protocol !== window.location.protocol || target.hostname !== window.location.hostname;

    if (isCrossOrigin) {
      // Protocol of host wijzigt: alleen op te lossen met een volledige navigatie.
      window.location.replace(redirectUrl);
    } else {
      // Alleen het pad wijzigde (hoofdletters/trailing slash): client-side,
      // zonder page reload, met behoud van de SPA-state.
      navigate(`${target.pathname}${target.search}${target.hash}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return null;
}

export default CanonicalUrlGuard;
