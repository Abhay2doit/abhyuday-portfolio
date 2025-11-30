import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, User, Bot, Settings, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Knowledge base about Abhyuday for context
const systemPrompt = `You are an AI assistant on Abhyuday Bhadauriya's portfolio website. Answer questions about him based on this information:

Name: Abhyuday Bhadauriya
Role: Integration Lead at Observe.AI
Location: Bengaluru, India
Experience: 10+ years in software engineering

Work Experience:
- Observe.AI (Current) - Integration Lead: Architects enterprise integrations, builds AI-driven tools, works with $100K-$5M ARR customers
- Unbxd Inc / Bloomreach - Senior Engineer: Product search, e-commerce solutions
- LTI - Software Engineer: Enterprise solutions

Technical Skills: Python, JavaScript, React, APIs, AWS, GCP, Azure, Docker, Kubernetes, SQL/NoSQL, Snowflake
AI/Automation: Agentic Workflows, Multi-Agent Systems, RAG, Prompt Engineering, n8n, Zapier
Solution Design: Enterprise Integrations, System Design, ETL/ELT

Key Projects:
- Enterprise Integration Platform (AWS, GCP, Azure)
- Agentic AI Workflows with MCP & RAG
- Data Pipeline Automation with n8n
- Customer Success Platform

Education: B.E. from MEDICAPS Institute (2014)
Contact: abhyudaysb@outlook.com, +91 9770324776

Be helpful, concise, and friendly. If asked about something not related to Abhyuday, politely redirect to portfolio topics.`;

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("gemini_api_key") || "");
  const [tempApiKey, setTempApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Abhyuday's AI assistant powered by Gemini. Ask me anything about his experience, skills, or projects!",
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

  useEffect(() => {
    if (!apiKey && isOpen) {
      setShowSettings(true);
    }
  }, [isOpen, apiKey]);

  const saveApiKey = () => {
    if (tempApiKey.trim()) {
      localStorage.setItem("gemini_api_key", tempApiKey.trim());
      setApiKey(tempApiKey.trim());
      setShowSettings(false);
      setTempApiKey("");
    }
  };

  const callGemini = async (userMessage: string): Promise<string> => {
    const conversationHistory = messages.map(m => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: systemPrompt }] },
            { role: "model", parts: [{ text: "I understand. I'm ready to help visitors learn about Abhyuday Bhadauriya." }] },
            ...conversationHistory,
            { role: "user", parts: [{ text: userMessage }] }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to get response");
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    if (!apiKey) {
      setShowSettings(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await callGemini(input);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Error: ${error instanceof Error ? error.message : "Something went wrong"}. Please check your API key.`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
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
            <div className="flex-1">
              <h3 className="font-display font-bold">Chat with me</h3>
              <p className="text-xs opacity-80 font-mono">Powered by Gemini AI</p>
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="p-4 bg-muted border-b border-border">
              <p className="text-xs font-mono mb-2 text-muted-foreground">Enter your Gemini API key:</p>
              <div className="flex gap-2">
                <Input
                  type="password"
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  placeholder="AIza..."
                  className="flex-1 font-mono text-xs"
                />
                <Button onClick={saveApiKey} size="sm">Save</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get your key from{" "}
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google AI Studio
                </a>
              </p>
              {apiKey && (
                <p className="text-xs text-green-600 mt-1 font-mono">✓ API key configured</p>
              )}
            </div>
          )}

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
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/20 text-primary">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-muted rounded-r-lg rounded-tl-lg p-3">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={apiKey ? "Ask me anything..." : "Set API key first..."}
                className="flex-1 font-mono text-sm"
                disabled={isLoading || !apiKey}
              />
              <Button onClick={handleSend} size="icon" className="shrink-0" disabled={isLoading || !apiKey}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAgent;
