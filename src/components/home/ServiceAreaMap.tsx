import React from 'react';
import { MapPin } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';

interface ServiceAreaMapProps {
  variant?: 'light' | 'dark';
  showTitle?: boolean;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ 
  variant = 'light',
  showTitle = true 
}) => {
  const isDark = variant === 'dark';
  
  const regions = [
    { name: 'Noord-Holland', position: { top: '28%', left: '42%' } },
    { name: 'Flevoland', position: { top: '42%', left: '58%' } },
    { name: 'Utrecht', position: { top: '52%', left: '48%' } },
  ];

  return (
    <div className={`relative rounded-2xl overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-slate-50'} border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
      {showTitle && (
        <FadeIn>
          <div className="p-6 md:p-8 pb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-[10px] uppercase tracking-[0.3em]">
                Werkgebied
              </span>
            </div>
            <h3 className={`text-2xl md:text-3xl font-heading uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Actief in <span className="text-brand-green italic">3 Provincies</span>
            </h3>
          </div>
        </FadeIn>
      )}
      
      <div className="relative p-6 md:p-8">
        {/* Simplified Netherlands SVG Map */}
        <div className="relative aspect-[3/4] max-w-[300px] mx-auto">
          <svg
            viewBox="0 0 200 260"
            className="w-full h-full"
            aria-label="Kaart van Nederland met werkgebied"
          >
            {/* Netherlands outline - simplified */}
            <path
              d="M85 10 L115 8 L130 15 L145 12 L160 20 L165 35 L170 50 L175 70 L180 90 L178 110 L175 130 L170 150 L160 170 L145 185 L130 195 L115 200 L100 210 L85 220 L70 230 L55 235 L40 230 L30 215 L25 195 L30 175 L35 155 L45 135 L50 115 L55 95 L60 75 L65 55 L70 35 L75 20 Z"
              className={`${isDark ? 'fill-slate-800 stroke-slate-700' : 'fill-slate-200 stroke-slate-300'}`}
              strokeWidth="1"
            />
            
            {/* Noord-Holland region */}
            <path
              d="M70 35 L95 30 L115 35 L125 45 L130 60 L125 80 L115 95 L100 100 L85 95 L70 85 L60 70 L55 55 L60 40 Z"
              className="fill-brand-green/30 stroke-brand-green"
              strokeWidth="2"
            />
            
            {/* Flevoland region */}
            <path
              d="M115 70 L140 65 L155 75 L160 95 L155 115 L140 125 L120 120 L110 105 L108 85 Z"
              className="fill-brand-green/30 stroke-brand-green"
              strokeWidth="2"
            />
            
            {/* Utrecht region */}
            <path
              d="M95 110 L115 105 L130 115 L135 135 L125 150 L105 155 L90 145 L85 125 Z"
              className="fill-brand-green/30 stroke-brand-green"
              strokeWidth="2"
            />
            
            {/* Location markers */}
            <circle cx="90" cy="65" r="4" className="fill-brand-green" />
            <circle cx="135" cy="95" r="4" className="fill-brand-green" />
            <circle cx="110" cy="130" r="4" className="fill-brand-green" />
          </svg>
          
          {/* Region labels */}
          {regions.map((region, index) => (
            <div
              key={region.name}
              className="absolute flex items-center gap-1.5"
              style={{ top: region.position.top, left: region.position.left, transform: 'translate(-50%, -50%)' }}
            >
              <MapPin size={14} className="text-brand-green" />
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {region.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <FadeIn delay={0.1}>
          <div className={`mt-8 pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} grid grid-cols-3 gap-4 text-center`}>
            <div>
              <p className="text-brand-green text-2xl md:text-3xl font-heading tracking-tight">3</p>
              <p className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Provincies</p>
            </div>
            <div>
              <p className="text-brand-green text-2xl md:text-3xl font-heading tracking-tight">50+</p>
              <p className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Gemeenten</p>
            </div>
            <div>
              <p className="text-brand-green text-2xl md:text-3xl font-heading tracking-tight">1u</p>
              <p className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Responstijd</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
