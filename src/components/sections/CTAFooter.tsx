import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAFooterProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function CTAFooter({
  title = 'Klaar om uw dak te laten renoveren?',
  description = 'Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Onze experts staan voor u klaar.',
  primaryCTA = {
    text: 'Vraag offerte aan',
    href: '/contact',
  },
  secondaryCTA = {
    text: 'Spoedservice 24/7',
    href: '/spoedservice',
  },
  className,
}: CTAFooterProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-feigro-accent', className)}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-feigro-accent hover:bg-white/90 text-lg px-8"
          >
            <Link to={primaryCTA.href} className="flex items-center space-x-2">
              <span>{primaryCTA.text}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-feigro-accent text-lg px-8"
          >
            <Link to={secondaryCTA.href} className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>{secondaryCTA.text}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
