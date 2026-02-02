import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import imgEPDM from '@/assets/dakdekking-nederland-enkhuizen.jpg';
import imgDuurzaam from '@/assets/dakrenovatie-noordholland.jpg';
import imgZonnepanelen from '@/assets/feigro-dakdekking-westfriesland.jpg';
const blogPosts = [{
  slug: 'epdm-dakbedekking',
  title: 'EPDM Dakbedekking',
  excerpt: 'EPDM is een van de meest duurzame opties voor platte daken met een levensduur van 40-50 jaar.',
  date: '2026-02-02',
  readTime: '5 min',
  category: 'Materialen',
  image: imgEPDM,
  featured: true
}, {
  slug: 'duurzame-dakbedekking-trends-2026',
  title: 'Duurzame Dakbedekking',
  excerpt: 'Een van de grootste trends in 2026 is de opkomst van duurzame dakbedekkingen.',
  date: '2026-02-02',
  readTime: '4 min',
  category: 'Trends',
  image: imgDuurzaam,
  featured: false
}, {
  slug: 'geintegreerde-zonnepanelen',
  title: 'Geïntegreerde Zonnepanelen',
  excerpt: 'Een opkomende innovatie waarbij zonnepanelen naadloos in de dakconstructie worden verwerkt.',
  date: '2026-02-02',
  readTime: '6 min',
  category: 'Innovatie',
  image: imgZonnepanelen,
  featured: false
}];
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};
export const BlogSection = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  return <section className="py-16 md:py-24 overflow-hidden bg-feigro-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-brand-green" />
            <span className="text-brand-green text-xs font-bold uppercase tracking-[0.2em]">
              Nieuws & Inzichten
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter text-feigro-dark uppercase">
            LAATSTE <span className="text-brand-green italic">NIEUWS</span>
          </h2>
          <p className="text-feigro-dark/60 mt-4 max-w-xl text-sm md:text-base font-light">
            Blijf op de hoogte van de nieuwste ontwikkelingen in dakwerken, materialen en duurzaamheid.
          </p>
        </motion.div>

        {/* Blog Grid - Mobile: stacked, Desktop: featured + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Featured Post - Large Card */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="lg:row-span-2">
            <Link to={`/nieuws/${featuredPost.slug}`} className="group block h-full">
              <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden bg-feigro-dark shadow-xl shadow-feigro-dark/20 group-hover:shadow-2xl group-hover:shadow-feigro-dark/30 transition-shadow duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-green/90 text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white uppercase tracking-tight mb-3 group-hover:text-brand-green transition-colors">
                    {featuredPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm md:text-base font-light mb-6 line-clamp-2 max-w-md">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-white/50 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{featuredPost.readTime} leestijd</span>
                    </div>
                  </div>

                  {/* Read More Indicator */}
                  <div className="mt-6 flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Lees artikel</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Posts - Compact Cards */}
          {otherPosts.map((post, index) => <motion.div key={post.slug} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1
        }}>
              <Link to={`/nieuws/${post.slug}`} className="group block">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 p-4 md:p-5 rounded-2xl bg-feigro-dark/5 border border-feigro-dark/10 shadow-md shadow-feigro-dark/5 hover:shadow-lg hover:shadow-feigro-dark/10 hover:border-brand-green/30 hover:bg-feigro-dark/10 transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full sm:w-32 lg:w-full h-40 sm:h-24 lg:h-40 rounded-xl overflow-hidden shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-heading text-feigro-dark uppercase tracking-tight mb-2 group-hover:text-brand-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-feigro-dark/60 text-sm font-light line-clamp-2 mb-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-feigro-dark/50 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar size={10} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={10} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-brand-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>)}
        </div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/nieuws">
            <PrimaryFlipButton label="Bekijk alle artikelen" />
          </Link>
        </motion.div>
      </div>
    </section>;
};