# Animatie Consistentie Audit - FEIGRO Website

## Huidige Inconsistenties Gevonden:

### Transition Durations:
- ❌ duration-200 (select items)
- ❌ duration-300 (cards, buttons, FAQ)
- ❌ duration-500 (cards, headers, testimonials)
- ❌ duration-700 (images, OverOns)
- ❌ duration-1000 (images)

### Card Hover Effecten:
- ❌ hover:-translate-y-1 (Reviews, GoogleReviewCard)
- ❌ hover:-translate-y-2 (Services, FeatureGrid, FeaturedProjects)
- ❌ Sommige cards hebben geen hover lift

### Image Scale Animaties:
- ❌ duration-700 (Nieuws, BlogDetail)
- ❌ duration-1000 (Services, InfoSection)

## Gestandaardiseerde Animatie Regels:

### 1. Cards:
- **Transition**: `transition-all duration-500`
- **Hover**: `hover:-translate-y-2 hover:border-brand-green/30`
- **Easing**: Ingebouwd in Tailwind (ease-in-out)

### 2. Buttons:
- **Transition**: `transition-all duration-300`
- **Active**: `active:scale-[0.98]`
- **Hover**: Specifiek per button type

### 3. Images (binnen cards):
- **Scale**: `group-hover:scale-105`
- **Transition**: `transition-all duration-700`

### 4. Scroll Animations (FadeIn):
- **Duration**: 0.8s (default in FadeIn)
- **Distance**: 20px
- **Delay**: index * 0.05
- **Easing**: [0.16, 1, 0.3, 1]

### 5. Header/Navigation:
- **Transition**: `transition-all duration-500`

### 6. Icon/Small Elements:
- **Transition**: `transition-all duration-300`

## Te Updaten Bestanden:

1. ✅ Hero.tsx - Crossfade slideshow (DONE)
2. ✅ FeatureGrid.tsx - FadeIn animaties (DONE)
3. ✅ All Cards - Consistent shadows removed (DONE)
4. ⚠️ GoogleReviewCard - hover:-translate-y-1 → hover:-translate-y-2
5. ⚠️ Reviews.tsx - hover:-translate-y-1 → hover:-translate-y-2
6. ⚠️ Image transitions - Standardize to duration-700
7. ⚠️ FAQ Section - Add smooth animations
8. ⚠️ Testimonials - Ensure smooth transitions
9. ⚠️ OverOns page - Standardize card animations
10. ⚠️ BlogDetail - Standardize related posts
