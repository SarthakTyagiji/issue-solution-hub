
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Development & Security', path: '/development' },
  { name: 'Legal & Consultancy', path: '/legal' },
  { name: 'Digital & Marketing', path: '/marketing' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo',
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-subtle py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-lg font-bold"
        >
          <Code className="text-brand-blue" size={24} />
          <span className="text-xl font-display">IssueServices</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'navbar-link hover:text-white',
                location.pathname === link.path && 'active'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-brand-blue hover:bg-brand-darkBlue transition-colors ml-2">
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-black pt-24 px-6 z-40 transition-transform duration-300 ease-out-expo md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium hover:text-white',
                location.pathname === link.path ? 'text-brand-blue font-semibold' : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full bg-brand-blue hover:bg-brand-darkBlue transition-colors">
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
