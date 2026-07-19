import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import RetroStripes from "./RetroStripes";

const HeroSection = () => {
  const resumeUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Abhyuday_Bhadauriya_Resume.pdf`;

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
              Abhyuday Bhadauriya • FDE Solution Architect
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-none tracking-tight">
              Building
              <br />
              <span className="text-primary">Agentic AI Systems</span>
              <br />
              For real world
              <br />
              Impact.
            </h1>

            <div className="max-w-xl pt-4">
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  FDE Solution Architect | Applied AI | 11+ Years of Enterprise Innovation
                </p>
                <p>
                  Forward-deployed Solutions Architect designing production-ready AI workflows,
                  enterprise integrations, and customer-facing technical solutions. Currently
                  working in Applied AI at Enterpret, translating complex business and data
                  challenges into scalable systems.
                </p>
                <p className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  AI may write faster code, but I deliver the ownership, strategy, and
                  collaboration that turns syntax into successful products.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a href="#contact">
                  <Button size="lg" className="font-display uppercase tracking-wide">
                    Let's get started →
                  </Button>
                </a>
                <a href={resumeUrl} download>
                  <Button variant="outline" size="lg" className="font-display uppercase tracking-wide">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
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
