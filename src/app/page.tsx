import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServiceProcess } from '@/components/ServiceProcess';
import { ProductsSection } from '@/components/ProductsSection';
import { GlobalPresence } from '@/components/GlobalPresence';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ServiceProcess />
      <GlobalPresence />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
