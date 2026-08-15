import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects } from '@/components/home';
import { SEOHead } from '@/components/seo/SEOHead';
import { seoMetadata } from '@/data/seo-metadata';

const Index = () => {
  return (
    <div className="w-full">
      <SEOHead {...seoMetadata.home} />
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
