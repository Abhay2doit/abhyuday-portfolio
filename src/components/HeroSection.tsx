import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download, Pause, Play } from "lucide-react";
import { sitePath } from "@/data/profile";

const HeroSection = () => {
  const [motionPaused, setMotionPaused] = useState(false);
  return (
  <section className="hero-section" aria-labelledby="intro-title">
    <div className="container mx-auto px-4 md:px-8">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-enter hero-enter-1">Abhyuday Bhadauriya <span aria-hidden="true">/</span> Bengaluru, India</p>
          <h1 id="intro-title" className="hero-title hero-enter hero-enter-2">
            I build <span className="hero-highlight">applied AI<svg viewBox="0 0 350 16" preserveAspectRatio="none" aria-hidden="true"><path d="M3 11 C95 1 230 1 347 8" /></svg></span> and integrations that work in the real world.
          </h1>
          <p className="hero-description hero-enter hero-enter-3">
            I’m a hands-on Solutions Architect and forward-deployed engineer. I take customer problems from discovery through implementation, then make the tools and delivery practices reusable for the next project.
          </p>
          <div className="hero-actions hero-enter hero-enter-4">
            <a className="action-link" href="#projects">View selected work <ArrowDownRight aria-hidden="true" size={18} /></a>
            <a className="text-link" href={sitePath("/Abhyuday_Bhadauriya_Resume.pdf")} download><Download aria-hidden="true" size={16} /> Download résumé</a>
          </div>
        </div>
        <div className="hero-aside hero-enter hero-enter-3">
          <div className="artwork-stage">
          <div className={`abstract-scene${motionPaused ? " is-paused" : ""}`} aria-hidden="true">
            <div className="abstract-orbit"><span /></div>
            <img className="abstract-sculpture" src={sitePath("/abstract-connections.png")} width="1024" height="1024" alt="" loading="eager" decoding="async" />
            <span className="scene-mark scene-mark-one">+</span>
            <span className="scene-mark scene-mark-two">+</span>
          </div>
          <button className="motion-toggle" type="button" onClick={() => setMotionPaused((paused) => !paused)} aria-pressed={motionPaused} aria-label={motionPaused ? "Resume artwork animation" : "Pause artwork animation"}>{motionPaused ? <Play aria-hidden="true" size={12} /> : <Pause aria-hidden="true" size={12} />}<span>{motionPaused ? "Resume motion" : "Pause motion"}</span></button>
          </div>
          <div className="current-work">
            <p className="eyebrow">Currently at Enterpret</p>
            <p>I work across customer delivery, data integrations, and the engineering practices that help teams deliver consistently.</p>
            <a className="text-link" href={sitePath("/ai-corner/")}>Explore AI Corner <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </div>
      <div className="hero-bottom"><span>Applied AI <span aria-hidden="true">/</span> Enterprise integrations <span aria-hidden="true">/</span> Customer delivery</span><a href="#projects" aria-label="Scroll to selected work"><span>Explore the work</span><ArrowDownRight aria-hidden="true" size={17} /></a></div>
    </div>
  </section>
  );
};
export default HeroSection;
