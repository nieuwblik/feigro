import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Settings, Hammer, Layers, Flame, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { InversedFlipButton, PrimaryFlipButton } from '@/components/buttons';
import { Link } from 'react-router-dom';
const servicesList = [{
  title: 'VVE & Vastgoedbeheer',
  desc: 'Professioneel dakbeheer voor VVE\'s en vastgoedbeheerders, gericht op duurzame oplossingen en kostenbesparing.',
  icon: <Settings size={32} />,
  href: '/vve-vastgoedbeheer'
}, {
  title: 'Daklekkage',
  desc: 'Snelle detectie en reparatie van daklekkages, om verdere schade te voorkomen en uw dak waterdicht te houden.',
  icon: <AlertTriangle size={32} />,
  href: '/daklekkage'
}, {
  title: 'Dakreparatie',
  desc: 'Efficiënte dakreparaties met duurzame materialen, voor een langere levensduur van uw dak en bescherming tegen weersinvloeden.',
  icon: <Hammer size={32} />,
  href: '/dakreparatie'
}, {
  title: 'Dakonderhoud',
  desc: 'Voorkom verrassingen met periodiek dakonderhoud, verlengt de levensduur en voorkomt dure reparaties.',
  icon: <Settings size={32} />,
  href: '/dakonderhoud'
}, {
  title: 'Dakrenovatie',
  desc: 'Complete dakrenovaties, van isolatie tot vernieuwing, voor comfort en energiebesparing.',
  icon: <Layers size={32} />,
  href: '/dakrenovatie'
}, {
  title: 'Valbeveiliging',
  desc: 'Veilige werkplekken met gecertificeerde valbeveiliging, volgens de laatste veiligheidsnormen.',
  icon: <ShieldCheck size={32} />,
  href: '/valbeveiliging'
}];
import { FadeIn } from '@/components/ui/ParallaxImage';
import ctaImage from '@/assets/feigro-dakdekker-inspectie.webp';
export const Services = () => {
  return <>
      <section id="diensten" className="py-20 md:py-28 lg:py-36 overflow-hidden border-t border-slate-100 relative bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <FadeIn>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Onze Expertise</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase">
                Professionele <br /><span className="text-brand-green italic">Dakdiensten</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {servicesList.map((service, i) => <FadeIn key={i} delay={i * 0.05} distance={20}>
                <Link to={service.href} className="block h-full">
                  <div className="group relative p-8 md:p-10 lg:p-12 rounded-xl md:rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full min-h-[320px] md:min-h-[380px] overflow-hidden select-none hover:-translate-y-2">
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="mb-8 md:mb-10 text-brand-green w-8 h-8 md:w-10 md:h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15] [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                        {service.icon}
                      </div>

                      <h3 className="text-xl md:text-2xl font-heading mb-4 md:mb-5 text-slate-900 group-hover:text-brand-green transition-colors uppercase">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-xs md:text-sm mb-8 md:mb-10 flex-grow font-light">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors mt-auto pt-4 md:pt-6 border-t border-slate-100">
                        Meer Info <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </FadeIn>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <FadeIn>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Gratis Advies</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
                Vrijblijvende <br /><span className="text-brand-green italic">Inspectie</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-xl">
                Ons team staat 24/7 klaar voor direct herstel en vakkundig advies. Neem contact op voor een gratis dakinspectie.
              </p>
              <PrimaryFlipButton
                label="Plan gratis inspectie"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/contact';
                }}
              />
            </FadeIn>

            {/* Right: Image */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] md:aspect-square rounded-lg md:rounded-[1rem] overflow-hidden border border-slate-200 relative z-10 group">
                  <img 
                    src={ctaImage} 
                    alt="FEIGRO Dakwerken professional" 
                    className="w-full h-full object-cover transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>;
};