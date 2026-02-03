// Core Web Vitals Monitoring for FEIGRO Dakwerken

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

type MetricReporter = (metric: WebVitalsMetric) => void;

// Thresholds based on Google's Core Web Vitals
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 }, // First Input Delay
  INP: { good: 200, poor: 500 }, // Interaction to Next Paint
  CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 } // Time to First Byte
};

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Default reporter that logs to console
 */
const defaultReporter: MetricReporter = (metric) => {
  const { name, value, rating } = metric;
  const color = rating === 'good' ? '🟢' : rating === 'needs-improvement' ? '🟡' : '🔴';
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${color} ${name}: ${value.toFixed(2)} (${rating})`);
  }
};

/**
 * Measure Largest Contentful Paint (LCP)
 */
export function measureLCP(onReport: MetricReporter = defaultReporter): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    if (lastEntry) {
      const value = lastEntry.startTime;
      onReport({
        name: 'LCP',
        value,
        rating: getRating('LCP', value),
        delta: value,
        id: `lcp-${Date.now()}`
      });
    }
  });

  try {
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch {
    // LCP not supported
  }
}

/**
 * Measure First Input Delay (FID)
 */
export function measureFID(onReport: MetricReporter = defaultReporter): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    
    entries.forEach((entry) => {
      const fidEntry = entry as PerformanceEventTiming;
      const value = fidEntry.processingStart - fidEntry.startTime;
      
      onReport({
        name: 'FID',
        value,
        rating: getRating('FID', value),
        delta: value,
        id: `fid-${Date.now()}`
      });
    });
  });

  try {
    observer.observe({ type: 'first-input', buffered: true });
  } catch {
    // FID not supported
  }
}

/**
 * Measure Cumulative Layout Shift (CLS)
 */
export function measureCLS(onReport: MetricReporter = defaultReporter): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  let clsValue = 0;
  let sessionValue = 0;
  let sessionEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    
    entries.forEach((entry) => {
      const layoutShift = entry as PerformanceEntry & { 
        hadRecentInput: boolean; 
        value: number;
      };
      
      if (!layoutShift.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
        
        // If the entry occurred within 1 second of the previous entry and
        // within 5 seconds of the first entry in the session
        if (
          sessionValue &&
          firstSessionEntry &&
          lastSessionEntry &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += layoutShift.value;
          sessionEntries.push(entry);
        } else {
          sessionValue = layoutShift.value;
          sessionEntries = [entry];
        }

        if (sessionValue > clsValue) {
          clsValue = sessionValue;
          onReport({
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue),
            delta: layoutShift.value,
            id: `cls-${Date.now()}`
          });
        }
      }
    });
  });

  try {
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch {
    // CLS not supported
  }
}

/**
 * Initialize all Core Web Vitals measurements
 */
export function initWebVitals(onReport?: MetricReporter): void {
  const reporter = onReport || defaultReporter;
  
  measureLCP(reporter);
  measureFID(reporter);
  measureCLS(reporter);
}

// Type for PerformanceEventTiming
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  duration: number;
  cancelable: boolean;
  target?: Element;
}
