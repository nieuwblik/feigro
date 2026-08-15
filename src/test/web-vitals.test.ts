import { describe, it, expect } from 'vitest';
import { rateMetric } from '@/lib/web-vitals';

describe('rateMetric', () => {
  it('classificeert LCP volgens Google\'s drempels', () => {
    expect(rateMetric({ name: 'LCP', value: 2000 })).toBe('good');
    expect(rateMetric({ name: 'LCP', value: 3000 })).toBe('needs-improvement');
    expect(rateMetric({ name: 'LCP', value: 5000 })).toBe('poor');
  });

  it('classificeert CLS (kleine, unitless waarden)', () => {
    expect(rateMetric({ name: 'CLS', value: 0.05 })).toBe('good');
    expect(rateMetric({ name: 'CLS', value: 0.2 })).toBe('needs-improvement');
    expect(rateMetric({ name: 'CLS', value: 0.4 })).toBe('poor');
  });

  it('classificeert INP', () => {
    expect(rateMetric({ name: 'INP', value: 150 })).toBe('good');
    expect(rateMetric({ name: 'INP', value: 300 })).toBe('needs-improvement');
    expect(rateMetric({ name: 'INP', value: 600 })).toBe('poor');
  });

  it('grenswaarden zelf tellen nog als "good"', () => {
    expect(rateMetric({ name: 'LCP', value: 2500 })).toBe('good');
    expect(rateMetric({ name: 'CLS', value: 0.1 })).toBe('good');
  });

  it('valt terug op "good" voor een onbekende metric-naam, in plaats van te crashen', () => {
    expect(rateMetric({ name: 'UNKNOWN', value: 999999 })).toBe('good');
  });
});
