import { createFileRoute, redirect } from "@tanstack/react-router";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/lib/business-profile";

/**
 * Korte, deelbare URL naar het reviewformulier van het Google Bedrijfsprofiel.
 *
 * Bestaat omdat de review-knoppen alleen onderaan de homepage staan: feigro.nl/review
 * is wel per WhatsApp, mail of op een factuur te delen. De redirect gebeurt tijdens
 * beforeLoad, dus bij SSR verlaat er een echte HTTP-redirect de server en hoeft de
 * bezoeker geen pagina te zien die daarna pas doorstuurt.
 *
 * Bewust een tijdelijke redirect: de bestemming is een Google-URL die kan wijzigen,
 * en /review hoort van ons te blijven. Staat om dezelfde reden niet in de sitemap
 * (zie EXCLUDED in scripts/generate-sitemap.mjs).
 */
export const Route = createFileRoute("/review")({
  beforeLoad: () => {
    throw redirect({ href: GOOGLE_BUSINESS_PROFILE_URL, statusCode: 302 });
  },
});
