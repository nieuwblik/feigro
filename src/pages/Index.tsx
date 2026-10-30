import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects, Reviews } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <FeaturedProjects />
      <Reviews />
      <CompanyHeritage />
      <BlogSection />
    </div>
  );
};

export default Index;
