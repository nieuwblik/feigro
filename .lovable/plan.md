
# Plan: Fix Hono Routing 404 Error in Edge Function

## Probleem
De `send-form-email` edge function retourneert een 404 error omdat de Hono router niet correct is geconfigureerd voor Supabase. Wanneer de frontend `/send-form-email/contact` aanroept, ontvangt Hono het volledige pad maar verwacht alleen `/contact`.

## Oorzaak
Supabase Edge Functions geven het volledige pad (inclusief functienaam) door aan de handler. Hono's routes zijn gedefinieerd als `/contact` en `/spoed`, maar de binnenkomende requests hebben het pad `/send-form-email/contact` en `/send-form-email/spoed`.

## Oplossing
Voeg een `basePath` toe aan de Hono app zodat routes correct matchen met de volledige paden.

---

## Technische Wijzigingen

### Bestand: `supabase/functions/send-form-email/index.ts`

**Huidige code (regel 5):**
```typescript
const app = new Hono();
```

**Nieuwe code:**
```typescript
const app = new Hono().basePath("/send-form-email");
```

Dit zorgt ervoor dat:
- `POST /send-form-email/contact` matched met `app.post("/contact", ...)`
- `POST /send-form-email/spoed` matched met `app.post("/spoed", ...)`
- `OPTIONS /send-form-email/*` matched met `app.options("*", ...)`

---

## Verwacht Resultaat

| Request Pad | Huidige Gedrag | Na Fix |
|-------------|----------------|--------|
| POST /send-form-email/contact | 404 Not Found | 200 OK (email verzonden) |
| POST /send-form-email/spoed | 404 Not Found | 200 OK (email verzonden) |
| OPTIONS /send-form-email/contact | 404 Not Found | 200 OK (CORS headers) |

---

## Bestanden die worden aangepast

1. `supabase/functions/send-form-email/index.ts` - Voeg basePath toe aan Hono configuratie

## Na Implementatie
- Edge function wordt automatisch opnieuw gedeployed
- Test het contactformulier om te verifiëren dat de 404 is opgelost
