import { FolderOpen } from "lucide-react";

const projects = [
  {
    title: "A team built to deliver independently",
    context: "Observe.AI / Integration Lead",
    problem: "Built the integration team from scratch to support technical pre-sales, implementation, and strategic enterprise customer delivery.",
    contribution: "Stayed hands-on with integration engineering while shaping delivery plans and establishing the team's documentation and delivery processes.",
    practices: ["Technical documentation", "Delivery planning", "Customer handoffs"],
    outcome: "Helped the team become self-sustaining through documented practices, alongside customer delivery for DoorDash, SoFi, and Uber.",
    tags: ["Team Building", "Hands-on Engineering", "Enterprise Delivery"],
    color: "border-primary/60",
    highlight: "bg-primary",
  },
  {
    title: "Agentic AI Workflows",
    problem: "Operational teams were spending too much time debugging integrations, checking data states, and repeating diagnosis steps manually.",
    contribution: "Built internal agentic utilities that combine structured prompts, validation flows, and task-specific debugging routines.",
    practices: ["Human-review checkpoints", "Tool-specific context", "Reusable FDE utilities"],
    outcome: "Turned recurring diagnosis steps into reusable engineering workflows with human review.",
    tags: ["Agentic AI", "MCP", "RAG", "n8n"],
    color: "border-secondary/60",
    highlight: "bg-secondary",
  },
  {
    title: "Data Pipeline Automation",
    problem: "Customer data pipelines needed better validation, diagnosis, and operational confidence across ingestion paths.",
    contribution: "Created workflows for Snowflake checks, webhook validation, CSV validation, watermark checks, and ingestion diagnostics.",
    practices: ["Data quality gates", "Root-cause first tooling", "Documented handoffs"],
    outcome: "Gave engineers a repeatable way to validate data and investigate ingestion issues.",
    tags: ["Snowflake", "Webhooks", "SFTP", "Python"],
    color: "border-accent/60",
    highlight: "bg-accent",
  },
  {
    title: "Customer Success Platform",
    problem: "Onboarding needed a self-service surface that made implementation state, access, and customer progress easier to manage.",
    contribution: "Developed dashboard workflows with secure access, SSO/MFA, API-backed onboarding steps, and handoff visibility.",
    practices: ["Customer-facing clarity", "Secure access model", "Cross-functional delivery"],
    outcome: "Made onboarding progress and customer handoffs visible in one place.",
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
            Engineering, practices, and outcomes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cloud-shell rounded-[1.5rem] overflow-hidden transition-transform hover:-translate-y-1 ${project.color} border-l-4 ${index === 0 ? "md:col-span-2 xl:col-span-3" : ""}`}
            >
              {/* Color bar */}
              <div className={`h-1 ${project.highlight}`} />

              <div className="p-6 md:p-8">
                {project.context && (
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
                    {project.context}
                  </p>
                )}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-display font-bold">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-3xl text-muted-foreground mb-6 leading-relaxed">
                  {project.problem}
                </p>

                <div className={`mb-6 ${index === 0 ? "grid gap-6 md:grid-cols-3" : "space-y-4"}`}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      Engineering contribution
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-2">
                      Delivery practices
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.practices.map((decision) => (
                        <span
                          key={decision}
                          className="px-3 py-1 rounded-full bg-white/65 text-xs font-mono border border-slate-200/80"
                        >
                          {decision}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
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
