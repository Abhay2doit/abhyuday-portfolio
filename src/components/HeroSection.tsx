import { ArrowRight, CheckCircle2, Code2, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const terminalLines = [
  "$ harness plan --from customer-problem",
  "define scope, ownership, and success criteria",
  "build and validate the solution",
  "document decisions and delivery steps",
  "turn recurring work into reusable tooling",
  "close the loop with customer feedback",
];

const HeroSection = () => {
  const resumeUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Abhyuday_Bhadauriya_Resume.pdf`;

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 py-24 md:py-28">
        <div className="mb-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 backdrop-blur-xl">
            <Code2 className="h-4 w-4 text-primary" />
            Abhyuday Bhadauriya
          </span>
          <span className="text-primary">fde / applied ai</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.08] text-foreground sm:text-4xl md:text-5xl xl:text-[3.5rem]">
              <span className="block">Hands-on engineering.</span>
              <span className="mt-2 block text-primary">
                Technical leadership.
              </span>
              <span className="mt-2 block">Teams that deliver.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              I build applied AI solutions and the tooling, standards, and delivery
              processes that help teams work independently. At Observe.AI, I built the
              integration team from scratch. At Enterpret, I own customer delivery and
              help establish FDE practices while staying hands-on with engineering.
            </p>

              <div className="flex flex-wrap gap-4 mt-7">
                <a href="#contact">
                  <Button size="lg" className="rounded-full font-mono uppercase tracking-wide">
                    Open channel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href={resumeUrl} download>
                  <Button variant="outline" size="lg" className="rounded-full border-slate-300/80 bg-white/60 font-mono uppercase tracking-wide">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
                <a href="/abhyuday-portfolio/ai-corner">
                  <Button variant="ghost" size="lg" className="rounded-full font-mono uppercase tracking-wide">
                    AI Corner
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
          </div>

          <div className="lg:col-span-5">
            <div className="cloud-shell overflow-hidden rounded-[2rem]">
              <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-accent/80" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  harness session
                </span>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-primary">
                  <Terminal className="h-5 w-5" />
                  <span className="min-w-0 break-words font-mono text-sm">/engineering/customer-delivery</span>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  {terminalLines.map((line, index) => (
                    <div
                      key={line}
                      className={index === 0 ? "text-foreground" : "flex items-center gap-2 text-muted-foreground"}
                    >
                      {index > 0 && <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />}
                      <span>{line}</span>
                    </div>
                  ))}
                  <div className="text-primary cursor-blink">$ ship --with-ownership</div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-5">
                  <div className="rounded-2xl border border-slate-200/80 bg-white/65 p-4">
                    <p className="font-mono text-2xl font-semibold text-foreground">11+</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      years
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-white/65 p-4">
                    <p className="font-mono text-2xl font-semibold text-foreground">FDE</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      mode
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-white/65 p-4">
                    <p className="font-mono text-2xl font-semibold text-foreground">AI</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      applied
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
