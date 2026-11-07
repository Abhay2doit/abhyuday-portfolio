const groups = [
  { name: "Engineering", items: "Python, JavaScript, React, APIs, SQL, Snowflake, Docker" },
  { name: "Integrations & data", items: "Enterprise integrations, webhooks, SFTP, ETL/ELT, data pipelines" },
  { name: "Applied AI & automation", items: "Agentic workflows, RAG, prompt engineering, n8n" },
  { name: "Solution delivery", items: "Solution architecture, discovery, delivery planning, technical documentation" },
];

const SkillsSection = () => (
  <section id="skills" className="section-space anchor-section border-t border-border" aria-labelledby="skills-title">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Skills</p>
          <h2 id="skills-title" className="section-title">Tools for delivery.</h2>
        </div>
        <dl className="divide-y divide-border border-y border-border md:col-span-8">
          {groups.map((group) => (
            <div key={group.name} className="grid gap-2 py-5 sm:grid-cols-3 sm:gap-6">
              <dt className="text-sm font-semibold">{group.name}</dt>
              <dd className="text-sm leading-6 text-muted-foreground sm:col-span-2">{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default SkillsSection;
