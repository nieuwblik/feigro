import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { projectsList } from '@/data/projects';
export const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredProjects = projectsList.slice(0, 4);
  const nextProject = () => {
    setActiveIndex(prev => (prev + 1) % featuredProjects.length);
  };
  const prevProject = () => {
    setActiveIndex(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };
  return <section className="py-20 md:py-28 lg:py-36 overflow-hidden relative bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">
                VAKMANSCHAP
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase mb-4">
              Recente <span className="text-brand-green italic">Projecten</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-xl font-light">
              Ontdek onze gerealiseerde dakprojecten in Noord-Holland, Flevoland en Utrecht.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1} className="mt-6 lg:mt-0">
            <Link to="/projecten">
              <PrimaryFlipButton label="Alle projecten" icon={<ArrowRight />} />
            </Link>
          </FadeIn>
        </div>

        {/* Main Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          
          {/* Featured Project - Large */}
          <FadeIn className="lg:col-span-7 xl:col-span-8">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial={{
                opacity: 0,
                scale: 0.98
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.98
              }} transition={{
                duration: 0.5,
                ease: "easeOut"
              }}>
                  <Link to={`/projecten/${featuredProjects[activeIndex].slug}`} className="group block relative aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden">
                    {/* Image */}
                    <img src={featuredProjects[activeIndex].imageAfter} alt={featuredProjects[activeIndex].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                      {/* Category */}
                      <span className="inline-flex self-start px-3 py-1.5 bg-brand-green text-slate-900 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        {featuredProjects[activeIndex].category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white uppercase tracking-tight mb-3 group-hover:text-brand-green transition-colors">
                        {featuredProjects[activeIndex].title}
                      </h3>
                      
                      {/* Location & Size */}
                      <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{featuredProjects[activeIndex].location}</span>
                        </div>
                        <span className="text-white/40">•</span>
                        <span>{featuredProjects[activeIndex].size}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/60 text-sm md:text-base font-light line-clamp-2 max-w-xl">
                        {featuredProjects[activeIndex].shortDescription}
                      </p>
                      
                      {/* CTA */}
                      <div className="mt-6 flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Bekijk project</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-2 z-10">
                <button onClick={e => {
                e.preventDefault();
                prevProject();
              }} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-brand-green hover:text-slate-900 hover:border-brand-green transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={e => {
                e.preventDefault();
                nextProject();
              }} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-brand-green hover:text-slate-900 hover:border-brand-green transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </FadeIn>
          
          {/* Project Thumbnails - Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {featuredProjects.map((project, index) => <FadeIn key={project.slug} delay={index * 0.1}>
                  <button onClick={() => setActiveIndex(index)} className={`group w-full text-left p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 ${index === activeIndex ? 'bg-slate-900 border-slate-900' : 'bg-slate-50 border-slate-200 hover:border-brand-green/30 hover:bg-slate-100'}`}>
                    <div className="flex items-start gap-3 md:gap-4">
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden shrink-0">
                        <img src={project.imageAfter} alt={project.title} className="w-full h-full object-cover" />
                        {index === activeIndex && <div className="absolute inset-0 bg-brand-green/20 border-2 border-brand-green rounded-lg md:rounded-xl" />}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${index === activeIndex ? 'text-brand-green' : 'text-slate-400'}`}>
                          {project.category}
                        </span>
                        <h4 className={`text-sm md:text-base font-heading uppercase tracking-tight truncate mt-1 ${index === activeIndex ? 'text-white' : 'text-slate-900'}`}>
                          {project.location}
                        </h4>
                        <div className={`flex items-center gap-1 mt-1 text-xs ${index === activeIndex ? 'text-white/60' : 'text-slate-500'}`}>
                          <MapPin size={10} />
                          <span>{project.size}</span>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <ArrowRight size={16} className={`shrink-0 transition-all ${index === activeIndex ? 'text-brand-green' : 'text-slate-300 group-hover:text-brand-green group-hover:translate-x-1'}`} />
                    </div>
                  </button>
                </FadeIn>)}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <FadeIn delay={0.3} className="mt-8 md:mt-12">
          <div className="flex items-center justify-center gap-2">
            {featuredProjects.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-brand-green' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />)}
          </div>
        </FadeIn>
      </div>
    </section>;
};