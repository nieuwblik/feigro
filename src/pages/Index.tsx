import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects, ServiceAreaMap } from '@/components/home';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';
const Index = () => {
  return <div className="w-full">
      <Hero />
      <Services />
      <About />
      <FeaturedProjects />
      
      {/* Service Area Section */}
      
      
      <CompanyHeritage />
      <BlogSection />
    </div>;
};
export default Index;