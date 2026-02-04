import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const STORAGE_KEY = 'feigro_site_access_token';

interface PasswordGateProps {
  children: React.ReactNode;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const validateStoredToken = async () => {
      const storedToken = localStorage.getItem(STORAGE_KEY);
      
      if (!storedToken) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('verify-site-access/validate-token', {
          body: { token: storedToken }
        });

        if (error || !data?.valid) {
          localStorage.removeItem(STORAGE_KEY);
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Token validation error:', err);
        localStorage.removeItem(STORAGE_KEY);
        setIsAuthenticated(false);
      }
    };

    validateStoredToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      const { data, error: invokeError } = await supabase.functions.invoke('verify-site-access/verify', {
        body: { password }
      });

      if (invokeError || !data?.success) {
        setError(true);
        setPassword('');
      } else {
        localStorage.setItem(STORAGE_KEY, data.token);
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError(true);
      setPassword('');
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-feigro-dark flex items-center justify-center">
        <div className="animate-pulse">
          <img 
            src="/images/feigro-logo-wit.png" 
            alt="Feigro" 
            className="h-12 opacity-50"
          />
        </div>
      </div>
    );
  }

  // Authenticated - show the site
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Not authenticated - show password screen
  return (
    <div className="min-h-screen bg-feigro-dark flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            src="/images/feigro-logo-wit.png" 
            alt="Feigro Dakwerken" 
            className="h-16 md:h-20"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-green focus:ring-brand-green ${
                error ? 'border-red-500 animate-shake' : ''
              }`}
              autoFocus
              disabled={isLoading}
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">
              Verkeerd wachtwoord. Probeer opnieuw.
            </p>
          )}

          <Button
            type="submit"
            variant="feigro"
            className="w-full h-12"
            disabled={isLoading}
          >
            {isLoading ? 'Controleren...' : 'Toegang'}
          </Button>
        </form>

        {/* Subtle footer */}
        <p className="text-center text-gray-500 text-xs">
          Website in ontwikkeling
        </p>
      </div>
    </div>
  );
};
