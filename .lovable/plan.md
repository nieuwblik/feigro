
# Plan: Zod Schema Validation voor Formulieren

## Overzicht
Voeg robuuste Zod schema validatie toe aan het contactformulier en verbeter de server-side validatie in de edge function. Het lekkageformulier heeft al Zod validatie en blijft ongewijzigd.

---

## Wijzigingen

### 1. Contact Formulier Refactoren
**Bestand:** `src/pages/Contact.tsx`

Herschrijf het contactformulier om dezelfde pattern te gebruiken als het lekkageformulier:

- **Voeg imports toe:**
  - `useForm` van react-hook-form
  - `zodResolver` van @hookform/resolvers/zod
  - Zod (`z` van 'zod')
  - Form componenten uit `@/components/ui/form`

- **Definieer Zod schema:**
  ```typescript
  const contactFormSchema = z.object({
    name: z.string()
      .min(1, 'Naam is verplicht')
      .max(100, 'Naam mag maximaal 100 karakters zijn'),
    email: z.string()
      .min(1, 'E-mail is verplicht')
      .email('Ongeldig e-mailadres')
      .max(255, 'E-mail mag maximaal 255 karakters zijn'),
    phone: z.string()
      .regex(/^[0-9+-\s]*$/, 'Ongeldig telefoonnummer')
      .max(20, 'Telefoonnummer te lang')
      .optional()
      .or(z.literal('')),
    subject: z.string()
      .max(200, 'Onderwerp mag maximaal 200 karakters zijn')
      .optional()
      .or(z.literal('')),
    message: z.string()
      .min(1, 'Bericht is verplicht')
      .max(5000, 'Bericht mag maximaal 5000 karakters zijn'),
  });
  ```

- **Vervang useState met useForm:**
  - Gebruik `useForm` met `zodResolver(contactFormSchema)`
  - Definieer default values
  - Gebruik `form.handleSubmit()` in plaats van manuele validatie

- **Vervang input velden met FormField componenten:**
  - Gebruik `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`
  - Behoud exact dezelfde styling als nu

### 2. Centraliseer Schema's (Optioneel maar aanbevolen)
**Nieuw bestand:** `src/lib/schemas/forms.ts`

Maak een centrale locatie voor alle form schemas:

```typescript
import { z } from 'zod';

export const contactFormSchema = z.object({...});
export const lekkageFormSchema = z.object({...});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LekkageFormData = z.infer<typeof lekkageFormSchema>;
```

Dit voorkomt duplicatie tussen frontend en backend validatie.

### 3. Edge Function Server-Side Validatie
**Bestand:** `supabase/functions/send-form-email/index.ts`

Voeg Zod validatie toe aan de edge function voor extra beveiliging:

- **Importeer Zod** (compatible met Deno via esm.sh)
- **Definieer schemas** voor beide endpoints
- **Vervang handmatige checks** met `schema.safeParse(body)`
- **Return gedetailleerde errors** met juiste veldnamen

---

## Technische Details

### Dependencies
Alle benodigde packages zijn al geinstalleerd:
- `zod` - v3.25.76
- `react-hook-form` - v7.61.1
- `@hookform/resolvers` - v3.10.0

### Validatie Regels

| Veld | Contact | Lekkage |
|------|---------|---------|
| naam | Verplicht, max 100 chars | Verplicht |
| email | Verplicht, valid format, max 255 | Verplicht, valid format |
| telefoon | Optioneel, geldig format | Verplicht, regex check |
| bericht | Verplicht, max 5000 chars | Optioneel |

### Error Handling
- Client-side: Inline error berichten onder elk veld
- Server-side: JSON response met specifieke foutmeldingen
- Beide validaties blokkeren submission bij fouten

---

## Bestanden die worden aangepast

1. `src/pages/Contact.tsx` - Volledige refactor naar react-hook-form + Zod
2. `src/lib/schemas/forms.ts` - Nieuw: centrale schema definities  
3. `supabase/functions/send-form-email/index.ts` - Toevoegen Zod server-side validatie
