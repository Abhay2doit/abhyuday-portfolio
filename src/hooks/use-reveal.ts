import { useEffect } from "react";

/** Enhance offscreen content only; the server-rendered HTML stays visible by default. */
export const useReveal = () => {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.removeAttribute("data-reveal-pending");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06 });
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.setAttribute("data-reveal-pending", "");
      observer.observe(element);
    });
    const revealAll = () => {
      if (!preference.matches) return;
      elements.forEach((element) => element.removeAttribute("data-reveal-pending"));
      observer.disconnect();
    };
    preference.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", revealAll);
      elements.forEach((element) => element.removeAttribute("data-reveal-pending"));
    };
  }, []);
};
