import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { GOOGLE_BUSINESS_PROFILE_URL } from '@/lib/business-profile';

interface Review {
  name: string;
  initial: string;
  meta: string;
  timeAgo: string;
  text: string;
  avatarColor: string;
}

const compactReviews: Review[] = [
  {
    name: 'Baran Akylol',
    initial: 'B',
    meta: '6 reviews',
    timeAgo: 'een uur geleden',
    text: 'Goede samenwerking en communicatie.',
    avatarColor: 'bg-feigro-accent',
  },
  {
    name: 'Denise Berkhout',
    initial: 'D',
    meta: '3 reviews · 2 foto\'s',
    timeAgo: 'een uur geleden',
    text: 'Seriouze mensen, snelle reactie en snelle actie. Toppers!',
    avatarColor: 'bg-feigro-dark',
  },
  {
    name: 'Tülin Şahan',
    initial: 'T',
    meta: '3 reviews · 2 foto\'s',
    timeAgo: '2 uur geleden',
    text: 'Zeer tevreden over de vaklui van Feigro. Snelle reactie, fijn contact en snel ter plaatse. Gaan vakkundig te werk. Ik zou dit bedrijf zeker aanraden. Fam. Sahan',
    avatarColor: 'bg-feigro-grey',
  },
];

const featuredReview = {
  name: 'Mohammed Elfarissi',
  initial: 'M',
  avatarColor: 'bg-brand-green',
  meta: '5 reviews · 6 foto\'s',
  timeAgo: '2 uur geleden',
  text: 'Wij zijn ontzettend tevreden over het werk van Feigro Dakwerken!\n\nNa veel ellende met lekkages op ons platte dak van maar liefst 200 m² heeft Feigro Dakwerken het probleem eindelijk goed opgelost. Ze hebben het dak vakkundig geïsoleerd en vervolgens opnieuw voorzien van een mooie, nieuwe gebrande bitumen dakbedekking.\n\nHet dak is weer helemaal lekvrij en ziet er prachtig uit! Er is netjes en professioneel gewerkt en het resultaat mag er zeker zijn.\n\nNa alle problemen die we hebben gehad, zijn we ontzettend blij dat we weer een goed en waterdicht dak boven ons hoofd hebben.\n\nFeigro Dakwerken is absoluut een aanrader! Bedankt voor het vakwerk en de goede service!',
  priceNote: 'Goede prijs',
};

const StarRating = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${className} fill-amber-400 text-amber-400`}
      />
    ))}
  </div>
);

const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const ReviewerMeta = ({ review, light = false }: { review: Review; light?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full ${review.avatarColor} flex items-center justify-center text-feigro-white font-bold text-lg shrink-0`}>
      {review.initial}
    </div>
    <div className="min-w-0">
      <p className={`font-heading text-sm md:text-base uppercase tracking-tight truncate ${light ? 'text-feigro-white' : 'text-slate-900'}`}>
        {review.name}
      </p>
      <p className={`text-xs ${light ? 'text-feigro-white/60' : 'text-slate-400'}`}>
        {review.meta} · {review.timeAgo}
      </p>
    </div>
  </div>
);

const CompactReviewCard = ({ review, index }: { review: Review; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-feigro-white border border-slate-200 rounded-xl p-5 md:p-7 flex flex-col h-full hover:-translate-y-2 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-500 group"
  >
    <div className="flex items-start justify-between gap-3 mb-5">
      <ReviewerMeta review={review} />
      <GoogleG className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
    </div>

    <StarRating />

    <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4 flex-1">
      "{review.text}"
    </p>

    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5">
      <GoogleG className="w-3.5 h-3.5" />
      <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
        Geplaatst op Google
      </span>
    </div>
  </motion.div>
);

export const Reviews = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-feigro-white overflow-hidden relative">
      {/* Ambient accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.35em]">
                  Reviews
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.95] tracking-tighter uppercase">
                Wat klanten zeggen <br className="hidden sm:block" />
                over <span className="text-brand-green italic">Feigro</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 hover:border-brand-green/40 hover:shadow-lg hover:shadow-brand-green/10 hover:-translate-y-1 transition-all duration-500"
            >
              <GoogleG className="w-9 h-9 md:w-10 md:h-10" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading text-2xl md:text-3xl text-slate-900 tracking-tight">5,0</span>
                  <StarRating />
                </div>
                <p className="text-slate-500 text-xs md:text-sm mt-0.5">Gebaseerd op Google Reviews</p>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Grid: featured review + Google CTA card, then compact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Featured review */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative bg-feigro-dark rounded-xl p-6 md:p-10 lg:p-12 overflow-hidden flex flex-col"
          >
            <div className="absolute -top-6 right-8 text-brand-green/10">
              <Quote size={140} fill="currentColor" className="rotate-180" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between gap-3 mb-5">
                <StarRating className="w-5 h-5" />
                <span className="inline-flex items-center gap-1.5 bg-brand-green/15 text-brand-green text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-green/30">
                  Prijsbeoordeling: {featuredReview.priceNote}
                </span>
              </div>

              <p className="text-feigro-white/85 text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre-line font-light flex-1">
                {featuredReview.text}
              </p>

              <div className="mt-8 pt-6 border-t border-feigro-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <ReviewerMeta review={featuredReview as unknown as Review} light />
                <div className="flex items-center gap-2">
                  <GoogleG className="w-4 h-4" />
                  <span className="text-[11px] text-feigro-white/50 font-medium uppercase tracking-wider">
                    Geplaatst op Google
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google rating / CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-xl overflow-hidden bg-gradient-to-br from-brand-green/10 via-slate-50 to-feigro-white border border-brand-green/20 p-6 md:p-10 flex flex-col items-center justify-center text-center"
          >
            <GoogleG className="w-12 h-12 md:w-14 md:h-14 mb-5" />

            <span className="font-heading text-5xl md:text-6xl text-slate-900 tracking-tight">5,0</span>

            <div className="mt-3">
              <StarRating className="w-6 h-6" />
            </div>

            <p className="text-slate-500 text-sm mt-3 max-w-[220px]">
              Onze klanten waarderen ons met een 5,0 op Google
            </p>

            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-feigro-dark text-feigro-white font-heading text-sm uppercase tracking-wide px-6 py-3.5 rounded-lg hover:bg-brand-green transition-colors duration-300 active:scale-95"
            >
              Plaats een review
            </a>
          </motion.div>

          {/* Compact reviews */}
          {compactReviews.map((review, index) => (
            <CompactReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
