
import { useEffect } from 'react';
import HeroSection from '@/components/sections/Hero';
import ServiceOverview from '@/components/sections/ServiceOverview';
import CallToAction from '@/components/sections/CallToAction';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceOverview />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
