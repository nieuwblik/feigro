
# Plan: Feigro Website Verbeteringen

Dit plan omvat vijf hoofdonderdelen: Google Reviews integratie, Over Ons pagina update, responsive layout optimalisatie, footer e-mailadressen, en mobiele audit met typografie consistentie.

---

## 1. Google Business Reviews Integratie

### Wat gaat er gebeuren
- Koppeling met de Google Places API om reviews automatisch op te halen
- Reviews worden live bijgewerkt zonder handmatige aanpassingen
- Toevoegen van een "Plaats een review" knop die linkt naar Google

### Benodigdheden
- **Google Places API sleutel** (moet je aanmaken via Google Cloud Console)
- Edge function voor veilige API-communicatie

### Technische aanpak
1. **Edge Function aanmaken** (`supabase/functions/google-reviews/index.ts`)
   - Haalt reviews op via Google Places API
   - Cached resultaten om API-kosten te beperken
   - Retourneert reviewer naam, rating, tekst en datum

2. **Reviews component updaten** (`src/components/home/Reviews.tsx`)
   - Vervangt hardcoded reviews met API-data
   - Laadt reviews bij page load via de edge function
   - Fallback naar huidige statische reviews bij API-fout

3. **"Review Plaatsen" knop toevoegen**
   - Link naar: `https://search.google.com/local/writereview?placeid={PLACE_ID}`

---

## 2. Over Ons Pagina: Feitsma + Groen Verhaal

### Huidige situatie
De pagina vermeldt Tommie Feitsma en Jan Groen, maar legt niet uit dat FEIGRO een samenvoeging is van hun bedrijven.

### Wijzigingen
1. **Nieuwe sectie toevoegen** na "Het Verhaal van Feigro"
   - Titel: "De Kracht van Twee"
   - Uitleg: FEI = Feitsma, GRO = Groen
   - Links naar beide websites met visuele kaarten

2. **Content structuur**
```text
┌─────────────────────────────────────────────────────────┐
│ DE KRACHT VAN TWEE                                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Feigro is ontstaan uit de samenwerking van twee        │
│ gevestigde dakdekkersbedrijven:                        │
│                                                         │
│ ┌─────────────────────┐  ┌─────────────────────┐       │
│ │ FEITSMA DAKWERKEN   │  │ GROEN DAKWERKEN     │       │
│ │ feitsmadakwerken.nl │  │ groendakwerken.nl   │       │
│ │ [Bezoek Website →]  │  │ [Bezoek Website →]  │       │
│ └─────────────────────┘  └─────────────────────┘       │
│                                                         │
│ Door onze krachten te bundelen bieden wij nu als       │
│ FEIGRO de beste service in heel West-Friesland.        │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Footer Update: E-mailadressen

### Huidige situatie
Footer toont alleen `info@feigro.nl` en één telefoonnummer.

### Nieuwe structuur
De CONTACT kolom wordt uitgebreid met alle e-mailadressen:

| E-mail | Doel |
|--------|------|
| info@feigro.nl | Algemene vragen |
| service@feigro.nl | Spoed & noodreparaties |
| facturen@feigro.nl | Facturatie |
| jgroen@feigro.nl | Contact Jan Groen |
| tfeitsma@feigro.nl | Contact Tommie Feitsma |

### Visuele weergave
```text
CONTACT                          
─────────────────────────────────
Algemeen
  info@feigro.nl

Spoed & Service  
  service@feigro.nl

Facturatie
  facturen@feigro.nl

Direct Contact
  Jan Groen — jgroen@feigro.nl
  Tommie Feitsma — tfeitsma@feigro.nl

Telefoon
  +31 (0) 6 123 456 78
```

---

## 4. Responsive Layout Optimalisatie (Mobiel & Tablet)

### Globale aanpassingen
Alle componenten worden gecontroleerd op de volgende punten:

| Aspect | Aanpassing |
|--------|------------|
| Padding | Consistente `px-4` op mobiel |
| Font sizes | Responsive scaling met Tailwind breakpoints |
| Tekst wrapping | `break-words` toevoegen waar nodig |
| Grid layouts | Aanpassen naar `grid-cols-1` op mobiel |
| Spacing | Kleinere margins/padding onder 768px |
| Buttons | `w-full` op mobiel waar nodig |

### Specifieke componenten
- **Hero sectie**: Stats bar beter gestapeld op mobiel
- **Services cards**: Kleinere padding, compactere weergave
- **Footer**: E-mail kolom reorganiseren voor mobiel
- **Forms**: Full-width inputs, verbeterde touch targets

---

## 5. Mobiele Audit & Typografie Consistentie

### Pagina's die worden doorgelopen
1. Homepage (`/`)
2. Diensten (`/diensten`)
3. Over Ons (`/over-ons`)
4. Projecten (`/projecten`)
5. Contact (`/contact`)
6. Spoedservice (`/spoedservice`)
7. Alle 11 service subpagina's (`/vve-vastgoedbeheer`, `/dakinspectie`, etc.)

### Typografie regels
| Element | Stijl |
|---------|-------|
| H1 | `uppercase`, responsive: `text-2xl sm:text-3xl md:text-5xl lg:text-7xl` |
| H2 | `uppercase`, responsive: `text-2xl sm:text-3xl md:text-5xl lg:text-6xl` |
| H3 | `uppercase`, consistent per component |
| Labels/Tags | `uppercase tracking-widest` |

### Audit checklist per pagina
- Geen horizontale scroll
- Tekst blijft binnen viewport
- Headings consistent in hoofdletters
- Afbeeldingen niet buiten containers
- Touch-vriendelijke buttons (min 44px)
- Consistente verticale spacing

---

## Implementatievolgorde

1. **Footer e-mailadressen** (snelle update)
2. **Over Ons pagina** (nieuwe Feitsma/Groen sectie)
3. **Typografie audit** (uppercase headings consistent maken)
4. **Mobiele layout fixes** (responsive optimalisaties)
5. **Google Reviews API** (edge function + component update)

---

## Technische Details

### Bestanden die worden aangepast

| Bestand | Wijziging |
|---------|-----------|
| `src/components/layout/Footer.tsx` | E-mailadressen toevoegen |
| `src/pages/OverOns.tsx` | Feitsma/Groen sectie toevoegen |
| `src/components/home/Reviews.tsx` | API integratie + review button |
| `src/components/home/Hero.tsx` | Mobiele spacing fixes |
| `src/components/home/Services.tsx` | Mobiele padding optimalisatie |
| `src/pages/Diensten.tsx` | Uppercase headings |
| `src/pages/Contact.tsx` | Mobiele form fixes |
| `src/pages/Projecten.tsx` | Responsive grid |
| `src/pages/Spoedservice.tsx` | Mobiele optimalisatie |
| `src/pages/services/*.tsx` | Alle 11 service pagina's |

### Nieuwe bestanden

| Bestand | Doel |
|---------|------|
| `supabase/functions/google-reviews/index.ts` | Google Places API edge function |

### Benodigde secrets
- `GOOGLE_PLACES_API_KEY` - Voor Google Reviews API
- `GOOGLE_PLACE_ID` - Feigro's Google Business Place ID
