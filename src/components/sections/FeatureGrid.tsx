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
    return IconComponent ? <IconComponent size={32} className="text-black" /> : null;
  };

  return (
    <section className={cn('py-24 md:py-32 px-6 bg-white', className)}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-slate-50 border border-slate-200 p-10 md:p-12 rounded-[2.5rem] overflow-hidden hover:border-brand-green/30 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-brand-green/20">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-2xl font-heading text-slate-900 mb-6 tracking-tight uppercase">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 via-transparent to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
