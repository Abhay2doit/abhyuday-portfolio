import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Knowledge base about Abhyuday
const knowledgeBase = {
  name: "Abhyuday Bhadauriya",
  role: "Integration Lead",
  company: "Observe.AI",
  location: "Bengaluru, India",
  experience: "10+ years",
  email: "abhyudaysb@outlook.com",
  phone: "+91 9770324776",
  skills: {
    technical: ["Python", "JavaScript", "React", "APIs", "AWS", "GCP", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "Snowflake"],
    ai: ["Agentic Workflows", "Multi-Agent Systems", "RAG", "Prompt Engineering", "n8n", "Zapier"],
    design: ["Solution Architecture", "Enterprise Integrations", "System Design", "ETL/ELT"],
  },
  companies: ["Observe.AI", "Unbxd Inc", "Bloomreach", "LTI"],
  education: "B.E. from MEDICAPS Institute (2014)",
  summary: "Creative problem-solver specializing in AI-driven and agentic solutions with extensive SaaS and enterprise integration experience.",
};

const getResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  // Greetings
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return `Hello! I'm Abhyuday's AI assistant. I can tell you about his experience, skills, projects, or how to contact him. What would you like to know?`;
  }
  
  // Name
  if (q.includes("name") || q.includes("who are you") || q.includes("who is")) {
    return `This portfolio belongs to ${knowledgeBase.name}, an ${knowledgeBase.role} at ${knowledgeBase.company} based in ${knowledgeBase.location}.`;
  }
  
  // Experience
  if (q.includes("experience") || q.includes("work") || q.includes("career") || q.includes("job")) {
    return `Abhyuday has ${knowledgeBase.experience} of experience. He's currently at ${knowledgeBase.company} as ${knowledgeBase.role}. Previously he worked at ${knowledgeBase.companies.slice(1).join(", ")}. He specializes in enterprise integrations and AI-driven solutions.`;
  }
  
  // Skills
  if (q.includes("skill") || q.includes("know") || q.includes("tech") || q.includes("stack")) {
    return `Abhyuday's technical skills include: ${knowledgeBase.skills.technical.slice(0, 6).join(", ")}. For AI/Automation: ${knowledgeBase.skills.ai.slice(0, 4).join(", ")}. He's also experienced in ${knowledgeBase.skills.design.join(", ")}.`;
  }
  
  // AI specific
  if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("agent")) {
    return `Abhyuday works extensively with AI technologies including: ${knowledgeBase.skills.ai.join(", ")}. He's built internal agentic tools using MCP framework and RAG workflows at Observe.AI.`;
  }
  
  // Contact
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("phone") || q.includes("hire")) {
    return `You can reach Abhyuday at:\n📧 ${knowledgeBase.email}\n📱 ${knowledgeBase.phone}\nHe's based in ${knowledgeBase.location}. Feel free to discuss your project ideas!`;
  }
  
  // Location
  if (q.includes("location") || q.includes("where") || q.includes("based") || q.includes("live")) {
    return `Abhyuday is based in ${knowledgeBase.location}, India. He works with clients and teams globally.`;
  }
  
  // Education
  if (q.includes("education") || q.includes("study") || q.includes("degree") || q.includes("university")) {
    return `Abhyuday holds a ${knowledgeBase.education}. Since then, he's gained ${knowledgeBase.experience} of professional experience in software and integration engineering.`;
  }
  
  // Projects
  if (q.includes("project") || q.includes("built") || q.includes("portfolio") || q.includes("work on")) {
    return `Key projects include:\n• Enterprise Integration Platform (AWS, GCP, Azure)\n• Agentic AI Workflows with MCP & RAG\n• Data Pipeline Automation with n8n\n• Customer Success Platform for enterprise clients\n\nCheck the Projects section above for details!`;
  }
  
  // Current role
  if (q.includes("current") || q.includes("observe") || q.includes("now") || q.includes("doing")) {
    return `Currently, Abhyuday is the ${knowledgeBase.role} at ${knowledgeBase.company}, where he architects enterprise-grade integrations and builds AI-driven tools. He works with customers having ARR from $100K to $5M.`;
  }
  
  // Thanks
  if (q.includes("thank") || q.includes("thanks")) {
    return `You're welcome! Feel free to ask anything else about Abhyuday's experience or reach out directly at ${knowledgeBase.email}. Have a great day!`;
  }
  
  // Default
  return `I can help you learn about Abhyuday's experience, skills, projects, or contact info. Try asking:\n• "What's his experience?"\n• "What skills does he have?"\n• "Tell me about his AI work"\n• "How can I contact him?"`;
};

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to answer questions about Abhyuday. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full retro-shadow hover:scale-105 transition-transform"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-card retro-border retro-shadow flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold">Chat with me</h3>
              <p className="text-xs opacity-80 font-mono">Ask about Abhyuday</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === "user"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-3 text-sm whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-secondary text-secondary-foreground rounded-l-lg rounded-tr-lg"
                      : "bg-muted rounded-r-lg rounded-tl-lg"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 font-mono text-sm"
              />
              <Button onClick={handleSend} size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAgent;
