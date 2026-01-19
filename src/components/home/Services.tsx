import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Settings, Hammer, Layers, Flame, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { InversedFlipButton } from '@/components/buttons';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: 'Dakinspectie',
    desc: 'Grondige controle van uw dak op zwakke plekken en potentiële problemen door gecertificeerde experts.',
    icon: <Search size={32} />,
    href: '/dakinspectie'
  },
  {
    title: 'Dakonderhoud',
    desc: 'Regelmatige reiniging en kleine reparaties om de levensduur van uw dak aanzienlijk te verlengen.',
    icon: <Settings size={32} />,
    href: '/dakonderhoud'
  },
  {
    title: 'Dakrenovatie',
    desc: 'Complete vernieuwing van uw dakstructuur met oog voor de nieuwste isolatiestandaarden.',
    icon: <Hammer size={32} />,
    href: '/dakrenovatie'
  },
  {
    title: 'Dakbedekking Vervangen',
    desc: 'Professionele vervanging van verouderde toplagen voor optimale en langdurige bescherming.',
    icon: <Layers size={32} />,
    href: '/dakbedekking-vervangen'
  },
  {
    title: 'Bitumen Dakbedekking',
    desc: 'Specialistisch branden van hoogwaardig bitumen voor een 100% waterdicht plat dak.',
    icon: <Flame size={32} />,
    href: '/bitumen-dakbedekking'
  },
  {
    title: 'EPDM Dakbedekking',
    desc: 'Duurzame, rubberen dakbedekking met een extreem lange levensduur en minimale naden.',
    icon: <ShieldCheck size={32} />,
    href: '/epdm-dakbedekking'
  },
  {
    title: 'Daklekkage',
    desc: '24/7 spoedhulp bij acute lekkages om waterschade in uw woning direct te beperken.',
    icon: <AlertTriangle size={32} />,
    href: '/daklekkage'
  }
];

export const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="diensten" className="py-24 md:py-32 bg-slate-50 overflow-hidden border-t border-slate-100 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Onze Expertise</span>
          </div>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase">
            Professionele <br /><span className="text-brand-green italic">Dakdiensten</span>
          </h2>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesList.map((service, i) => (
            <Link key={i} to={service.href} className="flex h-full">
              <motion.div
                variants={itemVariants}
                className="group relative p-10 rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full overflow-hidden select-none shadow-sm hover:shadow-xl hover:-translate-y-2 w-full"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-10 text-brand-green group-hover:text-brand-green group-hover:scale-[1.15] transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-heading mb-4 text-slate-900 group-hover:text-brand-green transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-8 flex-grow font-light">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors mt-auto pt-6 border-t border-slate-100">
                    Meer Info <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </Link>
          ))}

          {/* Action Card */}
          <motion.div
            variants={itemVariants}
            className="group p-10 rounded-[1.25rem] bg-brand-green border border-brand-green flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[400px] select-none shadow-2xl shadow-brand-green/20"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-black text-4xl font-heading mb-6 uppercase tracking-tighter leading-none">Vrijblijvende <br />Inspectie?</h3>
              <p className="text-black/60 text-sm mb-10 px-4 font-bold">
                Ons team staat 24/7 klaar voor direct herstel en vakkundig advies.
              </p>
              <div
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/contact';
                }}
                className="cursor-pointer"
              >
                <InversedFlipButton
                  label="Direct Contact"
                  size="default"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
