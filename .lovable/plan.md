
# Plan: Uniforme Button Styling Site-breed

## Overzicht
De gebruiker wil alle buttons op de website dezelfde stijl geven als de referentie-afbeeldingen:
- **Normale staat**: Groene achtergrond (#4CB26E), zwarte tekst, pijl naar rechts
- **Hover staat**: Donkere/zwarte achtergrond, witte tekst, pijl naar rechts

## Huidige Situatie

### FlipButton Systeem (3D flip effect)
- `PrimaryFlipButton`: Groen → Zwart (flip animatie)
- `InversedFlipButton`: Zwart → Groen (flip animatie)
- `EmergencyFlipButton`: Rood → Zwart (flip animatie)

### Shadcn Button Component
- Gebruikt in formulieren (LekkageForm, VveForm)
- Standaard Radix styling, niet consistent met FlipButtons

### Inline Button Styling
- FeaturedProjects mobiele CTA: Al correct gestyled
- Diverse links met custom hover effecten

## Oplossing: Nieuwe AnimatedButton Component

Vervang het 3D flip-effect door een moderne kleurovergang-animatie die overeenkomt met de referentie:

### Nieuwe Component Structuur

```text
┌─────────────────────────────────────────────┐
│  BEKIJK ALLE PROJECTEN  →                   │
│  bg-brand-green | text-black               │
└─────────────────────────────────────────────┘

           ↓ Bij hover ↓

┌─────────────────────────────────────────────┐
│  BEKIJK ALLE PROJECTEN  →                   │
│  bg-feigro-dark | text-white               │
└─────────────────────────────────────────────┘
```

### Animatie Eigenschappen
- Vloeiende kleurovergang (300ms ease)
- Geen 3D flip, maar directe kleurwissel
- Pijl-icoon blijft, met subtiele translate op hover
- Behoud van huidige tekst labels

## Bestanden te Wijzigen

| Bestand | Wijziging |
|---------|-----------|
| `src/components/buttons/FlipButton.tsx` | Vervang 3D flip door kleurovergang animatie |
| `src/components/buttons/PrimaryFlipButton.tsx` | Aanpassen naar nieuwe stijl (groen→zwart) |
| `src/components/buttons/InversedFlipButton.tsx` | Aanpassen naar zelfde stijl (groen→zwart) |
| `src/components/ui/button.tsx` | Nieuwe "feigro" variant toevoegen |
| `src/components/forms/LekkageForm.tsx` | Button styling aanpassen naar nieuwe stijl |
| `src/components/forms/VveForm.tsx` | Button styling aanpassen naar nieuwe stijl |

## Technische Details

### Nieuwe FlipButton Styling

```tsx
// Normale staat
className="bg-brand-green text-feigro-dark border-2 border-brand-green"

// Hover staat  
className="hover:bg-feigro-dark hover:text-white hover:border-feigro-dark"

// Transitie
className="transition-all duration-300 ease-out"
```

### Button Varianten Uniforme Stijl

**Alle CTA buttons (Primary, Inversed, Emergency):**
- Achtergrond: `bg-brand-green`
- Tekst: `text-feigro-dark` (zwart)
- Border: `border-brand-green`
- Hover achtergrond: `bg-feigro-dark` 
- Hover tekst: `text-white`
- Border-radius: `rounded-xl`
- Font: `font-bold uppercase tracking-wider`
- Hoogte: 52px (default), 44px (small), 68px (large)

### Formulier Buttons

De `<Button>` component in formulieren krijgt dezelfde styling:
- Verwijder huidige `hover:bg-brand-green/90`
- Voeg toe: `hover:bg-feigro-dark hover:text-white`
- Zorg voor consistente border-radius en padding

## Visuele Consistentie

Na implementatie hebben ALLE buttons op de site:

1. **Zelfde kleurenschema**: Groen → Zwart bij hover
2. **Zelfde font**: Bold, uppercase, tracking-wider  
3. **Zelfde border-radius**: rounded-xl (12px)
4. **Zelfde hoogte**: Consistent per size variant
5. **Zelfde animatie**: 300ms vloeiende kleurovergang
6. **Zelfde pijl-gedrag**: ArrowRight met translate-x op hover

## Impact Analyse

### Componenten die automatisch updaten (via FlipButton):
- Hero sectie buttons
- About sectie button
- BlogSection CTA
- Testimonials button
- CTAFooter button
- Diensten pagina buttons
- Contact pagina buttons
- ProjectDetail pagina buttons
- NotFound pagina buttons
- Spoedservice pagina buttons

### Componenten die handmatig geüpdatet worden:
- LekkageForm submit button
- VveForm submit button
- FeaturedProjects mobiele CTA (al correct)

## Verwacht Resultaat

Een volledig consistente button-ervaring over de hele website:
- Herkenbare groene buttons die uitnodigen tot actie
- Duidelijke hover feedback met kleurwissel naar zwart
- Professionele, moderne uitstraling
- Behoud van alle bestaande button teksten en functionaliteit
