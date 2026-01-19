import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { InversedFlipButton } from '@/components/buttons';

const projects = [
  {
    title: 'Complete Dakrenovatie Villa',
    location: 'Laren',
    category: 'Renovatie',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    size: 'large'
  },
  {
    title: 'Bedrijfsdak Bitumen',
    location: 'Amsterdam-Noord',
    category: 'Bitumen',
    image: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'Luxe EPDM Afwerking',
    location: 'Haarlem',
    category: 'EPDM',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'Schoorsteen Restauratie',
    location: 'Leiden Centrum',
    category: 'Restauratie',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'Modern Appartementencomplex',
    location: 'Utrecht',
    category: 'Nieuwbouw',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  }
];

export const RecentProjects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projecten" className="py-24 md:py-32 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Gerealiseerd Werk</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase">
              Recente <br /><span className="text-brand-green italic">Projecten</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <InversedFlipButton label="Alle Projecten" size="default" />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative rounded-[1rem] overflow-hidden bg-slate-100 select-none h-[450px] transition-all duration-500 shadow-sm hover:shadow-2xl ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-green text-black font-bold text-[10px] uppercase tracking-[0.25em] px-5 py-2 rounded-lg shadow-lg">
                    {project.category}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-white/70 text-[10px] uppercase tracking-widest font-bold mb-4">
                    <MapPin size={12} className="text-brand-green" /> {project.location}
                  </div>
                  <h3 className={`text-white font-heading leading-tight tracking-tight group-hover:text-brand-green transition-colors uppercase ${i === 0 ? 'text-2xl md:text-5xl max-w-2xl' : 'text-lg md:text-2xl'
                    }`}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 z-[5] border border-white/5 group-hover:border-brand-green/30 rounded-[1rem] transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
