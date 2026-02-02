import { Hero, Services, About, RecentProjects, Testimonials, BlogSection } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BlogSection />
      <RecentProjects />
    </div>
  );
};

export default Index;
