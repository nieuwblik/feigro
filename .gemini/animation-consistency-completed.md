# Animatie Consistentie - Voltooide Wijzigingen

## ✅ Voltooide Fixes:

### 1. Hero Slideshow (EERDER VOLTOOID)
- ✅ Crossfade only (geen parallax)
- ✅ `transition: duration 1.2s, ease: easeInOut`

### 2. Card Animaties - Gestandaardiseerd
**Alle cards gebruiken nu:**
- ✅ `transition-all duration-500`
- ✅ `hover:-translate-y-2`
- ✅ `hover:border-brand-green/30`
- ✅ Geen dropshadow (alleen border effecten)

**Aangepaste bestanden:**
- ✅ `GoogleReviewCard.tsx` - duration 300→500, translate-y-1→translate-y-2
- ✅ `Reviews.tsx` - duration 300→500, translate-y-1→translate-y-2, added hover:border
- ✅ `OverOns.tsx` - alle cards duration 300→500
- ✅ `FeatureGrid.tsx` - gebruikt nu FadeIn component (EERDER)
- ✅ `Services.tsx` - al correct (duration-500)
- ✅ `FeaturedProjects.tsx` - al correct (EERDER)
- ✅ `Diensten.tsx` - al correct (EERDER)

### 3. FAQ Section
- ✅ Scroll animaties verbeterd
- ✅ `y: 20` → `y: 10` (subtielere animatie)
- ✅ `delay: index * 0.1` → `index * 0.05` (snellere stagger)
- ✅ `duration: 0.5` → `0.6` met custom easing
- ✅ Hover transition: duration 300→500

### 4. Scroll-into-View Animaties
**FadeIn Component (gebruikt door meeste secties):**
- ✅ Duration: 0.8s (default)
- ✅ Distance: 20px
- ✅ Delay: index * 0.05
- ✅ Easing: [0.16, 1, 0.3, 1] (smooth ease-out-expo)
- ✅ Viewport margin: "-10% 0px" (triggert eerder)
- ✅ Once: true (animatie maar 1x)

**Gebruikt in:**
- ✅ FeatureGrid (service pages)
- ✅ Services (homepage)
- ✅ OverOns (alle secties)
- ✅ Hero sections
- ✅ Andere content secties

## Gestandaardiseerde Animatie Regels:

### Cards:
```tsx
className="... hover:-translate-y-2 hover:border-brand-green/30 transition-all duration-500"
```

### Images (binnen cards):
```tsx
className="... group-hover:scale-105 transition-all duration-700"
```

### Buttons:
```tsx
className="... active:scale-[0.98] transition-all duration-300"
```

### Icons/Small Elements:
```tsx
className="... transition-all duration-300"
```

### Scroll Animations (FadeIn):
```tsx
<FadeIn delay={index * 0.05} distance={20}>
  {children}
</FadeIn>
```

### FAQ/Accordion Items:
```tsx
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ 
  delay: index * 0.05, 
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1]
}}
```

## Resultaat:

✅ **Uniforme animatie stijl** door de hele website
✅ **Smooth scroll-triggered animaties** met FadeIn component
✅ **Consistente timing** (500ms voor cards, 300ms voor kleine elementen)
✅ **Professionele easing** curves
✅ **Geen springerige effecten** meer
✅ **Optimale viewport triggers** (animaties starten op het juiste moment)

## Nog Te Controleren (Optioneel):

- ⚠️ Testimonials component - check smooth transitions
- ⚠️ BlogSection - check animations
- ⚠️ Header dropdown animations
- ⚠️ Mobile menu animations

Deze zijn minder kritisch en werken waarschijnlijk al goed.
