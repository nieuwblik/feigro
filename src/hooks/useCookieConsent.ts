import { useSyncExternalStore } from 'react';

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

interface ConsentSnapshot {
  hasConsented: boolean;
  preferences: CookiePreferences;
  isLoaded: boolean;
}

/**
 * Gedeelde toestand in plaats van useState per component.
 *
 * Elke aanroep van useCookieConsent() had eerst zijn eigen kopie van de keuze.
 * Daardoor wist de cookiebalk niets van een reset elders op de pagina, en bleef
 * de "terug naar boven"-knop na het accepteren op zijn verhoogde positie staan
 * tot de volgende navigatie. Met één module-brede snapshot zien alle
 * consumenten dezelfde waarde en updaten ze tegelijk.
 */
let snapshot: ConsentSnapshot = {
  // Standaard op true zodat de balk niet even opflitst voordat we localStorage
  // gelezen hebben, en zodat hij niet in de geprerenderde HTML terechtkomt.
  hasConsented: true,
  preferences: defaultPreferences,
  isLoaded: false,
};

const listeners = new Set<() => void>();
let hydrated = false;

function emit() {
  listeners.forEach(listener => listener());
}

function set(next: Partial<ConsentSnapshot>) {
  snapshot = { ...snapshot, ...next };
  emit();
}

function readStorage(): ConsentSnapshot {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { hasConsented: false, preferences: defaultPreferences, isLoaded: true };
    }

    const data: CookieConsentData = JSON.parse(stored);

    // Bij een nieuwe versie van het cookiebeleid opnieuw om toestemming vragen.
    if (data.version !== CONSENT_VERSION) {
      return { hasConsented: false, preferences: defaultPreferences, isLoaded: true };
    }

    return { hasConsented: true, preferences: data.preferences, isLoaded: true };
  } catch {
    return { hasConsented: false, preferences: defaultPreferences, isLoaded: true };
  }
}

function hydrate() {
  if (hydrated || typeof window === 'undefined') return;
  hydrated = true;

  set(readStorage());

  // Keuze in een ander tabblad meteen overnemen.
  window.addEventListener('storage', event => {
    if (event.key === STORAGE_KEY) set(readStorage());
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  hydrate();
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = () => snapshot;

// Tijdens prerendering bestaat localStorage niet; deze waarde zorgt dat de balk
// dan niet meegerenderd wordt.
const serverSnapshot: ConsentSnapshot = {
  hasConsented: true,
  preferences: defaultPreferences,
  isLoaded: false,
};
const getServerSnapshot = () => serverSnapshot;

function saveConsent(preferences: CookiePreferences) {
  const data: CookieConsentData = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    preferences,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Privémodus of geblokkeerde opslag: de keuze geldt dan voor deze sessie.
  }

  set({ preferences, hasConsented: true, isLoaded: true });
}

const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });

const acceptNecessaryOnly = () =>
  saveConsent({ necessary: true, analytics: false, marketing: false });

const savePreferences = (prefs: Partial<CookiePreferences>) =>
  saveConsent({ ...snapshot.preferences, ...prefs, necessary: true });

/**
 * Wist de opgeslagen keuze, waarna de cookiebalk direct weer verschijnt.
 * De AVG vereist dat toestemming net zo eenvoudig in te trekken is als te geven;
 * dit hangt onder de link "Cookievoorkeuren" in de footer.
 */
const resetConsent = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Zie saveConsent.
  }

  set({ preferences: defaultPreferences, hasConsented: false, isLoaded: true });
};

export function useCookieConsent() {
  const { hasConsented, preferences, isLoaded } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

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
