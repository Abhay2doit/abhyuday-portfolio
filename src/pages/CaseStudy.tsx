import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { sitePath } from "@/data/profile";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <article className="container mx-auto px-4 py-16 md:px-8 md:py-24">
          <a href={sitePath("/#projects")} className="text-link"><ArrowLeft aria-hidden="true" size={16} /> Selected work</a>
          <header className="mt-12 max-w-4xl">
            <p className="eyebrow mb-5">{project.context}</p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">{project.problem}</p>
          </header>
          <figure className="work-figure my-12 md:my-16">
            <figcaption className="eyebrow mb-6">Scope of the work</figcaption>
            <ol className="work-flow">
              {project.flow.map((step, index) => (
                <li key={step}><span className="project-number">0{index + 1}</span><span>{step}</span></li>
              ))}
            </ol>
          </figure>
          <div className="grid gap-12 md:grid-cols-12">
            <p className="text-sm text-muted-foreground md:col-span-3">Abhyuday Bhadauriya<br />Engineering &amp; customer delivery</p>
            <div className="space-y-10 md:col-span-8">
              <section aria-labelledby="contribution"><h2 id="contribution" className="text-2xl font-semibold">My contribution</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">{project.contribution}</p></section>
              <section aria-labelledby="decisions"><h2 id="decisions" className="text-2xl font-semibold">Key decisions</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">{project.decisions}</p></section>
              <section aria-labelledby="outcome"><h2 id="outcome" className="text-2xl font-semibold">Outcome</h2><p className="mt-4 text-lg leading-8">{project.outcome}</p></section>
              <a className="text-link border-t border-border pt-8" href={sitePath(`/projects/${next.slug}/`)}>Next: {next.title}<ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
          </div>
        </article>
        <ContactSection />
      </main>
    </div>
  );
};
export default CaseStudy;
