

# Plan: Hero Buttons Verwijderen, JPG naar WebP Conversie & PNG Opruimen

## Overzicht

Dit plan omvat 4 hoofd-onderdelen:
1. Hero buttons verwijderen van Over Ons, Projecten, Nieuws en Diensten
2. JPG afbeeldingen converteren naar WebP
3. Oude PNG bestanden verwijderen
4. Hero achtergrondafbeelding voor Nieuws toevoegen (heeft al een afbeelding)

---

## Deel 1: Hero Buttons Verwijderen

### 1.1 Over Ons (`src/pages/OverOns.tsx`)
**Verwijder regel 74-81:**
```tsx
<FadeIn delay={0.3}>
  <PrimaryFlipButton
    label="Vraag offerte aan"
    icon={<ArrowRight />}
    size="default"
    onClick={() => window.location.href = '/contact'}
  />
</FadeIn>
```

**Cleanup imports:** `ArrowRight` wordt nog gebruikt in andere secties, dus behouden. `PrimaryFlipButton` wordt gebruikt voor vacatures CTA, dus ook behouden.

---

### 1.2 Projecten (`src/pages/Projecten.tsx`)
**Verwijder regel 64-74:**
```tsx
<motion.div initial={{...}} animate={{...}} transition={{delay: 0.3}}>
  <PrimaryFlipButton label="Vraag offerte aan" icon={<ArrowUpRight />} ... />
</motion.div>
```

**Cleanup imports:** Verwijder `PrimaryFlipButton` van imports (niet meer nodig). `ArrowUpRight` blijft nodig voor project cards.

---

### 1.3 Nieuws (`src/pages/Nieuws.tsx`)
**Verwijder regel 109-118:**
```tsx
<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  onClick={scrollToArticles}
  className="..."
>
  Lees artikelen
  <ChevronDown ... />
</motion.button>
```

**Cleanup:** Verwijder `scrollToArticles` functie (regel 49-51) en `ChevronDown` import.

---

### 1.4 Diensten (`src/pages/Diensten.tsx`)
**Verwijder regel 90-101:**
```tsx
<motion.div initial={{...}} animate={{...}} transition={{delay: 0.3}}>
  <Link to="/contact">
    <PrimaryFlipButton label="Vraag offerte aan" icon={<ArrowRight />} />
  </Link>
</motion.div>
```

**Cleanup imports:** Verwijder `PrimaryFlipButton` import (niet meer nodig). `ArrowRight` en `Link` blijven nodig voor services grid.

---

## Deel 2: JPG naar WebP Conversie

### JPG bestanden in `src/assets/`:

| Origineel | Nieuw WebP | Gebruikt in |
|-----------|-----------|-------------|
| `Dakwerk-Feitsmadakwerken-2-1.jpg` | `.webp` | RecentProjects, services.ts |
| `Feigro dakwerken.jpg` | `feigro-dakwerken.webp` | RecentProjects |
| `Lekkage-Feitsma.jpg` | `lekkage-feitsma.webp` | Spoedservice, RecentProjects, services.ts |
| `dak-laan-project-dakdekking.jpg` | `.webp` | RecentProjects |
| `dak-valbeveiliging-montage.jpg` | `.webp` | RecentProjects, Footer, Testimonials, services.ts |
| `dakdekking-nederland-enkhuizen.jpg` | `.webp` | BlogSection, Footer, Nieuws, BlogDetail, services.ts |
| `dakinspectie-noord-holland.jpg` | `.webp` | RecentProjects, services.ts |
| `dakrenovatie-noordholland.jpg` | `.webp` | Footer, BlogSection, Nieuws, BlogDetail, services.ts, OverOns |
| `dakrenovatie.jpg` | `.webp` | Testimonials |
| `dakrenovatienederland.jpg` | `.webp` | (niet gebruikt - kan verwijderd) |
| `dakreparatie-nederland-enkhuizen.jpg` | `.webp` | Contact, RecentProjects, services.ts |
| `feigro-dakdekking-westfriesland.jpg` | `.webp` | RecentProjects, BlogDetail, services.ts, Nieuws |
| `herosectiefeigro.jpg` | `.webp` | (niet gebruikt - kan verwijderd) |
| `lekvrij-dak-nederland.jpg` | `.webp` | RecentProjects, OverOns, services.ts |
| `renovatiedakenkhuizen.jpg` | `.webp` | Services (CTA) |

### Bestanden die geupdate moeten worden:

| Bestand | Imports aanpassen |
|---------|-------------------|
| `src/pages/Spoedservice.tsx` | 1 import |
| `src/components/layout/Footer.tsx` | 3 imports |
| `src/pages/Contact.tsx` | 1 import |
| `src/components/home/BlogSection.tsx` | 2 imports |
| `src/components/home/RecentProjects.tsx` | 11 imports |
| `src/components/home/Testimonials.tsx` | 2 imports |
| `src/components/home/Services.tsx` | 1 import |
| `src/pages/Nieuws.tsx` | 2 imports |
| `src/data/services.ts` | 8 imports |
| `src/pages/BlogDetail.tsx` | 3 imports |
| `src/pages/OverOns.tsx` | 2 imports |

---

## Deel 3: Oude PNG Bestanden Verwijderen

De volgende bestanden zijn nu overbodig (WebP versies zijn al aanwezig):

```
src/assets/dakdekker-brander.png
src/assets/hero-slide-1.png
src/assets/hero-slide-2.png
src/assets/hero-slide-3.png
src/assets/dakonderhoud-werk.png
src/assets/dakrenovatie-werk.png
src/assets/dakreparatie-werk.png
src/assets/nieuws-hero-bg.png
src/assets/zonnepanelen-dak.png
```

---

## Deel 4: Nieuws Hero - Afbeelding Status

De Nieuws pagina heeft al een hero achtergrondafbeelding:
```tsx
import nieuwsHeroBg from '@/assets/nieuws-hero-bg.webp';
// ...
<img src={nieuwsHeroBg} className="w-full h-full object-cover opacity-40" />
```

Geen wijziging nodig voor de afbeelding zelf.

---

## Samenvatting Wijzigingen

### Bestanden te wijzigen:

| Bestand | Actie |
|---------|-------|
| `src/pages/OverOns.tsx` | Verwijder hero button block |
| `src/pages/Projecten.tsx` | Verwijder hero button + cleanup imports |
| `src/pages/Nieuws.tsx` | Verwijder scroll button + functie + cleanup imports |
| `src/pages/Diensten.tsx` | Verwijder hero button + cleanup imports |
| `src/pages/Spoedservice.tsx` | Update JPG import naar WebP |
| `src/pages/Contact.tsx` | Update JPG import naar WebP |
| `src/pages/BlogDetail.tsx` | Update JPG imports naar WebP |
| `src/components/layout/Footer.tsx` | Update JPG imports naar WebP |
| `src/components/home/BlogSection.tsx` | Update JPG imports naar WebP |
| `src/components/home/RecentProjects.tsx` | Update JPG imports naar WebP |
| `src/components/home/Testimonials.tsx` | Update JPG imports naar WebP |
| `src/components/home/Services.tsx` | Update JPG import naar WebP |
| `src/data/services.ts` | Update JPG imports naar WebP |

### Bestanden te verwijderen (PNG):
- 9 oude PNG bestanden

### Bestanden te converteren (JPG → WebP):
- 15 JPG bestanden converteren naar WebP

### Resultaat:
- Snellere laadtijden door kleinere bestandsgroottes
- Schonere codebase zonder overbodige PNG bestanden
- Consistente WebP formaat over hele site
- Hero secties zonder CTA buttons (behalve Home en Spoedservice)

