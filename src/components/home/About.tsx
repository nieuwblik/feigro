import React from 'react';
import { motion, Variants } from 'framer-motion';
import { InversedFlipButton } from '@/components/buttons';

export const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="over" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Image with floating element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-slate-200 relative z-10 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1632759162403-12d8a4102948?q=80&w=2070&auto=format&fit=crop"
                alt="Dakwerker aan het werk"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white border border-slate-200 text-slate-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] z-20 shadow-2xl">
              <p className="text-brand-green text-5xl md:text-7xl font-heading mb-1 leading-none tracking-tighter">15+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Jaar Innovatie</p>
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-green/5 blur-[120px] rounded-full -z-10"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-[0.4em]">
                VAKMANSCHAP
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-7xl font-heading text-slate-900 leading-[0.9] tracking-tighter mb-10 uppercase"
            >
              Uw dak is bij ons <br /><span className="text-brand-green italic">In goede handen</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-light"
            >
              Bij FEIGRO Dakwerken staat kwaliteit centraal. Wij combineren traditioneel vakmanschap met de nieuwste technieken om uw woning optimaal te beschermen tegen de elementen.
            </motion.p>

            <motion.div variants={itemVariants}>
              <InversedFlipButton
                label="Ontdek Onze Werking"
                size="large"
                onClick={() => {
                  const el = document.getElementById('diensten');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
