import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects } from '@/components/home';
import { seoMetadata } from '@/data/seo-metadata';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <FeaturedProjects />
      <CompanyHeritage />
      <BlogSection />
    </div>
  );
};

export default Index;
