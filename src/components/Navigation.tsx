import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-secondary transition-colors">
            Erica Dingman
          </Link>
          <div className="flex gap-6">
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              )}
            >
              About Me
            </Link>
            <Link
              to="/resume"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/resume") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Resume
            </Link>
            <Link
              to="/pottery"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/pottery") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Pottery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
