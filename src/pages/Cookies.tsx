import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookiebeleid | FEIGRO Dakwerken"
        description="Lees ons cookiebeleid en leer hoe wij cookies gebruiken op onze website."
        canonical="/cookies"
      />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 overflow-hidden h-[50vh] md:h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">Juridisch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase tracking-tighter"
          >
            Cookie<span className="text-brand-green italic">beleid</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate prose-lg max-w-none"
          >
            <div className="bg-white p-8 md:p-12 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-heading text-slate-900 mb-6 uppercase tracking-tight">
                Wat zijn cookies?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons om uw voorkeuren te onthouden en uw ervaring op onze website te verbeteren.
              </p>

              <h2 className="text-2xl font-heading text-slate-900 mb-6 uppercase tracking-tight">
                Welke cookies gebruiken wij?
              </h2>
              
              <h3 className="text-lg font-heading text-slate-900 mb-3 uppercase">Functionele cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                Deze cookies zijn noodzakelijk voor het functioneren van de website. Ze worden gebruikt om uw voorkeuren te onthouden en om de website goed te laten werken.
              </p>

              <h3 className="text-lg font-heading text-slate-900 mb-3 uppercase">Analytische cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                Wij gebruiken analytische cookies om inzicht te krijgen in hoe bezoekers onze website gebruiken. Deze informatie helpt ons om de website te verbeteren.
              </p>

              <h3 className="text-lg font-heading text-slate-900 mb-3 uppercase">Marketing cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                Deze cookies worden gebruikt om advertenties relevanter te maken voor u. Ze kunnen ook worden gebruikt om de effectiviteit van onze marketingcampagnes te meten.
              </p>

              <h2 className="text-2xl font-heading text-slate-900 mb-6 uppercase tracking-tight">
                Uw cookievoorkeuren
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                U kunt uw cookievoorkeuren op elk moment aanpassen via uw browserinstellingen. Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van onze website kan beïnvloeden.
              </p>

              <h2 className="text-2xl font-heading text-slate-900 mb-6 uppercase tracking-tight">
                Contact
              </h2>
              <p className="text-slate-600 leading-relaxed font-light">
                Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via{' '}
                <a href="mailto:info@feigro.nl" className="text-brand-green hover:underline">
                  info@feigro.nl
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
