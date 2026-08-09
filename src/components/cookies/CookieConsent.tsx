import { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';
import { Switch } from '@/components/ui/switch';

/**
 * Cookiebanner: een smalle balk onderaan de site.
 *
 * De vorige versie was een kaart van zo'n 500 pixels hoog die op desktop de
 * rechterkolom afdekte en op mobiel het hele scherm achter een backdrop zette.
 * Daardoor was een deel van de pagina niet te lezen of aan te klikken zolang er
 * geen keuze gemaakt was.
 *
 * Deze versie blijft binnen de onderrand, houdt de tekst tot één regel en zet de
 * categorieën pas uit als iemand op Instellingen klikt. Weigeren kost precies
 * evenveel klikken als accepteren; dat is niet alleen netjes maar ook wat de
 * AVG-toezichthouders van een cookiebanner verwachten.
 */

interface CategoryRowProps {
  title: string;
  description: string;
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  locked?: boolean;
}

function CategoryRow({ title, description, checked, onCheckedChange, locked }: CategoryRowProps) {
  return (
    <div className="py-3 md:py-0">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-xs uppercase tracking-wider text-slate-900">
            {title}
          </span>
          {locked && (
            <span className="text-[10px] uppercase tracking-wider text-slate-400">
              Altijd aan
            </span>
          )}
        </div>
        <Switch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={locked}
          aria-label={title}
          className="shrink-0 data-[state=checked]:bg-brand-green"
        />
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}

export function CookieConsent() {
  const { hasConsented, preferences, isLoaded, acceptAll, acceptNecessaryOnly, savePreferences } =
    useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);
  const reduceMotion = useReducedMotion();
  const titleId = useId();

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences]);

  // Niets tonen tot de opgeslagen keuze geladen is, anders flitst de balk even
  // in beeld bij bezoekers die al gekozen hebben.
  if (!isLoaded || hasConsented) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        initial={reduceMotion ? { opacity: 0 } : { y: '100%' }}
        animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { y: '100%' }}
        transition={reduceMotion ? { duration: 0.2 } : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="cookie-bar fixed inset-x-0 bottom-0 z-[60] flex flex-col border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="mx-auto flex w-full min-h-0 max-w-7xl flex-col px-4 py-3 md:px-6 md:py-5 [@media(max-height:600px)]:py-2">
          {/* Uitklapbare voorkeuren, boven de knoppen zodat de balk niet verspringt */}
          <AnimatePresence initial={false}>
            {showSettings && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                /*
                 * min-h-0 + overflow-y-auto: alleen dit paneel scrollt als de
                 * ruimte krap is. De toelichting en de knoppen eronder blijven
                 * daardoor altijd zichtbaar, ook op een liggende telefoon.
                 */
                className="min-h-0 overflow-y-auto"
              >
                <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-1 md:mb-4 md:px-5 md:py-4">
                  {/* Op mobiel onder elkaar met scheidingslijnen, op desktop drie
                      kolommen zodat elke schakelaar naast zijn eigen label staat
                      in plaats van aan de andere kant van het scherm. */}
                  <div className="divide-y divide-slate-200/70 md:grid md:grid-cols-3 md:gap-x-8 md:divide-y-0">
                    <CategoryRow
                      title="Noodzakelijk"
                      description="Nodig om de site te laten werken, bijvoorbeeld om uw cookiekeuze te onthouden."
                      checked
                      locked
                    />
                    <CategoryRow
                      title="Analytisch"
                      description="Anonieme statistieken over het gebruik van de site, zodat we hem kunnen verbeteren."
                      checked={localPrefs.analytics}
                      onCheckedChange={analytics => setLocalPrefs(prev => ({ ...prev, analytics }))}
                    />
                    <CategoryRow
                      title="Marketing"
                      description="Volgt uw bezoek om advertenties te tonen die aansluiten op uw interesses."
                      checked={localPrefs.marketing}
                      onCheckedChange={marketing => setLocalPrefs(prev => ({ ...prev, marketing }))}
                    />
                  </div>

                  {/* Opslaan hoort bij de schakelaars, niet bij de hoofdknoppen:
                      zo blijven Weigeren en Accepteren altijd op hun plek staan. */}
                  <div className="mt-1 flex justify-end border-t border-slate-200/70 pt-3 md:mt-4">
                    <button
                      type="button"
                      onClick={() => savePreferences(localPrefs)}
                      className="whitespace-nowrap rounded-xl border-2 border-slate-200 bg-white px-4 py-2 font-heading text-[11px] uppercase tracking-wider text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 sm:text-xs"
                    >
                      Voorkeuren opslaan
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex shrink-0 flex-col gap-3 md:gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {/* Toelichting */}
            <div className="flex items-start gap-3 lg:items-center">
              <span
                aria-hidden="true"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green sm:flex [@media(max-height:600px)]:sm:hidden"
              >
                <Cookie className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2
                  id={titleId}
                  className="font-heading text-[13px] uppercase tracking-tight text-slate-900 sm:text-sm"
                >
                  Cookies op deze site
                </h2>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  Analytische en marketingcookies gebruiken we alleen met uw toestemming.{' '}
                  <Link
                    to="/cookies"
                    className="font-medium text-brand-green underline underline-offset-2 hover:text-brand-green/80"
                  >
                    Meer over ons cookiebeleid
                  </Link>
                </p>
              </div>
            </div>

            {/*
              Acties. Weigeren en accepteren staan naast elkaar in dezelfde maat:
              even zichtbaar en even veel klikken, zoals de AVG voorschrijft.
              Instellingen staat eronder als tekstknop, want dat is de minst
              gekozen route.
            */}
            {/*
              Geen whitespace-nowrap op de twee hoofdknoppen: op een 320px-scherm
              past "Alleen noodzakelijk" niet op een regel en werd het label
              afgekapt. Nu breekt het netjes over twee regels, gecentreerd, en
              blijven beide knoppen even groot.
            */}
            <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 lg:flex lg:w-auto lg:items-center">
              <button
                type="button"
                onClick={() => setShowSettings(prev => !prev)}
                aria-expanded={showSettings}
                className="col-span-2 order-last min-w-0 whitespace-nowrap rounded-xl px-3 py-2 font-heading text-[11px] uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-900 sm:text-xs lg:order-first lg:col-span-1 lg:px-4 lg:py-3"
              >
                {showSettings ? 'Verbergen' : 'Instellingen'}
              </button>

              <button
                type="button"
                onClick={acceptNecessaryOnly}
                className="min-w-0 text-balance rounded-xl border-2 border-slate-200 px-2 py-2.5 text-center font-heading text-[10px] uppercase leading-tight tracking-wider text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 sm:px-5 sm:text-xs lg:whitespace-nowrap lg:py-3"
              >
                Alleen noodzakelijk
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="min-w-0 text-balance rounded-xl bg-brand-green px-2 py-2.5 text-center font-heading text-[10px] uppercase leading-tight tracking-wider text-feigro-dark transition-colors hover:bg-brand-green/90 sm:px-5 sm:text-xs lg:whitespace-nowrap lg:py-3"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
