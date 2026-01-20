import { Hero, Services, About, Reviews, RecentProjects } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <Reviews />
      <RecentProjects />
    </div>
  );
};

export default Index;
