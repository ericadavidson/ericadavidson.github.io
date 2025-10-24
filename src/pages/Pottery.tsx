import Navigation from "@/components/Navigation";
import potteryVase from "@/assets/pottery-vase.jpg";
import potteryMug from "@/assets/pottery-mug.jpg";

const Pottery = () => {
  const potteryItems = [
    {
      image: potteryVase,
      alt: "Blue and black pottery vase",
    },
    {
      image: potteryMug,
      alt: "Blue and black pottery mug",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Pottery</h1>
          <p className="text-muted-foreground mb-8">A collection of my pottery work</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {potteryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm text-muted-foreground">
              My pottery collection showcasing various pieces and techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pottery;
