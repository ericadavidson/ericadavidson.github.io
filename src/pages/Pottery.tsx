import Navigation from "@/components/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {potteryItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-lg border border-border bg-card">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

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
