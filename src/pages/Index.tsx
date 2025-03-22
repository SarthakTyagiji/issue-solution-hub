
import HeroSection from '@/components/sections/Hero';
import ServiceOverview from '@/components/sections/ServiceOverview';
import CallToAction from '@/components/sections/CallToAction';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="services">
          <ServiceOverview />
        </div>
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
