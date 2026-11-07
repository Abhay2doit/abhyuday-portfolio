import { ArrowUpRight, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-space anchor-section border-t border-border" aria-labelledby="contact-title">
    <div className="container mx-auto px-4 md:px-8">
      <p className="eyebrow mb-4">Contact</p>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <h2 id="contact-title" className="section-title">Let’s talk about the work.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">For conversations about applied AI, integrations, or customer-facing engineering, reach me by email or on LinkedIn.</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:col-span-5 md:items-end">
          <a className="contact-link" href="mailto:abhyudaysb@outlook.com"><Mail aria-hidden="true" size={18} /> abhyudaysb@outlook.com <ArrowUpRight aria-hidden="true" size={16} /></a>
          <a className="contact-link" href="tel:+919770324776"><Phone aria-hidden="true" size={18} /> +91 9770324776 <ArrowUpRight aria-hidden="true" size={16} /></a>
          <a className="contact-link" href="https://www.linkedin.com/in/abhyuday-bhadauriya-softwareengineer/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>
      </div>
      <footer className="mt-16 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Abhyuday Bhadauriya</p>
        <p>Bengaluru, India</p>
      </footer>
    </div>
  </section>
);

export default ContactSection;
