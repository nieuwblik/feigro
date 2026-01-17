import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroData } from '@/types';
import { cn } from '@/lib/utils';

interface HeroSectionProps extends HeroData {
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  backgroundClass = 'bg-gradient-to-br from-feigro-dark to-feigro-dark/80',
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-28 lg:py-36 px-4',
        backgroundClass,
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(46, 56, 63, 0.85), rgba(46, 56, 63, 0.85)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-feigro-grey mb-8 leading-relaxed">
            {subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-feigro-accent hover:bg-feigro-accent/90 text-white text-lg px-8"
          >
            <Link to={ctaHref} className="flex items-center space-x-2">
              <span>{ctaText}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
