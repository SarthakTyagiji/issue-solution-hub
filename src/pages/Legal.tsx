
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/sections/CallToAction';
import { BookOpen, Calculator, FileText, Scale, Users } from 'lucide-react';

const services = [
  {
    title: 'GST Registration & Filing',
    description: 'Comprehensive GST services including registration, monthly/quarterly filing, annual returns, and reconciliation to ensure full compliance with GST regulations.',
    icon: FileText,
    color: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Income Tax Returns',
    description: 'Professional preparation and filing of income tax returns for individuals, businesses, and organizations, ensuring accuracy and maximum tax benefits.',
    icon: Calculator,
    color: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600',
  },
  {
    title: 'Business Consultancy',
    description: 'Strategic business consulting to optimize operations, improve profitability, and facilitate growth through expert guidance and industry insights.',
    icon: Users,
    color: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Legal Documentation',
    description: 'Preparation and review of legal documents including contracts, agreements, and corporate governance documents to protect your business interests.',
    icon: BookOpen,
    color: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Assistance with navigating complex regulatory requirements and maintaining compliance with applicable laws and regulations.',
    icon: Scale,
    color: 'bg-red-50 dark:bg-red-900/20',
    iconColor: 'text-red-600',
  },
];

const LegalPage = () => {
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
                Legal & Consultancy
              </div>
              <h1 className="text-white mb-6 animate-fade-in">Expert Legal Solutions</h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
                Navigate the complex legal and regulatory landscape with our comprehensive legal services and business consultancy solutions.
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
            <SectionHeader
              title="Our Legal & Consultancy Services"
              subtitle="We provide comprehensive legal and consultancy services to help your business navigate complex regulatory environments"
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
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <SectionHeader
              title="Why Choose Our Legal Services"
              subtitle="We provide expert guidance and personalized solutions to address your specific legal and business needs"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Our team of experienced professionals provides expert advice tailored to your specific business needs.',
                },
                {
                  title: 'Compliance Assurance',
                  description: 'We ensure your business operates in compliance with all relevant laws and regulations.',
                },
                {
                  title: 'Risk Mitigation',
                  description: 'Identify and address potential legal risks before they impact your business operations.',
                },
                {
                  title: 'Cost-Effective Solutions',
                  description: 'Efficient legal services that help you save time and money while achieving your business objectives.',
                },
              ].map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="bg-white dark:bg-black/40 rounded-xl p-6 border border-border shadow-subtle animate-fade-in opacity-0"
                  style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
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

export default LegalPage;
