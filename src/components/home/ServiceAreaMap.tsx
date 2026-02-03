import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { motion } from 'framer-motion';

interface ServiceAreaMapProps {
  variant?: 'light' | 'dark';
  showTitle?: boolean;
}

// Accurate Netherlands province paths
const provinces = {
  // Inactive provinces
  groningen: "M165,25 L170,22 L178,24 L185,22 L192,26 L198,24 L205,28 L210,35 L212,42 L210,50 L205,56 L198,60 L190,62 L182,60 L175,56 L170,50 L168,42 L166,35 L165,25 Z",
  friesland: "M115,28 L125,25 L135,27 L145,25 L155,30 L162,35 L165,42 L163,52 L158,60 L150,65 L140,68 L130,66 L120,62 L112,56 L108,48 L110,40 L112,32 L115,28 Z",
  drenthe: "M168,60 L178,58 L188,62 L196,68 L200,78 L198,88 L192,96 L182,100 L172,98 L164,92 L160,82 L162,72 L165,65 L168,60 Z",
  overijssel: "M158,95 L170,92 L182,96 L192,104 L198,115 L196,128 L188,138 L176,142 L164,138 L155,128 L152,118 L154,108 L158,95 Z",
  gelderland: "M130,135 L145,130 L162,134 L178,142 L188,155 L186,172 L176,186 L160,192 L142,188 L128,178 L122,162 L124,148 L130,135 Z",
  noordBrabant: "M75,175 L95,168 L118,172 L140,180 L155,195 L152,215 L138,230 L115,235 L90,230 L70,218 L65,200 L68,185 L75,175 Z",
  limburg: "M162,195 L175,190 L186,198 L192,212 L190,228 L185,245 L178,260 L168,270 L158,268 L150,255 L148,238 L152,220 L158,205 L162,195 Z",
  zeeland: "M35,175 L50,170 L65,175 L75,185 L78,198 L72,212 L60,220 L45,218 L32,208 L28,195 L30,182 L35,175 Z",
  zuidHolland: "M55,125 L72,118 L90,122 L105,132 L112,148 L108,165 L95,178 L78,182 L60,176 L48,162 L45,145 L50,132 L55,125 Z",
  // Active provinces (service areas)
  noordHolland: "M58,45 L72,40 L88,42 L102,48 L112,58 L118,72 L116,88 L108,102 L95,112 L78,116 L62,112 L48,102 L42,88 L44,72 L50,58 L58,45 Z",
  flevoland: "M118,65 L132,60 L148,65 L160,75 L166,90 L162,106 L152,118 L138,122 L124,118 L114,106 L110,90 L114,75 L118,65 Z",
  utrecht: "M88,115 L105,110 L122,116 L135,128 L140,145 L135,162 L122,174 L105,178 L88,172 L78,158 L75,142 L80,125 L88,115 Z"
};

// Waddeneilanden
const islands = [
  "M95,18 C100,16 108,17 112,20 C116,23 115,27 110,28 C105,29 98,28 95,25 C92,22 92,19 95,18 Z",
  "M118,15 C124,13 132,14 138,18 C144,22 143,27 136,28 C129,29 120,27 116,23 C112,19 114,16 118,15 Z",
  "M145,18 C150,16 158,17 162,20 C166,23 165,27 160,28 C155,29 148,28 145,25 C142,22 142,19 145,18 Z"
];

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ 
  variant = 'light',
  showTitle = true 
}) => {
  const isDark = variant === 'dark';
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const activeProvinces = [
    { id: 'noord-holland', path: provinces.noordHolland, label: 'Noord-Holland', cx: 80, cy: 78, labelPos: { top: '28%', left: '28%' }, delay: 0.3 },
    { id: 'flevoland', path: provinces.flevoland, label: 'Flevoland', cx: 138, cy: 92, labelPos: { top: '32%', left: '62%' }, delay: 0.6 },
    { id: 'utrecht', path: provinces.utrecht, label: 'Utrecht', cx: 108, cy: 145, labelPos: { top: '52%', left: '42%' }, delay: 0.9 }
  ];

  const inactiveProvinces = [
    { id: 'groningen', path: provinces.groningen },
    { id: 'friesland', path: provinces.friesland },
    { id: 'drenthe', path: provinces.drenthe },
    { id: 'overijssel', path: provinces.overijssel },
    { id: 'gelderland', path: provinces.gelderland },
    { id: 'noord-brabant', path: provinces.noordBrabant },
    { id: 'limburg', path: provinces.limburg },
    { id: 'zeeland', path: provinces.zeeland },
    { id: 'zuid-holland', path: provinces.zuidHolland }
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
        <div className="relative aspect-[4/5] max-w-[280px] mx-auto">
          <svg
            viewBox="0 0 240 290"
            className="w-full h-full"
            aria-label="Kaart van Nederland met werkgebied"
          >
            {/* Waddeneilanden */}
            {islands.map((path, i) => (
              <motion.path
                key={`island-${i}`}
                d={path}
                className={`${isDark ? 'fill-slate-700 stroke-slate-600' : 'fill-slate-200 stroke-slate-300'}`}
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
            
            {/* Inactive provinces */}
            {inactiveProvinces.map((province, i) => (
              <motion.path
                key={province.id}
                d={province.path}
                className={`${isDark ? 'fill-slate-800 stroke-slate-700' : 'fill-slate-200 stroke-slate-300'}`}
                strokeWidth="1"
                strokeLinejoin="round"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              />
            ))}
            
            {/* Active provinces with staggered animation */}
            {activeProvinces.map((province) => (
              <motion.path
                key={province.id}
                d={province.path}
                className={`${hoveredRegion === province.id ? 'fill-brand-green/70' : 'fill-brand-green/40'} stroke-brand-green cursor-pointer`}
                strokeWidth="2"
                strokeLinejoin="round"
                onMouseEnter={() => setHoveredRegion(province.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  fillOpacity: animationComplete ? (hoveredRegion === province.id ? 0.7 : 0.4) : [0.3, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: province.delay,
                  fillOpacity: animationComplete ? { duration: 0.2 } : { duration: 0.8, delay: province.delay }
                }}
              />
            ))}
            
            {/* Location markers */}
            {activeProvinces.map((province) => (
              <motion.circle
                key={`marker-${province.id}`}
                cx={province.cx}
                cy={province.cy}
                r="5"
                className={`fill-brand-green ${hoveredRegion === province.id ? 'opacity-100' : 'opacity-70'}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: hoveredRegion === province.id ? 1 : 0.7, scale: 1 }}
                transition={{ duration: 0.4, delay: province.delay + 0.2 }}
              />
            ))}
          </svg>
          
          {/* Region labels */}
          {activeProvinces.map((province) => (
            <motion.div 
              key={`label-${province.id}`}
              className={`absolute flex items-center gap-1.5 ${hoveredRegion === province.id ? 'scale-110' : ''} transition-transform duration-300`}
              style={{ 
                top: province.labelPos.top, 
                left: province.labelPos.left, 
                transform: 'translate(-50%, -50%)' 
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: province.delay + 0.3 }}
            >
              <MapPin size={12} className="text-brand-green" />
              <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {province.label}
              </span>
            </motion.div>
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
