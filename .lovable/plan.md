

# Plan: Afbeeldingen Sneller Laden op Diensten Pagina's

## Probleem Analyse
Na onderzoek zijn de volgende knelpunten gevonden:

1. **HeroSection** - De achtergrondafbeelding heeft geen `loading="lazy"`
2. **Home Hero slideshow** - Laadt 3 grote afbeeldingen tegelijk
3. **Grote bestandsformaten** - PNG bestanden zijn vaak 2-5x groter dan nodig

## Oplossingen

### 1. HeroSection Optimalisatie
**Bestand:** `src/components/sections/HeroSection.tsx`

Toevoegen van `loading="lazy"` aan de achtergrondafbeelding:

```tsx
// Regel 43-47: lazy loading toevoegen
<img
  src={backgroundImage}
  alt={title}
  className="w-full h-full object-cover opacity-30"
  loading="lazy"  // NIEUW
/>
```

### 2. Home Hero Slideshow Optimalisatie  
**Bestand:** `src/components/home/Hero.tsx`

Alleen de eerste afbeelding eager laden, rest lazy:

```tsx
// Optimalisatie: eerste slide eager, rest lazy
{heroImages.map((img, index) => (
  <motion.img
    key={index}
    src={img}
    alt={`Professional roofing work ${index + 1}`}
    className="..."
    loading={index === 0 ? "eager" : "lazy"}  // NIEUW
    // ... rest van props
  />
))}
```

### 3. InfoSection Afbeelding Optimalisatie
**Bestand:** `src/components/sections/InfoSection.tsx`

Al correct geimplementeerd met `loading="lazy"` (regel 83). Geen wijzigingen nodig.

## Technische Details

| Component | Huidige Status | Actie |
|-----------|---------------|-------|
| HeroSection.tsx | Geen lazy loading | `loading="lazy"` toevoegen |
| Hero.tsx (home) | 3 images eager loaded | Eerste eager, rest lazy |
| InfoSection.tsx | Heeft lazy loading | Geen actie |

## Resultaat

Na deze wijzigingen:
- Hero achtergrondafbeeldingen laden alleen wanneer nodig
- Home slideshow laadt alleen eerste afbeelding direct
- Snellere initial page load op alle diensten pagina's

