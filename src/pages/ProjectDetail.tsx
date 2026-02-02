import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Ruler, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { projects, projectsList } from '@/data/projects';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4 uppercase">Project niet gevonden</h1>
          <p className="text-slate-600 mb-8">Het project dat u zoekt bestaat niet.</p>
          <PrimaryFlipButton
            label="Terug naar projecten"
            icon={<ArrowLeft size={18} />}
            onClick={() => navigate('/projecten')}
          />
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  // Get other projects for sidebar
  const otherProjects = projectsList.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-white">
      <SEO 
        title={`${project.title} | Feigro Dakwerken`}
        description={project.shortDescription}
        canonical={`/project-${project.slug}`}
      />

      {/* Hero Section */}
      <section className="bg-black pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden min-h-[60vh] md:min-h-[50vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.imageAfter}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 md:mb-8"
          >
            <Link 
              to="/projecten" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-brand-green transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              <span>Terug naar projecten</span>
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="bg-brand-green text-black px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 uppercase"
          >
            {project.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-brand-green" />
              <span className="text-sm">{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Calendar size={16} className="text-brand-green" />
              <span className="text-sm">{formatDate(project.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Ruler size={16} className="text-brand-green" />
              <span className="text-sm">{project.size}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Before/After Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14"
              >
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/80 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                      Voor
                    </span>
                  </div>
                  <img
                    src={project.imageBefore}
                    alt={`${project.title} - Voor`}
                    className="w-full aspect-[4/3] object-cover rounded-xl border border-slate-200"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-brand-green text-black px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                      Na
                    </span>
                  </div>
                  <img
                    src={project.imageAfter}
                    alt={`${project.title} - Na`}
                    className="w-full aspect-[4/3] object-cover rounded-xl border border-slate-200"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 md:mb-14"
              >
                <h2 className="text-2xl md:text-3xl font-heading text-slate-900 mb-6 uppercase tracking-tight">
                  Over dit project
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 md:mb-14"
              >
                <h2 className="text-2xl md:text-3xl font-heading text-slate-900 mb-6 uppercase tracking-tight">
                  Werkzaamheden
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={22} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-base md:text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-100"
              >
                <h3 className="text-xl md:text-2xl font-heading text-slate-900 mb-4 uppercase tracking-tight">
                  Ook een {project.category.toLowerCase()}?
                </h3>
                <p className="text-slate-600 mb-6">
                  Wij staan klaar om uw dakproject vakkundig uit te voeren. Neem contact op voor een vrijblijvende offerte.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <PrimaryFlipButton
                    label="Vraag offerte aan"
                    icon={<ArrowUpRight size={18} />}
                    onClick={() => navigate('/contact')}
                  />
                  <InversedFlipButton
                    label="Bel direct"
                    onClick={() => window.location.href = 'tel:+31612345678'}
                  />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 mb-6 sticky top-24"
              >
                <h3 className="text-lg font-heading mb-6 uppercase tracking-tight">Projectgegevens</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400 text-sm">Locatie</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400 text-sm">Datum</span>
                    <span className="font-medium">{formatDate(project.date)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400 text-sm">Oppervlakte</span>
                    <span className="font-medium">{project.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Type</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>
              </motion.div>

              {/* Other Projects */}
              {otherProjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
                >
                  <h3 className="text-lg font-heading text-slate-900 mb-6 uppercase tracking-tight">
                    Andere projecten
                  </h3>
                  <div className="space-y-4">
                    {otherProjects.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/project-${p.slug}`}
                        className="group flex gap-4 items-center"
                      >
                        <img
                          src={p.imageAfter}
                          alt={p.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium text-slate-900 group-hover:text-brand-green transition-colors text-sm">
                            {p.title}
                          </h4>
                          <span className="text-slate-500 text-xs">{p.location}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
