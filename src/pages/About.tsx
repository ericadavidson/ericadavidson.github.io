import Navigation from "@/components/Navigation";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 text-center text-white px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Erica Dingman
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Still a professional</p>

          <div className="flex gap-6 justify-center mb-12 flex-wrap">
            <a
              href="https://www.instagram.com/badgalriri/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 underline text-lg transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://youtu.be/eYnmdtqSOFg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 underline text-lg transition-colors"
            >
              Education
            </a>
          </div>

          <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-lg leading-relaxed">
              In my free time I photoshop my face onto other peoples' bodies, and I volunteer at{" "}
              <a
                href="https://826nyc.org/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 underline"
              >
                826 Valencia
              </a>
              . I'm also a member of{" "}
              <a
                href="https://www.the-wing.com/who-we-are/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 underline"
              >
                The Wing
              </a>{" "}
              and a leader in{" "}
              <a
                href="https://firstround.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 underline"
              >
                First Round Capital's
              </a>{" "}
              Women's Round Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
