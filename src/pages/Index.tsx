import { Hero, Services, About, BlogSection, CompanyHeritage, FeaturedProjects } from '@/components/home';

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
