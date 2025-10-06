import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Erica Dingman
          </h1>
          <p className="text-xl text-muted-foreground">Professional</p>
        </div>

        <div className="flex flex-col gap-4 items-center pt-8">
          <Link to="/about" className="w-full max-w-xs">
            <Button variant="outline" className="w-full text-base py-6">
              About Me
            </Button>
          </Link>
          <Link to="/portfolio" className="w-full max-w-xs">
            <Button variant="outline" className="w-full text-base py-6">
              Portfolio
            </Button>
          </Link>
          <Link to="/mattootd" className="w-full max-w-xs">
            <Button variant="outline" className="w-full text-base py-6">
              Matt's OOTD
            </Button>
          </Link>
          <a
            href="https://www.linkedin.com/in/ericardavidson/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs"
          >
            <Button variant="outline" className="w-full text-base py-6">
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
