# Feigro volledig vindbaar in Google, Bing/Yahoo en AI-zoekmachines

De on-page basis staat al: unieke titels en descriptions per pagina, structured data (Organization, WebSite, RoofingContractor met NAP, Service, BreadcrumbList), `llms.txt`, robots.txt met AI-crawlers en een gegenereerde sitemap. Wat nu ontbreekt is vooral: crawlers die geen JavaScript uitvoeren zien nog een lege pagina, en de site is nog nergens aangemeld.

## 1. Het grootste knelpunt: geen server-rendering

De site is een React-app die pas in de browser inhoud opbouwt. Googlebot voert JavaScript uit en ziet de pagina's dus wel, maar Bing (en daarmee Yahoo, dat Bing-resultaten gebruikt) doet dat maar beperkt, en de meeste AI-crawlers (GPTBot, PerplexityBot, ClaudeBot, social previews) helemaal niet. Die zien nu alleen de lege HTML-huls.

Twee routes, jij kiest:

- **A. Migreren naar Lovable's nieuwste template met server-rendering (aanbevolen)** — elke pagina levert dan volledige HTML inclusief tekst, meta-tags en JSON-LD, direct leesbaar voor Bing, Yahoo en alle LLM's. Dit is de enige echte oplossing. Zie [wat de upgrade oplevert](https://lovable.dev/blog/building-apps-using-tanstack-start).
- **B. Prerendering per route bij de build** — statische HTML-snapshots van alle vaste pagina's in de build meegeven. Minder ingrijpend, maar dynamische pagina's (nieuws, projecten) moeten dan bij elke build opnieuw gegenereerd worden.

De rest van dit plan werkt bij beide keuzes.

## 2. Aanmelden en verifiëren bij de zoekmachines

- Google Search Console: verificatiemeta-tag inbouwen zodra jij de code hebt, daarna sitemap indienen.
- Bing Webmaster Tools (dekt ook Yahoo): idem, met `BingSiteAuth.xml` of meta-tag.
- IndexNow-sleutel plaatsen in `public/` zodat Bing en Yandex nieuwe of gewijzigde pagina's direct opgepikt krijgen.
- Google Bedrijfsprofiel koppelen aan de site (zodra de verificatie rond is) — voor lokale zoekopdrachten "dakdekker bij mij in de buurt" is dit de zwaarste rankingfactor.

## 3. Sitemap en indexatie opschonen

- Sitemap opnieuw synchroniseren met de daadwerkelijke routes in `App.tsx`, inclusief `/projecten/:slug` en `/nieuws/:slug`.
- `lastmod` per pagina baseren op echte wijzigingsdata in plaats van één bulkdatum.
- `/cookies` en 404 op noindex houden en uit de sitemap laten.

## 4. Lokale landingspagina's: de weg naar positie 1

Voor "dakdekker Hoorn", "dakdekker Almere", "spoed dakdekker Alkmaar" enzovoort rankt een algemene regiopagina zelden bovenaan. Voorstel: een reeks plaatspagina's op `/dakdekker/{plaats}` met per plaats echte inhoud — werkgebied, uitgevoerde projecten in de buurt, reistijd, veelgestelde vragen, lokale schema-markup.

Startset (uit te breiden): Enkhuizen, Hoorn, Medemblik, Alkmaar, Zaanstad, Purmerend, Amsterdam, Almere, Lelystad, Utrecht, Amersfoort.

Voorwaarde: elke pagina krijgt unieke tekst en waar mogelijk een echt project. Ik verzin geen reviews, aantallen of claims — die lever jij aan of we laten ze weg.

## 5. Content die AI-zoekmachines citeren

- Per dienstpagina een kort feitelijk "In het kort"-antwoordblok en 4-6 echte klantvragen met antwoorden (FAQ-schema).
- `llms.txt` uitbreiden met de plaatspagina's en de dienstensamenvattingen.
- Nieuwsartikelen richten op vragen die mensen echt stellen ("wat kost een plat dak vervangen", "hoe lang gaat EPDM mee") — dit is de content die in AI-antwoorden en Google-featured snippets terechtkomt.

## 6. Techniek en meetbaarheid

- Zoekwoordonderzoek via Semrush om de plaats- en dienstpagina's op echte zoekvolumes te richten voordat we schrijven.
- Interne links: elke dienstpagina linkt naar 2-3 verwante diensten en de bijbehorende plaatspagina's met beschrijvende ankerteksten.
- Core Web Vitals bewaken na de SSR/prerender-wijziging.

## Wat ik niet vanaf hier kan regelen

Verificatiecodes van Search Console, Bing en het Bedrijfsprofiel moet jij aanleveren (ik bouw ze direct in). Externe linkbuilding, vermeldingen op branchesites en het verzamelen van Google-reviews gebeuren buiten de site, maar bepalen samen met dit plan of #1 haalbaar is.

## Volgorde van uitvoeren

1. Keuze SSR (A) of prerender (B) en uitvoeren
2. Sitemap opschonen + IndexNow + verificatietags
3. Zoekwoordonderzoek, daarna plaatspagina's
4. FAQ-blokken, llms.txt en interne links
5. Nieuwe artikelen op zoekvraag
