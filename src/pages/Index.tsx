import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects } from '@/components/home';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';

const Index = () => {
  return (
    <div className="w-full">
      <SEO {...seoMetadata.home} />
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
