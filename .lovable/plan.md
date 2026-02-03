
# Plan: Consistente Compacte Hero-Secties

## Overzicht
Alle pagina's (behalve Homepage en Spoedservice) krijgen een consistente, compacte hero-sectie die bezoekers sneller bij de content brengt.

## Huidige Situatie

| Pagina | Huidige Hero Hoogte |
|--------|---------------------|
| Homepage | `h-screen` (blijft) |
| Spoedservice | `h-screen` (blijft) |
| Diensten (overzicht) | `min-h-screen md:min-h-[40vh]` (goed) |
| Vacatures | `h-[50vh] md:h-[40vh]` (goed) |
| Over Ons | `h-screen` (aanpassen) |
| Projecten | `h-screen` (aanpassen) |
| Nieuws | `h-screen` (aanpassen) |
| Contact | `h-screen` (aanpassen) |
| Alle Diensten-subpagina's | `h-screen` via HeroSection component (aanpassen) |

## Gewenste Situatie

```text
+------------------------------------------+
|  Homepage & Spoedservice                 |
|  -> h-screen (fullscreen impact)         |
+------------------------------------------+
|  Alle overige pagina's                   |
|  -> h-screen op mobiel (volledige focus) |
|  -> 40vh op desktop (snelle toegang)     |
+------------------------------------------+
```

## Aanpassingen

### 1. HeroSection Component (Herbruikbaar)
Dit component wordt door alle diensten-subpagina's gebruikt (Dakrenovatie, Dakreparatie, Daklekkage, etc.).

**Bestand:** `src/components/sections/HeroSection.tsx`

**Wijziging:** De class `h-screen` aanpassen naar `h-screen md:h-[40vh] md:min-h-[400px]`

De `min-h-[400px]` zorgt ervoor dat de hero op desktop niet te klein wordt.

---

### 2. Over Ons Pagina
**Bestand:** `src/pages/OverOns.tsx` (regel 40)

**Wijziging:** `h-screen` -> `h-screen md:h-[40vh] md:min-h-[400px]`

---

### 3. Projecten Pagina
**Bestand:** `src/pages/Projecten.tsx` (regel 23)

**Wijziging:** `h-screen` -> `h-screen md:h-[40vh] md:min-h-[400px]`

---

### 4. Nieuws Pagina
**Bestand:** `src/pages/Nieuws.tsx` (regel 57)

**Wijziging:** `h-screen` -> `h-screen md:h-[40vh] md:min-h-[400px]`

---

### 5. Contact Pagina
**Bestand:** `src/pages/Contact.tsx` (regel 36)

**Wijziging:** `h-screen` -> `h-screen md:h-[40vh] md:min-h-[400px]`

---

## Pagina's die NIET worden aangepast

| Pagina | Reden |
|--------|-------|
| Homepage (`Index.tsx`) | Centrale landingspagina met visuele impact |
| Spoedservice | Speciale urgentie-layout met dual-column structuur |
| Diensten (overzicht) | Heeft al het juiste patroon |
| Vacatures | Heeft al het juiste patroon |

---

## Visuele Vergelijking

**Voor (desktop):**
```text
+----------------------------------+
|                                  |
|            HERO                  |
|         (100vh = heel scherm)    |
|                                  |
|                                  |
+----------------------------------+
|          CONTENT                 |
```

**Na (desktop):**
```text
+----------------------------------+
|       HERO (40vh = bovenste deel)|
+----------------------------------+
|                                  |
|          CONTENT                 |
|     (direct zichtbaar)           |
|                                  |
+----------------------------------+
```

---

## Technische Details

### Betreffende Bestanden
1. `src/components/sections/HeroSection.tsx` - component voor diensten-subpagina's
2. `src/pages/OverOns.tsx` - Over Ons pagina
3. `src/pages/Projecten.tsx` - Projecten pagina
4. `src/pages/Nieuws.tsx` - Nieuws pagina
5. `src/pages/Contact.tsx` - Contact pagina

### CSS Classes Wijziging
```css
/* Van */
h-screen flex items-center

/* Naar */
h-screen md:h-[40vh] md:min-h-[400px] flex items-center
```

### Diensten-subpagina's die automatisch worden bijgewerkt
Door de wijziging in `HeroSection.tsx` worden automatisch alle diensten-subpagina's aangepast:
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

## Voordelen
- Snellere toegang tot content op desktop
- Minder scrollen nodig
- Professionelere uitstraling
- Betere SEO (content sneller zichtbaar voor crawlers)
- Consistente gebruikerservaring door de hele website
- Mobiel blijft fullscreen voor focus en impact
