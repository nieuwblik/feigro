/**
 * Core Web Vitals / performance-checklist, uitgevoerd bij elke build.
 *
 * Dit is een statische audit (leest broncode + het build-resultaat), geen
 * runtime-meting - voor echte veldmetingen zie src/lib/web-vitals.ts. Het
 * doel hier is regressies te vangen vóórdat ze live gaan: een hero-afbeelding
 * die weer `loading="lazy"` krijgt, een dependency die terugsluipt, een
 * ontbrekende preconnect.
 *
 * Faalt de build NIET (exit code blijft 0) - dit is een checklist om te lezen,
 * geen harde gate. Draai los met `npm run audit:perf`; draait automatisch na
 * `npm run build` via de postbuild-hook.
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');

/** @typedef {{ id: string; label: string; status: 'pass' | 'warn' | 'skip'; detail: string }} CheckResult */

/** Recursief alle bronbestanden onder een map verzamelen. */
function collectFiles(dir, extensions, exclude = []) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (exclude.includes(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(full, extensions, exclude));
    } else if (extensions.includes(extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

const SOURCE_FILES = collectFiles(SRC, ['.ts', '.tsx'], ['test']);
const readSource = () => SOURCE_FILES.map(f => ({ file: f, content: readFileSync(f, 'utf8') }));

// ---------------------------------------------------------------------------
// 1. Afbeeldingen: lazy loading + expliciete afmetingen/aspect-ratio
// ---------------------------------------------------------------------------
function checkImages() {
  const files = readSource();
  let imgTags = 0;
  let missingAlt = 0;
  let eagerCount = 0;

  const IMG_TAG = /<(?:img|motion\.img)\b[^>]*>/g;

  for (const { content } of files) {
    const matches = content.match(IMG_TAG) ?? [];
    for (const tag of matches) {
      imgTags++;
      if (!/\balt=/.test(tag)) missingAlt++;
      if (/loading=["']eager["']|fetchPriority=["']high["']/.test(tag)) eagerCount++;
    }
  }

  /** @type {CheckResult} */
  const altResult = {
    id: 'images-alt',
    label: 'Alle <img>/<motion.img> hebben een alt-attribuut',
    status: missingAlt === 0 ? 'pass' : 'warn',
    detail: `${imgTags - missingAlt}/${imgTags} met alt-tekst${missingAlt > 0 ? ` - ${missingAlt} ontbreken` : ''}`
  };

  /** @type {CheckResult} */
  const eagerResult = {
    id: 'images-eager-lcp',
    label: 'Hero/LCP-afbeeldingen zijn eager + high priority, niet lazy',
    status: eagerCount > 0 ? 'pass' : 'warn',
    detail:
      eagerCount > 0
        ? `${eagerCount} afbeelding(en) expliciet eager/high-priority`
        : 'Geen enkele afbeelding is expliciet eager/high-priority - controleer of de LCP-afbeelding per pagina niet lazy is'
  };

  return [altResult, eagerResult];
}

// ---------------------------------------------------------------------------
// 2. Fonts: font-display swap + preload van het kritieke lettertype
// (head-tags leven sinds de TanStack-migratie in src/routes/__root.tsx)
// ---------------------------------------------------------------------------
const rootRoute = () => readFileSync(join(SRC, 'routes', '__root.tsx'), 'utf8');
const stylesCss = () => (existsSync(join(SRC, 'styles.css')) ? readFileSync(join(SRC, 'styles.css'), 'utf8') : '');

function checkFonts() {
  const head = rootRoute();
  const css = stylesCss();
  const hasSwap = /display=swap/.test(head) || /font-display:\s*swap/.test(css);
  const hasFontPreload = /rel:\s*["']preload["'][^}]*as:\s*["']font["']|rel=["']preload["'][^>]+as=["']font["']/.test(head);
  const hasBlockingFontImport = /@import\s+url\(['"]https:\/\/fonts\.googleapis\.com/.test(css);

  return [
    {
      id: 'fonts-display-swap',
      label: 'font-display: swap staat aan',
      status: hasSwap ? 'pass' : 'warn',
      detail: hasSwap ? 'Gevonden in __root.tsx en/of CSS' : 'Niet gevonden - FOIT-risico'
    },
    {
      id: 'fonts-preload',
      label: 'Kritiek lettertype wordt gepreload',
      status: hasFontPreload ? 'pass' : 'warn',
      detail: hasFontPreload ? 'Font-preload aanwezig in __root.tsx' : 'Geen font-preload gevonden in __root.tsx'
    },
    {
      id: 'fonts-no-blocking-import',
      label: 'Geen render-blocking @import voor Google Fonts in CSS',
      status: hasBlockingFontImport ? 'warn' : 'pass',
      detail: hasBlockingFontImport
        ? 'src/styles.css bevat een @import van fonts.googleapis.com - verplaats naar een head-link in __root.tsx'
        : 'Geen @import van Google Fonts in CSS gevonden'
    }
  ];
}

// ---------------------------------------------------------------------------
// 3. JavaScript: route-based code splitting
// (TanStack Start file-based routing code-split elke route automatisch)
// ---------------------------------------------------------------------------
function checkCodeSplitting() {
  const routeFiles = collectFiles(join(SRC, 'routes'), ['.tsx']).filter(f => !f.endsWith('__root.tsx'));

  return [
    {
      id: 'js-code-splitting',
      label: 'Paginacomponenten zijn route-based code-split',
      status: routeFiles.length > 0 ? 'pass' : 'warn',
      detail: `${routeFiles.length} routebestanden in src/routes/ (automatisch gesplitst door TanStack Start)`
    }
  ];
}

// ---------------------------------------------------------------------------
// 4. Ongebruikte dependencies
// ---------------------------------------------------------------------------
function checkUnusedDependencies() {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
  const deps = Object.keys(pkg.dependencies ?? {});

  // Ook root-configbestanden meenemen (tailwind.config.ts gebruikt bv.
  // tailwindcss-animate via require(), niet via een src/-import) - anders
  // valse positieven voor elke dependency die alleen in configuratie leeft.
  const rootConfigFiles = readdirSync(ROOT, { withFileTypes: true })
    .filter(e => e.isFile() && /^[\w.-]+\.config\.(ts|js|mjs|cjs)$/.test(e.name))
    .map(e => join(ROOT, e.name));

  const allSourceText = [...readSource(), ...rootConfigFiles.map(f => ({ content: readFileSync(f, 'utf8') }))]
    .map(f => f.content)
    .join('\n');

  const unused = deps.filter(dep => {
    // Subpath-imports (bv. '@hookform/resolvers/zod') moeten ook meetellen als
    // gebruik van '@hookform/resolvers' - vandaar een substring-check op de
    // quote-opening in plaats van een exact match op de hele import-regel.
    // Ook require(...) meenemen: configbestanden gebruiken vaak CommonJS.
    const escaped = dep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(?:from|require\\()\\s*['"]${escaped}(['"/]|$)`);
    return !pattern.test(allSourceText);
  });

  return [
    {
      id: 'js-unused-deps',
      label: 'Geen ongebruikte dependencies in package.json',
      status: unused.length === 0 ? 'pass' : 'warn',
      detail: unused.length === 0 ? `Alle ${deps.length} dependencies worden geïmporteerd` : `Mogelijk ongebruikt: ${unused.join(', ')}`
    }
  ];
}

// ---------------------------------------------------------------------------
// 5. Performance-monitoring
// ---------------------------------------------------------------------------
function checkWebVitals() {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
  const hasPackage = 'web-vitals' in (pkg.dependencies ?? {});
  const isWired = readSource().some(({ content }) => /reportWebVitals\s*\(\s*\)/.test(content));

  return [
    {
      id: 'monitoring-web-vitals',
      label: 'Core Web Vitals worden gemeten (web-vitals package, aangesloten)',
      status: hasPackage && isWired ? 'pass' : 'warn',
      detail: hasPackage && isWired ? 'web-vitals geïnstalleerd en reportWebVitals() aangeroepen' : 'Ontbreekt of niet aangesloten'
    }
  ];
}

// ---------------------------------------------------------------------------
// 6. Resource hints
// (head-links leven in src/routes/__root.tsx; prefetch via router.tsx
// defaultPreload: "intent")
// ---------------------------------------------------------------------------
function checkResourceHints() {
  const head = rootRoute();
  const routerTsx = existsSync(join(SRC, 'router.tsx')) ? readFileSync(join(SRC, 'router.tsx'), 'utf8') : '';
  const hasPreconnect = /["']preconnect["']/.test(head);
  const hasPreload = /["']preload["']/.test(head);
  const hasPrefetchLogic = /defaultPreload:\s*["']intent["']/.test(routerTsx);

  return [
    {
      id: 'hints-preconnect',
      label: 'rel="preconnect" voor kritieke third-party domeinen',
      status: hasPreconnect ? 'pass' : 'warn',
      detail: hasPreconnect ? 'Aanwezig in __root.tsx' : 'Ontbreekt in __root.tsx'
    },
    {
      id: 'hints-preload',
      label: 'rel="preload" voor kritieke assets',
      status: hasPreload ? 'pass' : 'warn',
      detail: hasPreload ? 'Aanwezig in __root.tsx' : 'Ontbreekt in __root.tsx'
    },
    {
      id: 'hints-prefetch',
      label: 'Prefetch voor waarschijnlijke vervolgnavigatie',
      status: hasPrefetchLogic ? 'pass' : 'warn',
      detail: hasPrefetchLogic ? 'defaultPreload: "intent" actief in router.tsx' : 'Geen prefetch-mechanisme gevonden'
    }
  ];
}

// ---------------------------------------------------------------------------
// 7. Bundle-omvang (alleen na `vite build`, dist/ moet bestaan)
// ---------------------------------------------------------------------------
function checkBundleSize() {
  if (!existsSync(DIST)) {
    return [
      {
        id: 'bundle-size',
        label: 'Geen enkele JS-chunk is onnodig groot',
        status: 'skip',
        detail: 'dist/ bestaat nog niet - draai na `npm run build`'
      }
    ];
  }

  const assetsDir = existsSync(join(DIST, 'client', 'assets')) ? join(DIST, 'client', 'assets') : join(DIST, 'assets');
  if (!existsSync(assetsDir)) {
    return [{ id: 'bundle-size', label: 'Geen enkele JS-chunk is onnodig groot', status: 'skip', detail: 'dist/assets/ niet gevonden' }];
  }

  const THRESHOLD_KB = 500;
  const large = readdirSync(assetsDir)
    .filter(f => f.endsWith('.js'))
    .map(f => ({ file: f, kb: Math.round(statSync(join(assetsDir, f)).size / 1024) }))
    .filter(f => f.kb > THRESHOLD_KB);

  return [
    {
      id: 'bundle-size',
      label: `Geen enkele JS-chunk groter dan ${THRESHOLD_KB}kB (ongecomprimeerd)`,
      status: large.length === 0 ? 'pass' : 'warn',
      detail: large.length === 0 ? 'Alle chunks binnen het budget' : large.map(f => `${f.file} (${f.kb}kB)`).join(', ')
    }
  ];
}

// ---------------------------------------------------------------------------
// Rapportage
// ---------------------------------------------------------------------------
function runAudit() {
  /** @type {CheckResult[]} */
  const results = [
    ...checkImages(),
    ...checkFonts(),
    ...checkCodeSplitting(),
    ...checkUnusedDependencies(),
    ...checkWebVitals(),
    ...checkResourceHints(),
    ...checkBundleSize()
  ];

  const icon = { pass: '✅', warn: '⚠️ ', skip: '⏭️ ' };

  console.log('\n📊 Core Web Vitals / performance-checklist\n');
  for (const result of results) {
    console.log(`${icon[result.status]} ${result.label}`);
    console.log(`   ${result.detail}`);
  }

  const passed = results.filter(r => r.status === 'pass').length;
  const warned = results.filter(r => r.status === 'warn').length;
  const skipped = results.filter(r => r.status === 'skip').length;

  console.log(`\n${passed}/${results.length} geslaagd, ${warned} aandachtspunt(en), ${skipped} overgeslagen.\n`);

  // Faalt de build bewust niet: dit is een leeslijst, geen harde gate.
  // Draai met --strict om er wél een CI-gate van te maken.
  if (process.argv.includes('--strict') && warned > 0) {
    console.error('--strict: build gefaald door openstaande aandachtspunten.\n');
    process.exit(1);
  }
}

runAudit();
