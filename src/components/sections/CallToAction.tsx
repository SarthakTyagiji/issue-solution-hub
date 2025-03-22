
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 hero-gradient relative overflow-hidden"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwVjBoLTJ2MzRoMnptMTYgMGgtMlYwaDJ2MzR6bS00IDBWMC0ydjM0aDJ6TTIwIDBoMnYzNGgtMlYwem0tNCAwdjM0aC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 transform -translate-y-4",
              isVisible && "opacity-100 translate-y-0 transition-all duration-700 ease-out-expo"
            )}
          >
            Ready to Transform Your Business?
          </h2>
          <p 
            className={cn(
              "text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 transform -translate-y-4",
              isVisible && "opacity-100 translate-y-0 transition-all duration-700 ease-out-expo delay-100"
            )}
          >
            Get in touch today and discover how our comprehensive solutions can help your business thrive in today's competitive landscape.
          </p>
          <div 
            className={cn(
              "flex flex-col sm:flex-row justify-center gap-4 opacity-0 transform -translate-y-4",
              isVisible && "opacity-100 translate-y-0 transition-all duration-700 ease-out-expo delay-200"
            )}
          >
            <Button 
              asChild
              size="lg" 
              className="font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/10"
            >
              <Link to="/contact">
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="font-medium text-white bg-transparent border-white/20 hover:bg-white/10"
            >
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
