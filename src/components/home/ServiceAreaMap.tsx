import React, { useState } from 'react';
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
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

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
        {/* Netherlands SVG Map - Accurate outline */}
        <div className="relative aspect-[3/4] max-w-[280px] mx-auto">
          <svg
            viewBox="0 0 200 260"
            className="w-full h-full"
            aria-label="Kaart van Nederland met werkgebied"
          >
            {/* Netherlands accurate outline */}
            <path
              d="M85 8 L88 5 L95 8 L98 5 L102 8 L108 5 L115 10 L118 8 L125 12 L130 10 L138 15 L145 12 L152 18 L158 15 L165 22 L170 20 L175 28 L178 32 L180 40 L182 48 L183 55 L182 62 L180 70 L178 78 L175 85 L172 92 L168 100 L165 108 L162 115 L158 122 L155 130 L152 138 L150 145 L148 152 L147 160 L148 168 L150 175 L152 182 L155 188 L158 195 L160 202 L162 210 L163 218 L162 225 L160 232 L156 238 L152 242 L148 245 L142 248 L138 250 L132 252 L128 250 L122 248 L118 245 L115 240 L112 235 L108 230 L105 225 L100 220 L95 218 L90 220 L85 225 L80 228 L75 225 L70 220 L65 215 L60 210 L55 205 L50 200 L45 195 L42 188 L40 180 L38 172 L35 165 L32 158 L30 150 L28 142 L25 135 L22 128 L20 120 L18 112 L15 105 L12 98 L10 90 L12 82 L15 75 L18 68 L22 62 L28 55 L35 48 L42 42 L50 35 L58 28 L65 22 L72 15 L78 10 Z"
              className={`${isDark ? 'fill-slate-800 stroke-slate-600' : 'fill-slate-100 stroke-slate-300'} transition-colors duration-300`}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            
            {/* Waddeneilanden */}
            <ellipse cx="78" cy="12" rx="8" ry="3" className={`${isDark ? 'fill-slate-700 stroke-slate-600' : 'fill-slate-200 stroke-slate-300'}`} strokeWidth="1" />
            <ellipse cx="95" cy="8" rx="6" ry="2" className={`${isDark ? 'fill-slate-700 stroke-slate-600' : 'fill-slate-200 stroke-slate-300'}`} strokeWidth="1" />
            <ellipse cx="110" cy="6" rx="8" ry="3" className={`${isDark ? 'fill-slate-700 stroke-slate-600' : 'fill-slate-200 stroke-slate-300'}`} strokeWidth="1" />
            
            {/* Noord-Holland - Active region */}
            <path
              d="M35 48 L42 42 L50 38 L58 35 L65 40 L70 48 L72 58 L70 68 L65 78 L58 88 L50 95 L42 100 L35 95 L30 88 L28 78 L30 68 L32 58 L35 48 Z"
              className={`${hoveredRegion === 'noord-holland' ? 'fill-brand-green/70' : 'fill-brand-green/40'} stroke-brand-green transition-all duration-300 cursor-pointer`}
              strokeWidth="2"
              onMouseEnter={() => setHoveredRegion('noord-holland')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Flevoland - Active region */}
            <path
              d="M72 58 L82 52 L95 55 L105 62 L108 72 L105 82 L95 90 L82 92 L72 88 L68 78 L70 68 L72 58 Z"
              className={`${hoveredRegion === 'flevoland' ? 'fill-brand-green/70' : 'fill-brand-green/40'} stroke-brand-green transition-all duration-300 cursor-pointer`}
              strokeWidth="2"
              onMouseEnter={() => setHoveredRegion('flevoland')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Utrecht - Active region */}
            <path
              d="M50 95 L62 92 L75 95 L85 102 L88 112 L85 122 L75 128 L62 130 L50 125 L45 115 L48 105 L50 95 Z"
              className={`${hoveredRegion === 'utrecht' ? 'fill-brand-green/70' : 'fill-brand-green/40'} stroke-brand-green transition-all duration-300 cursor-pointer`}
              strokeWidth="2"
              onMouseEnter={() => setHoveredRegion('utrecht')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Location markers with subtle pulse */}
            <g className="pointer-events-none">
              <circle cx="50" cy="70" r="4" className={`fill-brand-green ${hoveredRegion === 'noord-holland' ? 'opacity-100' : 'opacity-70'} transition-opacity`} />
              <circle cx="88" cy="72" r="4" className={`fill-brand-green ${hoveredRegion === 'flevoland' ? 'opacity-100' : 'opacity-70'} transition-opacity`} />
              <circle cx="68" cy="110" r="4" className={`fill-brand-green ${hoveredRegion === 'utrecht' ? 'opacity-100' : 'opacity-70'} transition-opacity`} />
            </g>
          </svg>
          
          {/* Region labels */}
          <div 
            className={`absolute flex items-center gap-1.5 transition-all duration-300 ${hoveredRegion === 'noord-holland' ? 'scale-110' : ''}`}
            style={{ top: '28%', left: '22%', transform: 'translate(-50%, -50%)' }}
          >
            <MapPin size={12} className="text-brand-green" />
            <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Noord-Holland
            </span>
          </div>
          <div 
            className={`absolute flex items-center gap-1.5 transition-all duration-300 ${hoveredRegion === 'flevoland' ? 'scale-110' : ''}`}
            style={{ top: '30%', left: '62%', transform: 'translate(-50%, -50%)' }}
          >
            <MapPin size={12} className="text-brand-green" />
            <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Flevoland
            </span>
          </div>
          <div 
            className={`absolute flex items-center gap-1.5 transition-all duration-300 ${hoveredRegion === 'utrecht' ? 'scale-110' : ''}`}
            style={{ top: '46%', left: '40%', transform: 'translate(-50%, -50%)' }}
          >
            <MapPin size={12} className="text-brand-green" />
            <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Utrecht
            </span>
          </div>
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
