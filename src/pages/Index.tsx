
import HeroSection from '@/components/sections/Hero';
import ServiceOverview from '@/components/sections/ServiceOverview';
import CallToAction from '@/components/sections/CallToAction';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Calendly Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to discuss your project? Book a meeting with me directly through my calendar.
              </p>
              
              <div className="mb-8">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue">
                  <a 
                    href="https://calendly.com/sarthaktyagi31" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Meeting
                  </a>
                </Button>
              </div>

              {/* Calendly Embed */}
              <div className="bg-white dark:bg-black/40 rounded-xl overflow-hidden shadow-subtle border border-border">
                <iframe
                  src="https://calendly.com/sarthaktyagi31"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a meeting"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
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
