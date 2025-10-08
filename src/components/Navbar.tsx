import { Link } from "react-router-dom";
import { Film, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Film className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-2xl font-bold text-gradient">CinemaHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/movies" className="text-foreground hover:text-primary transition-colors">
              Movies
            </Link>
            <Link to="/movies" className="text-foreground hover:text-primary transition-colors">
              TV Shows
            </Link>
            <Link to="/movies" className="text-foreground hover:text-primary transition-colors">
              New & Popular
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="hero" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
