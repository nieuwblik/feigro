import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cookie, BarChart3, Megaphone, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface CookieCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onToggle?: (enabled: boolean) => void;
  required?: boolean;
  expanded?: boolean;
  onExpand?: () => void;
}

function CookieCategory({ 
  icon, 
  title, 
  description, 
  enabled, 
  onToggle, 
  required,
  expanded,
  onExpand
}: CookieCategoryProps) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onExpand}
      >
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
            enabled ? "bg-brand-green/10 text-brand-green" : "bg-slate-200 text-slate-500"
          )}>
            {icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-sm uppercase tracking-wide text-slate-900">
                {title}
              </span>
              {required && (
                <span className="text-[10px] uppercase tracking-wider bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full font-medium">
                  Vereist
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {expanded !== undefined && (
            <button className="text-slate-400 hover:text-slate-600 transition-colors p-1">
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
          <Switch
            checked={enabled}
            onCheckedChange={onToggle}
            disabled={required}
            className={cn(
              "data-[state=checked]:bg-brand-green",
              required && "opacity-100 cursor-not-allowed"
            )}
          />
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-600 mt-3 pl-[52px] leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CookieConsent() {
  const { hasConsented, preferences, isLoaded, acceptAll, savePreferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences]);

  // Don't render until loaded to prevent flash
  if (!isLoaded || hasConsented) {
    return null;
  }

  const handleSavePreferences = () => {
    savePreferences(localPrefs);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6 z-50 md:max-w-md"
      >
        {/* Backdrop for mobile */}
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10" />
        
        <div className="bg-white/95 backdrop-blur-lg border border-slate-200 md:rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-heading text-lg uppercase tracking-tight text-slate-900">
                    Privacy<span className="text-brand-green italic">voorkeuren</span>
                  </h3>
                  <p className="text-xs text-slate-500">FEIGRO respecteert uw privacy</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Wij gebruiken cookies om uw ervaring te verbeteren en onze website te optimaliseren. 
              U kunt uw voorkeuren hieronder aanpassen.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="px-6 space-y-3">
            <CookieCategory
              icon={<Cookie className="w-5 h-5" />}
              title="Noodzakelijk"
              description="Deze cookies zijn essentieel voor de basisfunctionaliteit van de website. Ze zorgen ervoor dat u door de site kunt navigeren en functies kunt gebruiken."
              enabled={true}
              required
              expanded={expandedCategory === 'necessary'}
              onExpand={() => toggleCategory('necessary')}
            />
            
            {showDetails && (
              <>
                <CookieCategory
                  icon={<BarChart3 className="w-5 h-5" />}
                  title="Analytisch"
                  description="Met analytische cookies kunnen wij het gebruik van onze website analyseren en verbeteren. Deze gegevens worden anoniem verzameld en maken geen inbreuk op uw privacy."
                  enabled={localPrefs.analytics}
                  onToggle={(enabled) => setLocalPrefs(prev => ({ ...prev, analytics: enabled }))}
                  expanded={expandedCategory === 'analytics'}
                  onExpand={() => toggleCategory('analytics')}
                />
                
                <CookieCategory
                  icon={<Megaphone className="w-5 h-5" />}
                  title="Marketing"
                  description="Marketing cookies worden gebruikt om bezoekers te volgen en relevante advertenties te tonen. Deze cookies verzamelen informatie over uw surfgedrag."
                  enabled={localPrefs.marketing}
                  onToggle={(enabled) => setLocalPrefs(prev => ({ ...prev, marketing: enabled }))}
                  expanded={expandedCategory === 'marketing'}
                  onExpand={() => toggleCategory('marketing')}
                />
              </>
            )}
          </div>

          {/* Toggle Details */}
          <div className="px-6 pt-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-green transition-colors"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Minder opties
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Meer opties
                </>
              )}
            </button>
          </div>

          {/* Actions */}
          <div className="p-6 pt-4 space-y-3">
            <div className="flex gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 bg-brand-green text-feigro-dark font-heading uppercase tracking-wider text-sm py-3 px-4 rounded-xl hover:bg-brand-green/90 transition-colors"
              >
                Alles accepteren
              </button>
              {showDetails && (
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 border-2 border-slate-200 text-slate-700 font-heading uppercase tracking-wider text-sm py-3 px-4 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Opslaan
                </button>
              )}
            </div>
            
            {!showDetails && (
              <button
                onClick={() => savePreferences({ necessary: true, analytics: false, marketing: false })}
                className="w-full text-sm text-slate-500 hover:text-slate-700 transition-colors py-2"
              >
                Alleen noodzakelijke cookies
              </button>
            )}
          </div>

          {/* Footer Link */}
          <div className="px-6 pb-6 pt-0">
            <Link
              to="/cookies"
              className="flex items-center justify-center gap-2 text-sm text-brand-green hover:underline transition-colors"
            >
              Bekijk ons volledige privacy- en cookiebeleid
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
