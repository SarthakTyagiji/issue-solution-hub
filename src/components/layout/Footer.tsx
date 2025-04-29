
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IssueServices</h3>
            <p className="text-muted-foreground text-sm">
              Your one-stop solution for business success, offering comprehensive development, legal, and marketing services.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/issueservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/issue-services/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-brand-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:vishwas@issueservices.in" 
                className="text-foreground/70 hover:text-brand-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/development" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Development & Security
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Legal & Consultancy
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/premium-tools" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Premium Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-brand-blue transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:vishwas@issueservices.in" 
                  className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                >
                  vishwas@issueservices.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+919530623341" 
                  className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                >
                  +91-9530623341
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+919997356146" 
                  className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                >
                  +91-9997356146
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Birla Tower, Connaught Place, New Delhi
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IssueServices. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-brand-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
