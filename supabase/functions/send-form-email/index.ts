import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://esm.sh/zod@3.23.8";

const app = new Hono().basePath("/send-form-email");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ============= Zod Schemas =============

const contactFormSchema = z.object({
  name: z.string()
    .min(1, "Naam is verplicht")
    .max(100, "Naam mag maximaal 100 karakters zijn"),
  email: z.string()
    .min(1, "E-mail is verplicht")
    .email("Ongeldig e-mailadres")
    .max(255, "E-mail mag maximaal 255 karakters zijn"),
  phone: z.string()
    .regex(/^[0-9+\-\s]*$/, "Ongeldig telefoonnummer")
    .max(20, "Telefoonnummer te lang")
    .optional()
    .or(z.literal("")),
  subject: z.string()
    .max(200, "Onderwerp mag maximaal 200 karakters zijn")
    .optional()
    .or(z.literal("")),
  message: z.string()
    .min(1, "Bericht is verplicht")
    .max(5000, "Bericht mag maximaal 5000 karakters zijn"),
});

const spoedFormSchema = z.object({
  name: z.string()
    .min(1, "Naam is verplicht")
    .max(100, "Naam mag maximaal 100 karakters zijn"),
  phone: z.string()
    .min(10, "Telefoonnummer is te kort")
    .max(20, "Telefoonnummer is te lang")
    .regex(/^[0-9+\-\s]+$/, "Ongeldig telefoonnummer"),
  email: z.string()
    .min(1, "E-mail is verplicht")
    .email("Ongeldig e-mailadres")
    .max(255, "E-mail mag maximaal 255 karakters zijn"),
  address: z.string()
    .min(1, "Adres is verplicht")
    .max(200, "Adres mag maximaal 200 karakters zijn"),
  postcode: z.string()
    .min(1, "Postcode is verplicht")
    .max(10, "Postcode mag maximaal 10 karakters zijn"),
  city: z.string()
    .min(1, "Plaats is verplicht")
    .max(100, "Plaats mag maximaal 100 karakters zijn"),
  leakLocation: z.string()
    .min(1, "Locatie lekkage is verplicht"),
  isUrgent: z.string()
    .min(1, "Urgentie is verplicht"),
  severity: z.string()
    .min(1, "Ernst is verplicht"),
  buildingType: z.string()
    .min(1, "Type gebouw is verplicht"),
  roofType: z.string()
    .min(1, "Type dak is verplicht"),
  accessibility: z.string()
    .min(1, "Bereikbaarheid is verplicht"),
  description: z.string()
    .max(5000, "Omschrijving mag maximaal 5000 karakters zijn")
    .optional()
    .or(z.literal("")),
  extraInfo: z.string()
    .max(5000, "Extra informatie mag maximaal 5000 karakters zijn")
    .optional()
    .or(z.literal("")),
});

// ============= Email Template Styles =============

const styles = {
  container: `
    font-family: 'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
  `,
  header: `
    background-color: #2E383F;
    padding: 32px;
    text-align: center;
  `,
  headerTitle: `
    color: #4CB26E;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  `,
  body: `
    padding: 32px;
    background-color: #ffffff;
  `,
  urgentBadge: `
    display: inline-block;
    background-color: #dc2626;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  sectionTitle: `
    color: #4CB26E;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 24px 0 16px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #4CB26E;
  `,
  table: `
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
  `,
  tableRow: `
    border-bottom: 1px solid #e2e8f0;
  `,
  tableLabel: `
    padding: 12px 0;
    color: #64748b;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: 40%;
    vertical-align: top;
  `,
  tableValue: `
    padding: 12px 0;
    color: #1e293b;
    font-size: 15px;
    font-weight: 500;
  `,
  messageBox: `
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    margin: 16px 0;
  `,
  messageText: `
    color: #334155;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    white-space: pre-wrap;
  `,
  ctaButton: `
    display: inline-block;
    background-color: #4CB26E;
    color: #1e293b;
    padding: 16px 32px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 24px;
  `,
  footer: `
    background-color: #f8fafc;
    padding: 24px 32px;
    text-align: center;
    border-top: 1px solid #e2e8f0;
  `,
  footerText: `
    color: #64748b;
    font-size: 12px;
    margin: 0;
  `,
};

// ============= Email Template Generators =============

function generateContactEmailHtml(data: z.infer<typeof contactFormSchema>) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9;">
  <div style="${styles.container}">
    <div style="${styles.header}">
      <h1 style="${styles.headerTitle}">FEIGRO DAKWERKEN</h1>
    </div>
    <div style="${styles.body}">
      <h2 style="color: #1e293b; font-size: 20px; margin: 0 0 8px 0;">Nieuwe Contactaanvraag</h2>
      <p style="color: #64748b; font-size: 14px; margin: 0 0 24px 0;">Via feigro.nl contactformulier</p>
      
      <h3 style="${styles.sectionTitle}">Klantgegevens</h3>
      <table style="${styles.table}">
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Naam</td>
          <td style="${styles.tableValue}">${escapeHtml(data.name)}</td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">E-mail</td>
          <td style="${styles.tableValue}"><a href="mailto:${escapeHtml(data.email)}" style="color: #4CB26E; text-decoration: none;">${escapeHtml(data.email)}</a></td>
        </tr>
        ${
          data.phone
            ? `
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Telefoon</td>
          <td style="${styles.tableValue}"><a href="tel:${escapeHtml(data.phone)}" style="color: #4CB26E; text-decoration: none;">${escapeHtml(data.phone)}</a></td>
        </tr>
        `
            : ""
        }
        ${
          data.subject
            ? `
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Onderwerp</td>
          <td style="${styles.tableValue}">${escapeHtml(data.subject)}</td>
        </tr>
        `
            : ""
        }
      </table>

      <h3 style="${styles.sectionTitle}">Bericht</h3>
      <div style="${styles.messageBox}">
        <p style="${styles.messageText}">${escapeHtml(data.message)}</p>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${escapeHtml(data.email)}?subject=Re: Uw aanvraag bij Feigro Dakwerken" style="${styles.ctaButton}">
          Beantwoord aanvraag
        </a>
      </div>
    </div>
    <div style="${styles.footer}">
      <p style="${styles.footerText}">Dit bericht is automatisch verzonden via feigro.nl</p>
    </div>
  </div>
</body>
</html>
  `;
}

function generateSpoedEmailHtml(data: z.infer<typeof spoedFormSchema>) {
  const isUrgent = data.isUrgent === "Ja";
  const fullAddress = `${data.address}, ${data.postcode} ${data.city}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9;">
  <div style="${styles.container}">
    <div style="${styles.header}">
      <h1 style="${styles.headerTitle}">FEIGRO DAKWERKEN</h1>
    </div>
    <div style="${styles.body}">
      ${isUrgent ? `<div style="${styles.urgentBadge}">⚠️ SPOEDMELDING</div>` : ""}
      <h2 style="color: #1e293b; font-size: 20px; margin: 0 0 8px 0;">Nieuwe Lekkagemelding</h2>
      <p style="color: #64748b; font-size: 14px; margin: 0 0 24px 0;">Via feigro.nl spoedservice</p>
      
      <h3 style="${styles.sectionTitle}">Klantgegevens</h3>
      <table style="${styles.table}">
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Naam</td>
          <td style="${styles.tableValue}">${escapeHtml(data.name)}</td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Telefoon</td>
          <td style="${styles.tableValue}"><a href="tel:${escapeHtml(data.phone)}" style="color: #4CB26E; text-decoration: none; font-weight: 700;">${escapeHtml(data.phone)}</a></td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">E-mail</td>
          <td style="${styles.tableValue}"><a href="mailto:${escapeHtml(data.email)}" style="color: #4CB26E; text-decoration: none;">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Adres</td>
          <td style="${styles.tableValue}">${escapeHtml(fullAddress)}</td>
        </tr>
      </table>

      <h3 style="${styles.sectionTitle}">Details Lekkage</h3>
      <table style="${styles.table}">
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Locatie lekkage</td>
          <td style="${styles.tableValue}">${escapeHtml(data.leakLocation)}</td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Ernst</td>
          <td style="${styles.tableValue}"><strong style="color: ${data.severity === "Het stroomt" ? "#dc2626" : "#f59e0b"};">${escapeHtml(data.severity)}</strong></td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Type gebouw</td>
          <td style="${styles.tableValue}">${escapeHtml(data.buildingType)}</td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Type dak</td>
          <td style="${styles.tableValue}">${escapeHtml(data.roofType)}</td>
        </tr>
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Bereikbaarheid</td>
          <td style="${styles.tableValue}">${escapeHtml(data.accessibility)}</td>
        </tr>
      </table>

      ${
        data.description
          ? `
      <h3 style="${styles.sectionTitle}">Omschrijving</h3>
      <div style="${styles.messageBox}">
        <p style="${styles.messageText}">${escapeHtml(data.description)}</p>
      </div>
      `
          : ""
      }

      ${
        data.extraInfo
          ? `
      <h3 style="${styles.sectionTitle}">Extra Informatie</h3>
      <div style="${styles.messageBox}">
        <p style="${styles.messageText}">${escapeHtml(data.extraInfo)}</p>
      </div>
      `
          : ""
      }

      <div style="text-align: center; margin-top: 32px;">
        <a href="tel:${escapeHtml(data.phone)}" style="${styles.ctaButton}; margin-right: 12px;">
          📞 Bel klant direct
        </a>
        <a href="mailto:${escapeHtml(data.email)}?subject=Re: Uw spoedmelding bij Feigro Dakwerken" style="${styles.ctaButton}; background-color: #2E383F; color: white;">
          ✉️ Mail klant
        </a>
      </div>
    </div>
    <div style="${styles.footer}">
      <p style="${styles.footerText}">Dit bericht is automatisch verzonden via feigro.nl</p>
    </div>
  </div>
</body>
</html>
  `;
}

function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

// ============= Helper for Zod Errors =============

function formatZodErrors(error: z.ZodError): string {
  const messages = error.errors.map((e) => e.message);
  return messages.join(", ");
}

// ============= Routes =============

// CORS preflight
app.options("*", (c) => {
  return c.text("ok", 200, corsHeaders);
});

// Contact form endpoint
app.post("/contact", async (c) => {
  const requestId = crypto.randomUUID().slice(0, 8);
  console.log(`[${requestId}] === CONTACT FORM REQUEST STARTED ===`);
  console.log(`[${requestId}] Timestamp: ${new Date().toISOString()}`);
  
  try {
    // Check API key
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    console.log(`[${requestId}] RESEND_API_KEY configured: ${!!RESEND_API_KEY}`);
    
    if (!RESEND_API_KEY) {
      console.error(`[${requestId}] ERROR: RESEND_API_KEY not configured`);
      return c.json({ success: false, error: "Email service not configured" }, 500, corsHeaders);
    }

    const resend = new Resend(RESEND_API_KEY);
    
    // Parse request body
    let body;
    try {
      body = await c.req.json();
      console.log(`[${requestId}] Request body received:`, JSON.stringify({
        name: body.name || '[missing]',
        email: body.email || '[missing]',
        phone: body.phone ? '[provided]' : '[empty]',
        subject: body.subject ? '[provided]' : '[empty]',
        message: body.message ? `[${body.message.length} chars]` : '[missing]'
      }));
    } catch (parseError) {
      console.error(`[${requestId}] ERROR: Failed to parse JSON body:`, parseError);
      return c.json({ success: false, error: "Ongeldige request data" }, 400, corsHeaders);
    }

    // Validate with Zod
    console.log(`[${requestId}] Starting Zod validation...`);
    const parseResult = contactFormSchema.safeParse(body);
    
    if (!parseResult.success) {
      console.error(`[${requestId}] VALIDATION FAILED:`, JSON.stringify(parseResult.error.errors));
      return c.json(
        { success: false, error: formatZodErrors(parseResult.error) },
        400,
        corsHeaders
      );
    }
    console.log(`[${requestId}] Zod validation passed`);

    const data = parseResult.data;
    console.log(`[${requestId}] Preparing email for: ${data.name} <${data.email}>`);

    // Send email
    console.log(`[${requestId}] Calling Resend API...`);
    const emailPayload = {
      from: "Feigro Dakwerken <info@feigro.nl>",
      to: ["justin@nieuwblik.com", "kento@hado.dev"],
      reply_to: data.email,
      subject: `Nieuwe Aanvraag: ${data.name} via feigro.nl`,
    };
    console.log(`[${requestId}] Email payload:`, JSON.stringify(emailPayload));

    const { data: emailData, error } = await resend.emails.send({
      ...emailPayload,
      html: generateContactEmailHtml(data),
    });

    if (error) {
      console.error(`[${requestId}] RESEND API ERROR:`, JSON.stringify(error));
      return c.json({ success: false, error: "Kon e-mail niet verzenden" }, 500, corsHeaders);
    }

    console.log(`[${requestId}] SUCCESS: Email sent with ID: ${emailData?.id}`);
    console.log(`[${requestId}] === CONTACT FORM REQUEST COMPLETED ===`);
    return c.json({ success: true, messageId: emailData?.id }, 200, corsHeaders);
  } catch (error) {
    console.error(`[${requestId}] UNEXPECTED ERROR:`, error);
    console.error(`[${requestId}] Stack:`, error instanceof Error ? error.stack : 'N/A');
    return c.json({ success: false, error: "Er is een fout opgetreden" }, 500, corsHeaders);
  }
});

// Spoed/Lekkage form endpoint
app.post("/spoed", async (c) => {
  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return c.json({ success: false, error: "Email service not configured" }, 500, corsHeaders);
    }

    const resend = new Resend(RESEND_API_KEY);
    const body = await c.req.json();

    // Validate with Zod
    const parseResult = spoedFormSchema.safeParse(body);
    if (!parseResult.success) {
      console.error("Spoed form validation failed:", parseResult.error.errors);
      return c.json(
        { success: false, error: formatZodErrors(parseResult.error) },
        400,
        corsHeaders
      );
    }

    const data = parseResult.data;
    const isUrgent = data.isUrgent === "Ja";
    console.log("Sending spoed form email for:", data.name, "Urgent:", isUrgent);

    const { data: emailData, error } = await resend.emails.send({
      from: "Feigro Dakwerken <info@feigro.nl>",
      to: ["justin@nieuwblik.com", "kento@hado.dev"],
      reply_to: data.email,
      subject: isUrgent
        ? `⚠️ SPOEDMELDING: Directe actie vereist - feigro.nl`
        : `Nieuwe Lekkagemelding: ${data.name} - feigro.nl`,
      html: generateSpoedEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return c.json({ success: false, error: "Kon e-mail niet verzenden" }, 500, corsHeaders);
    }

    console.log("Spoed email sent successfully:", emailData?.id);
    return c.json({ success: true, messageId: emailData?.id }, 200, corsHeaders);
  } catch (error) {
    console.error("Error in spoed endpoint:", error);
    return c.json({ success: false, error: "Er is een fout opgetreden" }, 500, corsHeaders);
  }
});

Deno.serve(app.fetch);
