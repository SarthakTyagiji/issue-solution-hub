
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/sections/CallToAction';
import { Code, Database, Server, Shield, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies to create engaging, responsive, and high-performing digital experiences.',
    icon: Code,
    color: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications designed to provide seamless user experiences across iOS and Android devices.',
    icon: Code,
    color: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600',
  },
  {
    title: 'DevOps Services',
    description: 'Streamline your development workflow with our DevOps services, ensuring continuous integration, delivery, and deployment for faster and more reliable releases.',
    icon: Workflow,
    color: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and management services to ensure your data is secure, scalable, and efficiently structured.',
    icon: Database,
    color: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600',
  },
  {
    title: 'Security Services',
    description: 'Comprehensive security solutions including penetration testing, vulnerability assessments, and security audits to protect your digital assets.',
    icon: Shield,
    color: 'bg-red-50 dark:bg-red-900/20',
    iconColor: 'text-red-600',
  },
  {
    title: 'SOC Services',
    description: 'Security Operations Center (SOC) services providing 24/7 monitoring, threat detection, and incident response to safeguard your organization.',
    icon: Server,
    color: 'bg-indigo-50 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600',
  },
];

const Development = () => {
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
                Development & Security
              </div>
              <h1 className="text-white mb-6 animate-fade-in">Building the Digital Future</h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
                From web and mobile development to DevOps and security services, we provide comprehensive technical solutions to power your business in the digital age.
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
              title="Our Development & Security Services"
              subtitle="We offer a comprehensive range of development and security services to help your business thrive in the digital landscape"
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
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <SectionHeader
              title="Our Development Process"
              subtitle="We follow a structured approach to ensure high-quality, efficient development"
              centered
            />

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    number: '01',
                    title: 'Discovery & Planning',
                    description: 'We begin by understanding your business needs, objectives, and technical requirements to create a comprehensive development plan.',
                  },
                  {
                    number: '02',
                    title: 'Design & Architecture',
                    description: 'Our team designs the system architecture and user interfaces, focusing on optimal user experience and technical efficiency.',
                  },
                  {
                    number: '03',
                    title: 'Development & Implementation',
                    description: 'We develop your solution using clean, efficient code and industry best practices to ensure scalability and maintainability.',
                  },
                  {
                    number: '04',
                    title: 'Testing & Quality Assurance',
                    description: 'Rigorous testing procedures ensure your application is bug-free, secure, and performs optimally under all conditions.',
                  },
                  {
                    number: '05',
                    title: 'Deployment & Support',
                    description: 'We handle deployment and provide ongoing support and maintenance to keep your application running smoothly.',
                  },
                ].map((step) => (
                  <div key={step.number} className="flex animate-fade-in opacity-0" style={{animationDelay: `${parseInt(step.number) * 100}ms`, animationFillMode: 'forwards'}}>
                    <div className="mr-6">
                      <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
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

export default Development;
