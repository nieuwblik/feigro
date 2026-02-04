import { useState, useEffect, useCallback } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentData {
  version: string;
  timestamp: string;
  preferences: CookiePreferences;
}

const STORAGE_KEY = 'feigro_cookie_consent';
const CONSENT_VERSION = '1.0';

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function useCookieConsent() {
  const [hasConsented, setHasConsented] = useState<boolean>(true); // Default to true to prevent flash
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
      try {
        const data: CookieConsentData = JSON.parse(stored);
        // Check if version matches, if not, show popup again
        if (data.version === CONSENT_VERSION) {
          setPreferences(data.preferences);
          setHasConsented(true);
        } else {
          setHasConsented(false);
        }
      } catch {
        setHasConsented(false);
      }
    } else {
      setHasConsented(false);
    }
    
    setIsLoaded(true);
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    const data: CookieConsentData = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setPreferences(prefs);
    setHasConsented(true);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  }, [saveConsent]);

  const acceptNecessaryOnly = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  }, [saveConsent]);

  const savePreferences = useCallback((prefs: Partial<CookiePreferences>) => {
    saveConsent({
      ...preferences,
      ...prefs,
      necessary: true, // Always required
    });
  }, [preferences, saveConsent]);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setPreferences(defaultPreferences);
    setHasConsented(false);
  }, []);

  return {
    hasConsented,
    preferences,
    isLoaded,
    acceptAll,
    acceptNecessaryOnly,
    savePreferences,
    resetConsent,
  };
}
