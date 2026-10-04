import { Code2, Users, Workflow } from "lucide-react";

const layers = [
  {
    icon: Code2,
    title: "What I build",
    detail: "Applied AI solutions, enterprise integrations, and reusable engineering tools. I stay close to the code, customer requirements, and production troubleshooting.",
  },
  {
    icon: Workflow,
    title: "What I establish",
    detail: "Discovery and delivery plans, implementation standards, technical documentation, and escalation processes that teams can use across customer projects.",
  },
  {
    icon: Users,
    title: "How teams deliver",
    detail: "Shared context, clear ownership, and documented handoffs. I work with Product, Engineering, and Customer Success to resolve blockers and turn recurring needs into reusable improvements.",
  },
];

const SystemLayersSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary mb-4">
              Engineering & leadership
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Build the solution.
              <br />
              Make the delivery repeatable.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              My work combines individual engineering contribution with technical
              leadership. Each customer project is also a chance to improve the tools,
              documentation, and practices the team brings to the next one.
            </p>
          </div>

          <div>
            <div className="grid md:grid-cols-3 gap-6">
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
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="max-w-3xl font-display text-xl font-semibold leading-8 text-foreground md:text-2xl">
            AI may write faster code, but I deliver the ownership, strategy, and
            collaboration that turns syntax into successful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemLayersSection;
