import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "#projects", label: "Work", isHash: true },
  { href: "#experience", label: "Experience", isHash: true },
  { href: "#skills", label: "Skills", isHash: true },
  { href: "/ai-corner", label: "AI Corner", isHash: false },
  { href: "#contact", label: "Contact", isHash: true },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: typeof navLinks[number]) => {
    const wasOpen = isOpen;
    setIsOpen(false);
    if (!link.isHash) {
      navigate(link.href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }), 100);
      return;
    }
    const scrollToSection = () => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
    if (wasOpen) {
      window.setTimeout(scrollToSection, 50);
    } else {
      scrollToSection();
    }
  };

  const resumeUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Abhyuday_Bhadauriya_Resume.pdf`;
  const links = (mobile = false) => navLinks.map((link) => (
    <button
      key={link.label}
      type="button"
      onClick={() => handleNavClick(link)}
      className={mobile ? "nav-link nav-link-mobile" : "nav-link"}
    >
      {link.label}
    </button>
  ));

  return (
    <header className="site-header">
      <nav className="container mx-auto flex min-h-[4.5rem] items-center justify-between gap-4 px-4 md:px-8" aria-label="Main navigation">
        <button type="button" onClick={() => { navigate("/"); setIsOpen(false); }} className="brand-link" aria-label="Abhyuday Bhadauriya, home">
          <span>Abhyuday Bhadauriya</span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {links()}
          <a className="nav-resume" href={resumeUrl} download aria-label="Download résumé">
            <FileText aria-hidden="true" size={15} /> Résumé
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="menu-toggle md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>
      {isOpen && (
        <div id="mobile-navigation" className="mobile-navigation md:hidden">
          <div className="container mx-auto flex flex-col px-4 pb-4 md:px-8">
            {links(true)}
            <a className="nav-link nav-link-mobile" href={resumeUrl} download><FileText aria-hidden="true" size={16} /> Download résumé</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
