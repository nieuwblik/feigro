import React from 'react';
import { InversedFlipButton } from '@/components/buttons';
import { ParallaxImage, FadeIn } from '@/components/ui/ParallaxImage';
import aboutImage from '@/assets/dakdekker-brander.png';

export const About = () => {
  return (
    <section id="over" className="py-20 md:py-28 lg:py-36 bg-brand-grey/10 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">

          {/* Left Side: Image with floating element */}
          <div className="relative">
            <FadeIn scale={0.95}>
              <div className="aspect-[4/5] md:aspect-square rounded-lg md:rounded-[1rem] overflow-hidden border border-slate-200 relative z-10 group">
                <ParallaxImage
                  src={aboutImage}
                  alt="Dakwerker aan het werk"
                  speed={60}
                  containerClassName="h-full w-full"
                  className="grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </FadeIn>

            {/* Experience badge with fast parallax */}
            <FadeIn delay={0.2} distance={40} className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-12 z-20 parallax-fast" style={{ '--parallax-speed': '0.15' } as any}>
              <div className="bg-white border border-slate-200 text-slate-900 p-5 md:p-8 lg:p-12 rounded-md md:rounded-[0.75rem]">
                <p className="text-brand-green text-3xl md:text-5xl lg:text-7xl font-heading mb-1 leading-none tracking-tighter">15+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-slate-400">Jaar Innovatie</p>
              </div>
            </FadeIn>

            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-green/5 blur-[120px] rounded-full -z-10"></div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <FadeIn>
              <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  VAKMANSCHAP
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter mb-8 md:mb-12 uppercase">
                Uw dak is bij ons <br /><span className="text-brand-green italic">In goede handen</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-slate-600 text-base md:text-lg lg:text-xl mb-10 md:mb-14 leading-relaxed max-w-xl font-light">
                Bij FEIGRO Dakwerken staat kwaliteit centraal. Wij combineren traditioneel vakmanschap met de nieuwste technieken om uw woning optimaal te beschermen tegen de elementen.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex justify-center md:justify-start">
              <InversedFlipButton
                label="Ontdek onze diensten"
                onClick={() => {
                  const el = document.getElementById('diensten');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
