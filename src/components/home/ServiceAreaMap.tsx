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
        {/* Netherlands SVG Map - Accurate shape */}
        <div className="relative aspect-[4/5] max-w-[320px] mx-auto">
          <svg
            viewBox="0 0 300 380"
            className="w-full h-full"
            aria-label="Kaart van Nederland met werkgebied"
          >
            {/* Netherlands outline - accurate simplified shape */}
            <path
              d="M150 15 C180 12, 210 20, 235 35 C255 50, 270 75, 275 100 C280 130, 278 160, 270 190 C260 220, 245 250, 225 275 C205 300, 180 320, 150 340 C120 355, 85 360, 55 350 C35 342, 20 325, 15 300 C10 275, 15 245, 25 215 C35 185, 50 155, 65 125 C80 95, 100 65, 125 40 C140 25, 145 17, 150 15 Z"
              className={`${isDark ? 'fill-slate-800 stroke-slate-700' : 'fill-slate-200 stroke-slate-300'} transition-colors duration-300`}
              strokeWidth="2"
            />
            
            {/* Groningen */}
            <path
              d="M180 35 C200 30, 220 40, 235 55 C245 70, 250 90, 245 105 C235 115, 215 118, 195 115 C175 112, 165 100, 165 80 C165 60, 170 40, 180 35 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Friesland */}
            <path
              d="M100 40 C120 35, 155 38, 165 55 C175 70, 170 90, 160 105 C145 115, 120 118, 95 110 C70 100, 65 80, 70 60 C75 45, 85 42, 100 40 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Drenthe */}
            <path
              d="M160 105 C180 100, 205 105, 220 120 C235 140, 235 165, 220 185 C200 195, 170 195, 155 180 C140 165, 140 140, 150 120 C155 110, 158 107, 160 105 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Overijssel */}
            <path
              d="M180 185 C210 180, 240 195, 255 220 C265 245, 255 270, 230 280 C200 285, 170 275, 160 250 C150 225, 160 195, 180 185 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Gelderland */}
            <path
              d="M150 250 C175 240, 210 250, 235 275 C255 300, 250 330, 220 345 C185 355, 145 345, 130 320 C115 295, 125 265, 150 250 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Noord-Brabant */}
            <path
              d="M80 300 C110 290, 150 295, 175 315 C195 335, 195 360, 170 375 C140 385, 100 380, 75 360 C55 340, 55 315, 80 300 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Limburg */}
            <path
              d="M195 340 C215 330, 240 340, 255 365 C265 390, 255 415, 235 425 C210 432, 185 420, 180 395 C175 370, 180 350, 195 340 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
              transform="translate(-15, -60) scale(0.85)"
            />
            
            {/* Zeeland */}
            <path
              d="M25 310 C45 300, 75 305, 85 325 C95 345, 85 365, 60 370 C35 375, 15 360, 15 340 C15 320, 20 312, 25 310 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Zuid-Holland */}
            <path
              d="M45 220 C70 210, 100 215, 115 240 C130 265, 125 295, 100 310 C70 320, 40 310, 30 285 C20 260, 25 235, 45 220 Z"
              className={`${isDark ? 'fill-slate-700' : 'fill-slate-300'} stroke-slate-400 transition-colors duration-300`}
              strokeWidth="1"
            />
            
            {/* Noord-Holland - Active region */}
            <path
              d="M60 100 C80 90, 115 88, 140 100 C160 115, 165 145, 155 175 C145 200, 120 215, 90 215 C60 215, 40 195, 35 165 C30 135, 40 110, 60 100 Z"
              className={`${hoveredRegion === 'noord-holland' ? 'fill-brand-green/60' : 'fill-brand-green/35'} stroke-brand-green transition-all duration-300 cursor-pointer`}
              strokeWidth="2.5"
              onMouseEnter={() => setHoveredRegion('noord-holland')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Flevoland - Active region */}
            <path
              d="M135 130 C160 125, 185 140, 195 165 C205 190, 195 220, 170 235 C145 245, 120 235, 115 210 C110 185, 115 155, 135 130 Z"
              className={`${hoveredRegion === 'flevoland' ? 'fill-brand-green/60' : 'fill-brand-green/35'} stroke-brand-green transition-all duration-300 cursor-pointer`}
              strokeWidth="2.5"
              onMouseEnter={() => setHoveredRegion('flevoland')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Utrecht - Active region */}
            <path
              d="M95 210 C120 200, 150 210, 165 235 C180 260, 175 290, 150 305 C120 315, 90 305, 80 280 C70 255, 75 225, 95 210 Z"
              className={`${hoveredRegion === 'utrecht' ? 'fill-brand-green/60' : 'fill-brand-green/35'} stroke-brand-green transition-all duration-300 cursor-pointer`}
              strokeWidth="2.5"
              onMouseEnter={() => setHoveredRegion('utrecht')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Location markers */}
            <g className="pointer-events-none">
              <circle cx="100" cy="150" r="6" className={`fill-brand-green ${hoveredRegion === 'noord-holland' ? 'opacity-100' : 'opacity-80'} transition-opacity`} />
              <circle cx="160" cy="180" r="6" className={`fill-brand-green ${hoveredRegion === 'flevoland' ? 'opacity-100' : 'opacity-80'} transition-opacity`} />
              <circle cx="125" cy="255" r="6" className={`fill-brand-green ${hoveredRegion === 'utrecht' ? 'opacity-100' : 'opacity-80'} transition-opacity`} />
            </g>
          </svg>
          
          {/* Region labels */}
          <div 
            className={`absolute flex items-center gap-1.5 transition-all duration-300 ${hoveredRegion === 'noord-holland' ? 'scale-110' : ''}`}
            style={{ top: '38%', left: '25%', transform: 'translate(-50%, -50%)' }}
          >
            <MapPin size={14} className="text-brand-green" />
            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Noord-Holland
            </span>
          </div>
          <div 
            className={`absolute flex items-center gap-1.5 transition-all duration-300 ${hoveredRegion === 'flevoland' ? 'scale-110' : ''}`}
            style={{ top: '47%', left: '60%', transform: 'translate(-50%, -50%)' }}
          >
            <MapPin size={14} className="text-brand-green" />
            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Flevoland
            </span>
          </div>
          <div 
            className={`absolute flex items-center gap-1.5 transition-all duration-300 ${hoveredRegion === 'utrecht' ? 'scale-110' : ''}`}
            style={{ top: '68%', left: '45%', transform: 'translate(-50%, -50%)' }}
          >
            <MapPin size={14} className="text-brand-green" />
            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
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
