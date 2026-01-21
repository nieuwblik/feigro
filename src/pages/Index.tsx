import { Hero, Services, About, RecentProjects, Testimonials } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />


      <About />
      <Testimonials />
      <RecentProjects />
    </div>
  );
};

export default Index;
