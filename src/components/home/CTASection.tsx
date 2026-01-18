import React from 'react';
import { PrimaryFlipButton } from '@/components/buttons';

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-black rounded-[3rem] p-12 md:p-24 text-left relative overflow-hidden shadow-2xl border border-white/5">
          {/* Dynamic Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>

          <div className="relative z-10 max-w-4xl">
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-heading mb-8 leading-[1] tracking-tighter uppercase">
              Klaar voor een <br /><span className="text-brand-green italic">nieuw dak?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-2xl mb-14 leading-relaxed max-w-2xl font-light">
              Ontvang binnen 24 uur een vrijblijvende offerte voor uw dakwerken. Geen verrassingen achteraf, enkel puur vakmanschap.
            </p>
            <div className="flex flex-col md:flex-row justify-start items-start gap-10">
              <PrimaryFlipButton
                label="Vraag offerte aan"
                hoverLabel="Direct contact"
                size="large"
                className="!min-w-[280px]"
                onClick={() => {
                  const el = document.getElementById('contact-form');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/contact';
                  }
                }}
              />
              <div className="flex flex-col items-start group cursor-pointer" onClick={() => window.location.href = 'tel:+31612345678'}>
                <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Liever bellen?</span>
                <a href="tel:+31612345678" className="text-white font-bold text-3xl group-hover:text-brand-green transition-all">+31 (0) 6 123 456 78</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
