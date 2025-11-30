import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import RetroStripes from "./RetroStripes";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
                Contact.
              </h2>
            </div>
            
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Let's get your idea off the ground. If you're interested in a new 
              project, please email me any information including ideas, budget, time 
              constraints, whatever information—the more the better. Feel free to ask 
              any questions. I will do my best to respond to your email inquiry as soon 
              as possible.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:abhyudaysb@outlook.com" 
                className="flex items-center gap-4 group"
              >
                <div className="p-2 bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-xl md:text-2xl font-display font-bold text-secondary group-hover:underline">
                  abhyudaysb@outlook.com
                </span>
              </a>
              
              <a 
                href="tel:+919770324776" 
                className="flex items-center gap-4 group"
              >
                <div className="p-2 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  +91 9770324776
                </span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/abhyuday-bhadauriya-software-engineer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-2 bg-retro-teal/10 group-hover:bg-retro-teal/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-retro-teal" />
                </div>
                <span className="text-lg font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  LinkedIn Profile
                </span>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="p-2 bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-lg font-mono text-muted-foreground">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative stripes */}
          <div className="hidden lg:flex lg:col-span-5 justify-end h-[300px]">
            <RetroStripes variant="vertical" className="h-full" />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © 2025 Abhyuday Bhadauriya • All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with React + Tailwind • Retro vibes only
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
