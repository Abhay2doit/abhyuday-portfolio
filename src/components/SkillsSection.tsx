import { Code, Cpu, Layers, Users } from "lucide-react";
import SkillIconMarquee from "./SkillIconMarquee";

const skillCategories = [
  {
    title: "Technical Expertise",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      "Python", "JavaScript", "React", "APIs",
      "Snowflake", "SQL/NoSQL", "AWS", "GCP", "Mongo DB",
      "Docker", "Agentic AI", "API"
    ],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: [
      "Agentic Workflows", "Multi-Agent Systems",
      "Mixture of Experts (MoE)", "AI/ML Integration",
      "Prompt Engineering", "n8n", "Zapier"
    ],
  },
  {
    title: "Solution Design",
    icon: Layers,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      "Solution Architecture", "Enterprise Integrations",
      "System Design", "ETL/ELT Workflows",
      "Data Pipelines", "Pre-Sales Demos"
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      "Stakeholder Management", "Communication",
      "Analytical Problem Solving", "Critical Thinking",
      "Ownership", "Collaboration"
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Code className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-[-0.04em]">
            Skills.
          </h2>
        </div>

        {/* Skill Icons Marquee */}
        <SkillIconMarquee />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="cloud-shell rounded-[1.5rem] p-6 md:p-8 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded ${category.bgColor}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-display font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/70 text-sm font-mono border border-slate-200/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
