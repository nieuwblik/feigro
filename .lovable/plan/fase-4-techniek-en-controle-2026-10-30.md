# Fase 4 – Techniek en controle

Alleen deze fase wordt nu uitgevoerd; lokale pagina's, nieuwe diensten en extra inhoud (fase 1–3) komen later.

## Stappen
1. **Sitemap, llms.txt en kruimelpaden controleren** – nagaan dat alle 24 bestaande pagina's erin staan, kloppen met de echte pagina's en naar feigro.nl wijzen; ontbrekende of verouderde regels rechtzetten.
2. **Snelheid op mobiel meten** – de homepage en een paar dienstpagina's meten (laadtijd, grootste afbeelding, verschuivende onderdelen) en verbeteren waar het knelt, zoals te grote foto's of trage lettertypes.
3. **Bing aanmelden** – Bing Webmaster Tools koppelen (dat levert ook Yahoo, DuckDuckGo en ChatGPT-zoeken) en de sitemap daar indienen. Lukt de koppeling vanuit hier niet, dan krijg je een korte instructie om het via Google Search Console te importeren.
4. **Sitemap opnieuw indienen bij Google** – na publicatie de sitemap opnieuw aanbieden in Search Console en de status van de homepage in Google's index uitlezen.

## Technische details
- Sitemap via `scripts/generate-sitemap.mjs`; vergelijken met `src/routes/` en `public/llms.txt`.
- Mobiele meting met Playwright (mobiel scherm, vertraagde verbinding), daarna gerichte fixes.
- Bing via de Bing Webmaster Tools-koppeling (`SubmitFeed` voor de sitemap); Google via de bestaande Search Console-koppeling (`sc-domain:feigro.nl`).
