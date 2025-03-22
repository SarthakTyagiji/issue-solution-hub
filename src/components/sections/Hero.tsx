
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const services = [
  'Development',
  'Legal Services',
  'Digital Marketing',
];

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set initial visibility with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Rotate through services
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-gradient relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwVjBoLTJ2MzRoMnptMTYgMGgtMlYwaDJ2MzR6bS00IDBWMC0ydjM0aDJ6TTIwIDBoMnYzNGgtMlYwem0tNCAwdjM0aC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-white text-center">
          {/* Heading */}
          <h1 
            className={cn(
              "opacity-0 transform -translate-y-4 mb-4 text-white leading-tight",
              isVisible && "opacity-100 translate-y-0 transition-all duration-700 ease-out-expo delay-100"
            )}
          >
            Your One-Stop Solution for Business Success
          </h1>

          {/* Rotating services - Increased height to avoid cutoff */}
          <div className="h-16 sm:h-20 mb-8 overflow-hidden flex items-center justify-center">
            {services.map((service, index) => (
              <p
                key={service}
                className={cn(
                  "text-2xl sm:text-3xl font-medium text-white/90 transition-all duration-500 ease-in-out absolute",
                  currentService === index 
                    ? "opacity-100 transform-none" 
                    : "opacity-0 translate-y-8"
                )}
              >
                {service}
              </p>
            ))}
          </div>

          {/* Description */}
          <p 
            className={cn(
              "text-lg text-white/80 mb-10 max-w-2xl mx-auto opacity-0 transform -translate-y-4",
              isVisible && "opacity-100 translate-y-0 transition-all duration-700 ease-out-expo delay-200"
            )}
          >
            Comprehensive solutions across development, legal consultancy, and digital marketing to help your business thrive in today's competitive landscape.
          </p>

          {/* CTA Buttons - Improved visibility with stronger contrast */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row justify-center gap-4 opacity-0 transform -translate-y-4",
              isVisible && "opacity-100 translate-y-0 transition-all duration-700 ease-out-expo delay-300"
            )}
          >
            <Button 
              asChild
              size="lg" 
              className="font-medium text-white bg-brand-blue hover:bg-brand-lightBlue border border-white/20 shadow-lg"
            >
              <Link to="/contact">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="font-medium text-white bg-transparent border-white/30 hover:bg-white/20 shadow-lg"
            >
              <Link to="#services">
                Explore Services
              </Link>
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
  );
};

export default HeroSection;
