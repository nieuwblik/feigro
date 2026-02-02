

## Plan: Button Labels naar Sentence Case

Dit plan wijzigt alle button labels op de hele website zodat ze slechts één hoofdletter hebben (aan het begin van de tekst), conform de nieuwe stijlrichtlijn.

---

### Overzicht van wijzigingen

| Bestand | Huidige tekst | Nieuwe tekst |
|---------|--------------|--------------|
| `src/components/home/Hero.tsx` | "Gratis Dakinspectie" | "Gratis dakinspectie" |
| `src/components/home/Hero.tsx` | "Plan Inspectie" (hoverLabel) | "Plan inspectie" |
| `src/components/home/About.tsx` | "Ontdek Onze Diensten" | "Ontdek onze diensten" |
| `src/components/home/Services.tsx` | "Direct Contact" | "Direct contact" |
| `src/components/home/Testimonials.tsx` | "Bekijk Alle Reviews" | "Bekijk alle reviews" |
| `src/components/home/RecentProjects.tsx` | "Alle Projecten" | "Alle projecten" |
| `src/components/layout/Header.tsx` | "Offerte Aanvragen" (mobiel menu) | "Offerte aanvragen" |
| `src/pages/Contact.tsx` | "Verstuur Bericht" | "Verstuur bericht" |
| `src/pages/NotFound.tsx` | "Terug naar Home" | "Terug naar home" |
| `src/pages/NotFound.tsx` | "Stap Terug" | "Stap terug" |

---

### Stappen

1. **Home componenten** - Aanpassen van 5 labels in Hero, About, Services, Testimonials en RecentProjects
2. **Header navigatie** - Aanpassen van 1 label in het mobiele menu
3. **Pagina's** - Aanpassen van 3 labels op Contact en NotFound pagina's

---

### Technische details

Alle wijzigingen betreffen de `label` en `hoverLabel` props van de `PrimaryFlipButton` en `InversedFlipButton` componenten. De buttons gebruiken vaak CSS `uppercase` voor de visuele weergave, maar de broncode moet sentence case gebruiken voor consistentie en toegankelijkheid.

**Voorbeeld wijziging:**
```tsx
// Voor
<PrimaryFlipButton label="Gratis Dakinspectie" hoverLabel="Plan Inspectie" />

// Na  
<PrimaryFlipButton label="Gratis dakinspectie" hoverLabel="Plan inspectie" />
```

---

### Betreffende bestanden
- `src/components/home/Hero.tsx`
- `src/components/home/About.tsx`
- `src/components/home/Services.tsx`
- `src/components/home/Testimonials.tsx`
- `src/components/home/RecentProjects.tsx`
- `src/components/layout/Header.tsx`
- `src/pages/Contact.tsx`
- `src/pages/NotFound.tsx`

