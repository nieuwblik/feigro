import { Hero, Services, About, Testimonials, BlogSection, CompanyHeritage, FeaturedProjects } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <FeaturedProjects />
      <CompanyHeritage />
      <BlogSection />
      <Testimonials />
    </div>
  );
};

export default Index;
