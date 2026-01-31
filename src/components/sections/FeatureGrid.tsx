import * as LucideIcons from 'lucide-react';
import { FeatureItem } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface FeatureGridProps {
  features: FeatureItem[];
  title?: string;
  titleHighlight?: string; // Word(s) to highlight in green italic
  subtitle?: string;
  className?: string;
}

export function FeatureGrid({ features, title, titleHighlight, subtitle, className }: FeatureGridProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  // Render title with optional highlighted word
  const renderTitle = () => {
    if (!title) return null;
    if (!titleHighlight) return title;
    
    const parts = title.split(titleHighlight);
    if (parts.length === 1) return title;
    
    return (
      <>
        {parts[0]}
        <span className="text-brand-green italic">{titleHighlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={cn('py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white', className)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-left mb-12 md:mb-20 lg:mb-24">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-4 md:mb-6 uppercase tracking-tighter">
                {renderTitle()}
              </h2>
            )}
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl font-light">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white border border-slate-200 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-[1.25rem] overflow-hidden hover:border-brand-green/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6 md:mb-8 lg:mb-10 text-brand-green w-8 h-8 md:w-10 md:h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-heading text-slate-900 mb-2 md:mb-3 lg:mb-4 tracking-tight uppercase group-hover:text-brand-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light flex-grow">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
