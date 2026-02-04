import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryFlipButton } from '@/components/buttons';

const vacatures = [
  {
    id: 1,
    title: 'Ervaren Dakdekker',
    type: 'Fulltime',
    location: 'West-Friesland',
    description: 'Wij zoeken een ervaren dakdekker met minimaal 3 jaar ervaring in het leggen van EPDM en bitumen dakbedekking.',
  },
  {
    id: 2,
    title: 'Junior Dakdekker',
    type: 'Fulltime',
    location: 'Noord-Holland',
    description: 'Ben je enthousiast, leergierig en wil je het vak leren? Wij bieden een uitstekende leerplaats met doorgroeimogelijkheden.',
  },
  {
    id: 3,
    title: 'Projectleider Dakwerken',
    type: 'Fulltime',
    location: 'West-Friesland',
    description: 'Als projectleider ben je verantwoordelijk voor de coördinatie van onze dakprojecten van begin tot eind.',
  },
];

export default function Vacatures() {
  return (
    <>
      <SEO
        title="Vacatures | FEIGRO Dakwerken"
        description="Bekijk onze openstaande vacatures en word onderdeel van het FEIGRO team. Wij zoeken gedreven dakdekkers en professionals."
        canonical="/vacatures"
      />

      {/* Hero Section */}
      <section className="relative bg-black pt-36 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 overflow-hidden h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">Carrière</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase tracking-tighter"
          >
            Werk bij <span className="text-brand-green italic">FEIGRO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mt-6 max-w-2xl font-light"
          >
            Word onderdeel van ons team van gepassioneerde dakdekkers
          </motion.p>
        </div>
      </section>

      {/* Vacatures List */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {vacatures.map((vacature, index) => (
              <motion.div
                key={vacature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 md:p-10 rounded-xl border border-slate-200 hover:border-brand-green/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-heading text-slate-900 mb-3 uppercase tracking-tight group-hover:text-brand-green transition-colors">
                      {vacature.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                        <Clock size={14} />
                        {vacature.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                        <MapPin size={14} />
                        {vacature.location}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {vacature.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link to="/contact">
                      <PrimaryFlipButton
                        label="Solliciteer"
                        icon={<ArrowRight size={16} />}
                        size="small"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Open Sollicitatie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 bg-white rounded-xl border border-slate-200"
          >
            <h3 className="text-2xl font-heading text-slate-900 mb-4 uppercase tracking-tight">
              Open <span className="text-brand-green italic">Sollicitatie</span>
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto font-light">
              Staat jouw droombaan er niet bij? Stuur ons een open sollicitatie en wie weet maken we binnenkort kennis!
            </p>
            <Link to="/contact">
              <PrimaryFlipButton
                label="Neem contact op"
                icon={<ArrowRight />}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
