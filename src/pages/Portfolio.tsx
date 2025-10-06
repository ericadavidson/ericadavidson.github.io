import Navigation from "@/components/Navigation";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Portfolio</h1>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Portfolio content coming soon. Check back later for updates on my latest work and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
