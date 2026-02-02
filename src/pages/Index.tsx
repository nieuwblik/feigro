import { Hero, Services, About, Testimonials, BlogSection, CompanyHeritage } from '@/components/home';

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <CompanyHeritage />
      <Testimonials />
      <BlogSection />
    </div>
  );
};

export default Index;
