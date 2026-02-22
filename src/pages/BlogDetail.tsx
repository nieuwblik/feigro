import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle2, Phone, MapPin, Wrench } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { CTAFooter } from '@/components/sections/CTAFooter';
import imgEPDM from '@/assets/EPDM foto.webp';
import imgDuurzaam from '@/assets/dakrenovatie-noordholland.webp';
interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image';
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
}
interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  sections: BlogSection[];
}
const blogPosts: Record<string, BlogPost> = {
  'epdm-dakbedekking': {
    id: 'epdm-dakbedekking',
    title: 'EPDM Dakbedekking',
    subtitle: 'De duurzame keuze voor uw platte dak',
    excerpt: 'EPDM is een van de meest duurzame opties voor platte daken met een levensduur van 40-50 jaar.',
    date: '2026-02-02',
    readTime: '5 min',
    category: 'Materialen',
    image: imgEPDM,
    author: 'FEIGRO Dakwerken',
    sections: [{
      type: 'paragraph',
      content: 'EPDM (Ethyleen Propeen Dieen Monomeer) is een synthetisch rubber dat al decennia lang wordt gebruikt voor dakbedekking. Met een levensduur van 40-50 jaar is het een van de meest duurzame opties voor platte daken. In dit artikel ontdekt u waarom steeds meer huiseigenaren en bedrijven kiezen voor EPDM.'
    }, {
      type: 'heading',
      content: 'Wat is EPDM precies?'
    }, {
      type: 'paragraph',
      content: 'EPDM is een type rubber dat specifiek is ontwikkeld voor buitentoepassingen. Het materiaal wordt gemaakt van ethyleen, propyleen en een kleine hoeveelheid dieen-monomeer. Deze combinatie zorgt voor uitstekende eigenschappen die het ideaal maken voor dakbedekking.'
    }, {
      type: 'paragraph',
      content: 'Het materiaal is bestand tegen extreme temperaturen, UV-straling en ozon. EPDM blijft flexibel bij temperaturen tot -45°C en kan temperaturen tot +120°C verdragen. Deze eigenschappen maken het ideaal voor het Nederlandse klimaat met zijn wisselende weersomstandigheden.'
    }, {
      type: 'heading',
      content: 'Voordelen van EPDM dakbedekking'
    }, {
      type: 'list',
      items: ['Extreem lange levensduur van 40-50 jaar', 'Bestand tegen UV-straling en ozon', 'Flexibel bij extreme temperaturen (-45°C tot +120°C)', 'Onderhoudsarm en eenvoudig te repareren', 'Milieuvriendelijk en recyclebaar', 'Naadloze installatie mogelijk', 'Uitstekende waterdichtheid']
    }, {
      type: 'heading',
      content: 'Wanneer kiezen voor EPDM?'
    }, {
      type: 'paragraph',
      content: 'EPDM is bij uitstek geschikt voor platte daken en daken met een lichte helling. Het materiaal wordt veel gebruikt bij woningen, garages, aanbouwen en bedrijfspanden. Door de flexibiliteit is EPDM ook ideaal voor complexe dakvormen met veel hoeken en doorbrekingen.'
    }, {
      type: 'quote',
      content: 'EPDM is de premium keuze voor wie investeert in kwaliteit en duurzaamheid. De hogere initiële investering wordt ruimschoots terugverdiend door de lange levensduur en lage onderhoudskosten.'
    }, {
      type: 'heading',
      content: 'Installatie door FEIGRO'
    }, {
      type: 'paragraph',
      content: 'FEIGRO Dakwerken is gecertificeerd EPDM specialist. Wij werken met toonaangevende merken zoals Resitrix, Firestone, Hertalan en Elevate. Onze ervaren dakdekkers zorgen voor een vakkundige installatie die jarenlang meegaat.'
    }, {
      type: 'paragraph',
      content: 'Bent u benieuwd of EPDM de juiste keuze is voor uw dak? Neem vrijblijvend contact met ons op voor een persoonlijk adviesgesprek en offerte op maat.'
    }]
  },
  'duurzame-dakbedekking-trends-2026': {
    id: 'duurzame-dakbedekking-trends-2026',
    title: 'Duurzame Dakbedekking',
    subtitle: 'De grootste trends van 2026',
    excerpt: 'Een van de grootste trends in 2026 is de opkomst van duurzame dakbedekkingen.',
    date: '2026-02-02',
    readTime: '4 min',
    category: 'Trends',
    image: imgDuurzaam,
    author: 'FEIGRO Dakwerken',
    sections: [{
      type: 'paragraph',
      content: 'Een van de grootste trends in 2026 is de opkomst van duurzame dakbedekkingen. Materialen zoals sedum daken, zonnepanelen en gerecyclede dakbedekking worden steeds populairder. In dit artikel bespreken we de belangrijkste ontwikkelingen en wat ze betekenen voor uw dak.'
    }, {
      type: 'heading',
      content: 'Sedum daken: natuur op uw dak'
    }, {
      type: 'paragraph',
      content: 'Sedum daken, ook wel groene daken genoemd, bieden niet alleen een natuurlijke uitstraling, maar dragen ook bij aan waterbuffering en biodiversiteit. Ze isoleren uw woning, verlengen de levensduur van de onderliggende dakbedekking en helpen bij het verminderen van hittestress in stedelijke gebieden.'
    }, {
      type: 'list',
      items: ['Verbeterde isolatie in zomer én winter', 'Natuurlijke waterbuffering bij hevige regenval', 'Verlaging van hittestress in de stad', 'Verlenging levensduur onderliggende dakbedekking', 'Bijdrage aan biodiversiteit', 'Esthetisch aantrekkelijke uitstraling']
    }, {
      type: 'heading',
      content: 'Gerecyclede materialen'
    }, {
      type: 'paragraph',
      content: 'Steeds meer dakbedekkingen worden gemaakt van gerecyclede materialen. Van rubber dakbedekking gemaakt van oude autobanden tot isolatiematerialen van gerecycled plastic - de mogelijkheden zijn eindeloos. Deze materialen presteren vaak net zo goed als nieuwe materialen, maar met een veel lagere ecologische voetafdruk.'
    }, {
      type: 'quote',
      content: 'Duurzaam bouwen is niet langer een keuze, maar een noodzaak. Het dak speelt hierin een cruciale rol als beschermer én energieleverancier van de woning.'
    }, {
      type: 'heading',
      content: 'Circulaire dakconcepten'
    }, {
      type: 'paragraph',
      content: 'De toekomst van dakbedekking is circulair. Dit betekent dat materialen aan het einde van hun levensduur worden hergebruikt of gerecycled. Fabrikanten ontwikkelen steeds vaker terugnameprogramma\'s en ontwerpen hun producten met recycling in gedachten.'
    }, {
      type: 'heading',
      content: 'Wat betekent dit voor u?'
    }, {
      type: 'paragraph',
      content: 'Als huiseigenaar of vastgoedbeheerder heeft u steeds meer duurzame opties voor uw dak. Of u nu kiest voor een groen sedumdak, zonnepanelen of gerecyclede dakbedekking - elke keuze draagt bij aan een duurzamere toekomst. Bovendien kunnen deze investeringen leiden tot lagere energiekosten en een hogere woningwaarde.'
    }, {
      type: 'paragraph',
      content: 'FEIGRO Dakwerken helpt u graag bij het maken van de juiste keuze. Onze specialisten adviseren u over de mogelijkheden voor uw specifieke situatie en zorgen voor een vakkundige installatie.'
    }]
  }
};
export default function BlogDetail() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const post = slug ? blogPosts[slug] : null;
  if (!post) {
    return <Navigate to="/nieuws" replace />;
  }
  const otherPosts = Object.values(blogPosts).filter(p => p.id !== post.id).slice(0, 2);
  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'paragraph':
        return <motion.p key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} className="text-slate-600 text-lg leading-relaxed font-light">
          {section.content}
        </motion.p>;
      case 'heading':
        return <motion.h2 key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} className="text-2xl md:text-3xl font-heading text-slate-900 uppercase tracking-tight mt-8 mb-4">
          {section.content}
        </motion.h2>;
      case 'list':
        return <motion.ul key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} className="space-y-3 my-6">
          {section.items?.map((item, i) => <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
            <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>)}
        </motion.ul>;
      case 'quote':
        return <motion.blockquote key={index} initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} className="border-l-4 border-brand-green pl-6 py-4 my-8 bg-brand-green/5 rounded-r-xl">
          <p className="text-xl text-slate-700 italic font-light leading-relaxed">
            "{section.content}"
          </p>
        </motion.blockquote>;
      default:
        return null;
    }
  };
  return <>
    <SEO title={`${post.title} | FEIGRO Dakwerken`} description={post.excerpt} canonical={`/nieuws/${post.id}`} />

    {/* Hero Section */}
    <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 overflow-hidden min-h-[60vh] flex items-end">
      <div className="absolute inset-0">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Grid matching article content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }}>
              <Link to="/nieuws" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-green transition-colors text-sm mb-8">
                <ArrowLeft size={16} />
                Terug naar nieuws
              </Link>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>

            <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase tracking-tighter leading-none mb-4">
              {post.title}
            </motion.h1>

            <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} className="text-brand-green text-xl md:text-2xl italic font-light">
              {post.subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </section>

    {/* Article Content with Sidebar */}
    <article className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {post.sections.map((section, index) => renderSection(section, index))}
            </div>

            {/* Author & Share */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center overflow-hidden p-2">
                  <img src="/images/feigro-logo-wit.png" alt="Feigro" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">{post.author}</p>
                  <p className="text-slate-500 text-sm">Dakwerken Specialist</p>
                </div>
              </div>
              <Link to="/contact">
                <PrimaryFlipButton label="Vraag advies aan" icon={<ArrowRight size={16} />} size="small" />
              </Link>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Contact Card */}
              <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} className="bg-black rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                    <Phone size={24} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Direct contact</p>
                    <p className="font-heading text-xl text-white uppercase tracking-tight">FEIGRO</p>
                  </div>
                </div>
                <p className="text-white/60 text-base mb-10 font-light leading-relaxed">
                  Hulp nodig bij uw dak? Onze specialisten staan klaar voor advies, inspectie of reparatie.
                </p>
                <div className="space-y-4">
                  <a href="tel:+31613731303" className="block w-full bg-brand-green hover:bg-white text-white hover:text-black py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all text-center shadow-lg shadow-brand-green/20">
                    Feigro: 06 13731303
                  </a>
                </div>
              </motion.div>

              {/* Services Card */}
              <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1
              }} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench size={20} className="text-brand-green" />
                  <h3 className="font-heading text-slate-900 uppercase text-sm tracking-wider">Onze Diensten</h3>
                </div>
                <ul className="space-y-3">
                  {[{
                    name: 'Dakreparatie',
                    href: '/dakreparatie'
                  }, {
                    name: 'Dakonderhoud',
                    href: '/dakonderhoud'
                  }, {
                    name: 'Dakrenovatie',
                    href: '/dakrenovatie'
                  }, {
                    name: 'Daklekkage',
                    href: '/daklekkage'
                  }, {
                    name: 'Valbeveiliging',
                    href: '/valbeveiliging'
                  }, {
                    name: 'VvE & Vastgoedbeheer',
                    href: '/vve-vastgoedbeheer'
                  }].map(service => <li key={service.name}>
                    <Link to={service.href} className="flex items-center gap-2 text-slate-600 hover:text-brand-green transition-colors text-sm font-light">
                      <ArrowRight size={12} />
                      {service.name}
                    </Link>
                  </li>)}
                </ul>
              </motion.div>

              {/* Werkgebied Card */}
              <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2
              }} className="bg-brand-green/10 rounded-2xl p-8 border border-brand-green/20">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={20} className="text-brand-green" />
                  <h3 className="font-heading text-slate-900 uppercase text-sm tracking-wider">Werkgebied</h3>
                </div>
                <p className="text-slate-600 text-sm font-light mb-4">
                  FEIGRO is actief in:
                </p>
                <ul className="space-y-2">
                  {['Noord-Holland', 'Flevoland', 'Utrecht'].map(region => <li key={region} className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                    <CheckCircle2 size={14} className="text-brand-green" />
                    {region}
                  </li>)}
                </ul>
                <div className="mt-6 pt-6 border-t border-brand-green/20">
                  <Link to="/contact" className="text-brand-green text-xs font-bold uppercase tracking-wider hover:text-slate-900 transition-colors flex items-center gap-2">
                    Offerte aanvragen <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </article>

    {/* Related Articles */}
    {otherPosts.length > 0 && <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
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
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Lees ook</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((relatedPost, index) => <motion.article key={relatedPost.id} initial={{
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
            <Link to={`/nieuws/${relatedPost.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-green/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-brand-green text-xs font-bold uppercase tracking-wider">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-heading text-slate-900 mt-2 uppercase tracking-tight group-hover:text-brand-green transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 font-light line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </motion.article>)}
        </div>
      </div>
    </section>}

    {/* CTA Section */}
    <CTAFooter
      title="Ook een dakwerker nodig?"
      description="Neem contact op met Tommie of Jan voor een vrijblijvend adviesgesprek of offerte."
      className="bg-slate-50"
    />
  </>;
}