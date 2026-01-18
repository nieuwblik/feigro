import { InfoSectionData } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InfoSectionProps extends InfoSectionData {
  className?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

export function InfoSection({
  title,
  description,
  paragraphs,
  image = "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop",
  imageAlt = 'FEIGRO Dakwerken',
  imagePosition = 'right',
  className,
}: InfoSectionProps) {
  return (
    <section className={cn('py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden', className)}>
      <div className="container mx-auto">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center',
            imagePosition === 'left' && 'lg:grid-flow-dense'
          )}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'right' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(imagePosition === 'left' && 'lg:col-start-2')}
          >
            <h2 className="text-4xl md:text-6xl font-heading text-slate-900 mb-10 tracking-tighter leading-none uppercase">
              {title}
            </h2>
            {description && (
              <p className="text-xl md:text-2xl text-brand-green italic mb-8 font-light">
                {description}
              </p>
            )}
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-slate-600 leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn('relative', imagePosition === 'left' && 'lg:col-start-1')}
          >
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-slate-200 group shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
            {/* Visual Accent */}
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-brand-green/10 blur-[120px] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
