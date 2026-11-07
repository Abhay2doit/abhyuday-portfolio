import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { sitePath } from "@/data/profile";

const navLinks = [
  { href: "/#projects", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/ai-corner/", label: "AI Corner" },
  { href: "/#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (location.pathname === "/" && href.startsWith("/#") && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      const hash = href.slice(1);
      window.history.pushState(null, "", sitePath(href));
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  };
  const resumeUrl = sitePath("/Abhyuday_Bhadauriya_Resume.pdf");
  const links = (mobile = false) => navLinks.map((link) => (
    <a key={link.label} href={sitePath(link.href)} onClick={(event) => handleNavClick(event, link.href)} className={mobile ? "nav-link nav-link-mobile" : "nav-link"}>{link.label}</a>
  ));
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="container mx-auto flex min-h-[4.5rem] items-center justify-between gap-4 px-4 md:px-8" aria-label="Main navigation">
        <a href={sitePath()} className="brand-link" aria-label="Abhyuday Bhadauriya, home">Abhyuday Bhadauriya</a>
        <div className="hidden items-center gap-1 lg:flex">{links()}<a className="nav-resume" href={resumeUrl} download><FileText aria-hidden="true" size={15} /> Résumé</a></div>
        <button type="button" onClick={() => setIsOpen((open) => !open)} className="menu-toggle lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}</button>
      </nav>
      {isOpen && <div id="mobile-navigation" className="mobile-navigation lg:hidden"><div className="container mx-auto flex flex-col px-4 pb-4 md:px-8">{links(true)}<a className="nav-link nav-link-mobile" href={resumeUrl} download><FileText aria-hidden="true" size={16} /> Download résumé</a></div></div>}
    </header>
  );
};
export default Navigation;
