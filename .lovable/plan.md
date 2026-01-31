
# Plan: Consistente Typography & Button Sizing

## Doel
Alle H1 en H2 headings standaardiseren naar `text-4xl` en alle buttons naar dezelfde grootte voor visuele consistentie over de gehele website.

---

## 1. Typography Standaardisatie

### Nieuwe standaard voor H1 & H2
Alle headings worden aangepast naar:
```
text-4xl font-heading uppercase tracking-tighter
```

Dit vervangt de huidige variaties zoals `text-2xl sm:text-3xl md:text-5xl lg:text-7xl`.

### Bestanden die worden aangepast

| Component | Huidige H1/H2 | Nieuwe standaard |
|-----------|---------------|------------------|
| `Hero.tsx` | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` | `text-4xl` |
| `Services.tsx` | `text-3xl sm:text-4xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `About.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `Reviews.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `RecentProjects.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `CTAFooter.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl` | `text-4xl` |
| `OverOns.tsx` | Diverse variaties | `text-4xl` |
| `Diensten.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `Contact.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `Projecten.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| `Spoedservice.tsx` | `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` | `text-4xl` |
| Service subpagina's (11x) | Diverse variaties | `text-4xl` |

---

## 2. Button Size Standaardisatie

### Nieuwe standaard
Alle PrimaryFlipButton en InversedFlipButton worden aangepast naar `size="default"` (52px hoogte).

Hiermee vervalt het wisselende gebruik van `size="large"` en `size="default"`.

### Huidige button sizes in FlipButton.tsx
```text
default: h-[52px] px-6 text-lg    ← STANDAARD
large:   h-[68px] px-10 text-2xl  ← WORDT VERWIJDERD
small:   h-[44px] px-5 text-base  ← OPTIONEEL BEHOUDEN
```

### Bestanden met buttons die worden aangepast

| Bestand | Huidige size | Nieuwe size |
|---------|--------------|-------------|
| `Hero.tsx` | dynamisch (large op desktop) | `default` |
| `Services.tsx` | `large` | `default` |
| `About.tsx` | `large` | `default` |
| `RecentProjects.tsx` | `default` | `default` (geen wijziging) |
| `CTAFooter.tsx` | `large` | `default` |
| `Diensten.tsx` | `large` | `default` |
| `OverOns.tsx` | `default` / geen | `default` |
| Alle andere pagina's | variatie | `default` |

---

## 3. Technische Aanpassingen

### 3.1 Hero.tsx - Verwijder dynamische button sizing
De huidige logica:
```typescript
const [buttonSize, setButtonSize] = useState<'default' | 'large'>('default');
useEffect(() => {
  const handleResize = () => {
    setButtonSize(window.innerWidth >= 1024 ? 'large' : 'default');
  };
  // ...
}, []);
```

Wordt vervangen door een vaste `size="default"`.

### 3.2 Alle componenten
- Alle `size="large"` props worden verwijderd of veranderd naar `size="default"`
- Alle responsive heading classes worden vervangen door `text-4xl`

---

## 4. Samenvatting Wijzigingen

### Homepage Componenten (5 bestanden)
1. `src/components/home/Hero.tsx`
2. `src/components/home/Services.tsx`
3. `src/components/home/About.tsx`
4. `src/components/home/Reviews.tsx`
5. `src/components/home/RecentProjects.tsx`

### Pagina's (6 bestanden)
1. `src/pages/OverOns.tsx`
2. `src/pages/Diensten.tsx`
3. `src/pages/Contact.tsx`
4. `src/pages/Projecten.tsx`
5. `src/pages/Spoedservice.tsx`
6. `src/components/sections/CTAFooter.tsx`

### Service Pagina's (11 bestanden)
1. `src/pages/services/BitumenDakbedekking.tsx`
2. `src/pages/services/DakbedekkingVervangen.tsx`
3. `src/pages/services/Dakinspectie.tsx`
4. `src/pages/services/Daklekkage.tsx`
5. `src/pages/services/Dakonderhoud.tsx`
6. `src/pages/services/Dakrenovatie.tsx`
7. `src/pages/services/Dakreparatie.tsx`
8. `src/pages/services/EpdmDakbedekking.tsx`
9. `src/pages/services/Valbeveiliging.tsx`
10. `src/pages/services/Valbeveiligingssysteem.tsx`
11. `src/pages/services/VveVastgoedbeheer.tsx`

### Shared Componenten
1. `src/components/sections/HeroSection.tsx`
2. `src/components/sections/FeatureGrid.tsx`
3. `src/components/sections/InfoSection.tsx`
4. `src/components/sections/FAQSection.tsx`
5. `src/components/sections/ServiceCTA.tsx`

---

## 5. Visueel Resultaat

### Voor
```text
Heading sizes: 24px → 72px+ (variabel per breakpoint)
Button heights: 44px / 52px / 68px (wisselend)
```

### Na
```text
Heading sizes: 36px (2.25rem = text-4xl) consistent
Button heights: 52px consistent
```

---

## Totaal: ~25 bestanden worden aangepast
