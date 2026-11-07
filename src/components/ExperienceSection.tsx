const experience = [
  {
    company: "Enterpret",
    role: "Solutions Architect, Applied AI · Forward-Deployed Engineering",
    period: "Mar 2026 — Present",
    detail: "Own customer delivery from discovery and solution design through integration, validation, and rollout. Build data integrations and reusable tooling, and work with Product, Engineering, and Customer Success on delivery blockers and recurring needs.",
  },
  {
    company: "Observe.AI",
    role: "Integration Lead",
    period: "Feb 2024 — Mar 2026",
    detail: "Built the integration team while remaining hands-on, and led enterprise integration strategy and delivery. Also held Senior Implementation Engineer and Implementation Engineer roles (Mar 2020 — Apr 2024).",
  },
  {
    company: "Unbxd (Netcore)",
    role: "Solution Engineer",
    period: "Jul 2019 — Mar 2020",
    detail: "Customer onboarding, integration, and implementation planning.",
  },
  {
    company: "Bloomreach",
    role: "Solution Engineer",
    period: "Sep 2017 — Jun 2019",
    detail: "Customer integrations, troubleshooting, and escalation processes.",
  },
  {
    company: "LTI",
    role: "Software Engineer",
    period: "Nov 2014 — Aug 2017",
    detail: "Enterprise application work and client issue resolution.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-space anchor-section border-t border-border" aria-labelledby="experience-title">
    <div className="container mx-auto px-4 md:px-8">
      <div className="mb-12 md:mb-14">
        <p className="eyebrow mb-4">Experience</p>
        <h2 id="experience-title" className="section-title">Where I’ve done the work.</h2>
      </div>
      <ol className="divide-y divide-border border-y border-border">
        {experience.map((item) => (
          <li key={item.company} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8 md:py-7">
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
            </div>
            <div className="md:col-span-9">
              <p className="font-medium">{item.role}</p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
