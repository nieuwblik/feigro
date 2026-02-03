// Reviews Component with Schema.org Structured Data
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReviewItem, AggregateRatingData } from '@/types/seo';
import { 
  generateAggregateRatingSchema, 
  generateReviewsSchema,
  generateLocalBusinessSchema
} from '@/lib/structured-data';

interface ReviewsWithSchemaProps {
  reviews: ReviewItem[];
  businessName?: string;
  className?: string;
  showAggregate?: boolean;
}

export function ReviewsWithSchema({
  reviews,
  businessName = 'FEIGRO Dakwerken',
  className,
  showAggregate = true
}: ReviewsWithSchemaProps) {
  if (!reviews || reviews.length === 0) return null;

  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.ratingValue, 0);
  const averageRating = totalRating / reviews.length;
  
  const aggregateData: AggregateRatingData = {
    ratingValue: Math.round(averageRating * 10) / 10,
    bestRating: 5,
    worstRating: 1,
    ratingCount: reviews.length,
    reviewCount: reviews.length
  };

  // Generate JSON-LD schema
  const localBusiness = generateLocalBusinessSchema();
  const aggregateRating = generateAggregateRatingSchema(aggregateData);
  const reviewSchemas = generateReviewsSchema(reviews);

  const schema = {
    ...localBusiness,
    aggregateRating,
    review: reviewSchemas
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <section className={cn('py-12 md:py-16', className)}>
        <div className="container mx-auto px-4 md:px-6">
          {/* Aggregate Rating Display */}
          {showAggregate && (
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-2">
                <StarRating rating={aggregateData.ratingValue} size="lg" />
                <span className="text-2xl font-bold text-slate-900">
                  {aggregateData.ratingValue.toFixed(1)}
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Gebaseerd op {aggregateData.ratingCount} reviews voor {businessName}
              </p>
            </div>
          )}

          {/* Individual Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Star Rating Component
interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StarRating({ rating, size = 'md', className }: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div 
      className={cn('inline-flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${rating} van 5 sterren`}
    >
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star 
          key={`full-${i}`} 
          className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')}
        />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <Star className={cn(sizeClasses[size], 'text-slate-300')} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={cn(sizeClasses[size], 'fill-yellow-400 text-yellow-400')} />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star 
          key={`empty-${i}`} 
          className={cn(sizeClasses[size], 'text-slate-300')}
        />
      ))}
      
      {/* Screen reader text */}
      <span className="sr-only">{rating} van 5 sterren</span>
    </div>
  );
}

// Individual Review Card
interface ReviewCardProps {
  review: ReviewItem;
}

function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = new Date(review.datePublished).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.ratingValue} />
        <time dateTime={review.datePublished} className="text-xs text-slate-500">
          {formattedDate}
        </time>
      </div>
      
      <blockquote className="text-slate-700 mb-4 line-clamp-4">
        "{review.reviewBody}"
      </blockquote>
      
      <footer className="text-sm font-medium text-slate-900">
        — {review.author}
      </footer>
    </article>
  );
}

export default ReviewsWithSchema;
