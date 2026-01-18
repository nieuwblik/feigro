import { Header, Hero, Services, About, RecentProjects, CTASection, Footer } from '@/components/home';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <RecentProjects />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
