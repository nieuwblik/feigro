import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { hasConsented, isLoaded } = useCookieConsent();

  // Zolang de cookiebalk onderin staat, schuift de knop erboven.
  const bannerVisible = isLoaded && !hasConsented;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={cn(
            'fixed right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-lg shadow-lg flex items-center justify-center hover:bg-primary/90 transition-[background-color,bottom] duration-300',
            bannerVisible ? 'bottom-48 sm:bottom-40 lg:bottom-28' : 'bottom-6'
          )}
          aria-label="Terug naar boven"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
