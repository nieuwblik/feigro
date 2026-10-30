# SEO-analyse en verbeterplan Feigro

## Analyse (huidige stand, gecontroleerd op de server-uitvoer)

Goed op orde:
- Alle pagina's worden volledig op de server opgebouwd: zoekmachines en AI-bots zien direct de echte tekst.
- Elke pagina heeft één unieke titel, omschrijving, één H1 en een canonical naar zichzelf op feigro.nl.
- Bedrijfsgegevens (adres, telefoon, openingstijden, werkgebied), kruimelpaden en veelgestelde vragen zijn machineleesbaar.
- Sitemap (24 pagina's) is aangemeld en foutloos in Google Search Console; robots.txt en llms.txt laten Google, Bing en AI-bots toe.
- Alle afbeeldingen hebben een alt-tekst.

Wat ontbreekt of beter kan:
1. **Geen lokale pagina's per plaats.** Zoekopdrachten als "dakdekker Hoorn" of "daklekkage Almere" hebben geen eigen landingspagina. Dit is de grootste kans om in Noord-Holland, Flevoland en Utrecht hoog te scoren.
2. **Geen aparte pagina's voor dakpannen en groene daken.** Feigro combineert groendakwerken en feitsmadakwerken, maar sedum/groen dak en pannendak hebben geen eigen pagina.
3. **Weinig nieuwsartikelen** (2). Te weinig vakinhoud om als expert gezien te worden door Google en AI-antwoorden.
4. **Interne links** tussen diensten, plaatsen en projecten zijn beperkt.
5. **Bing nog niet aangemeld** (Bing levert ook Yahoo en DuckDuckGo en voedt ChatGPT-zoeken).
6. **Snelheid op mobiel** niet recent gemeten na de overstap naar server-rendering.

## Verbeterplan

Fase 1 – Lokale vindbaarheid
- Pagina's `/dakdekker/{plaats}` voor de 13 plaatsen uit het werkgebied (Enkhuizen, Hoorn, Medemblik, Purmerend, Alkmaar, Zaanstad, Amsterdam, Almere, Lelystad, Dronten, Utrecht, Amersfoort, Nieuwegein), elk met unieke tekst, eigen titel/omschrijving, lokale veelgestelde vragen, nabije projecten en links naar diensten.
- Overzichtspagina `/werkgebied` die alle plaatsen bundelt, gekoppeld aan de bestaande werkgebiedkaart.

Fase 2 – Diensten aanvullen
- Nieuwe dienstpagina's: **Groen dak / sedumdak** en **Dakpannen (pannendak vervangen/repareren)**, in dezelfde opbouw als de bestaande diensten.

Fase 3 – Inhoud en interne links
- Blok "Gerelateerde diensten" en "Werkgebied" onder elke dienst; plaatsnamen in projecten linken naar de plaatspagina.
- Opzet voor 6 extra nieuwsartikelen (onderwerpen voorgesteld, tekst ter goedkeuring).

Fase 4 – Techniek en controle
- Sitemap, llms.txt en kruimelpaden automatisch aanvullen met de nieuwe pagina's.
- Snelheidsmeting (mobiel) en verbeteren waar nodig.
- Bing Webmaster Tools: instructie om via Search Console te importeren (2 minuten, door jou).
- Na publicatie: nieuwe sitemap opnieuw indienen in Search Console.

## Wat ik van jullie nodig heb
- Bevestiging van de plaatsenlijst (en of er plaatsen bij of af moeten).
- Echte informatie over groene daken en dakpannen (worden die uitgevoerd?), plus eventuele echte projecten per plaats. Ik verzin geen projecten of klantverhalen.

## Technische details
- Plaatspagina's via één dynamische route `src/routes/dakdekker/$plaats.tsx` met data in `src/data/locations.ts`; `head()` via `buildRouteHead` met Service + RoofingContractor (areaServed = plaats) + BreadcrumbList + FAQPage; onbekende slug → 404/noindex.
- Nieuwe diensten volgen het `ServicePageData`-patroon in `src/data/services.ts`.
- `scripts/generate-sitemap.mjs` leest `locations.ts` mee; test dat elke plaats een unieke titel en canonical heeft.
