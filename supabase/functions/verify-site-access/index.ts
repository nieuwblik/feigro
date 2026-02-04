import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

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

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const url = new URL(req.url);
  const path = url.pathname.split('/').pop();

  try {
    if (req.method === 'POST' && path === 'verify') {
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
        const token = generateAccessToken();
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

      const valid = isValidToken(token);
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
