import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CTAFooterProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function CTAFooter({
  title = 'Klaar om uw dak te laten renoveren?',
  description = 'Neem vandaag nog contact met ons op voor een vrijblijvende offerte of een gratis dakinspectie.',
  primaryCTA = {
    text: 'Vraag offerte aan',
    href: '/contact',
  },
  secondaryCTA = {
    text: 'Lekkage melden',
    href: '/spoedservice',
  },
  className,
}: CTAFooterProps) {
  return (
    <section className={cn('py-12 md:py-24 bg-white relative overflow-hidden', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-black rounded-xl md:rounded-[1.5rem] p-6 sm:p-8 md:p-16 lg:p-24 text-left relative overflow-hidden shadow-2xl border border-white/5">
          {/* Dynamic Background Elements */}
          <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-brand-green/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px] md:blur-[100px]"></div>

          <div className="relative z-10 max-w-4xl">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-8 leading-[1] tracking-tighter uppercase break-words">
              Klaar om uw dak te <br /><span className="text-brand-green italic">laten renoveren?</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-2xl mb-8 md:mb-14 leading-relaxed max-w-2xl font-light">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte of een gratis dakinspectie.
            </p>
            <div className="flex flex-col sm:flex-row justify-start items-start gap-6 md:gap-10">
              <Link to="/contact" className="w-full sm:w-auto">
                <PrimaryFlipButton
                  label="Vraag offerte aan"
                  hoverLabel="Direct contact"
                  className="w-full sm:w-auto"
                />
              </Link>
              <div className="flex flex-col items-start group cursor-pointer" onClick={() => window.location.href = 'tel:+31612345678'}>
                <span className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1">Liever bellen?</span>
                <a href="tel:+31612345678" className="text-white font-bold text-xl sm:text-2xl md:text-3xl group-hover:text-brand-green transition-all break-all sm:break-normal">+31 (0) 6 123 456 78</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
