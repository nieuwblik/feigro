
# Plan: Fix Routing + Verbeterde Project Detailpagina's

## Overzicht
Dit plan repareert de 404-fouten op de projectpagina's door de routing te fixen, en zorgt ervoor dat de content goed is ingedeeld met duidelijke call-to-actions.

## Problemen Geidentificeerd

1. **Route werkt niet**: `/project-:slug` wordt niet correct geparset door React Router
2. **Links wijzen naar verkeerde paden**: Overal staat nog `/project-${slug}`
3. **Hero is niet fullscreen**: Huidige hoogte is `min-h-[60vh]` in plaats van `h-screen`
4. **Telefoonnummer is placeholder**: Staat nu op `+31612345678`

## Oplossing

### 1. Route Structuur Aanpassen

De route wordt gewijzigd naar een werkende structuur:

| Bestand | Wijziging |
|---------|-----------|
| App.tsx (regel 68) | `/project-:slug` wordt `/projecten/:slug` |

De nieuwe URL's worden:
- `/projecten/dakrenovatie-enkhuizen`
- `/projecten/dakisolatie-ursem`

### 2. Alle Links Updaten

| Bestand | Regel | Wijziging |
|---------|-------|-----------|
| Projecten.tsx | 96 | `/project-${slug}` wordt `/projecten/${slug}` |
| ProjectDetail.tsx | 43 | Canonical URL updaten |
| ProjectDetail.tsx | 264 | Links naar andere projecten updaten |

### 3. Hero Sectie naar 100vh

| Bestand | Regel | Wijziging |
|---------|-------|-----------|
| ProjectDetail.tsx | 47 | `min-h-[60vh] md:min-h-[50vh]` wordt `h-screen` |

### 4. Echte Contactgegevens

Het telefoonnummer op regel 213 in ProjectDetail.tsx wordt geupdate naar het echte nummer (hetzelfde als in de footer).

## Technische Details

### Route Wijziging (App.tsx)
```text
Regel 68:
Oud:  <Route path="/project-:slug" element={<ProjectDetail />} />
Nieuw: <Route path="/projecten/:slug" element={<ProjectDetail />} />
```

### Link Updates (Projecten.tsx)
```text
Regel 96:
Oud:  to={`/project-${project.slug}`}
Nieuw: to={`/projecten/${project.slug}`}
```

### Link Updates (ProjectDetail.tsx)
```text
Regel 43 (canonical):
Oud:  canonical={`/project-${project.slug}`}
Nieuw: canonical={`/projecten/${project.slug}`}

Regel 264 (andere projecten):
Oud:  to={`/project-${p.slug}`}
Nieuw: to={`/projecten/${p.slug}`}
```

### Hero Sectie (ProjectDetail.tsx)
```text
Regel 47:
Oud:  min-h-[60vh] md:min-h-[50vh] flex items-end
Nieuw: h-screen flex items-end
```

### Telefoonnummer (ProjectDetail.tsx)
```text
Regel 213:
Oud:  onClick={() => window.location.href = 'tel:+31612345678'}
Nieuw: onClick={() => window.location.href = 'tel:+31612345678'}
(Telefoonnummer moet door jou bevestigd worden - de footer heeft hetzelfde placeholder nummer)
```

## Bestaande Content Structuur

De ProjectDetail pagina heeft al een goede indeling:

1. **Hero Sectie**: Grote achtergrondafbeelding, categorie badge, titel, locatie/datum/oppervlakte
2. **Voor/Na Foto's**: Grid met labels
3. **Over dit project**: Beschrijving van het werk
4. **Werkzaamheden**: Lijst met checkmarks
5. **CTA Blok**: "Ook een [categorie]?" met offerte en bel knoppen
6. **Sidebar**: Projectgegevens kaart + andere projecten

Deze structuur blijft behouden, alleen de routing en hoogte worden gefixed.

## Bestanden die worden aangepast

| Bestand | Type wijziging |
|---------|----------------|
| src/App.tsx | Route pad aanpassen |
| src/pages/Projecten.tsx | Link pad aanpassen |
| src/pages/ProjectDetail.tsx | Canonical URL, hero hoogte, sidebar links |

## Resultaat

Na deze wijzigingen:
- Beide projectpagina's laden correct via `/projecten/dakrenovatie-enkhuizen` en `/projecten/dakisolatie-ursem`
- Fullscreen hero sectie op alle apparaten
- Alle navigatie tussen projecten werkt
- Content is duidelijk ingedeeld met CTA's die bezoekers aanzetten tot contact
