import { useEffect, useRef } from "react";

const basePath = import.meta.env.BASE_URL;

const skillIcons = [
  { name: "React", path: `${basePath}/icons/react.svg` },
  { name: "TypeScript", path: `${basePath}/icons/typescript.svg` },
  { name: "Python", path: `${basePath}/icons/python.svg` },
  { name: "AWS", path: `${basePath}/icons/aws.svg` },
  { name: "Docker", path: `${basePath}/icons/docker-svgrepo-com.svg` },
  { name: "OpenAI", path: `${basePath}/icons/openai.svg` },
  { name: "Gemini", path: `${basePath}/icons/gemini-color.svg` },
  { name: "Claude", path: `${basePath}/icons/claude-color.svg` },
  { name: "LLaMA", path: `${basePath}/icons/ollama.svg` }, // Assuming Ollama is used for LLaMA as per file list
  { name: "Hugging Face", path: `${basePath}/icons/huggingface-color.svg` },
  { name: "MongoDB", path: `${basePath}/icons/mongodb.svg` },
  { name: "MySQL", path: `${basePath}/icons/mysql.svg` },
  { name: "n8n", path: `${basePath}/icons/n8n.svg` },
  { name: "Anthropic", path: `${basePath}/icons/anthropic.svg` },
  { name: "JavaScript", path: `${basePath}/icons/javascript.svg` },
];

const SkillIconMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate icons for seamless loop */}
        {[...skillIcons, ...skillIcons].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3 rounded-xl retro-border bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 cursor-default group"
            title={skill.name}
          >
            <div className="w-full h-full transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <img
                src={skill.path}
                alt={skill.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillIconMarquee;
