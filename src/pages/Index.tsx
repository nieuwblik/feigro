import { Hero, Services, About, RecentProjects, Testimonials, BlogSection, CompanyHeritage } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <CompanyHeritage />
      <Testimonials />
      <BlogSection />
      <RecentProjects />
    </div>
  );
};

export default Index;
