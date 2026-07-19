import {
  Activity,
  Blocks,
  BrainCircuit,
  DatabaseZap,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const layers = [
  {
    icon: BrainCircuit,
    title: "Customer Intent",
    detail: "Discovery, use-case shaping, prompt surfaces, workflow constraints, and success criteria.",
  },
  {
    icon: ShieldCheck,
    title: "Gateway Boundary",
    detail: "Browser traffic stays behind backend-owned APIs, event streams, approvals, and app connections.",
  },
  {
    icon: GitBranch,
    title: "Orchestration Runtime",
    detail: "Planner, decision engine, tool runner, retries, state transitions, and human review checkpoints.",
  },
  {
    icon: Blocks,
    title: "MCP & Integrations",
    detail: "Isolated tool clients for SaaS apps, CRMs, data sources, automation providers, and internal utilities.",
  },
  {
    icon: DatabaseZap,
    title: "Data Reliability",
    detail: "Ingestion validation, webhooks, SFTP, Snowflake checks, diagnostics, and delivery observability.",
  },
  {
    icon: Activity,
    title: "Production Feedback",
    detail: "Operational signals become reusable utilities, docs, escalation paths, and platform improvements.",
  },
];

const SystemLayersSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary mb-4">
              Runtime Model
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-none tracking-[-0.04em] mb-6">
              How the
              <br />
              work is
              <br />
              designed.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I work where customer problems, data movement, AI workflows, and production
              ownership meet. The goal is not a demo that talks well. It is a system that
              survives integrations, edge cases, approvals, handoffs, and real users.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-4">
              {layers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <div
                    key={layer.title}
                    className="cloud-shell rounded-[1.5rem] p-5 min-h-[170px] transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-11 h-11 bg-primary/10 flex items-center justify-center rounded-2xl">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground rounded-full border border-slate-200/80 px-3 py-1 bg-white/65">
                        layer {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemLayersSection;
