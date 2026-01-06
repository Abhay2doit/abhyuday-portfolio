import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Integration Platform",
    description: "Architected a scalable integration layer connecting AI platforms with enterprise CRMs, collaboration tools, and cloud data platforms across AWS, GCP, and Azure.",
    tags: ["Python", "AWS", "Kubernetes", "REST APIs"],
    color: "border-retro-teal",
    highlight: "bg-retro-teal",
  },
  {
    title: "Agentic AI Workflows",
    description: "Built internal tools using MCP framework and RAG workflows, implementing multi-agent flows and Mixture of Experts architectures for enhanced automation.",
    tags: ["AI/ML", "RAG", "MoE", "Python", "N8N"],
    color: "border-retro-orange",
    highlight: "bg-retro-orange",
  },
  {
    title: "Data Pipeline Automation",
    description: "Designed ETL and ELT workflows using distributed systems and AWS Lambda and EC2, with a strong focus on security by design and observability.",
    tags: ["Lambda", "Snowflake", "ETL", "Python"],
    color: "border-retro-green",
    highlight: "bg-retro-green",
  },
  {
    title: "Customer Success Platform",
    description: "Developed a self service dashboard for customer onboarding that improved go live success rates and reduced onboarding time for enterprise customers. Implemented SSO and MFA to enable secure access and a unified login experience for the new dashboard.",
    tags: ["JavaScript", "React", "APIs", "SaaS"],
    color: "border-retro-burgundy",
    highlight: "bg-retro-burgundy",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <FolderOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
              Projects.
            </h2>
          </div>
          <span className="hidden md:block text-muted-foreground font-mono text-sm retro-border px-4 py-2 bg-muted/50">
            Your project could be here too
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`retro-border retro-shadow bg-card overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-transform group ${project.color} border-l-4`}
            >
              {/* Color bar */}
              <div className={`h-1 ${project.highlight}`} />

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-display font-bold">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted text-xs font-mono uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
