import { useState, useEffect } from "react";
import { FileText, MessageCircle, Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="group text-left">
            <span className="block font-display text-lg font-bold tracking-tight text-foreground">
              abhyuday.b
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              fde.solution.architect
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl">
            <button
              onClick={() => handleNavClick({ href: "#contact", isHash: true })}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors hover:bg-primary/25"
              aria-label="Contact"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
            <a
              href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Abhyuday_Bhadauriya_Resume.pdf`}
              download
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
              aria-label="Download resume"
            >
              <FileText className="h-4 w-4" />
            </a>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-slate-200/80 bg-white/80 p-3 backdrop-blur-xl md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 rounded-2xl border border-slate-200/80 bg-card/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="rounded-xl px-3 py-3 text-left font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
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
