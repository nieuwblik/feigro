import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Zap, Shield, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';

import { CTASection } from '@/components/home';

export default function Spoedservice() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht, ook in het weekend en op feestdagen staan we klaar voor spoedgevallen.',
    },
    {
      icon: Zap,
      title: 'Snelle Respons',
      description: 'Wij streven ernaar binnen 2-4 uur ter plaatse te zijn bij acute daklekkages.',
    },
    {
      icon: Shield,
      title: 'Direct Actie',
      description: 'Noodreparatie om verdere waterschade aan uw woning direct te voorkomen.',
    },
    {
      icon: Phone,
      title: 'Expert Advies',
      description: 'Ervaren dakspecialisten die direct weten wat er moet gebeuren om uw dak te redden.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Bel Direct',
      description: 'Bel ons spoednummer en beschrijf de situatie. Onze adviseurs staan 24/7 klaar.',
    },
    {
      number: '02',
      title: 'Snelle Respons',
      description: 'Een monteur komt met spoed naar uw locatie in Zuid-Holland en omstreken.',
    },
    {
      number: '03',
      title: 'Noodreparatie',
      description: 'We stoppen de lekkage direct om de schade aan uw interieur te beperken.',
    },
    {
      number: '04',
      title: 'Definitieve Oplossing',
      description: 'We plannen direct een afspraak voor de definitieve en duurzame reparatie.',
    },
  ];

  return (
    <div className="w-full bg-white">
      <SEO {...seoMetadata.spoedservice} />

      {/* Hero */}
      <section className="bg-black pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="container mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8 shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">24/7 Noodservice Actief</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-5xl lg:text-7xl font-heading tracking-tighter leading-none mb-8 uppercase"
          >
            Acute Lekkage? <br /><span className="text-brand-green italic">Bel Direct</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light"
          >
            Heeft u een daklekkage of andere acute dakproblemen? Aarzel niet. Onze specialisten zijn binnen enkele uren ter plaatse om uw woning te beschermen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PrimaryFlipButton
              label="Nu direct bellen"
              size="large"
              icon={<Phone />}
              onClick={() => window.location.href = 'tel:+31612345678'}
            />
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-green/5 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4 -z-0"></div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 hover:border-brand-green transition-all group select-none shadow-sm hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-brand-green/20">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-heading text-slate-900 mb-4 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-light">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-heading text-slate-900 mb-6 uppercase tracking-tighter">Onze <span className="text-brand-green italic">Werkwijze</span> bij Spoed</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto uppercase tracking-widest font-bold opacity-40">Van melding tot oplossing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Lines between steps */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-green flex items-center justify-center text-brand-green font-heading text-xl mb-8 shadow-lg group-hover:bg-brand-green group-hover:text-black transition-all">
                  {step.number}
                </div>
                <h3 className="text-2xl font-heading text-slate-900 mb-4 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do Checklist */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading text-slate-900 mb-12 text-center uppercase tracking-tighter">
                Wat te doen bij <span className="text-red-500 italic">Lekkage?</span>
              </h2>
              <div className="grid gap-6">
                {[
                  { title: 'Bel onze spoedservice', desc: '+31 6 1234 5678 - 24/7 Bereikbaar' },
                  { title: 'Plaats emmers/bakken', desc: 'Direct onder het lek om waterschade te beperken' },
                  { title: 'Bescherm eigendommen', desc: 'Verplaats meubels and elektronica uit de buurt' },
                  { title: 'Maak foto\'s de schade', desc: 'Belangrijk voor uw opstal- of inboedelverzekering' },
                  { title: 'Ga niet zelf het dak op', desc: 'In de regen is een dak extreem glad and onveilig' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 hover:border-brand-green/20 transition-all select-none shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center mt-1 shrink-0">
                      <CheckCircle size={14} className="text-brand-green" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1 tracking-tight uppercase">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CTASection />
    </div>
  );
}
