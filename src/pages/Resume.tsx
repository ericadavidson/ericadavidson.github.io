import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Resume</h1>
            <Button asChild>
              <a href="/Erica_Davidson_Dingman_resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
          
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="border-b border-border pb-6">
              <h2 className="text-3xl font-bold mb-2">Erica Davidson Dingman</h2>
              <div className="flex gap-4 text-muted-foreground">
                <span>(305) 979-0079</span>
                <span>•</span>
                <a href="mailto:ericadavdingman@gmail.com" className="hover:text-primary transition-colors">
                  ericadavdingman@gmail.com
                </a>
              </div>
            </div>

            {/* Employment */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Employment</h2>
              
              <div className="space-y-8">
                {/* Movable Ink */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">Movable Ink</h3>
                      <p className="text-muted-foreground">New York, NY</p>
                    </div>
                    <p className="text-muted-foreground">May 2021 - present</p>
                  </div>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Associate Director, Product Marketing</h4>
                      <p className="text-muted-foreground mb-3">
                        Led GTM programs for Movable Ink's AI solution, Da Vinci, across the US and EMEA, developing executive personas, competitive framework, partner launches, and new messaging; conducted global AI training sessions and represented the brand at key industry events and webinars.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Drove 16 new pilots and $8M ARR in 2024, $6M ARR in H1 2025</li>
                        <li>Presented "The Future of Personalization" with VP of Machine Learning at 800 person conference</li>
                        <li>Facilitated AI enablement with a global roadshow, including 6 in-person and 6 virtual training sessions throughout 2024</li>
                        <li>Launched new content personalization model, subject line personalization, custom events, and new reporting UI</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Senior Product Marketing Manager</h4>
                      <p className="text-muted-foreground mb-3">
                        Led rebrand and AI launch for Da Vinci; developed positioning, sales enablement, and thought leadership content; launched key AI features and led product discovery, competitive analysis, and client webinars.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Drove 6 new pilots and $2M ARR in 2023, the first full year of Da Vinci rebrand</li>
                        <li>Created the first PMM intern program in 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Aircall */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">Aircall</h3>
                      <p className="text-muted-foreground">New York, NY</p>
                    </div>
                    <p className="text-muted-foreground">July 2019 - May 2021</p>
                  </div>
                  
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-2">Product Marketing Manager</h4>
                    <p className="text-muted-foreground mb-3">
                      Led GTM programs for Aircall's mobile apps, and launched SMS, the largest feature release in Aircall history; led SMS pricing and packaging analysis, drove global telecom market expansion strategy, created +150 sales materials.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Increased mobile adoption by 44%</li>
                      <li>Achieved 86% engagement on Highspot in first year</li>
                      <li>Increased average newsletter open rate from 26% to 39%</li>
                    </ul>
                  </div>
                </div>

                {/* Adaptly */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">Adaptly (Acquired by Accenture)</h3>
                      <p className="text-muted-foreground">New York, NY</p>
                    </div>
                    <p className="text-muted-foreground">May 2015 - July 2019</p>
                  </div>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Director of Learning & Development</h4>
                      <p className="text-muted-foreground">
                        Owned enablement, product documentation, partner best practices, and facilitated trainings for clients and global offices. Built a searchable subject matter expert database with company-wide adoption in 2018.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Senior Project Manager, Media Operations Training & Onboarding</h4>
                      <p className="text-muted-foreground">
                        Built LMS courses, product overviews, supporting sales material, and onboarded 22 new hires with 91% retention by July 2019.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Media Manager</h4>
                      <p className="text-muted-foreground">
                        Managed, optimized, and evaluated social campaigns across Facebook & Instagram, Twitter, Pinterest, and Snapchat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Previous roles */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">Thrillist Media Group</h3>
                        <p className="text-sm text-muted-foreground">Ad Operations Coordinator</p>
                      </div>
                      <p className="text-sm text-muted-foreground">April 2014 - May 2015</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">MediaVest</h3>
                        <p className="text-sm text-muted-foreground">Assistant Activation Associate</p>
                      </div>
                      <p className="text-sm text-muted-foreground">July 2013 - April 2014</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">Weil Gotshal & Manges LLP</h3>
                        <p className="text-sm text-muted-foreground">Banking & Finance Paralegal</p>
                      </div>
                      <p className="text-sm text-muted-foreground">July 2012 - June 2013</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Wesleyan University</h3>
                  <p className="text-muted-foreground">Middletown, CT</p>
                  <p className="text-muted-foreground">Bachelor of Arts in Government</p>
                  <p className="text-sm text-muted-foreground">Concentration in American Government and Public Policy</p>
                </div>
                <p className="text-muted-foreground">May 2008 - May 2012</p>
              </div>
            </div>

            {/* View PDF */}
            <div className="pt-6 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <a href="/Erica_Davidson_Dingman_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Full PDF Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
