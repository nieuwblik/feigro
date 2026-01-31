import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';
import { PrimaryFlipButton } from '@/components/buttons';
export default function Projecten() {
  const projects = [
    {
      title: 'Woonhuis Rotterdam',
      category: 'EPDM Dakbedekking',
      description: 'Complete vervanging van oude bitumen dakbedekking naar hoogwaardig EPDM rubber. Inclusief nieuwe isolatie.',
      location: 'Rotterdam',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Bedrijfspand Dordrecht',
      category: 'Dakrenovatie',
      description: 'Grootschalige renovatie van 800m² plat dak met bitumen dakbedekking and verbeterde drainage.',
      location: 'Dordrecht',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Appartementencomplex Den Haag',
      category: 'Dakonderhoud',
      description: 'Jaarlijks onderhoudscontract inclusief inspectie, reiniging and kleine reparaties.',
      location: 'Den Haag',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1541976590-71394168159b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Villa Wassenaar',
      category: 'Daklekkage',
      description: 'Acute lekkage verholpen and volledige dakrenovatie uitgevoerd met EPDM dakbedekking.',
      location: 'Wassenaar',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1628177142898-93e46b14b85d?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="w-full bg-white">
      <SEO {...seoMetadata.projecten} />

      {/* Hero */}
      <section className="bg-black pt-24 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
            alt="Projecten"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-[1] text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Portfolio</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl font-heading tracking-tighter leading-none mb-8 uppercase"
          >
            Projecten waar we <br /><span className="text-brand-green italic">Trots op Zijn</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10"
          >
            Een selectie van onze meest uitdagende and succesvolle projecten. Elk dak vertelt een verhaal van vakmanschap and kwaliteit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PrimaryFlipButton
              label="Vraag offerte aan"
              icon={<ArrowUpRight />}
              size="default"
              onClick={() => window.location.href = '/contact'}
            />
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/30 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer select-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] mb-10 border border-slate-200 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight size={24} className="text-black" />
                  </div>
                  <div className="absolute bottom-10 left-10">
                    <span className="bg-brand-green/90 text-black px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg">{project.category}</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading text-slate-900 group-hover:text-brand-green transition-colors uppercase tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-4 sm:gap-6 mt-1 sm:mt-2">
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin size={14} className="text-brand-green" />
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={14} className="text-brand-green" />
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Reviews Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-1 mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-brand-green text-brand-green" />
              ))}
            </motion.div>
            <h2 className="text-4xl font-heading text-slate-900 mb-12 md:mb-16 tracking-tighter uppercase">
              Wat Onze Klanten <span className="text-brand-green italic">Zeggen</span>
            </h2>

            <div className="grid gap-6 md:gap-12">
              {[
                {
                  text: "FEIGRO heeft ons dak volledig gerenoveerd. Vakkundig werk, netjes afgewerkt, en het team was zeer professioneel. We zijn zeer tevreden!",
                  author: "Familie van der Berg",
                  city: "Rotterdam"
                },
                {
                  text: "Snelle en efficiënte service bij een acute daklekkage. Binnen 2 uur ter plaatse en het probleem direct verholpen. Echt top!",
                  author: "Jan Pietersen",
                  city: "Den Haag"
                }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative p-8 md:p-12 bg-white border border-slate-200 rounded-xl md:rounded-[1rem] shadow-xl"
                >
                  <p className="text-lg md:text-2xl lg:text-3xl text-slate-600 font-heading italic leading-relaxed mb-6 md:mb-10">
                    "{review.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="text-slate-900 font-bold text-lg mb-1 uppercase tracking-tight">{review.author}</span>
                    <span className="text-brand-green text-xs uppercase tracking-[0.2em] font-bold">{review.city}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
