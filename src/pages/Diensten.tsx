import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Hammer, Layers, Flame, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryFlipButton } from '@/components/buttons';
import { Header, Footer } from '@/components/home';

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
    <div className="bg-white min-h-screen">
      <Header />
      
      <div className="pt-24">
        {/* Page Header */}
        <section className="bg-black py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Wat wij doen</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-8xl font-heading tracking-tighter leading-none"
            >
              Onze <br /><span className="text-brand-green">Diensten</span>
            </motion.h1>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-[#F2F2F2]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesDetail.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-black/5 flex flex-col items-start group hover:border-brand-green transition-all duration-300"
                >
                  <div className="text-brand-green mb-8 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                  <Link to={service.href} className="w-full pt-6 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green">Vraag advies</span>
                    <ArrowRight size={18} className="text-brand-green group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section for page */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-black rounded-[3rem] p-12 md:p-20 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl md:text-6xl font-heading mb-6 tracking-tight">Vrijblijvende <span className="text-brand-green">dakinspectie?</span></h2>
                <p className="text-white/60 text-lg">Laat uw dak controleren door onze specialisten en voorkom verrassingen.</p>
              </div>
              <Link to="/contact">
                <PrimaryFlipButton 
                  label="Contact Opnemen" 
                  size="large"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Diensten;
