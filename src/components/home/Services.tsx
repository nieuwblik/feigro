import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Settings, Hammer, Layers, Flame, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { InversedFlipButton, PrimaryFlipButton } from '@/components/buttons';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: 'VVE & Vastgoedbeheer',
    desc: 'Professioneel dakbeheer voor VVE\'s en vastgoedbeheerders, gericht op duurzame oplossingen en kostenbesparing.',
    icon: <Settings size={32} />,
    href: '/vve-vastgoedbeheer'
  },
  {
    title: 'Daklekkage',
    desc: 'Snelle detectie en reparatie van daklekkages, om verdere schade te voorkomen en uw dak waterdicht te houden.',
    icon: <AlertTriangle size={32} />,
    href: '/daklekkage'
  },
  {
    title: 'Dakreparatie',
    desc: 'Efficiënte dakreparaties met duurzame materialen, voor een langere levensduur van uw dak en bescherming tegen weersinvloeden.',
    icon: <Hammer size={32} />,
    href: '/dakreparatie'
  },
  {
    title: 'Dakonderhoud',
    desc: 'Voorkom verrassingen met periodiek dakonderhoud, verlengt de levensduur en voorkomt dure reparaties.',
    icon: <Settings size={32} />,
    href: '/dakonderhoud'
  },
  {
    title: 'Dakrenovatie',
    desc: 'Complete dakrenovaties, van isolatie tot vernieuwing, voor comfort en energiebesparing.',
    icon: <Layers size={32} />,
    href: '/dakrenovatie'
  },
  {
    title: 'Valbeveiliging',
    desc: 'Veilige werkplekken met gecertificeerde valbeveiliging, volgens de laatste veiligheidsnormen.',
    icon: <ShieldCheck size={32} />,
    href: '/valbeveiliging'
  }
];

import { FadeIn } from '@/components/ui/ParallaxImage';
import ctaImage from '@/assets/renovatiedakenkhuizen.jpg';

export const Services = () => {
  return (
    <>
      <section id="diensten" className="py-16 md:py-24 lg:py-32 bg-slate-50 overflow-hidden border-t border-slate-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-24">
            <FadeIn>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Onze Expertise</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase">
                Professionele <br /><span className="text-brand-green italic">Dakdiensten</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {servicesList.map((service, i) => (
              <FadeIn key={i} delay={i * 0.05} distance={20}>
                <Link to={service.href} className="block h-full">
                  <div
                    className="group relative p-6 md:p-8 lg:p-10 rounded-xl md:rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full min-h-[320px] md:min-h-[380px] overflow-hidden select-none hover:-translate-y-2"
                  >
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="mb-6 md:mb-10 text-brand-green w-8 h-8 md:w-10 md:h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15] [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                        {service.icon}
                      </div>

                      <h3 className="text-xl md:text-2xl font-heading mb-3 md:mb-4 text-slate-900 group-hover:text-brand-green transition-colors uppercase">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-xs md:text-sm mb-6 md:mb-8 flex-grow font-light">
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <FadeIn>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Gratis Advies</span>
              </div>
              <h2 className="text-4xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
                Vrijblijvende <br /><span className="text-brand-green italic">Inspectie</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-xl">
                Ons team staat 24/7 klaar voor direct herstel en vakkundig advies. Neem contact op voor een gratis dakinspectie.
              </p>
              <div
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/contact';
                }}
                className="cursor-pointer inline-block"
              >
                <PrimaryFlipButton
                  label="Direct Contact"
                  icon={<ArrowRight />}
                />
              </div>
            </FadeIn>

            {/* Right: Image */}
            <FadeIn delay={0.2}>
              <div className="relative rounded-xl md:rounded-[1.25rem] overflow-hidden shadow-2xl">
                <img
                  src={ctaImage}
                  alt="FEIGRO Dakwerken professional"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

