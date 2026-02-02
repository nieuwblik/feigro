
# Plan: Hero Secties 100vh + Nieuw Project Ursem

## Overzicht
Dit plan past de hero secties aan naar 100vh op zowel mobiel als desktop, en voegt het nieuwe project "Dakisolatie Ursem" toe.

## Wat er gaat gebeuren

### 1. Hero secties aanpassen naar 100vh
Beide pagina's krijgen een fullscreen hero sectie op alle schermformaten:

| Pagina | Huidige waarde | Nieuwe waarde |
|--------|----------------|---------------|
| Projecten | `h-screen md:h-[40vh]` | `h-screen` |
| Nieuws | `min-h-[50vh] md:h-[45vh]` | `h-screen` |

Dit zorgt voor een impactvolle eerste indruk op elk apparaat.

### 2. Nieuw project: Dakisolatie Ursem
Een nieuwe projectpagina wordt aangemaakt:

- **Titel**: Dakisolatie Ursem
- **Slug**: `/project-dakisolatie-ursem`
- **Locatie**: Ursem
- **Categorie**: Dakisolatie
- **Beschrijving**: PIR-isolatie (140mm) met witte bitumen dakbedekking voor optimaal zonnepaneel rendement
- **Werkzaamheden**:
  - Aanbrengen 140mm dikke PIR-isolatie
  - Plaatsen witte bitumen dakbedekking
  - Optimale reflectie voor verhoogd zonnepaneel rendement
  - Verbeterde thermische isolatie

De 5 geüploade foto's worden geconverteerd naar webp-formaat.

## Technische Details

### Nieuwe bestanden
| Bestand | Doel |
|---------|------|
| `src/assets/projects/dakisolatie-ursem-1.webp` | Projectfoto eindresultaat |
| `src/assets/projects/dakisolatie-ursem-2.webp` | Projectfoto detail |
| `src/assets/projects/dakisolatie-ursem-3.webp` | Projectfoto overzicht |
| `src/assets/projects/dakisolatie-ursem-4.webp` | Projectfoto afwerking |
| `src/assets/projects/dakisolatie-ursem-5.webp` | PIR-isolatie werkfoto |

### Aan te passen bestanden
| Bestand | Wijziging |
|---------|-----------|
| `src/data/projects.ts` | Nieuw project "Dakisolatie Ursem" toevoegen aan de projecten lijst |
| `src/pages/Projecten.tsx` | Hero sectie class wijzigen van `h-screen md:h-[40vh]` naar `h-screen` |
| `src/pages/Nieuws.tsx` | Hero sectie class wijzigen van `min-h-[50vh] md:h-[45vh]` naar `h-screen` |

### Project data structuur
```text
{
  slug: 'dakisolatie-ursem',
  title: 'Dakisolatie Ursem',
  category: 'Dakisolatie',
  location: 'Ursem',
  date: '2026-02-02',
  size: 'circa 50 m²',
  shortDescription: 'Complete dakisolatie met 140mm PIR en witte bitumen dakbedekking.',
  description: 'Weer een mooie klus afgerond in Ursem! Dit dak hebben we voorzien van 140mm dikke PIR-isolatie en witte bitumen dakbedekking. Niet alleen perfect om de warmte buiten te houden, maar het verhoogt ook het rendement van de zonnepanelen. Klaar voor een energiezuinige toekomst!',
  highlights: [
    'Aanbrengen 140mm dikke PIR-isolatie',
    'Plaatsen witte bitumen dakbedekking',
    'Optimale reflectie voor verhoogd zonnepaneel rendement',
    'Verbeterde thermische isolatie'
  ],
  imageBefore: PIR-isolatie werkfoto,
  imageAfter: Eindresultaat foto
}
```

## Volgorde van uitvoering

1. Afbeeldingen kopiëren en converteren naar webp-formaat
2. Project data toevoegen aan `src/data/projects.ts`
3. Hero sectie in `src/pages/Projecten.tsx` aanpassen naar `h-screen`
4. Hero sectie in `src/pages/Nieuws.tsx` aanpassen naar `h-screen`

## Resultaat
- Twee projecten zichtbaar op de projectenpagina (Enkhuizen + Ursem)
- Fullscreen hero secties (100vh) op alle pagina's en schermformaten
- Volledig responsive ontwerp
- Nieuw project direct toegankelijk via `/project-dakisolatie-ursem`
