import Navigation from "@/components/Navigation";
import { useState } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  GitBranch,
  Lightbulb,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

type TileKey = "projects" | "workflows" | "ideas";

const mcpMermaidDiagram = `flowchart LR
  User["Voice / Prompt UI"] --> Gateway["Backend Gateway"]
  Gateway --> Planner["Planner"]
  Planner --> Decision["Decision Engine"]
  Decision --> Runner["Tool Runner"]
  Runner --> Host["MCP Host"]
  Host --> Calendar["Calendar"]
  Host --> Zomato["Zomato"]
  Host --> Uber["Uber"]
  Host --> Maps["Maps"]
  Gateway --> Events["Task Events Stream"]
  Events --> User`;

const detailContent = {
  projects: {
    eyebrow: "Project",
    title: "Spatial MCP Command Surface",
    summary:
      "A graphical, voice-first command surface for running real-world tasks through MCP tools without exposing model, provider, or tool-server logic to the browser.",
    bullets: [
      "Constellation UI maps services like Calendar, Zomato, Uber, Maps, Email, and Payments as visible execution nodes.",
      "Frontend stays gateway-only: task creation, approvals, app connections, and event updates flow through the backend boundary.",
      "The interface favors calm command composition over chat, with structured prompts and connection/auth states.",
      "Design language uses a restrained electric-green, white, and neon-orange palette that can later become theme-configurable.",
    ],
  },
  workflows: {
    eyebrow: "Workflow",
    title: "Orchestration From Prompt To Tool Execution",
    summary:
      "The system is designed around a contract-first path where intent is planned, checked, executed, and streamed back as task state instead of loose frontend-side tool calls.",
    bullets: [
      "Planner decomposes user intent into explicit steps and required app/tool capabilities.",
      "Decision engine handles routing, approvals, and safety checks before actions run.",
      "Tool runner executes through isolated MCP clients so each service boundary remains clear.",
      "Event streams keep the UI reactive without giving the browser direct access to MCP servers.",
    ],
  },
  ideas: {
    eyebrow: "Idea",
    title: "Where This Could Go Next",
    summary:
      "The long-term direction is a personal operating layer: voice-first, app-aware, and visually inspectable enough that users can understand what the agent is about to do.",
    bullets: [
      "A dock for connected apps with visible health, auth, and permission states.",
      "Reusable workflow cards for repeated tasks like travel planning, food ordering, calendar repair, and follow-ups.",
      "A review mode that shows planned actions before execution, especially for purchases, messages, or scheduling.",
      "A skills layer where new MCP tools can be added through contracts instead of redesigning the interface.",
    ],
  },
} satisfies Record<TileKey, {
  eyebrow: string;
  title: string;
  summary: string;
  bullets: string[];
}>;

const tiles = [
  {
    key: "projects",
    title: "Projects",
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
    description: "Spatial command surface, technical design, and architecture notes.",
  },
  {
    key: "workflows",
    title: "Workflows",
    icon: Workflow,
    color: "text-secondary",
    bg: "bg-secondary/10",
    description: "Prompt-to-plan-to-tool orchestration patterns and execution lifecycle.",
  },
  {
    key: "ideas",
    title: "Ideas",
    icon: Lightbulb,
    color: "text-accent",
    bg: "bg-accent/10",
    description: "Product directions for voice-first app control and agent review modes.",
  },
] satisfies Array<{
  key: TileKey;
  title: string;
  icon: typeof Sparkles;
  color: string;
  bg: string;
  description: string;
}>;

const architectureNodes = [
  { label: "Prompt UI", icon: Brain },
  { label: "Gateway", icon: ServerCog },
  { label: "Planner", icon: GitBranch },
  { label: "Decision", icon: ShieldCheck },
  { label: "Tool Runner", icon: Code2 },
  { label: "MCP Host", icon: Network },
];

const AICorner = () => {
  const [activeTile, setActiveTile] = useState<TileKey>("projects");
  const activeDetail = detailContent[activeTile];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 paper-texture pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-slate-200/80 rounded-full mb-6 backdrop-blur-xl">
                <Brain className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-primary uppercase tracking-wider">
                  AI Corner
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-[-0.05em] mb-6 text-foreground">
                AI Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Workflows</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Exploring the intersection of artificial intelligence, automation, and innovative solutions. 
                A space for my AI experiments, workflows, and ideas.
              </p>
            </div>

            {/* Category Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                const isActive = activeTile === tile.key;

                return (
                  <button
                    key={tile.key}
                    type="button"
                    onClick={() => setActiveTile(tile.key)}
                    className={`group text-left cloud-shell rounded-[1.5rem] p-8 transition-all ${
                      isActive
                        ? "ring-1 ring-primary translate-y-[-4px]"
                        : "hover:translate-y-[-4px]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className={`w-12 h-12 ${tile.bg} rounded-2xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${tile.color}`} />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-xl font-bold text-foreground">{tile.title}</h3>
                      <ArrowRight
                        className={`w-5 h-5 transition-transform ${
                          isActive ? "text-primary translate-x-1" : "text-muted-foreground group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {tile.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detail Panel */}
            <div className="mt-16 max-w-6xl mx-auto cloud-shell rounded-[2rem] overflow-hidden">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                    {activeDetail.eyebrow}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {activeDetail.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {activeDetail.summary}
                  </p>

                  <div className="space-y-3">
                    {activeDetail.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 md:p-8 bg-muted/30">
                  <div className="mb-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Architecture Snapshot
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {architectureNodes.map((node, index) => {
                        const Icon = node.icon;

                        return (
                          <div key={node.label} className="relative bg-white/65 border border-slate-200/80 rounded-2xl p-4 min-h-[92px]">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 bg-primary/10 flex items-center justify-center rounded-2xl">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-display font-bold text-sm">{node.label}</span>
                            </div>
                            <p className="font-mono text-xs text-muted-foreground mt-3">
                              step {String(index + 1).padStart(2, "0")}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Mermaid Diagram
                      </p>
                      <span className="font-mono text-xs text-primary rounded-full border border-slate-200/80 px-3 py-1 bg-white/65">
                        gateway-only
                      </span>
                    </div>
                    <pre className="overflow-x-auto rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 p-4 text-xs leading-relaxed font-mono shadow-2xl">
                      <code>{mcpMermaidDiagram}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AICorner;
