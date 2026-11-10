import { ArrowUpRight } from "lucide-react";
import { sitePath } from "@/data/profile";

const practices = [
  {
    step: "01",
    label: "Agent loops",
    title: "Make the workflow repeatable.",
    description: "I’ve built agent loops to replace workflows I used to run manually. I can rerun the process, inspect the result, and improve the next iteration.",
  },
  {
    step: "02",
    label: "Reusable skills",
    title: "Keep the instructions that work.",
    description: "I turn repetitive tasks into reusable skills, so I can carry a working approach into the next task instead of starting over.",
  },
  {
    step: "03",
    label: "Connectors",
    title: "Bring the work together.",
    description: "I use multiple connectors to bring the tools and information I need into the same workflow.",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-space anchor-section approach-section border-t border-border" aria-labelledby="skills-title">
    <div className="container mx-auto px-4 md:px-8">
      <div data-reveal className="approach-intro">
        <div>
          <p className="eyebrow mb-4">How I work</p>
          <h2 id="skills-title" className="section-title">I figure <span className="block text-primary">things out.</span></h2>
        </div>
        <div className="approach-statement">
          <p>I’m a hands-on full-stack engineer. I’ve worked across domains with Python, React, SQL, and AWS infrastructure. That breadth helps me find my way through unfamiliar systems.</p>
          <p>Today, I use Claude within an agent harness as part of my daily engineering workflow. I build repeatable loops, create skills for recurring tasks, and connect the tools the work depends on.</p>
        </div>
      </div>

      <ul className="approach-flow">
        {practices.map((item) => (
          <li data-reveal key={item.label}>
            <div className="approach-step"><span className="project-number">{item.step}</span><span>{item.label}</span></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="approach-footer">
        <p>Understand the problem. Choose an approach. Check the result.</p>
        <a className="text-link" href={sitePath("/ai-corner/workflows/")}>Explore my workflow notes <ArrowUpRight aria-hidden="true" size={16} /></a>
      </div>
    </div>
  </section>
);

export default SkillsSection;
