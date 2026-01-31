import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Hammer, AlertTriangle, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryFlipButton } from '@/components/buttons';

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

const Diensten = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-black pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden min-h-screen md:min-h-[40vh] flex items-center px-4 md:px-6">
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

        <div className="container mx-auto relative z-10 text-left">
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
            className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-8 uppercase"
          >
            Vakmanschap <br /><span className="text-brand-green italic">Op Hoog Niveau</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10"
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
              />
            </Link>
          </motion.div>
        </div>
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/30 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
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
