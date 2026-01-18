import { Hero, Services, About, RecentProjects, CTASection } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <RecentProjects />
      <CTASection />
    </div>
  );
};

export default Index;
