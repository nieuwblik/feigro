import { Hero, Services, About, RecentProjects } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <RecentProjects />
    </div>
  );
};

export default Index;
