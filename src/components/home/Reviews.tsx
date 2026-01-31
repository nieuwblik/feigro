import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';

interface Review {
  name: string;
  initial: string;
  rating: number;
  timeAgo: string;
  text: string;
  bgColor: string;
}

const reviews: Review[] = [
  {
    name: 'Weijke Koopmans',
    initial: 'W',
    rating: 5,
    timeAgo: 'een maand geleden',
    text: 'Al jaren heb ik last van moeilijk op te lossen lekkages. Geen water, maar vieze vochtplekken. Uiteindelijk bij Tom terecht gekomen, hij kwam snel, is vriendelijk en gaf goed advies. Samen hebben we alles doorgenomen en nog eens goed gekeken. Nu duimen dat het hiermee opgelost is....',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Astrid Kruijer',
    initial: 'A',
    rating: 5,
    timeAgo: '4 maanden geleden',
    text: 'Mijn 28 jaar oude platte dak vertoonde lekkage. Feitsma Dakwerken gebeld en het probleem werd snel opgelost. Tom gaf mij wel het advies om na te denken over nieuwe dakbedekking. Dat gaat binnenkort gebeuren. Ik ben blij dat hij actief meedenkt, tot zover ben ik heel tevreden over Feitsma Dakwerken.',
    bgColor: 'bg-brand-green',
  },
  {
    name: 'RDL',
    initial: 'R',
    rating: 5,
    timeAgo: '3 maanden geleden',
    text: 'Snel en professioneel voor een goede prijs. Binnen een dag na bellen was mijn lekkage opgelost. Ik kan niet veel anders zeggen dan dat ik precies heb gekregen waar ik om vroeg zonder gedoe!',
    bgColor: 'bg-slate-600',
  },
  {
    name: 'Karin Tol',
    initial: 'K',
    rating: 5,
    timeAgo: '11 maanden geleden',
    text: 'Fijn persoonlijk contact en professionele uitvoering',
    bgColor: 'bg-purple-600',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-300 text-slate-300'}`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review, index }: { review: Review; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white border border-slate-200 rounded-lg p-5 md:p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${review.bgColor} flex items-center justify-center text-white font-bold text-lg`}>
        {review.initial}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-slate-900 text-sm md:text-base truncate">{review.name}</p>
        <p className="text-slate-500 text-xs">{review.timeAgo}</p>
      </div>
    </div>
    
    <div className="mb-3">
      <StarRating rating={review.rating} />
    </div>
    
    <p className="text-slate-600 text-sm leading-relaxed flex-1">{review.text}</p>
    
    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <span className="text-xs text-slate-500">Google Review</span>
    </div>
  </motion.div>
);

export const Reviews = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">
                REVIEWS
              </span>
              <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-heading text-slate-900 leading-[0.9] tracking-tighter mb-4 md:mb-6 uppercase">
              Wat onze klanten <br className="hidden sm:block" /><span className="text-brand-green italic">zeggen</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light">
              Ontdek waarom klanten kiezen voor FEIGRO Dakwerken
            </p>
          </FadeIn>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* Google Rating Summary */}
        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-900 text-lg md:text-xl">5.0</span>
                  <StarRating rating={5} />
                </div>
                <p className="text-slate-500 text-xs md:text-sm">Gebaseerd op Google Reviews</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
