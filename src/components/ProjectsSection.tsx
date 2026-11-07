import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { sitePath } from "@/data/profile";

const ProjectsSection = () => (
  <section id="projects" className="section-space anchor-section" aria-labelledby="projects-title">
    <div className="container mx-auto px-4 md:px-8">
      <div data-reveal className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 id="projects-title" className="section-title">Work shaped by real delivery.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">Building integrations, improving delivery, and making recurring work easier to handle.</p>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <article data-reveal key={project.slug} className="project-row grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <div className="md:col-span-3">
              <span className="project-number">{project.number}</span>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">{project.context}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl">
                <a className="project-title-link" href={sitePath(`/projects/${project.slug}/`)}>{project.title}</a>
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{project.problem}</p>
              <p className="mt-4 max-w-3xl text-base leading-7">{project.outcome}</p>
              <a className="text-link mt-6" aria-label={`Read case study: ${project.title}`} href={sitePath(`/projects/${project.slug}/`)}>Read the case study <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
