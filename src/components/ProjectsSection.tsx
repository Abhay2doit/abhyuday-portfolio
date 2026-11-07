const projects = [
  {
    number: "01",
    context: "Observe.AI · Integration Lead",
    title: "Building an integration team that could deliver independently",
    problem: "The integration function needed to support technical pre-sales, implementation, and strategic enterprise customer delivery.",
    contribution: "I built the team from scratch and stayed hands-on with integration engineering while shaping delivery plans, documentation, and team processes.",
    decisions: "I focused on repeatable documentation, clear delivery ownership, and customer handoffs so the work could move across the team.",
    outcome: "The team became self-sustaining. I also owned integration strategy and technical delivery for DoorDash, SoFi, and Uber.",
  },
  {
    number: "02",
    context: "Data integrations · Validation tooling",
    title: "Making pipeline checks repeatable",
    problem: "Data pipelines called for consistent validation and a clearer way to investigate ingestion issues.",
    contribution: "I created checks for Snowflake, webhooks, CSV files, watermarks, and ingestion diagnostics.",
    decisions: "The checks focus on data quality and root-cause investigation, with documented handoffs for follow-up.",
    outcome: "Engineers gained a repeatable way to validate data and investigate ingestion problems.",
  },
  {
    number: "03",
    context: "Customer onboarding · Platform workflows",
    title: "Giving implementation teams a clearer onboarding view",
    problem: "Onboarding needed a self-service surface for implementation state, access, and customer progress.",
    contribution: "I developed dashboard workflows with API-backed onboarding steps, SSO and MFA, and handoff visibility.",
    decisions: "I brought access and onboarding progress into the same workflow, with customer-facing clarity as a design goal.",
    outcome: "Onboarding progress and customer handoffs could be viewed in one place.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-space anchor-section" aria-labelledby="projects-title">
    <div className="container mx-auto px-4 md:px-8">
      <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 id="projects-title" className="section-title">Work shaped by real delivery.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">A few examples of building integrations, improving delivery, and making recurring work easier to handle.</p>
      </div>

      <div className="divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <article key={project.number} className="project-row grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <div className="md:col-span-3">
              <span className="project-number">{project.number}</span>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">{project.context}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl">{project.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{project.problem}</p>
              <dl className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-7">
                <div><dt className="detail-label">My contribution</dt><dd className="detail-copy">{project.contribution}</dd></div>
                <div><dt className="detail-label">Key decisions</dt><dd className="detail-copy">{project.decisions}</dd></div>
                <div><dt className="detail-label">Outcome</dt><dd className="detail-copy text-foreground">{project.outcome}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
