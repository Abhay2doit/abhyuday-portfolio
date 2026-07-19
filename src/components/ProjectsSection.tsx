import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Integration Platform",
    problem: "Enterprise customers needed reliable data movement across CRMs, cloud platforms, and collaboration tools without every implementation becoming bespoke.",
    architecture: "Designed an integration layer with API, file, and cloud-source patterns, backed by repeatable validation and production-readiness checks.",
    decisions: ["Gateway-owned contracts", "Reusable integration playbooks", "Security and observability by default"],
    outcome: "Reduced integration ambiguity and gave customer-facing teams a clearer path from discovery to rollout.",
    tags: ["Python", "AWS", "REST APIs", "Data Delivery"],
    color: "border-primary/60",
    highlight: "bg-primary",
  },
  {
    title: "Agentic AI Workflows",
    problem: "Operational teams were spending too much time debugging integrations, checking data states, and repeating diagnosis steps manually.",
    architecture: "Built internal agentic utilities that combine structured prompts, validation flows, and task-specific debugging routines.",
    decisions: ["Human-review checkpoints", "Tool-specific context", "Reusable FDE utilities"],
    outcome: "Turned repeated production support patterns into faster, inspectable workflows.",
    tags: ["Agentic AI", "MCP", "RAG", "n8n"],
    color: "border-secondary/60",
    highlight: "bg-secondary",
  },
  {
    title: "Data Pipeline Automation",
    problem: "Customer data pipelines needed better validation, diagnosis, and operational confidence across ingestion paths.",
    architecture: "Created workflows for Snowflake checks, webhook validation, CSV validation, watermark checks, and ingestion diagnostics.",
    decisions: ["Data quality gates", "Root-cause first tooling", "Observable handoffs"],
    outcome: "Improved the reliability and speed of production troubleshooting.",
    tags: ["Snowflake", "Webhooks", "SFTP", "Python"],
    color: "border-accent/60",
    highlight: "bg-accent",
  },
  {
    title: "Customer Success Platform",
    problem: "Onboarding needed a self-service surface that made implementation state, access, and customer progress easier to manage.",
    architecture: "Developed dashboard workflows with secure access, SSO/MFA, API-backed onboarding steps, and handoff visibility.",
    decisions: ["Customer-facing clarity", "Secure access model", "Cross-functional delivery"],
    outcome: "Improved go-live consistency while reducing implementation friction.",
    tags: ["React", "APIs", "SSO", "SaaS"],
    color: "border-primary/40",
    highlight: "bg-primary/70",
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
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-[-0.04em]">
              Projects.
            </h2>
          </div>
          <span className="hidden md:block text-muted-foreground font-mono text-sm rounded-full border border-slate-200/80 px-4 py-2 bg-white/65">
            Case studies in systems thinking
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cloud-shell rounded-[1.5rem] overflow-hidden transition-transform hover:-translate-y-1 group ${project.color} border-l-4`}
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
                  {project.problem}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      Architecture
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-2">
                      Design Decisions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.decisions.map((decision) => (
                        <span
                          key={decision}
                          className="px-3 py-1 rounded-full bg-white/65 text-xs font-mono border border-slate-200/80"
                        >
                          {decision}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/65 border border-slate-200/80 rounded-2xl p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Outcome
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/80 text-xs font-mono uppercase tracking-wider text-muted-foreground"
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
