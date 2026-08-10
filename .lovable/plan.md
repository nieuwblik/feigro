# SEO-optimalisatie Feigro: meta's, alt-teksten, schema en LLM-vindbaarheid

Doel: elke bestaande pagina volledig geoptimaliseerd voor Google, Bing/Yahoo en AI-zoekmachines, gericht op dakdekker-zoekwoorden in Noord-Holland, Flevoland en Utrecht. Geen nieuwe plaatspagina's.

## Wat er nu al goed staat
- Elke pagina gebruikt de centrale SEO-component (titel, description, canonical, OG, Twitter).
- Titels zijn al onder 60 tekens en niet dubbel gebrand.
- Alle 27 afbeeldingen hebben een `alt`-attribuut.
- Er bestaat al RoofingContractor-, FAQ-, Organization- en breadcrumb-structured-data.

## Wat er ontbreekt en wordt aangepakt

### 1. Meta-titels en beschrijvingen per pagina
- Alle beschrijvingen herschrijven volgens één vaste structuur: dienst + regio + onderscheidend voordeel + call-to-action, 140-158 tekens.
- Zoekwoorden verwerken die klanten echt intypen ("dakdekker Enkhuizen", "plat dak lekkage spoed", "dakdekker West-Friesland", "dakdekker Almere", "24/7 noodreparatie dak").
- Ontbrekende pagina's toevoegen aan de metadata-set: Cookies (noindex-waardig), 404 (noindex), Projectdetail en Nieuwsdetail krijgen dynamische, unieke beschrijvingen per project/artikel in plaats van een generieke.
- Verouderde metadata-entries voor niet-bestaande routes (dakinspectie, dakbedekking-vervangen, bitumen, epdm) opruimen of koppelen aan de bestaande dienstpagina waar de inhoud in opgegaan is.

### 2. Alt-teksten
- Generieke en lege alt-teksten vervangen door beschrijvend, zoekwoordrelevant Nederlands, o.a.:
  - `alt="Projecten"`, `alt="Wie wij zijn"`, `alt="Vakmanschap"`, `alt="Contact"`, `alt="Feigro Project"`, `alt="Modern Roofing"`, lege alt op Nieuws.
- Regel: type dakwerk + locatie/context ("Vernieuwde EPDM dakbedekking op plat dak in Enkhuizen").
- Puur decoratieve achtergronden krijgen bewust `alt=""` plus `aria-hidden`, zodat ze geen ruis geven.

### 3. Structured data uitbreiden
- Bedrijfsgegevens compleet maken met het echte adres: Kruitmolen 28c, 1601 MC Enkhuizen (straat en postcode ontbreken nu). KvK toevoegen zodra het nummer bekend is.
- RoofingContractor-schema sitewide plaatsen (nu alleen bij de reviews-sectie), met `areaServed` uitgesplitst naar de kernplaatsen in de drie provincies en met openingstijden inclusief 24/7 spoedvermelding.
- Per dienstpagina een `Service`-schema met provider, gebied en dienstomschrijving.
- FAQ-schema op elke dienstpagina die een FAQ heeft; waar geen FAQ staat, 4-6 echte klantvragen toevoegen (belangrijk voor AI-antwoorden en Google-rijke resultaten).
- Breadcrumb-schema consequent op alle subpagina's.

### 4. Vindbaarheid in LLM's (ChatGPT, Perplexity, Gemini, Copilot)
- `public/llms.txt` toevoegen: compacte, feitelijke samenvatting van diensten, werkgebied, contactgegevens en links per pagina.
- Op elke dienstpagina een kort, feitelijk antwoordblok ("In het kort") dat AI-modellen makkelijk kunnen citeren.
- Robots.txt expliciet toegang geven aan AI-crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) en de sitemap-verwijzing controleren.

### 5. Interne links en koppen
- Elke dienstpagina krijgt contextuele links naar 2-3 verwante diensten en naar spoedservice/contact met beschrijvende ankerteksten in plaats van "lees meer".
- Koppenstructuur nalopen: exact één H1 per pagina met het hoofdzoekwoord, H2's met bijbehorende zoekvarianten.

### 6. Sitemap en indexatie
- Sitemap synchroniseren met de daadwerkelijke routes, inclusief alle project- en nieuwsdetailpagina's.
- Cookies en 404 op noindex zetten.
- Na oplevering: Bing Webmaster Tools en Google Search Console verificatie (aanleveren van verificatietag kan ik inbouwen zodra jij de code hebt).

## Technische details
- Meta's blijven centraal in `src/data/seo-metadata.ts` en gaan via `src/components/SEO.tsx` (React Helmet); geen hardgecodeerde tags in `index.html`.
- Schema-uitbreidingen in `src/lib/structured-data.ts` en `src/types/seo.ts`, gecombineerd via de bestaande `combineSchemas`-helper.
- Detailpagina's (`ProjectDetail.tsx`, `BlogDetail.tsx`) krijgen metadata afgeleid uit de project-/artikeldata.
- Nieuwe bestanden: `public/llms.txt`; aanpassingen in `public/robots.txt` en de sitemap.

## Buiten dit plan
- Google Bedrijfsprofiel (loopt in verificatie) en externe linkbuilding: bepalen samen met de on-page basis de lokale ranking, maar gebeuren buiten de site.
- Plaats-specifieke landingspagina's zijn bewust niet meegenomen; dit is wel de sterkste vervolgstap voor #1-posities per stad.
