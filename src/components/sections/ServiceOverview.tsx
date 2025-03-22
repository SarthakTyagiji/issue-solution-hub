
import { Code, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';

const services = [
  {
    title: 'Development & Security',
    description: 'Comprehensive development and security solutions including web and mobile app development, DevOps, and SOC services.',
    icon: Code,
    link: '/development',
    color: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Legal & Consultancy',
    description: 'Expert legal services including GST registration & filing, income tax returns, and comprehensive business consultancy.',
    icon: Scale,
    link: '/legal',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Digital & Marketing',
    description: 'Results-driven digital marketing, social media management, video production, and business branding solutions.',
    icon: TrendingUp,
    link: '/marketing',
    color: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600',
  },
];

const ServiceOverview = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <SectionHeader
          title="Our Services"
          subtitle="We provide comprehensive business solutions across three key areas"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} index={index} className="h-full flex flex-col">
              <div className={`${service.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5`}>
                <service.icon className={`${service.iconColor} h-7 w-7`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5 flex-grow">{service.description}</p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
