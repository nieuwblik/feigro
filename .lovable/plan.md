

## Plan: Twee CTA-knoppen toevoegen aan de homepage hero

### Wat wordt er gedaan
Na de paragraaf in de hero-sectie worden twee knoppen toegevoegd:
1. **"Offerte aanvragen"** → linkt naar `/contact`
2. **"Bekijk Projecten"** → linkt naar `/projecten`

### Implementatie
In `src/components/home/Hero.tsx`, na de `<FadeIn>` met de paragraaf (regel 89), wordt een nieuw `<FadeIn>` blok toegevoegd met twee knoppen naast elkaar:

- Beide knoppen worden gewrapt in `<Link>` componenten
- **"Offerte aanvragen"**: `PrimaryFlipButton` (groen, primaire actie) met `ArrowRight` icoon
- **"Bekijk Projecten"**: `InversedFlipButton` of een secondary-styled `AnimatedButton` (donkere variant) zodat er visueel onderscheid is tussen de twee knoppen
- Layout: `flex gap-3` horizontaal op desktop, gestapeld op mobiel via `flex-col sm:flex-row`
- Beide knoppen krijgen `fullWidthMobile={true}` voor mobiele breedte-consistentie

### Bestandswijzigingen
- **`src/components/home/Hero.tsx`**: Buttons sectie toevoegen na de paragraaf, met `Link` wrapping naar `/contact` en `/projecten`

