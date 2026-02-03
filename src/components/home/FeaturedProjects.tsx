import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { projectsList } from '@/data/projects';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const FeaturedProjects = () => {
  const featuredProjects = projectsList.slice(0, 4);

  return (
    <section className="py-20 md:py-28 lg:py-36 overflow-hidden relative bg-slate-100">
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
          
          <FadeIn delay={0.1} className="mt-6 lg:mt-0 hidden md:block">
            <Link 
              to="/projecten"
              className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider hover:text-brand-green transition-colors group"
            >
              <span>Bekijk alle projecten</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Mobile: Vertical Cards Layout */}
        <div className="flex flex-col gap-6 md:hidden">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link 
                to={`/projecten/${project.slug}`} 
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 active:scale-[0.98] active:shadow-xl transition-all duration-200"
              >
                {/* Image with 16:9 aspect ratio */}
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={project.imageAfter} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </AspectRatio>
                  
                  {/* Category Badge on image */}
                  <span className="absolute top-3 left-3 px-3 py-1.5 bg-brand-green text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-lg font-heading text-slate-900 uppercase tracking-tight mb-2 group-active:text-brand-green transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Location & Size */}
                  <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span>{project.size}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm font-light line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>
                  
                  {/* CTA - Always visible on mobile */}
                  <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider">
                    <span>Bekijk project</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
          
          {/* Mobile CTA */}
          <FadeIn delay={0.4} className="mt-4">
            <Link 
              to="/projecten"
              className="group flex items-center justify-center gap-2 w-full py-4 bg-brand-green text-feigro-dark font-bold text-sm uppercase tracking-wider rounded-xl active:scale-[0.98] transition-all duration-300 hover:bg-feigro-dark hover:text-white"
            >
              <span>Bekijk alle projecten</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link 
                to={`/projecten/${project.slug}`} 
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image with 16:9 aspect ratio */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={project.imageAfter} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </AspectRatio>
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1.5 bg-brand-green text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-heading text-slate-900 uppercase tracking-tight mb-2 group-hover:text-brand-green transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                    <span className="text-slate-300">•</span>
                    <span>{project.size}</span>
                  </div>
                  
                  <p className="text-slate-600 text-sm font-light line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Bekijk project</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
