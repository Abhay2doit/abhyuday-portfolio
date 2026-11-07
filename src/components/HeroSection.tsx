import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

const HeroSection = () => {
  const resumeUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Abhyuday_Bhadauriya_Resume.pdf`;

  return (
    <section className="hero-section" aria-labelledby="intro-title">
      <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-7">Abhyuday Bhadauriya <span aria-hidden="true">/</span> Bengaluru, India</p>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 id="intro-title" className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              I build applied AI and integrations that work in the real world.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I’m a hands-on Solutions Architect and forward-deployed engineer. I take customer problems from discovery through implementation, then make the tools and delivery practices reusable for the next project.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a className="action-link" href="#projects">View selected work <ArrowDownRight aria-hidden="true" size={18} /></a>
              <a className="text-link" href={resumeUrl} download><Download aria-hidden="true" size={16} /> Download résumé</a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="eyebrow mb-3">Currently</p>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              At Enterpret, I work across customer delivery, data integrations, and the engineering practices that help teams deliver consistently.
            </p>
            <a className="text-link mt-5 inline-flex" href="/abhyuday-portfolio/ai-corner">Explore AI Corner <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8"><div className="section-rule" /></div>
    </section>
  );
};

export default HeroSection;
