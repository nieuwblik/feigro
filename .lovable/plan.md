

# Plan: Hero-Secties van 40vh naar 60vh met Volledige Responsiveness

## Overzicht
Alle hero-secties worden aangepast van `40vh` naar `60vh` op desktop, met proportionele hoogtes voor mobiel en tablet. De Homepage en Spoedservice blijven ongewijzigd.

## Huidige vs. Nieuwe Situatie

| Schermformaat | Huidig | Nieuw |
|---------------|--------|-------|
| Mobiel (<768px) | h-screen (100vh) | 70vh |
| Tablet (768px-1024px) | 40vh | 50vh |
| Desktop (>1024px) | 40vh | 60vh |

## Responsiveness Breakpoints

```text
Mobiel (< 768px)    : 70vh  (compact maar impactvol)
Tablet (768-1024px) : 50vh  (tussenformaat)
Desktop (> 1024px)  : 60vh  (ruime weergave)
```

## Visuele Vergelijking

**Desktop (nieuw):**
```text
+----------------------------------+
|                                  |
|       HERO (60vh)                |
|       Meer ademruimte            |
|                                  |
+----------------------------------+
|          CONTENT                 |
+----------------------------------+
```

**Tablet (nieuw):**
```text
+----------------------------------+
|       HERO (50vh)                |
|       Gebalanceerd               |
+----------------------------------+
|          CONTENT                 |
+----------------------------------+
```

**Mobiel (nieuw):**
```text
+----------------------------------+
|                                  |
|       HERO (70vh)                |
|       Focus behouden             |
|                                  |
+----------------------------------+
|          CONTENT                 |
+----------------------------------+
```

## Aanpassingen per Bestand

### 1. HeroSection Component (Diensten-subpagina's)
**Bestand:** `src/components/sections/HeroSection.tsx` (regel 36)

**Van:**
```css
h-screen md:h-[40vh] md:min-h-[400px]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

Dit past automatisch alle diensten-subpagina's aan:
- Dakrenovatie
- Dakreparatie
- Dakonderhoud
- Daklekkage
- Dakinspectie
- VVE & Vastgoedbeheer
- Valbeveiliging
- EPDM Dakbedekking
- Bitumen Dakbedekking
- Dakbedekking Vervangen

---

### 2. Over Ons Pagina
**Bestand:** `src/pages/OverOns.tsx` (regel 40)

**Van:**
```css
h-screen md:h-[40vh] md:min-h-[400px]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

---

### 3. Projecten Pagina
**Bestand:** `src/pages/Projecten.tsx` (regel 23)

**Van:**
```css
h-screen md:h-[40vh] md:min-h-[400px]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

---

### 4. Nieuws Pagina
**Bestand:** `src/pages/Nieuws.tsx` (regel 57)

**Van:**
```css
h-screen md:h-[40vh] md:min-h-[400px]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

---

### 5. Contact Pagina
**Bestand:** `src/pages/Contact.tsx` (regel 32)

**Van:**
```css
h-screen md:h-[40vh] md:min-h-[400px]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

---

### 6. Diensten Overzichtspagina
**Bestand:** `src/pages/Diensten.tsx` (regel 50)

**Van:**
```css
min-h-screen md:min-h-[40vh]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

---

### 7. Vacatures Pagina
**Bestand:** `src/pages/Vacatures.tsx` (regel 41)

**Van:**
```css
h-[50vh] md:h-[40vh]
```

**Naar:**
```css
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

---

## Pagina's die NIET worden aangepast

| Pagina | Reden |
|--------|-------|
| Homepage (`Index.tsx`) | Centrale landingspagina met fullscreen impact |
| Spoedservice (`Spoedservice.tsx`) | Speciale urgentie-layout met dual-column structuur |

---

## Technische Details

### CSS Classes Wijziging
```css
/* Van (verschillende varianten) */
h-screen md:h-[40vh] md:min-h-[400px]
min-h-screen md:min-h-[40vh]
h-[50vh] md:h-[40vh]

/* Naar (uniforme aanpak) */
h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px]
```

### Tailwind Breakpoints
- `h-[70vh]`: Mobiel (standaard, < 768px)
- `md:h-[50vh]`: Tablet (>= 768px)
- `lg:h-[60vh]`: Desktop (>= 1024px)
- `min-h-[400px]`: Minimale hoogte op alle schermen

### Bestanden die worden aangepast
1. `src/components/sections/HeroSection.tsx`
2. `src/pages/OverOns.tsx`
3. `src/pages/Projecten.tsx`
4. `src/pages/Nieuws.tsx`
5. `src/pages/Contact.tsx`
6. `src/pages/Diensten.tsx`
7. `src/pages/Vacatures.tsx`

---

## Voordelen
- Meer visuele impact op alle schermformaten
- Proportionele verhoudingen tussen mobiel, tablet en desktop
- Consistente gebruikerservaring door de hele website
- `min-h-[400px]` voorkomt te kleine hero's op korte schermen
- Content blijft direct toegankelijk na de hero

