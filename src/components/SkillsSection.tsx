import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { sitePath } from "@/data/profile";

const toolkit = [
  { name: "Engineering", items: "Python, JavaScript, React, APIs, SQL, Snowflake, Docker" },
  { name: "Integrations & data", items: "Enterprise integrations, webhooks, SFTP, ETL/ELT, data pipelines" },
  { name: "Applied AI & automation", items: "Agentic workflows, RAG, prompt engineering, n8n" },
  { name: "Solution delivery", items: "Solution architecture, discovery, delivery planning, technical documentation" },
];

const questions = [
  {
    step: "01",
    label: "Context",
    question: "What does it need to know?",
    description: "Find the source, check how current it is, and bring the relevant context into the workflow. Decide what to retrieve and what to leave out.",
    note: "Sources, retrieval, context",
  },
  {
    step: "02",
    label: "Action",
    question: "What is it allowed to change?",
    description: "Define the inputs, permissions, and point for human review. Give each action a clear contract, whether it runs through an API, MCP, or a workflow.",
    note: "Tool contracts, access, approvals",
  },
  {
    step: "03",
    label: "Evidence",
    question: "How will we know it worked?",
    description: "Check the result against the original intent. Make partial failures visible, keep retries safe, and leave a trace the next engineer can follow.",
    note: "Validation, recovery, handoff",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-space anchor-section approach-section border-t border-border" aria-labelledby="skills-title">
    <div className="container mx-auto px-4 md:px-8">
      <div data-reveal className="approach-intro">
        <div>
          <p className="eyebrow mb-4">How I think</p>
          <h2 id="skills-title" className="section-title">Beyond the <span className="block text-primary">tool call.</span></h2>
        </div>
        <p className="approach-statement">
          <a href="https://modelcontextprotocol.io/docs/learn/architecture" target="_blank" rel="noopener noreferrer">MCP</a> gives an AI application a way to connect with tools and context. I think about the whole path: what the system knows, what it can change, and what counts as a successful result.
        </p>
      </div>

      <ol className="approach-flow">
        {questions.map((item, index) => (
          <li data-reveal key={item.label}>
            <div className="approach-step"><span className="project-number">{item.step}</span><span>{item.label}</span>{index < questions.length - 1 && <ArrowRight aria-hidden="true" size={18} />}</div>
            <h3>{item.question}</h3>
            <p>{item.description}</p>
            <span className="approach-note">{item.note}</span>
          </li>
        ))}
      </ol>

      <div className="approach-footer">
        <p>Choose the tools once the system makes sense.</p>
        <a className="text-link" href={sitePath("/ai-corner/workflows/")}>Explore my workflow notes <ArrowUpRight aria-hidden="true" size={16} /></a>
      </div>

      <details className="technical-toolkit">
        <summary>Technical toolkit <Plus aria-hidden="true" size={16} /></summary>
        <dl>
          {toolkit.map((group) => (
            <div key={group.name}>
              <dt>{group.name}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </details>
    </div>
  </section>
);

export default SkillsSection;
