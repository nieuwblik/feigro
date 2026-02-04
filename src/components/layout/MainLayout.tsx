import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { CookieConsent } from '@/components/cookies';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
