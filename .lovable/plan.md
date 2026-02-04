
# Plan: FEIGRO Custom Cookie Popup & Privacy/Cookie Pagina

## Overzicht

Dit plan omvat het bouwen van een professionele, GDPR-compliant cookie consent oplossing met:
1. **Custom Cookie Consent Popup** - High-end, branded component
2. **Volledige Privacy & Cookie Pagina** - Met alle verstrekte content
3. **Cookie Consent Hook** - State management met localStorage

---

## Deel 1: Cookie Consent Component

### Nieuw bestand: `src/components/cookies/CookieConsent.tsx`

**Kenmerken:**
- Slide-up animatie vanuit onderkant scherm (Framer Motion)
- FEIGRO branded design met groen accent
- 3 cookie categorieën met toggles:
  - Noodzakelijke cookies (altijd aan, niet uitschakelbaar)
  - Analytische cookies (toggle)
  - Marketing cookies (toggle)
- "Alles accepteren" en "Voorkeuren opslaan" buttons
- Link naar volledige cookie pagina
- Responsive design (mobile-first)
- LocalStorage persistentie
- Professionele uitstraling met subtle backdrop blur

**Design elementen:**
```text
+------------------------------------------+
|  [FEIGRO Logo]                           |
|                                          |
|  Wij respecteren uw privacy              |
|  ────────────────────────────────────    |
|  Korte uitleg over cookies...            |
|                                          |
|  ┌─ Noodzakelijk ───────────── [●] ─┐   |
|  │  Altijd actief                    │   |
|  └───────────────────────────────────┘   |
|                                          |
|  ┌─ Analytisch ─────────────── [○] ─┐   |
|  │  Website optimalisatie            │   |
|  └───────────────────────────────────┘   |
|                                          |
|  ┌─ Marketing ──────────────── [○] ─┐   |
|  │  Gepersonaliseerde content        │   |
|  └───────────────────────────────────┘   |
|                                          |
|  [Alles Accepteren]  [Voorkeuren Opslaan]|
|                                          |
|  Bekijk ons volledig cookiebeleid →      |
+------------------------------------------+
```

---

## Deel 2: Cookie Consent Hook

### Nieuw bestand: `src/hooks/useCookieConsent.ts`

**Functionaliteit:**
- `hasConsented`: Boolean - of gebruiker al een keuze heeft gemaakt
- `preferences`: Object met cookie voorkeuren
- `acceptAll()`: Alle cookies accepteren
- `savePreferences(prefs)`: Specifieke voorkeuren opslaan
- `resetConsent()`: Reset voor testing

**LocalStorage structuur:**
```json
{
  "feigro_cookie_consent": {
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00Z",
    "necessary": true,
    "analytics": true,
    "marketing": false
  }
}
```

---

## Deel 3: Integratie in MainLayout

### Wijziging: `src/components/layout/MainLayout.tsx`

Toevoegen van CookieConsent component:
```tsx
import { CookieConsent } from '@/components/cookies/CookieConsent';

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <BackToTop />
      <CookieConsent />  {/* Nieuw */}
    </div>
  );
}
```

---

## Deel 4: Privacy & Cookie Pagina Update

### Wijziging: `src/pages/Cookies.tsx`

**Volledige herstructurering met alle verstrekte content:**

**Secties:**
1. Hero sectie (bestaand design behouden)
2. Inleiding FEIGRO
3. Cookies door FEIGRO
4. Hoe komen wij aan uw gegevens?
5. Bijzondere en/of gevoelige persoonsgegevens
6. Wat doen we met uw gegevens?
7. Hoe lang we gegevens bewaren
8. Delen met anderen
9. Websites van derden
10. Gegevens inzien, aanpassen of verwijderen
11. Beveiliging
12. AVG compliance
13. Algemene NAW- en contactgegevens
14. Wijzigingen Privacyverklaring
15. Contact sectie met alle emailadressen

**Design:**
- Accordion/collapsible secties voor betere navigatie
- Inhoudsopgave aan zijkant (desktop)
- Sticky navigatie voor lange content
- FEIGRO branded styling consistent met rest van site

---

## Deel 5: Nieuwe Bestanden Structuur

```text
src/
├── components/
│   └── cookies/
│       ├── CookieConsent.tsx      (Popup component)
│       ├── CookiePreferences.tsx  (Preferences panel)
│       └── index.ts               (Exports)
├── hooks/
│   └── useCookieConsent.ts        (State management)
└── pages/
    └── Cookies.tsx                (Volledig herschreven)
```

---

## Technische Details

### Cookie Popup Styling

| Element | Stijl |
|---------|-------|
| Container | `bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-2xl` |
| Header | `font-heading uppercase tracking-tight text-slate-900` |
| Toggle Active | `bg-brand-green` |
| Toggle Inactive | `bg-slate-200` |
| Primary Button | FEIGRO PrimaryFlipButton style |
| Secondary Button | Outlined variant |
| Links | `text-brand-green hover:underline` |

### Animaties

```tsx
// Slide-up entrance
initial={{ y: 100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: 100, opacity: 0 }}
transition={{ type: "spring", damping: 25, stiffness: 300 }}
```

### Responsive Breakpoints

| Viewport | Layout |
|----------|--------|
| Mobile (<768px) | Full-width bottom sheet, stacked buttons |
| Tablet (768-1024px) | Centered modal, 80% width |
| Desktop (>1024px) | Fixed bottom-right corner, max-width 480px |

---

## Privacy Pagina Inhoud

De pagina zal de volledige verstrekte content bevatten:

**Contactgegevens weergegeven:**
- Website: www.feigro.nl
- Algemeen: info@feigro.nl
- Service: service@feigro.nl
- Facturatie: facturen@feigro.nl
- Direct: jgroen@feigro.nl / tfeitsma@feigro.nl

**Cookie categorieën uitgelegd:**
- Technische/functionele cookies
- Analytische cookies (privacy-vriendelijk)
- Geen marketing cookies standaard

**Bewaartermijn:** 3 maanden voor website-aanvragen

**AVG compliance:** Volledig gedocumenteerd

---

## Samenvatting Wijzigingen

### Nieuwe bestanden:
| Bestand | Beschrijving |
|---------|--------------|
| `src/components/cookies/CookieConsent.tsx` | Hoofdcomponent cookie popup |
| `src/components/cookies/CookiePreferences.tsx` | Voorkeuren panel met toggles |
| `src/components/cookies/index.ts` | Barrel exports |
| `src/hooks/useCookieConsent.ts` | Custom hook voor state |

### Gewijzigde bestanden:
| Bestand | Wijziging |
|---------|-----------|
| `src/components/layout/MainLayout.tsx` | CookieConsent component toevoegen |
| `src/pages/Cookies.tsx` | Volledige herschrijving met privacy content |

### Resultaat:
- Professionele GDPR-compliant cookie oplossing
- FEIGRO branded design
- Volledige privacy & cookie documentatie
- Gebruiksvriendelijke interface
- Persistente voorkeuren via localStorage
- Responsive op alle apparaten
