
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { MessageSquare } from 'lucide-react';

const PremiumToolsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const premiumTools = [
    { name: "ChatGPT Plus", description: "Access to the latest AI model with enhanced capabilities and faster response times" },
    { name: "Coursera Plus", description: "Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs" },
    { name: "Udemy Business", description: "Access to 25,000+ top-rated courses, hands-on practice sessions, and analytics" },
    { name: "edX", description: "Access to online courses from leading educational institutions worldwide" },
    { name: "Netflix", description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV" },
    { name: "Amazon Prime", description: "Enjoy fast free delivery, exclusive deals, award-winning movies and TV shows" },
    { name: "Spotify Premium", description: "Ad-free music, offline listening, and high-quality audio" },
    { name: "Adobe Creative Cloud", description: "Access to Photoshop, Illustrator, InDesign, and more creative tools" },
    { name: "Canva Pro", description: "Access to premium templates, images, and tools for design creation" },
    { name: "Grammarly Premium", description: "Advanced writing suggestions and corrections for all your documents" },
    { name: "Microsoft 365", description: "Access to Word, Excel, PowerPoint, and more productivity tools" },
    { name: "Notion Premium", description: "Advanced project management and note-taking tools" }
  ];

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
              <h1 className="text-white mb-6 animate-fade-in">Premium Tools</h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
                Access 100+ premium tools and services at the most affordable prices. Enhance your productivity, learning, and entertainment.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg flex items-center"
              >
                <a href="http://wa.link/4vlhk6" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" />
                  Contact on WhatsApp
                </a>
              </Button>
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

        {/* Tools Section */}
        <section className="py-20">
          <div className="container px-4">
            <SectionHeader
              title="Premium Tools & Services"
              subtitle="Get access to the best premium tools and services at the most affordable prices"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {premiumTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="service-card hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3">{tool.name}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg mb-6">
                ...and 90+ more premium tools and services available!
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg flex items-center mx-auto"
              >
                <a href="http://wa.link/4vlhk6" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" />
                  Get Premium Access Now
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <SectionHeader
              title="How It Works"
              subtitle="Simple process to get access to premium tools and services"
              centered
            />
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-brand-blue">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                  <p className="text-muted-foreground">Reach out to us via WhatsApp to inquire about the premium tools you need.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-brand-blue">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Choose Your Plan</h3>
                  <p className="text-muted-foreground">Select the premium tools and services you want access to.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-brand-blue">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Get Access</h3>
                  <p className="text-muted-foreground">Receive your login credentials and start using premium tools right away.</p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg flex items-center mx-auto"
                >
                  <a href="http://wa.link/4vlhk6" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2" />
                    Chat With Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PremiumToolsPage;
