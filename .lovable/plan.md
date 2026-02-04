

# Plan: Foto's, Secties en Mobile Hero Spacing Optimalisatie

## Overzicht

Dit plan omvat 6 hoofd-onderdelen:
1. Zonnepanelen blog foto vervangen
2. Home pagina "Uw dak in goede handen" foto toevoegen
3. Home Hero achtergrond met meerdere foto's (carousel/slideshow)
4. Dakreparatie info sectie foto toevoegen
5. Dakonderhoud sectie titel en foto aanpassen
6. Dakrenovatie info sectie foto + Enkhuizen project case toevoegen
7. Mobile Hero spacing structureel oplossen

---

## Deel 1: Zonnepanelen Blog Hoofdfoto

**Bestand:** `src/components/home/BlogSection.tsx`

**Actie:**
- Kopieer `user-uploads://image-25.png` naar `src/assets/zonnepanelen-dak.png`
- Vervang `imgZonnepanelen` import van `feigro-dakdekking-westfriesland.jpg` naar de nieuwe foto

**Wijziging:**
```typescript
// Oud:
import imgZonnepanelen from '@/assets/feigro-dakdekking-westfriesland.jpg';

// Nieuw:
import imgZonnepanelen from '@/assets/zonnepanelen-dak.png';
```

---

## Deel 2: Home "Uw dak in goede handen" Sectie

**Bestand:** `src/components/home/About.tsx`

**Actie:**
- Kopieer `user-uploads://image-26.png` naar `src/assets/dakdekker-brander.png`
- Vervang de huidige `aboutImage` met de nieuwe foto
- Zorg dat de foto `rounded-lg md:rounded-[1rem]` heeft (al aanwezig in huidige code)

**Wijziging:**
```typescript
// Oud:
import aboutImage from '@/assets/dakrenovatie.jpg';

// Nieuw:
import aboutImage from '@/assets/dakdekker-brander.png';
```

De huidige code heeft al rounded corners: `rounded-lg md:rounded-[1rem]`

---

## Deel 3: Home Hero met Meerdere Achtergrondbeelden

**Bestand:** `src/components/home/Hero.tsx`

**Actie:**
- Kopieer 3 foto's naar assets:
  - `user-uploads://image-27.png` -> `src/assets/hero-slide-1.png`
  - `user-uploads://image-28.png` -> `src/assets/hero-slide-2.png`
  - `user-uploads://image-29.png` -> `src/assets/hero-slide-3.png`
- Implementeer een automatische fade-slideshow met 5-seconden interval
- Responsive optimalisatie: `object-cover object-center` met focus op de dakdekkers

**Technische implementatie:**
```typescript
import heroSlide1 from '@/assets/hero-slide-1.png';
import heroSlide2 from '@/assets/hero-slide-2.png';
import heroSlide3 from '@/assets/hero-slide-3.png';

const heroImages = [heroSlide1, heroSlide2, heroSlide3];

// State voor huidige slide
const [currentSlide, setCurrentSlide] = useState(0);

// Effect voor auto-rotate (5 seconden)
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, 5000);
  return () => clearInterval(timer);
}, []);

// Render: stack van afbeeldingen met fade-in/out
{heroImages.map((img, i) => (
  <motion.img
    key={i}
    src={img}
    animate={{ opacity: i === currentSlide ? 1 : 0 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 w-full h-[130%] object-cover brightness-50"
  />
))}
```

---

## Deel 4: Dakreparatie Info Sectie Foto

**Bestand:** `src/data/services.ts` (regel 690-698 - dakreparatieData.info)

**Actie:**
- Kopieer `user-uploads://image-30.png` naar `src/assets/dakreparatie-werk.png`
- Voeg `image` property toe aan de `info` object van `dakreparatieData`

**Wijziging aan imports (bovenkant bestand):**
```typescript
import imgDakreparatieWerk from '@/assets/dakreparatie-werk.png';
```

**Wijziging aan info object:**
```typescript
info: {
  title: 'Wanneer is Dakreparatie Nodig?',
  titleHighlight: 'Dakreparatie',
  description: 'Tijdige reparatie voorkomt grotere schade en hogere kosten.',
  image: imgDakreparatieWerk,  // NIEUW
  paragraphs: [...]
}
```

---

## Deel 5: Dakonderhoud Sectie

**Bestand:** `src/data/services.ts` (regel 185-260 - dakonderhoudData)

**Acties:**
1. **Titel wijzigen van "Onze onderhoudswerkzaamheden" naar "Verzeker uw dak met dakonderhoud"**
2. **"dakonderhoud" groen en schuingedrukt maken**
3. **Foto toevoegen bij "Het belang van Dakonderhoud"**

**Kopieer:** `user-uploads://image-31.png` -> `src/assets/dakonderhoud-werk.png`

**Wijzigingen:**
```typescript
// Import toevoegen:
import imgDakonderhoudWerk from '@/assets/dakonderhoud-werk.png';

// Feature section:
featureTitle: 'Verzeker uw dak met dakonderhoud',
featureHighlight: 'dakonderhoud',  // Maakt "dakonderhoud" groen italic

// Info section:
info: {
  title: 'Het Belang van Dakonderhoud',
  titleHighlight: 'Dakonderhoud',
  description: '...',
  image: imgDakonderhoudWerk,  // NIEUW
  paragraphs: [...]
}
```

---

## Deel 6: Dakrenovatie Sectie + Enkhuizen Project Case

**Bestand:** `src/data/services.ts` (regel 262-336 - dakrenovatieData)

**Actie 1:** Foto toevoegen bij "Wanneer is Dakrenovatie Nodig?"
- Kopieer `user-uploads://image-32.png` -> `src/assets/dakrenovatie-werk.png`

**Wijziging:**
```typescript
import imgDakrenovatieWerk from '@/assets/dakrenovatie-werk.png';

info: {
  title: 'Wanneer is Dakrenovatie Nodig?',
  titleHighlight: 'Dakrenovatie',
  image: imgDakrenovatieWerk,  // NIEUW
  paragraphs: [...]
}
```

**Actie 2:** Enkhuizen Project Case Sectie Toevoegen

**Bestand:** `src/pages/services/Dakrenovatie.tsx`

Toevoegen van een project showcase sectie na de InfoSection:

```typescript
import { projects } from '@/data/projects';

// Na InfoSection, voor FAQSection:
<ProjectShowcase project={projects['dakrenovatie-enkhuizen']} />
```

**Nieuw component of inline sectie:**
```typescript
{/* Enkhuizen Case Study */}
<section className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-[2px] bg-brand-green"></div>
      <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">
        Uit de praktijk
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-8 uppercase tracking-tighter">
      Dakrenovatie <span className="text-brand-green italic">Enkhuizen</span>
    </h2>
    
    {/* Before/After Grid */}
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="rounded-xl overflow-hidden">
        <img src={project.imageBefore} alt="Voor" className="w-full h-64 object-cover" />
        <p className="text-center py-2 bg-slate-100 text-sm font-bold">VOOR</p>
      </div>
      <div className="rounded-xl overflow-hidden">
        <img src={project.imageAfter} alt="Na" className="w-full h-64 object-cover" />
        <p className="text-center py-2 bg-brand-green text-sm font-bold">NA</p>
      </div>
    </div>
    
    {/* Project details + CTA */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <p className="text-slate-600 mb-2">{project.shortDescription}</p>
        <ul className="flex flex-wrap gap-2">
          {project.highlights.map((h, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 text-xs rounded-full">{h}</span>
          ))}
        </ul>
      </div>
      <Link to={`/projecten/${project.slug}`}>
        <PrimaryFlipButton label="Bekijk volledig project" />
      </Link>
    </div>
  </div>
</section>
```

---

## Deel 7: Mobile Hero Spacing - Structurele Oplossing

**Probleem:** Op mobiel zit de tekst in hero secties te dicht op de header

**Analyse:**
- Huidige styling: `pt-24 pb-16 md:pt-40 md:pb-20`
- Dit geeft op mobiel slechts `pt-24` (96px) padding boven, maar de header is ~80px hoog
- Resultaat: tekst begint direct onder header zonder ademruimte

**Pagina's die aangepast moeten worden:**
1. `src/components/sections/HeroSection.tsx` (alle diensten-subpagina's)
2. `src/pages/OverOns.tsx`
3. `src/pages/Contact.tsx`
4. `src/pages/Projecten.tsx`
5. `src/pages/Nieuws.tsx`
6. `src/pages/Diensten.tsx`
7. `src/pages/Vacatures.tsx`

**Uitgezonderd:** Homepage en Spoedservice (behouden h-screen layout)

**Structurele oplossing - Nieuwe padding waarden:**

```css
/* Oud: */
pt-24 pb-16 md:pt-40 md:pb-20

/* Nieuw: */
pt-32 pb-16 md:pt-40 md:pb-20
```

**Waarom `pt-32`?**
- Header hoogte: ~80px
- Extra ademruimte: ~48px
- Totaal: 128px = `pt-32`

Dit zorgt voor:
- Mobiel: 128px padding boven -> ~48px ademruimte onder header
- Tablet/Desktop: blijft 160px (`pt-40`) -> ruime ademruimte

**Alternatief met `safe-area`:**
```css
pt-[calc(80px+2rem)] md:pt-40
```

Dit berekent exact: header (80px) + 2rem (32px) extra ruimte

---

## Samenvatting Bestanden

| Bestand | Wijziging |
|---------|-----------|
| `src/assets/` | 8 nieuwe afbeeldingen toevoegen |
| `src/components/home/BlogSection.tsx` | Zonnepanelen foto vervangen |
| `src/components/home/About.tsx` | Dakdekker brander foto |
| `src/components/home/Hero.tsx` | Multi-image slideshow |
| `src/data/services.ts` | 3 info images + dakonderhoud titel |
| `src/pages/services/Dakrenovatie.tsx` | Enkhuizen case study |
| `src/components/sections/HeroSection.tsx` | Mobile padding fix |
| `src/pages/OverOns.tsx` | Mobile padding fix |
| `src/pages/Contact.tsx` | Mobile padding fix |
| `src/pages/Projecten.tsx` | Mobile padding fix |
| `src/pages/Nieuws.tsx` | Mobile padding fix |
| `src/pages/Diensten.tsx` | Mobile padding fix |
| `src/pages/Vacatures.tsx` | Mobile padding fix |

---

## Nieuwe Afbeeldingen

| Origineel | Doel | Nieuwe locatie |
|-----------|------|----------------|
| image-25.png | Zonnepanelen blog | `src/assets/zonnepanelen-dak.png` |
| image-26.png | About sectie | `src/assets/dakdekker-brander.png` |
| image-27.png | Hero slide 1 | `src/assets/hero-slide-1.png` |
| image-28.png | Hero slide 2 | `src/assets/hero-slide-2.png` |
| image-29.png | Hero slide 3 | `src/assets/hero-slide-3.png` |
| image-30.png | Dakreparatie info | `src/assets/dakreparatie-werk.png` |
| image-31.png | Dakonderhoud info | `src/assets/dakonderhoud-werk.png` |
| image-32.png | Dakrenovatie info | `src/assets/dakrenovatie-werk.png` |

