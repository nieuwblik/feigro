// Core Web Vitals-meting en -rapportage.
//
// "Alerts voor regressies" (onderdeel 5 van de performance-opdracht) vereist
// een externe dienst die drempelwaarden bewaakt over tijd - die bestaat hier
// niet (geen GA4/Sentry/eigen endpoint in dit project). Dit bestand levert
// wél alles wat zo'n dienst nodig zou hebben: de metingen zelf, en de
// classificatie (good/needs-improvement/poor) volgens Google's drempels.
// Sluit een eigen reporter aan (zie reportWebVitals hieronder) zodra er een
// bestemming is om metingen naartoe te sturen.

import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

export type { Metric };

export type WebVitalRating = 'good' | 'needs-improvement' | 'poor';

/**
 * Drempelwaarden per metric, zoals Google Search Console en PageSpeed
 * Insights ze hanteren. INP verving FID in de web-vitals-API vanaf v4.
 */
const THRESHOLDS: Record<string, { good: number; needsImprovement: number }> = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  INP: { good: 200, needsImprovement: 500 },
  LCP: { good: 2500, needsImprovement: 4000 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 }
};

export function rateMetric(metric: Pick<Metric, 'name' | 'value'>): WebVitalRating {
  const thresholds = THRESHOLDS[metric.name];
  if (!thresholds) return 'good';
  if (metric.value <= thresholds.good) return 'good';
  if (metric.value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}

export type WebVitalsReporter = (metric: Metric, rating: WebVitalRating) => void;

const RATING_COLOR: Record<WebVitalRating, string> = {
  good: 'color: #4CB26E; font-weight: bold',
  'needs-improvement': 'color: #eab308; font-weight: bold',
  poor: 'color: #ef4444; font-weight: bold'
};

/**
 * Standaardrapportage: alleen console.log, alleen in dev. Bewust stil in
 * productie - zonder bestemming voor de data heeft loggen naar de console
 * van een bezoeker geen enkel nut en is het pure ruis.
 */
export const consoleReporter: WebVitalsReporter = (metric, rating) => {
  if (!import.meta.env.DEV) return;
  const value = metric.name === 'CLS' ? metric.value.toFixed(3) : `${Math.round(metric.value)}ms`;
  console.log(`%c[web-vitals] ${metric.name} ${value} (${rating})`, RATING_COLOR[rating], metric);
};

/**
 * Start het meten van de Core Web Vitals (CLS, INP, LCP, FCP, TTFB) en geeft
 * elke meting door aan `reporter` zodra hij beschikbaar is. Metingen komen
 * op verschillende momenten binnen (CLS/INP pas bij interactie of paginaverlaten).
 *
 * Sluit een eigen reporter aan om ergens anders dan de console te loggen, bv.:
 *
 *   reportWebVitals((metric, rating) => {
 *     if (rating === 'poor') mijnMonitoringDienst.alert(metric);
 *     navigator.sendBeacon('/api/vitals', JSON.stringify(metric));
 *   });
 */
export function reportWebVitals(reporter: WebVitalsReporter = consoleReporter): void {
  const handle = (metric: Metric) => reporter(metric, rateMetric(metric));

  onCLS(handle);
  onINP(handle);
  onLCP(handle);
  onFCP(handle);
  onTTFB(handle);
}
