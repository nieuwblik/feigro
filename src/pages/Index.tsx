import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects, ServiceAreaMap } from '@/components/home';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <FeaturedProjects />
      
      {/* Service Area Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 md:gap-4 mb-8">
                  <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
                  <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                    BEREIKBAAR
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter mb-8 uppercase">
                  Altijd <span className="text-brand-green italic">Dichtbij</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light">
                  FEIGRO Dakwerken is actief in Noord-Holland, Flevoland en Utrecht. 
                  Met ons team van ervaren dakspecialisten zijn we altijd snel ter plaatse.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Binnen 1 uur bij spoed', 'Gratis inspectie ter plaatse', 'Lokale expertise sinds 2009'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Spoedservice Button */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/spoedservice">
                    <PrimaryFlipButton 
                      label="Spoedservice" 
                      icon={<Phone size={18} />}
                    />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <ServiceAreaMap variant="light" showTitle={false} />
                
                {/* Buiten gebied tekst */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
                  <p className="text-slate-600 text-sm md:text-base mb-4 font-light">
                    Buiten ons werkgebied? <span className="font-medium text-slate-900">Neem dan contact op.</span>
                  </p>
                  <Link to="/contact">
                    <InversedFlipButton 
                      label="Contact opnemen" 
                      icon={<MessageCircle size={18} />}
                    />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <CompanyHeritage />
      <BlogSection />
    </div>
  );
};

export default Index;
