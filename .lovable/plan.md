
# Plan: Mobiele Optimalisatie Homepage Secties

## Overzicht
Dit plan richt zich op het optimaliseren van drie hoofdonderdelen voor mobiel gebruik:
1. **FeaturedProjects sectie** - Recente Projecten
2. **CompanyHeritage sectie** - De Kracht van Twee
3. **Buttons site-breed** - Volle breedte en gecentreerd op mobiel

---

## Sectie 1: Recente Projecten (FeaturedProjects)

### Huidige Problemen
- Carousel/slider interface met navigatiepijlen op mobiel
- Thumbnails in 2-kolommen grid op mobiel waardoor informatie klein is
- Hover-effecten die op mobiel niet werken
- CTA die alleen bij hover zichtbaar wordt

### Oplossing: Verticale Kaartweergave

**Layout Wijzigingen:**
- Op mobiel: alle 4 projecten volledig zichtbaar onder elkaar in één kolom
- Geen carousel of slider - alle content direct zichtbaar
- Vaste 16:9 aspect ratio voor afbeeldingen
- Progress indicator en navigatiepijlen verborgen op mobiel

**Kaartstructuur (mobiel):**
```text
┌─────────────────────────────────┐
│   [16:9 Afbeelding]             │
│   met donkere gradient overlay  │
├─────────────────────────────────┤
│ [Categorie Badge]               │
│ TITEL PROJECT                   │
│ 📍 Locatie • Grootte            │
│ Korte beschrijving...           │
│ Bekijk project →                │
└─────────────────────────────────┘
```

**Interactie:**
- Volledige kaart klikbaar (geen verborgen CTA)
- Tap-state met lichte scale (0.98) en shadow
- "Bekijk project" pijl altijd zichtbaar (niet alleen hover)

**Typografie:**
- Titel: 18px (text-lg)
- Metadata: 14px (text-sm)
- Beschrijving: 14px met line-clamp-2

---

## Sectie 2: De Kracht van Twee (CompanyHeritage)

### Huidige Problemen
- Horizontale FEI + GRO = FEIGRO layout werkt niet goed op smalle schermen
- Elementen kunnen overlappen of te klein worden
- Tekstcontrast kan beter

### Oplossing: Verticale Stapeling

**Visualisatie Herstructurering (mobiel):**
```text
       ┌─────────┐
       │  FEI    │  Feitsma
       └─────────┘
           +
       ┌─────────┐
       │  GRO    │  Groen
       └─────────┘
           =
    ┌───────────────┐
    │   FEIGRO      │
    └───────────────┘
```

**Wijzigingen:**
- Verticale stapeling van FEI/GRO/FEIGRO elementen op mobiel
- Grotere icoon-cirkels (w-16 h-16) voor betere touch-bediening
- Betere regelafstand en tekstgrootte
- Meer verticale spacing tussen elementen
- Gecentraliseerde uitlijning

**Typografie Verbeteringen:**
- Hoofdtitel: maximaal 2 regels, geen afbrekingen
- Body tekst: 16px met line-height 1.6
- Betere contrast (text-white/70 ipv text-white/60)

---

## Sectie 3: Buttons Site-breed

### Huidige Problemen
- Buttons hebben vaste breedte, niet responsive
- Niet gecentreerd op mobiel
- Geen consistente styling

### Oplossing: Responsive Button Styling

**FlipButton Aanpassingen:**
- Mobiel: `w-full` (100% breedte)
- Desktop: `w-auto` (automatische breedte)
- Wrapper met `flex justify-center` voor centrering

**Componenten om aan te passen:**
1. `FlipButton.tsx` - Basis button component
2. `Hero.tsx` - CTA buttons
3. `About.tsx` - "Ontdek onze diensten" button
4. `BlogSection.tsx` - "Bekijk alle artikelen" button
5. `Testimonials.tsx` - "Plaats review" button
6. `CTAFooter.tsx` - "Vraag offerte aan" button

**Button Styling:**
- Minimum touch target: 44px hoogte
- Volle breedte container op mobiel
- Gecentreerde tekst
- Consistente border-radius (rounded-xl)
- Active/tap state met scale(0.96) feedback

---

## Technische Details

### Bestanden te wijzigen:

| Bestand | Wijzigingen |
|---------|-------------|
| `src/components/home/FeaturedProjects.tsx` | Complete mobiele layout herstructurering, nieuwe kaartweergave |
| `src/components/home/CompanyHeritage.tsx` | Verticale FEI+GRO=FEIGRO layout op mobiel |
| `src/components/buttons/FlipButton.tsx` | Responsive width classes toevoegen |
| `src/components/home/Hero.tsx` | Button container centrering |
| `src/components/home/About.tsx` | Button centrering wrapper |
| `src/components/home/BlogSection.tsx` | Button volle breedte mobiel |
| `src/components/home/Testimonials.tsx` | Button centrering en volle breedte |
| `src/components/sections/CTAFooter.tsx` | Button volle breedte mobiel |

### Responsive Breakpoints:
- Mobiel: < 768px (md breakpoint)
- Tablet/Desktop: >= 768px

### Tailwind Classes:
- Mobiel volle breedte: `w-full md:w-auto`
- Centrering: `flex justify-center md:justify-start`
- Verbergen op mobiel: `hidden md:flex`
- Tonen alleen op mobiel: `flex md:hidden`

---

## Verwacht Resultaat

**FeaturedProjects:**
- Rustige, scrollbare lijst van projecten
- Alle informatie direct zichtbaar zonder interactie
- Consistente kaartweergave met goede leesbaarheid

**CompanyHeritage:**
- Helder visueel verhaal van FEI + GRO = FEIGRO
- Goed leesbare tekst met voldoende contrast
- Professionele, rustige uitstraling

**Buttons:**
- Consistent volle breedte op mobiel
- Gecentreerd in hun containers
- Duidelijke tap-feedback
- Goede touch-bediening (minimum 44px)
