
# Plan: Implement Image Attachments for Leakage Form Emails

## Probleem Analyse
De lekkageformulier heeft een foto-upload functie, maar de bestanden worden niet meegestuurd naar de edge function. De `files` state wordt wel gevuld in de UI, maar wordt genegeerd bij het verzenden van het formulier.

### Huidige Situatie
- **LekkageForm.tsx regel 56**: `const [files, setFiles] = useState<FileList | null>(null);`
- **LekkageForm.tsx regels 414-440**: File input veld dat bestanden opslaat in lokale state
- **LekkageForm.tsx regels 77-94**: De `onSubmit` functie stuurt ALLEEN tekstvelden, geen bestanden
- **Edge Function**: Geen ondersteuning voor bijlagen

---

## Oplossing Overzicht

```text
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│   LekkageForm.tsx   │     │   Edge Function     │     │   Resend Email      │
│                     │     │                     │     │                     │
│  1. User uploads    │────>│  2. Receive base64  │────>│  3. Send email      │
│     images          │     │     attachments     │     │     with images     │
│                     │     │                     │     │                     │
│  Convert to base64  │     │  Decode & attach    │     │  Display inline or  │
│  before sending     │     │  to email           │     │  as attachments     │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

---

## Technische Wijzigingen

### 1. Frontend: LekkageForm.tsx

**Nieuwe helper functie toevoegen** - Converteer FileList naar base64 array:

```typescript
async function filesToBase64(files: FileList): Promise<Array<{
  filename: string;
  content: string;
  contentType: string;
}>> {
  const promises = Array.from(files).map(async (file) => {
    return new Promise<{filename: string; content: string; contentType: string}>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1]; // Remove data:image/...;base64, prefix
        resolve({
          filename: file.name,
          content: base64,
          contentType: file.type || 'application/octet-stream',
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });
  return Promise.all(promises);
}
```

**Update onSubmit functie** - Voeg bestanden toe aan request body:

```typescript
async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsSubmitting(true);

  try {
    // Convert files to base64 if present
    let attachments: Array<{filename: string; content: string; contentType: string}> = [];
    if (files && files.length > 0) {
      attachments = await filesToBase64(files);
    }

    const { data, error } = await supabase.functions.invoke('send-form-email/spoed', {
      body: {
        // ... existing fields ...
        attachments: attachments.length > 0 ? attachments : undefined,
      }
    });
    // ... rest of function
  }
}
```

---

### 2. Backend: Edge Function (send-form-email/index.ts)

**Update Zod schema** - Voeg attachments field toe:

```typescript
const attachmentSchema = z.object({
  filename: z.string(),
  content: z.string(), // base64 encoded
  contentType: z.string(),
});

const spoedFormSchema = z.object({
  // ... existing fields ...
  attachments: z.array(attachmentSchema).optional(),
});
```

**Update email verzending** - Voeg attachments toe aan Resend:

```typescript
const { data: emailData, error } = await resend.emails.send({
  from: "Feigro Dakwerken <info@feigro.nl>",
  to: ["justin@nieuwblik.com", "kento@hado.dev"],
  reply_to: data.email,
  subject: isUrgent
    ? `⚠️ SPOEDMELDING: Directe actie vereist - feigro.nl`
    : `Nieuwe Lekkagemelding: ${data.name} - feigro.nl`,
  html: generateSpoedEmailHtml(data),
  attachments: data.attachments?.map((att) => ({
    filename: att.filename,
    content: att.content, // Resend accepts base64 directly
    content_type: att.contentType,
  })),
});
```

---

### 3. Email Template Update (Optioneel)

Voeg een sectie toe aan de email die aangeeft hoeveel foto's zijn bijgevoegd:

```typescript
${data.attachments && data.attachments.length > 0 ? `
<h3 style="${styles.sectionTitle}">Bijgevoegde Foto's</h3>
<div style="${styles.messageBox}">
  <p style="${styles.messageText}">
    📷 ${data.attachments.length} foto('s) bijgevoegd aan deze e-mail
  </p>
</div>
` : ''}
```

---

## Beperkingen & Overwegingen

| Aspect | Limiet/Opmerking |
|--------|------------------|
| Bestandsgrootte | Resend: max 40MB totaal per email |
| Bestandstypes | Alleen images (`accept="image/*"`) |
| Aantal bestanden | Geen harde limiet, maar praktisch ~10 |
| Edge Function timeout | Grote bestanden kunnen timeout veroorzaken |

### Aanbevolen bestandsgrootte limiet
Voeg frontend validatie toe om bestanden groter dan 5MB per stuk te weigeren:

```typescript
onChange={(e) => {
  const files = e.target.files;
  if (files) {
    const oversizedFiles = Array.from(files).filter(f => f.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast.error('Bestanden mogen niet groter zijn dan 5MB');
      return;
    }
    setFiles(files);
  }
}}
```

---

## Bestanden die worden aangepast

1. **`src/components/forms/LekkageForm.tsx`**
   - Voeg `filesToBase64` helper functie toe
   - Update `onSubmit` om bestanden mee te sturen
   - Voeg bestandsgrootte validatie toe

2. **`supabase/functions/send-form-email/index.ts`**
   - Update `spoedFormSchema` met attachments field
   - Update `/spoed` endpoint om attachments naar Resend te sturen
   - Update email template om bijlagen te vermelden

---

## Na Implementatie

1. Test het formulier met kleine afbeeldingen (< 1MB)
2. Test met meerdere afbeeldingen
3. Controleer of de afbeeldingen correct in de email verschijnen
4. Test de foutmelding bij te grote bestanden
