import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-card p-12 shadow-lg">
          {/* Download Button */}
          <div className="flex justify-end mb-6">
            <Button size="sm" asChild>
              <a href="/Erica_Davidson_Dingman_resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center border-b border-border pb-4 mb-6">
            <h1 className="text-3xl font-bold mb-2 text-foreground">ERICA DAVIDSON DINGMAN</h1>
            <div className="text-sm text-muted-foreground">
              (305) 979-0079 | ericadavdingman@gmail.com
            </div>
          </div>

          {/* Employment Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-foreground uppercase">Employment</h2>
            
            {/* Movable Ink */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Movable Ink | <span className="font-normal">New York, NY</span></h3>
                <span className="text-sm text-muted-foreground">May 2021 - present</span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-2">ASSOCIATE DIRECTOR, PRODUCT MARKETING</h4>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  Led GTM programs for Movable Ink's AI solution, Da Vinci, across the US and EMEA, developing executive personas, competitive framework, partner launches, and new messaging; conducted global AI training sessions and represented the brand at key industry events and webinars, including multiple presentations at Think Summit, and as a guest on PMA podcast with original topic: product vision vs product selling.
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-muted-foreground">
                  <li>Drove 16 new pilots and $8M ARR in 2024, $6M ARR in H1 2025</li>
                  <li>Presented "The Future of Personalization" with VP of Machine Learning at 800 person conference</li>
                  <li>Facilitated AI enablement with a global roadshow, including 6 in-person and 6 virtual training sessions throughout 2024</li>
                  <li>Launched new content personalization model, subject line personalization, custom events, and new reporting UI.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-sm mb-2">SENIOR PRODUCT MARKETING MANAGER</h4>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  Led rebrand and AI launch for Da Vinci; developed positioning, sales enablement, and thought leadership content; launched key AI features (e.g. subject line generation, short-lived content) and led product discovery, competitive analysis, and client webinars.
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-muted-foreground">
                  <li>Drove 6 new pilots and $2M ARR in 2023, the first full year of Da Vinci rebrand</li>
                  <li>Created the first PMM intern program in 2022</li>
                </ul>
              </div>
            </div>

            {/* Aircall */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Aircall | <span className="font-normal">New York, NY</span></h3>
                <span className="text-sm text-muted-foreground">July 2019 - May 2021</span>
              </div>
              
              <div>
                <h4 className="font-bold text-sm mb-2">PRODUCT MARKETING MANAGER</h4>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  Led GTM programs for Aircall's mobile apps, and launched SMS, the largest feature release in Aircall history; led SMS pricing and packaging analysis, drove global telecom market expansion strategy, created +150 sales materials, redesigned the monthly customer newsletter, and launched sales enablement tool, Highspot, for 200+ users, owning solution architecture, content creation, and global training initiatives.
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-muted-foreground">
                  <li>Increased mobile adoption by 44%</li>
                  <li>Achieved 86% engagement on Highspot in first year</li>
                  <li>Increased average newsletter open rate from 26% to 39%</li>
                </ul>
              </div>
            </div>

            {/* Adaptly */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Adaptly (Acquired by Accenture) | <span className="font-normal">New York, NY</span></h3>
                <span className="text-sm text-muted-foreground">May 2015 - July 2019</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-sm mb-1">DIRECTOR OF LEARNING & DEVELOPMENT</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Owned enablement, product documentation, partner best practices, and facilitated trainings for clients and global offices. Built a searchable subject matter expert database with company-wide adoption in 2018
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-1">SENIOR PROJECT MANAGER, MEDIA OPERATIONS TRAINING & ONBOARDING</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built LMS courses, product overviews, supporting sales material, and onboarded 22 new hires with 91% retention by July 2019.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-1">MEDIA MANAGER</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managed, optimized, and evaluated social campaigns across Facebook & Instagram, Twitter, Pinterest, and Snapchat
                  </p>
                </div>
              </div>
            </div>

            {/* Earlier positions */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">Thrillist Media Group | <span className="font-normal">New York, NY</span></h3>
                <span className="text-sm text-muted-foreground">April 2014 - May 2015</span>
              </div>
              <h4 className="font-bold text-sm">AD OPERATIONS COORDINATOR</h4>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">MediaVest | <span className="font-normal">New York, NY</span></h3>
                <span className="text-sm text-muted-foreground">July 2013 - April 2014</span>
              </div>
              <h4 className="font-bold text-sm">ASSISTANT ACTIVATION ASSOCIATE</h4>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">Weil Gotshal & Manges LLP | <span className="font-normal">New York, NY</span></h3>
                <span className="text-sm text-muted-foreground">July 2012 - June 2013</span>
              </div>
              <h4 className="font-bold text-sm">BANKING & FINANCE PARALEGAL</h4>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-foreground uppercase">Education</h2>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-base">Wesleyan University | <span className="font-normal">Middletown, CT</span></h3>
              <span className="text-sm text-muted-foreground">May 2008 - May 2012</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bachelor of Arts in Government, concentration in American Government and Public Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
