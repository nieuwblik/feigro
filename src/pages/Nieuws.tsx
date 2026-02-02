import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Placeholder blog posts - these can later be replaced with CMS data
const blogPosts = [
  {
    id: 1,
    title: 'Het belang van regelmatig dakonderhoud',
    excerpt: 'Ontdek waarom regelmatig onderhoud aan uw dak essentieel is voor de levensduur en waarde van uw woning.',
    date: '2025-01-15',
    category: 'Onderhoud',
    image: '/images/roof_gallery_1.png',
  },
  {
    id: 2,
    title: 'EPDM vs Bitumen: Welke dakbedekking past bij u?',
    excerpt: 'Een uitgebreide vergelijking tussen EPDM en bitumen dakbedekking om u te helpen de juiste keuze te maken.',
    date: '2025-01-10',
    category: 'Materialen',
    image: '/images/roof_gallery_2.png',
  },
  {
    id: 3,
    title: 'Signalen dat uw dak aan renovatie toe is',
    excerpt: 'Herken de belangrijkste signalen die aangeven dat het tijd is voor een dakrenovatie.',
    date: '2025-01-05',
    category: 'Renovatie',
    image: '/images/roof_gallery_3.png',
  },
];

export default function Nieuws() {
  return (
    <>
      <SEO
        title="Dakdekkers Nieuws | FEIGRO Dakwerken"
        description="Blijf op de hoogte van het laatste nieuws over dakwerken, onderhoud tips en trends in de dakbedekkingsbranche."
        canonical="/nieuws"
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
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">Blog</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase tracking-tighter"
          >
            Dakdekkers <span className="text-brand-green italic">Nieuws</span>
          </motion.h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-brand-green/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('nl-NL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <h2 className="text-lg md:text-xl font-heading text-slate-900 mb-3 uppercase tracking-tight group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/nieuws/${post.id}`}
                    className="inline-flex items-center gap-2 text-brand-green text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all"
                  >
                    Lees meer <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty State / Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 py-12 border-t border-slate-200"
          >
            <p className="text-slate-500 text-lg font-light">
              Meer artikelen komen binnenkort...
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
