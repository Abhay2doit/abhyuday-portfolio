import { ArrowUpRight } from "lucide-react";

const quoteSource = "https://allaboutstevejobs.com/videos/keynotes/wwdc_1997_closing_chat";

const CustomerFirstSection = () => (
  <section id="customer-first" className="customer-first-section anchor-section border-t border-border" aria-labelledby="customer-first-title">
    <div data-reveal className="container mx-auto grid gap-8 px-4 md:grid-cols-12 md:gap-16 md:px-8">
      <div className="md:col-span-5">
        <p className="eyebrow mb-4">Customer success</p>
        <h2 id="customer-first-title">Start with what the customer needs.</h2>
        <p className="customer-first-copy">I start with the customer’s workflow and what they need to achieve. Then I work backwards into engineering: understand the problem, build and validate the solution, and help the customer put it to use.</p>
      </div>
      <figure className="customer-first-quote md:col-span-7">
        <blockquote cite={quoteSource}>
          <p>“You’ve got to start with the customer experience and work backwards to the technology.”</p>
        </blockquote>
        <figcaption><span>Steve Jobs</span><a href={quoteSource} target="_blank" rel="noopener noreferrer">WWDC 1997 <ArrowUpRight aria-hidden="true" size={13} /></a></figcaption>
      </figure>
    </div>
  </section>
);

export default CustomerFirstSection;
