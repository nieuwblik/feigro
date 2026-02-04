import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const app = new Hono();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Email template styles
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

function generateContactEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
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
        ${data.phone ? `
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Telefoon</td>
          <td style="${styles.tableValue}"><a href="tel:${escapeHtml(data.phone)}" style="color: #4CB26E; text-decoration: none;">${escapeHtml(data.phone)}</a></td>
        </tr>
        ` : ''}
        ${data.subject ? `
        <tr style="${styles.tableRow}">
          <td style="${styles.tableLabel}">Onderwerp</td>
          <td style="${styles.tableValue}">${escapeHtml(data.subject)}</td>
        </tr>
        ` : ''}
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

function generateSpoedEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  city: string;
  leakLocation: string;
  isUrgent: string;
  severity: string;
  buildingType: string;
  roofType: string;
  accessibility: string;
  description?: string;
  extraInfo?: string;
}) {
  const isUrgent = data.isUrgent === 'Ja';
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
      ${isUrgent ? `<div style="${styles.urgentBadge}">⚠️ SPOEDMELDING</div>` : ''}
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
          <td style="${styles.tableValue}"><strong style="color: ${data.severity === 'Het stroomt' ? '#dc2626' : '#f59e0b'};">${escapeHtml(data.severity)}</strong></td>
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

      ${data.description ? `
      <h3 style="${styles.sectionTitle}">Omschrijving</h3>
      <div style="${styles.messageBox}">
        <p style="${styles.messageText}">${escapeHtml(data.description)}</p>
      </div>
      ` : ''}

      ${data.extraInfo ? `
      <h3 style="${styles.sectionTitle}">Extra Informatie</h3>
      <div style="${styles.messageBox}">
        <p style="${styles.messageText}">${escapeHtml(data.extraInfo)}</p>
      </div>
      ` : ''}

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
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>');
}

// CORS preflight
app.options("*", (c) => {
  return c.text("ok", 200, corsHeaders);
});

// Contact form endpoint
app.post("/contact", async (c) => {
  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return c.json({ success: false, error: "Email service not configured" }, 500, corsHeaders);
    }

    const resend = new Resend(RESEND_API_KEY);
    const body = await c.req.json();

    // Validate required fields
    const { name, email, message, phone, subject } = body;
    if (!name || !email || !message) {
      return c.json({ success: false, error: "Naam, e-mail en bericht zijn verplicht" }, 400, corsHeaders);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ success: false, error: "Ongeldig e-mailadres" }, 400, corsHeaders);
    }

    // Validate message length
    if (message.length > 5000) {
      return c.json({ success: false, error: "Bericht is te lang (max 5000 karakters)" }, 400, corsHeaders);
    }

    console.log("Sending contact form email for:", name);

    const { data, error } = await resend.emails.send({
      from: "Feigro Dakwerken <info@feigro.nl>",
      to: ["info@feigro.nl"],
      reply_to: email,
      subject: `Nieuwe Aanvraag: ${name} via feigro.nl`,
      html: generateContactEmailHtml({ name, email, phone, subject, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return c.json({ success: false, error: "Kon e-mail niet verzenden" }, 500, corsHeaders);
    }

    console.log("Contact email sent successfully:", data?.id);
    return c.json({ success: true, messageId: data?.id }, 200, corsHeaders);
  } catch (error) {
    console.error("Error in contact endpoint:", error);
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

    // Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'address', 'postcode', 'city', 'leakLocation', 'isUrgent', 'severity', 'buildingType', 'roofType', 'accessibility'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return c.json({ success: false, error: `${field} is verplicht` }, 400, corsHeaders);
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return c.json({ success: false, error: "Ongeldig e-mailadres" }, 400, corsHeaders);
    }

    // Validate phone format
    const phoneRegex = /^[0-9+-\s]{10,}$/;
    if (!phoneRegex.test(body.phone)) {
      return c.json({ success: false, error: "Ongeldig telefoonnummer" }, 400, corsHeaders);
    }

    const isUrgent = body.isUrgent === 'Ja';
    console.log("Sending spoed form email for:", body.name, "Urgent:", isUrgent);

    const { data, error } = await resend.emails.send({
      from: "Feigro Dakwerken <info@feigro.nl>",
      to: ["service@feigro.nl"],
      reply_to: body.email,
      subject: isUrgent 
        ? `⚠️ SPOEDMELDING: Directe actie vereist - feigro.nl`
        : `Nieuwe Lekkagemelding: ${body.name} - feigro.nl`,
      html: generateSpoedEmailHtml(body),
    });

    if (error) {
      console.error("Resend error:", error);
      return c.json({ success: false, error: "Kon e-mail niet verzenden" }, 500, corsHeaders);
    }

    console.log("Spoed email sent successfully:", data?.id);
    return c.json({ success: true, messageId: data?.id }, 200, corsHeaders);
  } catch (error) {
    console.error("Error in spoed endpoint:", error);
    return c.json({ success: false, error: "Er is een fout opgetreden" }, 500, corsHeaders);
  }
});

Deno.serve(app.fetch);
