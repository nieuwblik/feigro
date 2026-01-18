import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';

// Placeholder CTA Section - replace with actual implementation when uploaded
export const CTASection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-black"></div>
            <span className="text-black font-bold text-xs uppercase tracking-widest">Neem Contact Op</span>
            <div className="w-12 h-[2px] bg-black"></div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-black leading-[1] tracking-tighter mb-8"
          >
            Klaar om uw dak <br />te laten renoveren?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-black/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte. 
            Onze experts staan voor u klaar.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => window.location.href = 'mailto:info@feigro.nl'}
              className="bg-black text-white font-bold px-10 py-5 rounded-full text-sm hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-3"
            >
              <span>Vraag Offerte Aan</span>
              <ArrowRight size={18} />
            </button>
            
            <a 
              href="tel:+31612345678" 
              className="flex items-center gap-3 text-black font-bold hover:opacity-70 transition-opacity"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Phone size={20} className="text-brand-green" />
              </div>
              <span>+31 (0) 6 123 456 78</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
