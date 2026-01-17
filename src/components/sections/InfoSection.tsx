import { InfoSectionData } from '@/types';
import { cn } from '@/lib/utils';

interface InfoSectionProps extends InfoSectionData {
  className?: string;
}

export function InfoSection({
  title,
  description,
  paragraphs,
  image,
  imageAlt = 'FEIGRO Dakwerken',
  imagePosition = 'right',
  className,
}: InfoSectionProps) {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32 px-4 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
            imagePosition === 'left' && 'lg:grid-flow-dense'
          )}
        >
          {/* Text Content */}
          <div className={cn(imagePosition === 'left' && 'lg:col-start-2')}>
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-feigro-grey mb-6 leading-relaxed">
                {description}
              </p>
            )}
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-feigro-grey leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={cn('relative', imagePosition === 'left' && 'lg:col-start-1')}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
