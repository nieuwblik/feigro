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
    <section id="over" className="py-24 md:py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Image with floating element */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1632759162403-12d8a4102948?q=80&w=2070&auto=format&fit=crop" 
                alt="Dakwerker aan het werk" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-black text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] z-20 shadow-2xl">
              <p className="text-brand-green text-5xl md:text-6xl font-heading mb-1">15+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/50">Jaar Topkwaliteit</p>
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-brand-green/20 rounded-full -z-10 animate-pulse"></div>
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
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest">
                ONZE PASSIE
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading text-black leading-[1] tracking-tighter mb-10"
            >
              Uw dak is bij ons <br /><span className="text-brand-green">in goede handen</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed max-w-xl"
            >
              Bij FEIGRO Dakwerken staat kwaliteit centraal. Wij combineren traditioneel vakmanschap met de nieuwste technieken om uw woning optimaal te beschermen tegen de elementen.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <InversedFlipButton 
                label="Onze Werking" 
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
