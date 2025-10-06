import Navigation from "@/components/Navigation";

const MattOOTD = () => {
  const outfits = [
    {
      day: "Monday",
      image: "https://ericadavidson.github.io/img/Matt%20as%20Freddie.jpg",
      alt: "Matt as Freddie",
    },
    {
      day: "Tuesday",
      image: "https://ericadavidson.github.io/img/burgoon%20on%20brand.png",
      alt: "Burgoon on brand",
    },
    {
      day: "Wednesday",
      image: "https://ericadavidson.github.io/img_lights.jpg",
      alt: "Northern Lights",
    },
    {
      day: "Thursday",
      image: "https://ericadavidson.github.io/img/burgoon%20off%20brand.png",
      alt: "Burgoon off brand",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Matt's OOTD</h1>
          <p className="text-muted-foreground mb-8">Resize the browser window to see the effect.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outfits.map((outfit) => (
              <div key={outfit.day} className="group relative overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={outfit.image}
                    alt={outfit.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-center font-medium text-card-foreground">{outfit.day}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm text-muted-foreground">
              This example uses media queries to re-arrange the images on different screen sizes: for screens larger than 1024px wide,
              it will show four images side by side, for screens smaller than 1024px, it will show two images side by side. For screens
              smaller than 640px, the images will stack vertically (100%).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MattOOTD;
