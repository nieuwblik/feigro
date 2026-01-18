import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Settings, Hammer, Layers, Flame, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    title: 'Dakinspectie',
    desc: 'Grondige controle van uw dak op zwakke plekken en potentiële problemen door gecertificeerde experts.',
    icon: <Search size={32} />
  },
  {
    title: 'Dakonderhoud',
    desc: 'Regelmatige reiniging en kleine reparaties om de levensduur van uw dak aanzienlijk te verlengen.',
    icon: <Settings size={32} />
  },
  {
    title: 'Dakrenovatie',
    desc: 'Complete vernieuwing van uw dakstructuur met oog voor de nieuwste isolatiestandaarden.',
    icon: <Hammer size={32} />
  },
  {
    title: 'Dakbedekking Vervangen',
    desc: 'Professionele vervanging van verouderde toplagen voor optimale en langdurige bescherming.',
    icon: <Layers size={32} />
  },
  {
    title: 'Bitumen Dakbedekking',
    desc: 'Specialistisch branden van hoogwaardig bitumen voor een 100% waterdicht plat dak.',
    icon: <Flame size={32} />
  },
  {
    title: 'EPDM Dakbedekking',
    desc: 'Duurzame, rubberen dakbedekking met een extreem lange levensduur en minimale naden.',
    icon: <ShieldCheck size={32} />
  },
  {
    title: 'Daklekkage',
    desc: '24/7 spoedhulp bij acute lekkages om waterschade in uw woning direct te beperken.',
    icon: <AlertTriangle size={32} />
  }
];

export const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section id="diensten" className="py-24 md:py-32 bg-[#F2F2F2] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Onze Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading text-black leading-[1] tracking-tighter">
            Professionele <br /><span className="text-brand-green">Dakdiensten</span>
          </h2>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesList.map((service, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative p-10 rounded-[2rem] bg-gradient-to-br from-[#4CB26E] to-[#3a8a54] shadow-xl shadow-brand-green/10 border border-white/20 transition-all duration-200 flex flex-col h-full overflow-hidden select-none"
            >
              {/* Subtle background overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-10 text-white inline-block">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-heading mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors mt-auto">
                  Meer Info <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300"></div>
            </motion.div>
          ))}
          
          {/* Action Card */}
          <motion.div 
            variants={itemVariants}
            className="group p-10 rounded-[2rem] bg-black border border-white/10 flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[350px] select-none transition-all duration-200"
          >
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-heading mb-6">Altijd bereikbaar</h3>
              <p className="text-white/50 text-sm mb-10 px-4 leading-relaxed">
                Heeft u een specifiek probleem of een spoedgeval? Ons team staat 24/7 klaar voor direct herstel.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-brand-green text-black font-bold px-12 py-5 rounded-full text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-green/20"
              >
                Direct Contact
              </button>
            </div>
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
