
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwVjBoLTJ2MzRoMnptMTYgMGgtMlYwaDJ2MzR6bS00IDBWMC0ydjM0aDJ6TTIwIDBoMnYzNGgtMlYwem0tNCAwdjM0aC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white mb-6 animate-fade-in">Get in Touch</h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
                Have questions or ready to get started? Reach out to our team today for expert assistance with your business needs.
              </p>
              
              {/* Calendly Button */}
              <div className="mb-4">
                <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-white/90">
                  <a 
                    href="https://calendly.com/sarthaktyagi31" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule a Meeting
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-auto"
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0L60 10.7C120 21.3 240 42.7 360 42.7C480 42.7 600 21.3 720 16C840 10.7 960 21.3 1080 32C1200 42.7 1320 53.3 1380 58.7L1440 64V116H1380C1320 116 1200 116 1080 116C960 116 840 116 720 116C600 116 480 116 360 116C240 116 120 116 60 116H0V0Z"
                fill="white"
                className="dark:fill-background"
              />
            </svg>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white dark:bg-black/40 rounded-xl overflow-hidden shadow-subtle border border-border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.893086570405!2d77.21776597532573!3d28.632583975613855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd41b58aab67%3A0xaad60f76b7ca3b0!2sBirla%20Tower!5e0!3m2!1sen!2sin!4v1719590069644!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IssueServices Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
