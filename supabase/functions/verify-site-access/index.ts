import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const app = new Hono();

// Handle CORS preflight requests
app.options('*', (c) => {
  return new Response('ok', { headers: corsHeaders });
});

// Generate a simple access token (timestamp + random string)
function generateAccessToken(): string {
  const timestamp = Date.now();
  const random = crypto.randomUUID().replace(/-/g, '').substring(0, 16);
  return `${timestamp}_${random}`;
}

// Validate access token (tokens are valid for 24 hours)
function isValidToken(token: string): boolean {
  if (!token) return false;
  
  const parts = token.split('_');
  if (parts.length !== 2) return false;
  
  const timestamp = parseInt(parts[0], 10);
  if (isNaN(timestamp)) return false;
  
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  
  return (now - timestamp) < twentyFourHours;
}

app.post('/verify', async (c) => {
  try {
    const { password } = await c.req.json();
    
    if (!password || typeof password !== 'string') {
      return c.json(
        { success: false, error: 'Password is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const correctPassword = Deno.env.get('SITE_PASSWORD');
    
    if (!correctPassword) {
      console.error('SITE_PASSWORD environment variable not set');
      return c.json(
        { success: false, error: 'Server configuration error' },
        { status: 500, headers: corsHeaders }
      );
    }

    if (password === correctPassword) {
      const token = generateAccessToken();
      console.log('Site access granted');
      return c.json(
        { success: true, token },
        { headers: corsHeaders }
      );
    }

    console.log('Invalid password attempt');
    return c.json(
      { success: false, error: 'Invalid password' },
      { status: 401, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error verifying site access:', error);
    return c.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
});

app.post('/validate-token', async (c) => {
  try {
    const { token } = await c.req.json();
    
    if (!token || typeof token !== 'string') {
      return c.json(
        { valid: false },
        { headers: corsHeaders }
      );
    }

    const valid = isValidToken(token);
    return c.json(
      { valid },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error validating token:', error);
    return c.json(
      { valid: false },
      { headers: corsHeaders }
    );
  }
});

Deno.serve(app.fetch);
