import * as LucideIcons from 'lucide-react';
import { FeatureItem } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureGridProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FeatureGrid({ features, title, subtitle, className }: FeatureGridProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  return (
    <section className={cn('py-24 md:py-32 px-4 md:px-6 bg-white', className)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-left mb-20 md:mb-24">
            {title && (
              <h2 className="text-4xl md:text-6xl font-heading text-slate-900 mb-6 uppercase tracking-tighter">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white border border-slate-200 p-8 md:p-10 rounded-[1.25rem] overflow-hidden hover:border-brand-green/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8 md:mb-10 text-brand-green w-10 h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-lg md:text-xl font-heading text-slate-900 mb-3 md:mb-4 tracking-tight uppercase group-hover:text-brand-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light mb-6 md:mb-8 flex-grow">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors mt-auto pt-4 md:pt-6 border-t border-slate-100">
                  Meer Info
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
