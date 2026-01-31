import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InversedFlipButton } from '@/components/buttons';
import { FadeIn, ParallaxImage } from '@/components/ui/ParallaxImage';

// Asset Imports
import img1 from '@/assets/Dakwerk-Feitsmadakwerken-2-1.jpg';
import img2 from '@/assets/Feigro dakwerken.jpg';
import img3 from '@/assets/Lekkage-Feitsma.jpg';
import img4 from '@/assets/dak-laan-project-dakdekking.jpg';
import img5 from '@/assets/dak-valbeveiliging-montage.jpg';
import img6 from '@/assets/dakdekking-nederland-enkhuizen.jpg';
import img7 from '@/assets/dakinspectie-noord-holland.jpg';
import img8 from '@/assets/dakrenovatie-noordholland.jpg';
import img9 from '@/assets/dakreparatie-nederland-enkhuizen.jpg';
import img10 from '@/assets/feigro-dakdekking-westfriesland.jpg';
import img11 from '@/assets/lekvrij-dak-nederland.jpg';

// --- CONFIGURATION ---
const COL_MULTIPLIERS = [1.0, 0.9, 1.1]; // Reduced spread for subtler movement
const BASE_DEVIATION = 180; // Reduced (was 280) for less intense parallax
const INITIAL_OFFSET_FIRST = 120; // Left column starts slightly lower in 3-col
const INITIAL_OFFSET_MIDDLE = 20; // Lowered middle column (was -60)
const INITIAL_OFFSET_RIGHT = -10; // Lowered right column (was -90)

const IMAGES_POOL = [
  { url: img2 },
  { url: img4 },
  { url: img6 },
  { url: img10 },
  { url: img9 },
  { url: img10 }, // Replaced duplicate img2 with img10
  { url: img8 },  // Dakrenovatie
  { url: img7 },  // Replaced img11 with img7 (dakinspectie)
  { url: img4 },
];

const GalleryItem: React.FC<{
  item: { url: string };
  aspectRatio: string;
}> = ({ item, aspectRatio }) => {
  return (
    <div className={`relative overflow-hidden w-full ${aspectRatio} bg-stone-800`}>
      <img
        src={item.url}
        alt="Feigro Project"
        className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
        loading="lazy"
      />
    </div>
  );
};

export const RecentProjects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [numCols, setNumCols] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startTrigger = windowHeight;
      const endTrigger = -rect.height;
      const current = rect.top;
      const totalRange = startTrigger - endTrigger;
      const progress = 1 - (current - endTrigger) / totalRange;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    const handleResize = () => {
      // Mobile: 2 cols, Tablet/Desktop: 3 cols
      if (window.innerWidth < 640) {
        setNumCols(2);
      } else {
        setNumCols(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const colConfigs = [
    { height: 'aspect-[4/6]' },
    { height: 'aspect-square' },
    { height: 'aspect-[4/5]' },
  ];

  return (
    <section ref={sectionRef} id="projecten" className="pt-16 md:pt-24 lg:pt-32 pb-0 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-24">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Gerealiseerd Werk</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase">
                Recente <br /><span className="text-brand-green italic">Projecten</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="none" className="parallax-fast" style={{ '--parallax-speed': '0.05' } as any}>
            <InversedFlipButton
              label="Alle Projecten"
              size="default"
              onClick={() => navigate('/projecten')}
            />
          </FadeIn>
        </div>

      </div>

      {/* Masonry Gallery Implementation - Full Width */}
      <div className="relative w-full h-[900px] sm:h-[1200px] md:h-[1500px] lg:h-[1800px] overflow-hidden">
        <div className={`grid ${numCols === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-1 w-full`}>
          {Array.from({ length: numCols }).map((_, colIndex) => {
            const multiplier = COL_MULTIPLIERS[colIndex % 3];
            const parallaxOffset = BASE_DEVIATION * (multiplier - 1) * (1 - scrollProgress) * 4;

            // Initial offsets
            let initialOffset = 0;
            if (numCols === 3) {
              if (colIndex === 0) initialOffset = INITIAL_OFFSET_FIRST;
              if (colIndex === 1) initialOffset = INITIAL_OFFSET_MIDDLE;
              if (colIndex === 2) initialOffset = INITIAL_OFFSET_RIGHT;
            } else {
              // In 2 columns mode (Mobile)
              if (colIndex === 0) initialOffset = 20;
              if (colIndex === 1) initialOffset = 140;
            }

            const totalOffset = parallaxOffset + initialOffset;

            // Verdeel de beelden over de beschikbare kolommen
            const colImages = IMAGES_POOL.filter((_, idx) => idx % numCols === colIndex);

            return (
              <div
                key={colIndex}
                className="flex flex-col gap-1 transition-transform duration-300 ease-out will-change-transform"
                style={{ transform: `translate3d(0, ${totalOffset}px, 0)` }}
              >
                {colImages.map((item, rowIdx) => (
                  <GalleryItem
                    key={`${colIndex}-${rowIdx}`}
                    item={item}
                    aspectRatio={colConfigs[rowIdx % 3].height}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Deep Fade Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/4 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.) 50%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Background Decorative Text */}
      {/* END Background Decorative Text - REMOVED */}
    </section>
  );
};
