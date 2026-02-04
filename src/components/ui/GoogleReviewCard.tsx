import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

interface GoogleReviewCardProps {
  companyName: string;
  rating: number;
  reviewCount: string | number;
  googleUrl: string;
  className?: string;
}

export const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({
  companyName,
  rating,
  reviewCount,
  googleUrl,
  className,
}) => {
  return (
    <a
      href={googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block bg-white border border-slate-200 rounded-xl p-5 md:p-6 hover:border-brand-green/30 hover:-translate-y-2 transition-all duration-500",
        className
      )}
    >
      {/* Header with Google Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
            <GoogleIcon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Google Reviews</p>
            <p className="text-sm font-heading text-slate-900 uppercase">{companyName}</p>
          </div>
        </div>
        <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-green transition-colors" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl md:text-4xl font-heading text-slate-900">{rating.toFixed(1)}</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={cn(
                i < Math.floor(rating) ? "text-[#FBBC05] fill-[#FBBC05]" : "text-slate-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* Review Count */}
      <p className="text-sm text-slate-500">
        Gebaseerd op <span className="font-bold text-slate-700">{reviewCount}</span> reviews
      </p>

      {/* CTA */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-brand-green transition-colors">
        Bekijk Reviews <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </a>
  );
};
