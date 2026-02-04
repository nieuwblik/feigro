// Related Content Component for Internal Linking
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RelatedContentItem } from '@/types/seo';

interface RelatedContentProps {
  items: RelatedContentItem[];
  title?: string;
  className?: string;
}

export function RelatedContent({
  items,
  title = 'Gerelateerde pagina\'s',
  className
}: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={cn('py-12 md:py-16', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-slate-900 mb-8 uppercase tracking-tighter">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 5).map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="group block p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-brand-green/30 hover:bg-white transition-all duration-300"
            >
              <h3 className="text-lg font-heading text-slate-900 group-hover:text-brand-green transition-colors mb-2 uppercase">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-green">
                Lees meer
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedContent;
