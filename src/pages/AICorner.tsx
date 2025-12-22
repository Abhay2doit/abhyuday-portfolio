import Navigation from "@/components/Navigation";
import { Brain, Sparkles, Lightbulb, Workflow } from "lucide-react";

const AICorner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Brain className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-primary uppercase tracking-wider">
                  AI Corner
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
                AI Projects & <span className="text-primary">Workflows</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Exploring the intersection of artificial intelligence, automation, and innovative solutions. 
                A space for my AI experiments, workflows, and ideas.
              </p>
            </div>

            {/* Placeholder Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8 retro-shadow hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">Projects</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered applications and experiments coming soon.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 retro-shadow hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">Workflows</h3>
                <p className="text-muted-foreground text-sm">
                  Automation pipelines and integration patterns coming soon.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 retro-shadow hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">Ideas</h3>
                <p className="text-muted-foreground text-sm">
                  Concepts and explorations in AI coming soon.
                </p>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center mt-16">
              <div className="inline-block px-6 py-3 border-2 border-dashed border-muted-foreground/30 rounded-lg">
                <p className="font-mono text-sm text-muted-foreground">
                  Content coming soon • Stay tuned for updates
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AICorner;
