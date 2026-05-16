import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// ============= Rate Limiting =============

const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_PASSWORD_ATTEMPTS = 5;
const attemptLog = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (attemptLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW,
  );

  if (timestamps.length >= MAX_PASSWORD_ATTEMPTS) {
    attemptLog.set(ip, timestamps);
    return false;
  }

  timestamps.push(now);
  attemptLog.set(ip, timestamps);
  return true;
}

// ============= Signed Tokens (HMAC-SHA256) =============

const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

function base64UrlEncode(bytes: Uint8Array): string {
  let str = '';
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(str: string): Uint8Array {
  const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/') + pad;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function getSigningKey(): Promise<CryptoKey | null> {
  const secret = Deno.env.get('SITE_ACCESS_SIGNING_SECRET')
    || Deno.env.get('SITE_PASSWORD'); // fallback so existing deployments keep working
  if (!secret) return null;
  return await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

async function generateAccessToken(): Promise<string> {
  const key = await getSigningKey();
  if (!key) throw new Error('Signing key not configured');
  const timestamp = Date.now();
  const nonce = base64UrlEncode(crypto.getRandomValues(new Uint8Array(16)));
  const payload = `${timestamp}.${nonce}`;
  const sig = new Uint8Array(
    await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)),
  );
  return `${payload}.${base64UrlEncode(sig)}`;
}

async function isValidToken(token: string): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [timestampStr, nonce, sigB64] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (!Number.isFinite(timestamp)) return false;
  if (Date.now() - timestamp >= TOKEN_TTL_MS) return false;
  if (!nonce || nonce.length < 8) return false;

  const key = await getSigningKey();
  if (!key) return false;

  let providedSig: Uint8Array;
  try {
    providedSig = base64UrlDecode(sigB64);
  } catch {
    return false;
  }
  const expectedSig = new Uint8Array(
    await crypto.subtle.sign(
      'HMAC',
      key,
      new TextEncoder().encode(`${timestampStr}.${nonce}`),
    ),
  );
  return timingSafeEqual(providedSig, expectedSig);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const url = new URL(req.url);
  const path = url.pathname.split('/').pop();

  try {
    if (req.method === 'POST' && path === 'verify') {
      const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
      if (!checkRateLimit(clientIP)) {
        return new Response(
          JSON.stringify({ success: false, error: 'Too many attempts. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { password } = await req.json();

      if (!password || typeof password !== 'string') {
        return new Response(
          JSON.stringify({ success: false, error: 'Password is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const correctPassword = Deno.env.get('SITE_PASSWORD');

      if (!correctPassword) {
        console.error('SITE_PASSWORD environment variable not set');
        return new Response(
          JSON.stringify({ success: false, error: 'Server configuration error' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (password === correctPassword) {
        const token = await generateAccessToken();
        console.log('Site access granted');
        return new Response(
          JSON.stringify({ success: true, token }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log('Invalid password attempt');
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid password' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (req.method === 'POST' && path === 'validate-token') {
      const { token } = await req.json();

      if (!token || typeof token !== 'string') {
        return new Response(
          JSON.stringify({ valid: false }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const valid = await isValidToken(token);
      return new Response(
        JSON.stringify({ valid }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Not found' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
