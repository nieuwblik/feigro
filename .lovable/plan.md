
# Plan: Nieuwe Button Stijl voor Gehele Website

## Overzicht
Alle buttons op de website worden vervangen door een nieuwe, moderne button stijl met een geanimeerde pijl-icon. De huidige FlipButton (3D flip animatie) wordt vervangen door een elegantere hover-animatie met een cirkel die uitschuift en een pijl die roteert.

## Nieuwe Button Stijl

### Kenmerken
- **Hover animatie**: Cirkel aan rechterkant die uitklapt + pijl die 45° roteert
- **Geen 3D flip**: Eenvoudigere, performantere animatie
- **Varianten**:
  - `primary`: Groene achtergrond, zwarte tekst
  - `secondary`: Zwarte achtergrond, witte tekst  
  - `outline`: Transparant met groene border
  - `white`: Witte tekst/border op donkere achtergrond
  - `emergency`: Rode achtergrond voor spoedservice

### Responsive Maten
| Size | Hoogte | Padding | Font |
|------|--------|---------|------|
| `sm` | 40px | px-4 | text-xs |
| `default` | 48px | px-5 | text-sm |
| `lg` | 56px | px-6 | text-base |

## Bestanden die worden aangepast

### 1. Nieuwe Button Component
**Bestand**: `src/components/buttons/AnimatedButton.tsx`

Nieuwe component met:
- ArrowIcon SVG component
- Hover animatie met framer-motion
- Cirkel die uitschuift
- Pijl die roteert van -45° naar 0°
- Alle varianten (primary, secondary, outline, white, emergency)
- Responsive maten

### 2. Types Uitbreiden
**Bestand**: `src/components/buttons/types.ts`

Toevoegen:
- `AnimatedButtonProps` interface
- `ButtonVariant` type
- `ButtonSize` type

### 3. Export Updaten
**Bestand**: `src/components/buttons/index.ts`

Toevoegen:
- Export van `AnimatedButton`

### 4. Pagina's Updaten (20+ bestanden)

Alle imports en componenten worden aangepast:

| Bestand | Wijziging |
|---------|-----------|
| `src/components/home/Hero.tsx` | `PrimaryFlipButton` → `AnimatedButton` |
| `src/components/home/About.tsx` | `InversedFlipButton` → `AnimatedButton variant="secondary"` |
| `src/components/home/Services.tsx` | Buttons vervangen |
| `src/components/home/Testimonials.tsx` | Buttons vervangen |
| `src/components/home/RecentProjects.tsx` | Buttons vervangen |
| `src/components/home/BlogSection.tsx` | Buttons vervangen |
| `src/components/layout/Header.tsx` | Desktop + Mobile buttons |
| `src/components/sections/CTAFooter.tsx` | CTA button |
| `src/components/sections/HeroSection.tsx` | Hero CTA |
| `src/components/sections/ServiceCTA.tsx` | Service CTA |
| `src/pages/ProjectDetail.tsx` | Terug + CTA buttons |
| `src/pages/Projecten.tsx` | Project buttons |
| `src/pages/Diensten.tsx` | Diensten CTA |
| `src/pages/Contact.tsx` | Contact buttons |
| `src/pages/OverOns.tsx` | Over ons buttons |
| `src/pages/Spoedservice.tsx` | Spoed CTA |
| `src/pages/Vacatures.tsx` | Sollicitatie buttons |
| `src/pages/NotFound.tsx` | 404 buttons |
| `src/pages/BlogDetail.tsx` | Blog CTA's |
| `src/components/forms/LekkageForm.tsx` | Form buttons |
| `src/components/forms/VveForm.tsx` | Form buttons |

## Technische Details

### Nieuwe AnimatedButton Component Structuur

```text
AnimatedButton
├── Container (motion.button)
│   ├── Border (rounded-xl of rounded-full)
│   ├── Label tekst (uppercase, tracking-wide)
│   └── Arrow Circle Container
│       ├── Background Circle (expandeert op hover)
│       └── Arrow Icon (roteert op hover)
```

### Animatie Specificaties

| Eigenschap | Default | Hover |
|------------|---------|-------|
| Cirkel breedte | 40px | volledige knop |
| Pijl rotatie | -45° | 0° |
| Transitie | 0.3s ease | cubic-bezier |
| Scale on press | 1 | 0.98 |

### Mapping van Oude naar Nieuwe Props

| Oud (FlipButton) | Nieuw (AnimatedButton) |
|------------------|------------------------|
| `label` | `label` |
| `hoverLabel` | (niet nodig) |
| `icon` | (ingebouwde arrow) |
| `onClick` | `onClick` |
| `size="default"` | `size="default"` |
| `size="large"` | `size="lg"` |
| `size="small"` | `size="sm"` |
| PrimaryFlipButton | `variant="primary"` |
| InversedFlipButton | `variant="secondary"` |
| EmergencyFlipButton | `variant="emergency"` |

### Responsive Aanpassingen

```text
Mobile (< 768px):
- h-10 (40px) voor default
- px-4 voor padding
- text-xs voor font

Desktop (≥ 768px):
- h-12 (48px) voor default
- px-5 voor padding
- text-sm voor font

Large variant:
- h-12 md:h-14
- px-5 md:px-6
- text-sm md:text-base
```

## Volgorde van Uitvoering

1. **Types updaten** - Nieuwe interfaces toevoegen
2. **AnimatedButton maken** - Nieuwe component met alle varianten
3. **Index updaten** - Export toevoegen
4. **Core components** - Header, Hero, Footer, CTAs
5. **Pagina's** - Alle individuele pagina's
6. **Forms** - LekkageForm, VveForm

## Resultaat

- Consistente, moderne button stijl op hele website
- Elegante hover animatie met uitschuivende cirkel
- Responsive maten die goed werken op mobiel en desktop
- Betere performance dan 3D flip animatie
- Alle bestaande teksten en functionaliteit blijven behouden
