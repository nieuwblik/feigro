import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, ArrowUpRight, Ruler } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';
import { PrimaryFlipButton } from '@/components/buttons';
import { projectsList } from '@/data/projects';

export default function Projecten() {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="w-full bg-white">
      <SEO {...seoMetadata.projecten} />

      {/* Hero */}
      <section className="bg-black pt-24 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-screen md:h-[40vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {projectsList[0] && (
            <img
              src={projectsList[0].imageAfter}
              alt="Projecten"
              className="w-full h-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-[1] text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Portfolio</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 md:mb-10 uppercase"
          >
            Projecten waar we <br /><span className="text-brand-green italic">Trots op Zijn</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10"
          >
            Een selectie van onze meest uitdagende en succesvolle projecten. Elk dak vertelt een verhaal van vakmanschap en kwaliteit.
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
              onClick={() => navigate('/contact')}
            />
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/30 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {projectsList.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">Nog geen projecten beschikbaar.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {projectsList.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/project-${project.slug}`}
                    className="group block"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-slate-200 shadow-lg">
                      <img
                        src={project.imageAfter}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                      
                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 shadow-lg">
                        <ArrowUpRight size={20} className="text-black" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                        <span className="bg-brand-green text-black px-3 md:px-4 py-1 md:py-1.5 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-heading text-slate-900 group-hover:text-brand-green transition-colors uppercase tracking-tight mb-3 md:mb-4">
                        {project.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-3 md:mb-4">
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MapPin size={14} className="text-brand-green" />
                          <span className="text-xs uppercase tracking-wide font-medium">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Calendar size={14} className="text-brand-green" />
                          <span className="text-xs uppercase tracking-wide font-medium">{formatDate(project.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Ruler size={14} className="text-brand-green" />
                          <span className="text-xs uppercase tracking-wide font-medium">{project.size}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white mb-6 uppercase tracking-tight">
                Uw project <span className="text-brand-green italic">hier</span>?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
                Wij staan klaar om ook uw dakproject vakkundig uit te voeren. Neem vandaag nog contact op voor een vrijblijvende offerte.
              </p>
              <PrimaryFlipButton
                label="Neem contact op"
                icon={<ArrowUpRight size={18} />}
                size="large"
                onClick={() => navigate('/contact')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-1 mb-6 md:mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-brand-green text-brand-green" />
              ))}
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-slate-900 mb-12 md:mb-16 tracking-tighter uppercase">
              Wat onze klanten <span className="text-brand-green italic">zeggen</span>
            </h2>

            <div className="grid gap-6 md:gap-8">
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
                  className="relative p-6 md:p-10 bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-lg"
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-heading italic leading-relaxed mb-6 md:mb-8">
                    "{review.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="text-slate-900 font-bold text-base md:text-lg mb-1 uppercase tracking-tight">{review.author}</span>
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
