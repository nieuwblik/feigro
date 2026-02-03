import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgEPDM from '@/assets/dakdekking-nederland-enkhuizen.jpg';
import imgDuurzaam from '@/assets/dakrenovatie-noordholland.jpg';
import imgZonnepanelen from '@/assets/feigro-dakdekking-westfriesland.jpg';
const blogPosts = [{
  id: 'epdm-dakbedekking',
  title: 'EPDM Dakbedekking',
  subtitle: 'De duurzame keuze voor uw platte dak',
  excerpt: 'EPDM (Ethyleen Propeen Dieen Monomeer) is een synthetisch rubber dat al decennia lang wordt gebruikt voor dakbedekking. Met een levensduur van 40-50 jaar is het een van de meest duurzame opties voor platte daken. Ontdek waarom steeds meer huiseigenaren en bedrijven kiezen voor EPDM.',
  content: 'EPDM is bestand tegen extreme temperaturen, UV-straling en ozon. Het materiaal blijft flexibel bij temperaturen tot -45°C en kan temperaturen tot +120°C verdragen. Deze eigenschappen maken EPDM ideaal voor het Nederlandse klimaat.',
  date: '2025-01-28',
  readTime: '5 min',
  category: 'Materialen',
  image: imgEPDM,
  featured: true
}, {
  id: 'duurzame-dakbedekking-trends-2026',
  title: 'Duurzame Dakbedekking',
  subtitle: 'De grootste trends van 2026',
  excerpt: 'Een van de grootste trends in 2026 is de opkomst van duurzame dakbedekkingen. Materialen zoals sedum daken, zonnepanelen en gerecyclede dakbedekking worden steeds populairder.',
  content: 'Sedum daken bieden niet alleen een natuurlijke uitstraling, maar dragen ook bij aan waterbuffering en biodiversiteit. Ze isoleren uw woning, verlengen de levensduur van de onderliggende dakbedekking en helpen bij het verminderen van hittestress in stedelijke gebieden.',
  date: '2025-01-22',
  readTime: '4 min',
  category: 'Trends',
  image: imgDuurzaam,
  featured: false
}, {
  id: 'geintegreerde-zonnepanelen',
  title: 'Geïntegreerde Zonnepanelen',
  subtitle: 'De toekomst van energieopwekking',
  excerpt: 'Een opkomende innovatie zijn geïntegreerde zonnepanelen, waarbij de zonnepanelen naadloos in de dakconstructie worden verwerkt.',
  content: 'Dit zorgt niet alleen voor een strakke, moderne uitstraling, maar maximaliseert ook de energieopbrengst van het dak. In tegenstelling tot traditionele opbouwpanelen, vervangen geïntegreerde panelen de dakbedekking zelf, wat resulteert in een esthetisch geheel.',
  date: '2025-01-15',
  readTime: '6 min',
  category: 'Innovatie',
  image: imgZonnepanelen,
  featured: false
}];
export default function Nieuws() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  return <>
      <SEO title="Dakdekkers Nieuws | FEIGRO Dakwerken" description="Blijf op de hoogte van het laatste nieuws over dakwerken, innovaties en trends in de dakbedekkingsbranche." canonical="/nieuws" />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 overflow-hidden h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-brand-green/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-[150px] rounded-full"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">​feigro's
 </span>
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }} className="text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase tracking-tighter leading-none">
            Dakdekkers <br />
            <span className="text-brand-green italic">Nieuws</span>
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-white/50 text-lg md:text-xl mt-6 max-w-xl font-light">
            Innovaties, trends en expertise uit de dakbedekkingsbranche — actief in Noord-Holland, Flevoland en Utrecht
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-green text-white px-6 py-3 rounded-xl">
                  <span className="text-xs font-bold uppercase tracking-wider">Uitgelicht</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(featuredPost.date).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading text-slate-900 mb-3 uppercase tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-brand-green text-lg italic mb-6 font-light">
                  {featuredPost.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-8 font-light">
                  {featuredPost.excerpt}
                </p>

                <Link to={`/nieuws/${featuredPost.id}`} className="inline-flex items-center gap-3 bg-slate-900 hover:bg-brand-green text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider transition-all duration-300 group">
                  Lees artikel
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>}

      {/* Articles Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Recente Artikelen</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {regularPosts.map((post, index) => <motion.article key={post.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group">
                <Link to={`/nieuws/${post.id}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-green/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('nl-NL', {
                        day: 'numeric',
                        month: 'short'
                      })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-heading text-slate-900 mb-2 uppercase tracking-tight group-hover:text-brand-green transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-brand-green/80 text-sm italic mb-4">
                        {post.subtitle}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed font-light line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider group-hover:text-brand-green group-hover:gap-3 transition-all">
                        Lees meer <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>)}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-green/5 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto relative z-10 text-center max-w-2xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-tighter mb-6">
              Blijf op de <span className="text-brand-green italic">hoogte</span>
            </h2>
            <p className="text-white/50 text-lg font-light mb-10">
              Ontvang het laatste nieuws over dakwerken, innovaties en exclusieve tips direct in uw inbox.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-green hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-xl font-bold uppercase text-sm tracking-wider transition-all duration-300 group">
              Neem contact op
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>;
}