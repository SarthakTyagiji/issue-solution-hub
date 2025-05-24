import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/sections/CallToAction';
import { BarChart, Megaphone, PlayCircle, Smartphone, TrendingUp, Users, MessageSquare } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, SEM, content marketing, and email campaigns designed to increase visibility and drive conversions.',
    icon: TrendingUp,
    color: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media management to build your brand presence, engage with your audience, and drive meaningful interactions across all major platforms.',
    icon: Users,
    color: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Video Production',
    description: 'High-quality video content creation for brand storytelling, product demonstrations, testimonials, and social media to engage your audience effectively.',
    icon: PlayCircle,
    color: 'bg-red-50 dark:bg-red-900/20',
    iconColor: 'text-red-600',
  },
  {
    title: 'Business Branding',
    description: 'Comprehensive branding solutions including logo design, brand identity, voice development, and positioning to establish a compelling brand presence.',
    icon: Megaphone,
    color: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600',
  },
  {
    title: 'Marketing Analytics',
    description: 'Data-driven marketing analytics to measure campaign performance, identify optimization opportunities, and maximize your marketing ROI.',
    icon: BarChart,
    color: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Mobile Marketing',
    description: 'Targeted mobile marketing strategies including app promotion, SMS marketing, and location-based marketing to reach users on their preferred devices.',
    icon: Smartphone,
    color: 'bg-indigo-50 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600',
  },
];

const MarketingPage = () => {
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
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white/80 text-sm font-medium mb-4 animate-fade-in">
                Digital & Marketing
              </div>
              <h1 className="text-white mb-6 animate-fade-in">Amplify Your Brand</h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
                Elevate your brand presence and reach your target audience with our comprehensive digital marketing and branding solutions.
              </p>
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

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            {/* WhatsApp Button */}
            <div className="text-center mb-8">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a 
                  href="https://wa.link/y60vqk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Me
                </a>
              </Button>
            </div>

            <SectionHeader
              title="Our Digital & Marketing Services"
              subtitle="We offer a comprehensive suite of digital marketing and branding solutions to help your business stand out"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <AnimatedCard key={service.title} index={index} className="h-full flex flex-col">
                  <div className={`${service.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5`}>
                    <service.icon className={`${service.iconColor} h-7 w-7`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-5 flex-grow">{service.description}</p>
                </AnimatedCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/contact">Start Your Marketing Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <SectionHeader
              title="Our Marketing Approach"
              subtitle="We follow a data-driven, strategic approach to maximize your marketing ROI"
              centered
            />

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {[
                  {
                    number: '01',
                    title: 'Research & Analysis',
                    description: 'We begin by understanding your business, target audience, and competitive landscape through comprehensive research and analysis.',
                  },
                  {
                    number: '02',
                    title: 'Strategy Development',
                    description: 'Based on our research, we develop a customized marketing strategy aligned with your business goals and target audience.',
                  },
                  {
                    number: '03',
                    title: 'Content Creation',
                    description: 'Our creative team produces high-quality, engaging content tailored to your brand voice and marketing objectives.',
                  },
                  {
                    number: '04',
                    title: 'Campaign Execution',
                    description: 'We implement multi-channel marketing campaigns leveraging the most effective platforms to reach your audience.',
                  },
                  {
                    number: '05',
                    title: 'Performance Tracking',
                    description: 'Continuous monitoring and analysis of campaign performance to ensure optimal results and ROI.',
                  },
                  {
                    number: '06',
                    title: 'Optimization & Growth',
                    description: 'Data-driven optimization to refine strategies, improve performance, and drive sustainable growth for your business.',
                  },
                ].map((step) => (
                  <div 
                    key={step.number} 
                    className="flex items-start animate-fade-in opacity-0"
                    style={{animationDelay: `${parseInt(step.number) * 100}ms`, animationFillMode: 'forwards'}}
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-medium text-sm">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default MarketingPage;
