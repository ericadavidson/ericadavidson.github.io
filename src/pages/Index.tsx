import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import homeBg from "@/assets/home-bokeh-bg.jpg";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${homeBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 w-full max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Erica Dingman
          </h1>
          <p className="text-xl text-muted-foreground">Product Marketing Leader</p>
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
          <Link to="/pottery" className="w-full max-w-xs">
            <Button variant="outline" className="w-full text-base py-6">
              Pottery
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
