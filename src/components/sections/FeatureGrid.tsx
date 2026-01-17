import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureItem } from '@/types';
import { cn } from '@/lib/utils';

interface FeatureGridProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FeatureGrid({ features, title, subtitle, className }: FeatureGridProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8 text-feigro-accent" /> : null;
  };

  return (
    <section className={cn('py-16 md:py-24 lg:py-32 px-4 bg-white', className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-feigro-grey max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-feigro-grey/20 hover:border-feigro-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4">{getIcon(feature.icon)}</div>
                <CardTitle className="text-xl font-semibold text-feigro-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-feigro-grey leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
