import RetroStripes from "./RetroStripes";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Stripes decoration */}
          <div className="hidden lg:flex lg:col-span-2 h-[400px] justify-end">
            <RetroStripes variant="vertical" className="h-full" />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-10 space-y-6">
            <p className="text-muted-foreground font-mono text-sm md:text-base tracking-wider uppercase">
              Abhyuday Bhadauriya • Integration Lead
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-none tracking-tight">
              I Build
              <br />
              <span className="text-primary">Integrations</span>
              <br />
              So You Don't
              <br />
              Have To.
            </h1>
            
            <div className="max-w-xl pt-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello. I'm an Integration Lead with 10+ years of experience architecting 
                AI-driven solutions and enterprise integrations. Let's build something amazing together.
                <a href="#contact" className="text-primary hover:underline ml-1 font-semibold">
                  Let's get started →
                </a>
              </p>
            </div>
            
            {/* Mobile stripes */}
            <div className="lg:hidden flex justify-start pt-4">
              <RetroStripes variant="vertical" className="h-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
