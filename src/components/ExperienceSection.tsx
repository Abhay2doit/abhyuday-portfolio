import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Observe.AI",
    role: "Integration Lead",
    period: "03/2020 – Present",
    highlights: [
      "Architected enterprise-grade integrations with CRMs, collaboration tools, and cloud platforms (AWS, GCP, Azure)",
      "Built internal agentic tools using MCP framework and RAG workflows",
      "Led solution design and architecture reviews for scalable implementations",
      "Partnered with teams to drive adoption for customers with ARR $100K-$5M",
    ],
  },
  {
    company: "Unbxd Inc (Netcore)",
    role: "Solution Engineer",
    period: "07/2019 – 03/2020",
    highlights: [
      "Built tools for customer onboarding and integration",
      "Delivered high-quality product experiences with cross-functional teams",
      "Drove implementation planning and troubleshooting",
    ],
  },
  {
    company: "Bloomreach",
    role: "Solution Engineer",
    period: "09/2017 – 06/2019",
    highlights: [
      "Primary technical owner ensuring customer success through integrations",
      "Analyzed configurations, logs, and application data",
      "Standardized escalation processes across teams",
    ],
  },
  {
    company: "LTI",
    role: "Software Engineer",
    period: "11/2014 – 08/2017",
    highlights: [
      "Provided technical solutions for CITI applications",
      "Client-facing liaison for issue resolution",
      "Developed documentation for onboarding",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            Experience.
          </h2>
        </div>
        
        <div className="grid gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group"
            >
              {/* Timeline indicator */}
              <div className="md:col-span-1 flex md:justify-center">
                <div className="w-4 h-4 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
              </div>
              
              {/* Content */}
              <div className="md:col-span-11 retro-border retro-shadow bg-card p-6 md:p-8 hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold">{exp.role}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm retro-border px-3 py-1 bg-muted/50 w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-secondary font-bold">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
