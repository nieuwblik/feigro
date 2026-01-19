import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Hammer, Layers, Flame, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryFlipButton } from '@/components/buttons';
const servicesDetail = [
  {
    title: 'Dakinspectie',
    desc: 'Voorkom onverwachte kosten. Onze experts voeren een grondige nulmeting uit van uw gehele dakconstructie, inclusief isolatie en afwatering.',
    icon: <Search size={40} />,
    href: '/dakinspectie'
  },
  {
    title: 'Dakonderhoud',
    desc: 'Verleng de levensduur van uw dak. Wij verwijderen vuil, controleren naden en zorgen dat uw dak in topconditie blijft tegen alle weersinvloeden.',
    icon: <Settings size={40} />,
    href: '/dakonderhoud'
  },
  {
    title: 'Dakrenovatie',
    desc: 'Is uw dak aan vervanging toe? Wij renoveren daken van A tot Z, met oog voor moderne isolatiewaarden en esthetische afwerking.',
    icon: <Hammer size={40} />,
    href: '/dakrenovatie'
  },
  {
    title: 'Bitumen & EPDM',
    desc: 'Specialisten in platte daken. Of u nu kiest voor de robuustheid van bitumen of de duurzaamheid van EPDM, wij garanderen 100% waterdichtheid.',
    icon: <Flame size={40} />,
    href: '/bitumen-dakbedekking'
  },
  {
    title: 'Lood- & Zinkwerk',
    desc: 'Vakmanschap in de kleinste details. Wij verzorgen al het zinkwerk, van dakgoten tot dakkapelafwerking, voor een klassieke en duurzame look.',
    icon: <Layers size={40} />,
    href: '/dakbedekking-vervangen'
  },
  {
    title: 'Spoedservice',
    desc: 'Lekkage? Onze 24/7 noodservice staat klaar om verdere schade aan uw woning direct te voorkomen. Snel, vakkundig en betrouwbaar.',
    icon: <AlertTriangle size={40} />,
    href: '/spoedservice'
  }
];

const Diensten = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-black pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden min-h-screen md:min-h-[40vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Vakmanschap"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Onze Expertise</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-5xl lg:text-7xl font-heading tracking-tighter leading-none mb-8 uppercase"
          >
            Vakmanschap <br /><span className="text-brand-green italic">op Hoog Niveau</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10"
          >
            Van preventieve inspecties tot complete dakrenovaties. FEIGRO biedt duurzame oplossingen for elk type dak.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <PrimaryFlipButton
                label="Vraag offerte aan"
                icon={<ArrowRight />}
                size="large"
              />
            </Link>
          </motion.div>
        </div>
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/30 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetail.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white border border-slate-200 p-10 md:p-12 rounded-[1.25rem] overflow-hidden hover:border-brand-green/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 select-none"
              >
                <div className="relative z-10">
                  <div className="text-brand-green mb-10 w-12 h-12 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading mb-6 text-slate-900 group-hover:text-brand-green transition-colors uppercase">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-10 text-sm md:text-base font-light">{service.desc}</p>
                  <Link to={service.href} className="flex justify-between items-center group/btn">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors">Bekijk Dienst</span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all duration-300">
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-black transition-colors" />
                    </div>
                  </Link>
                </div>
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 via-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diensten;
