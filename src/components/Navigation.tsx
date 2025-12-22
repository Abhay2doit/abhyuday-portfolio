import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#experience", label: "Experience", isHash: true },
  { href: "#skills", label: "Skills", isHash: true },
  { href: "#projects", label: "Projects", isHash: true },
  { href: "/ai-corner", label: "AI Corner", isHash: false },
  { href: "#contact", label: "Contact", isHash: true },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: { href: string; isHash: boolean }) => {
    setIsOpen(false);

    if (link.isHash) {
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(link.href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="font-display text-xl font-bold text-primary">
            AB<span className="text-secondary">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-left font-mono text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navigation;
