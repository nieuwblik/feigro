import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { CTASection } from '@/components/home';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';

export default function OverOns() {
  const values = [
    {
      icon: Users,
      title: 'Vakmanschap',
      description: 'Ons team bestaat uit ervaren, gecertificeerde dakdekkers die hun vak door en door kennen.',
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'We werken uitsluitend met hoogwaardige materialen en leveren gegarandeerd werk van topkwaliteit.',
    },
    {
      icon: Heart,
      title: 'Klantgericht',
      description: 'Uw tevredenheid staat centraal. We denken graag met u mee en leveren maatwerk.',
    },
    {
      icon: CheckCircle,
      title: 'Betrouwbaar',
      description: 'Op ons kunt u rekenen. We houden ons aan afspraken en leveren wat we beloven.',
    },
  ];

  return (
    <div className="w-full">
      <SEO {...seoMetadata.overOns} />

      {/* Hero */}
      <section className="bg-black pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden min-h-screen md:min-h-[40vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1628177142898-93e46b14b85d?q=80&w=2070&auto=format&fit=crop"
            alt="Wie wij zijn"
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
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Wie wij zijn</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-5xl lg:text-7xl font-heading tracking-tighter leading-none mb-8 uppercase"
          >
            Meesters in <br /><span className="text-brand-green italic">Dakwerken</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10"
          >
            Al meer dan 20 jaar de vertrouwde partner for hoogwaardige dakoplossingen. Wij combineren traditioneel vakmanschap met moderne innovatie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PrimaryFlipButton
              label="Vraag offerte aan"
              icon={<ArrowRight />}
              size="large"
              onClick={() => window.location.href = '/contact'}
            />
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Company Story */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-heading text-slate-900 mb-10 tracking-tight uppercase">
                Onze <span className="text-brand-green italic">Missie</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  FEIGRO Dakwerken werd opgericht met één duidelijke missie: vakkundig dakwerk leveren
                  met persoonlijke aandacht for elke klant. Wat begon als een klein familiebedrijf is
                  uitgegroeid tot een gerenommeerd dakdekkersbedrijf.
                </p>
                <p>
                  Met meer dan 20 jaar ervaring hebben we duizenden daken geïnspecteerd, onderhouden en
                  gerenoveerd. Van kleine particuliere woningen tot grote bedrijfspanden - elk project
                  behandelen we met dezelfde toewijding en zorg for detail.
                </p>
                <p>
                  Ons team van gecertificeerde vakmensen blijft zich continu ontwikkelen om u de nieuwste
                  technieken en materialen te kunnen bieden.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-video rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop"
                alt="Expert roofers at work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-left mb-20">
            <h2 className="text-4xl md:text-6xl font-heading text-slate-900 mb-6 uppercase tracking-tighter">
              Onze <span className="text-brand-green italic">Kernwaarden</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light">
              De fundamenten waar FEIGRO op gebouwd is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-[1.25rem] p-10 border border-slate-200 hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 group select-none hover:-translate-y-2"
                >
                  <div className="mb-10 text-brand-green group-hover:scale-[1.15] transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-heading text-slate-900 mb-4 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-light">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-7xl font-heading text-slate-900 mb-12 leading-none uppercase tracking-tighter">
                Waarom Kiezen voor <span className="text-brand-green italic">FEIGRO?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  '20+ Jaar Ervaring',
                  'Gecertificeerde Vakmensen',
                  '24/7 Spoedservice',
                  'A-Merk Materialen',
                  'Transparante Prijzen',
                  'Gratis Advies',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                      <CheckCircle size={14} className="text-brand-green group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-lg text-slate-600 group-hover:text-slate-900 transition-colors font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-100 p-12 md:p-16 rounded-[2rem] border border-slate-200 shadow-2xl">
                <h3 className="text-3xl md:text-5xl font-heading text-slate-900 mb-8 italic uppercase tracking-tighter leading-none">Direct een <br />expert spreken?</h3>
                <p className="text-slate-600 text-lg mb-10 font-light">Wij staan 24/7 klaar voor al uw vragen en spoedgevallen rondom uw dak.</p>
                <PrimaryFlipButton
                  label="Bel voor advies"
                  icon={<ArrowRight />}
                  onClick={() => window.location.href = 'tel:+31612345678'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
