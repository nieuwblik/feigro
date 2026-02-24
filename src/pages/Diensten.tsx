import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Hammer, AlertTriangle, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import heroImage from '@/assets/dakinspectie-noord-holland.webp';
import { Link } from 'react-router-dom';

import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';
import { FAQSection } from '@/components/sections/FAQSection';
import { FAQItem } from '@/types';

const servicesDetail = [
  {
    title: 'VVE & Vastgoedbeheer',
    desc: 'Professioneel dakbeheer voor VVE\'s en vastgoedbeheerders, gericht op duurzame oplossingen en kostenbesparing.',
    icon: <Settings size={40} />,
    href: '/vve-vastgoedbeheer'
  },
  {
    title: 'Daklekkage',
    desc: 'Snelle detectie en reparatie van daklekkages, om verdere schade te voorkomen en uw dak waterdicht te houden.',
    icon: <AlertTriangle size={40} />,
    href: '/daklekkage'
  },
  {
    title: 'Dakreparatie',
    desc: 'Efficiënte dakreparaties met duurzame materialen, voor een langere levensduur van uw dak en bescherming tegen weersinvloeden.',
    icon: <Hammer size={40} />,
    href: '/dakreparatie'
  },
  {
    title: 'Dakonderhoud',
    desc: 'Voorkom verrassingen met periodiek dakonderhoud, verlengt de levensduur en voorkomt dure reparaties.',
    icon: <Settings size={40} />,
    href: '/dakonderhoud'
  },
  {
    title: 'Dakrenovatie',
    desc: 'Complete dakrenovaties, van isolatie tot vernieuwing, voor comfort en energiebesparing.',
    icon: <Layers size={40} />,
    href: '/dakrenovatie'
  },
  {
    title: 'Valbeveiliging',
    desc: 'Veilige werkplekken met gecertificeerde valbeveiliging, volgens de laatste veiligheidsnormen.',
    icon: <ShieldCheck size={40} />,
    href: '/valbeveiliging'
  }
];

const dienstenFaqs: FAQItem[] = [
  {
    question: 'Hoe vaak moet een dak worden geïnspecteerd?',
    answer: 'Wij adviseren om uw dak minimaal één keer per jaar te laten inspecteren. Na zware stormen is een extra controle aan te raden. Regelmatige inspecties conform NEN 2767 helpen om kleine problemen vroegtijdig op te sporen en dure reparaties te voorkomen.',
  },
];

const Diensten = () => {
  return (
    <div className="w-full">
      <SEO {...seoMetadata.diensten} />
      {/* Page Header */}
      <section className="bg-black pt-36 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px] flex items-center px-4 md:px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Vakmanschap"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Onze Expertise</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 md:mb-10 uppercase"
          >
            Uw Dak <br /><span className="text-brand-green italic">Onder Onze Hoeden</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10"
          >
            Van preventieve inspecties tot complete dakrenovaties. Onderhoud conform de NEN 2767 — en ook bij projecten waar we trots op zijn.
          </motion.p>
        </div>
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/30 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 lg:py-36 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {servicesDetail.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={service.href} className="block h-full">
                  <div className="group relative p-8 md:p-10 lg:p-12 rounded-xl md:rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full min-h-[320px] md:min-h-[380px] overflow-hidden select-none hover:-translate-y-2">
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="mb-8 md:mb-10 text-brand-green w-8 h-8 md:w-10 md:h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15] [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={dienstenFaqs}
        title="Veelgestelde Vragen"
        titleHighlight="Vragen"
        subtitle="Antwoorden op de meest gestelde vragen over onze dakdiensten."
      />
    </div>
  );
};

export default Diensten;
