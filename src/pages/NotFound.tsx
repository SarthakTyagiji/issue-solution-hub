
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh] py-20">
        <div className="container px-4 max-w-md text-center animate-scale">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-brand-blue/10 rounded-full">
            <span className="text-brand-blue text-4xl font-bold">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you're looking for. The page may have moved or no longer exists.
          </p>
          <Button asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
