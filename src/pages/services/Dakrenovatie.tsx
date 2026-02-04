import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ServiceCTA } from '@/components/sections/ServiceCTA';
import { dakrenovatieData } from '@/data/services';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PrimaryFlipButton } from '@/components/buttons';
import { ArrowRight } from 'lucide-react';

export default function Dakrenovatie() {
  const { seo, hero, features, featureTitle, featureHighlight, info, faqs } = dakrenovatieData;
  const enkhuizenProject = projects['dakrenovatie-enkhuizen'];

  return (
    <>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} title={featureTitle} titleHighlight={featureHighlight} />
      <InfoSection {...info} />
      
      {/* Enkhuizen Case Study */}
      {enkhuizenProject && (
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">
                Uit de praktijk
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-10 md:mb-14 uppercase tracking-tighter"
            >
              Dakrenovatie <span className="text-brand-green italic">Enkhuizen</span>
            </motion.h2>
            
            {/* Before/After Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
              >
                <img 
                  src={enkhuizenProject.imageBefore} 
                  alt="Dakrenovatie Enkhuizen - Voor" 
                  className="w-full h-64 md:h-80 object-cover" 
                />
                <p className="text-center py-3 bg-slate-100 text-sm font-bold uppercase tracking-wider text-slate-600">VOOR</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
              >
                <img 
                  src={enkhuizenProject.imageAfter} 
                  alt="Dakrenovatie Enkhuizen - Na" 
                  className="w-full h-64 md:h-80 object-cover" 
                />
                <p className="text-center py-3 bg-brand-green text-sm font-bold uppercase tracking-wider text-black">NA</p>
              </motion.div>
            </div>
            
            {/* Project details + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8"
            >
              <div className="flex-1">
                <p className="text-slate-600 mb-4 text-base md:text-lg font-light leading-relaxed">
                  {enkhuizenProject.shortDescription}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {enkhuizenProject.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-slate-100 text-xs font-medium rounded-full text-slate-600"
                    >
                      {highlight}
                    </span>
                  ))}
                </ul>
              </div>
              <Link to={`/projecten/${enkhuizenProject.slug}`} className="shrink-0 w-full md:w-auto">
                <PrimaryFlipButton 
                  label="Bekijk volledig project" 
                  icon={<ArrowRight size={16} />}
                />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
      
      <FAQSection faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
