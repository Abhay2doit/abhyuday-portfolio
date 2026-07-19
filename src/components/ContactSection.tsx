import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-[-0.04em]">
                Open Channel.
              </h2>
            </div>
            
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              I am most useful when the problem is still a little messy: integration
              ambiguity, AI workflow design, data movement, customer-facing technical
              strategy, or a product surface that needs to become real.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:abhyudaysb@outlook.com" 
                className="flex items-center gap-4 group"
              >
                <div className="p-2 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
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
                <div className="p-2 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
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
                <div className="p-2 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  LinkedIn Profile
                </span>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-2xl bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-lg font-mono text-muted-foreground">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <div className="cloud-shell rounded-[2rem] p-6 font-mono text-sm">
              <p className="text-muted-foreground">$ contact --context</p>
              <p className="mt-4 text-primary">channel.opened</p>
              <p className="mt-2 text-muted-foreground">scope: applied-ai, fde, integrations</p>
              <p className="mt-2 text-muted-foreground">mode: discovery {"->"} architecture {"->"} rollout</p>
              <p className="mt-2 text-accent cursor-blink">ready</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © 2025 Abhyuday Bhadauriya • All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with React + Tailwind • Cloud terminal interface
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
