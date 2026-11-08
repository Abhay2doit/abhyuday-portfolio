import { useEffect, useRef, useState } from "react";
import { sitePath } from "@/data/profile";

/** The decorative renderer owns a separate document; the homepage always has a poster. */
const RibbonArtwork = ({ sceneSrc = sitePath("/ribbon-scene.html") }: { sceneSrc?: string }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<"poster" | "loading" | "ready" | "failed">("poster");

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    setStatus("poster");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (preference.matches || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return;

    let disposed = false;
    let scheduled = false;
    let visible = !("IntersectionObserver" in window);
    let loaded = document.readyState === "complete";
    let foreground = document.visibilityState === "visible";
    let waiting = false;
    let ready = false;
    let startSent = false;
    let cancelIdle = () => {};
    let timeout: ReturnType<typeof setTimeout>;
    const fail = () => {
      if (disposed) return;
      disposed = true;
      clearTimeout(timeout);
      setStatus("failed");
    };
    const schedule = () => {
      if (!loaded || !visible || !foreground || scheduled || disposed) return;
      scheduled = true;
      const loadFrame = () => {
        if (disposed) return;
        if (!foreground) { scheduled = false; return; }
        setStatus("loading");
        waiting = true;
        timeout = setTimeout(fail, 12000);
        observer?.disconnect();
      };
      if ("requestIdleCallback" in window) {
        const id = window.requestIdleCallback(loadFrame, { timeout: 2500 });
        cancelIdle = () => window.cancelIdleCallback(id);
      } else {
        const id = setTimeout(loadFrame, 300);
        cancelIdle = () => clearTimeout(id);
      }
    };
    const observer = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { threshold: 0.6 }) : null;
    const onLoad = () => { loaded = true; schedule(); };
    const startWhenVisible = () => {
      if (!ready || !foreground || startSent || disposed) return;
      startSent = true;
      frameRef.current?.contentWindow?.postMessage({ type: "ribbon:start" }, window.location.origin);
    };
    const onVisibility = () => {
      foreground = document.visibilityState === "visible";
      clearTimeout(timeout);
      if (foreground && waiting) timeout = setTimeout(fail, 12000);
      schedule();
      startWhenVisible();
    };
    const onMessage = (event: MessageEvent) => {
      if (disposed || event.origin !== window.location.origin || event.source !== frameRef.current?.contentWindow) return;
      if (event.data?.type === "ribbon:ready") {
        clearTimeout(timeout);
        waiting = false;
        ready = true;
        setStatus("ready");
        startWhenVisible();
      } else if (event.data?.type === "ribbon:error") fail();
    };
    const onPreference = () => {
      if (!preference.matches) return;
      disposed = true;
      cancelIdle();
      clearTimeout(timeout);
      observer?.disconnect();
      setStatus("poster");
    };
    observer?.observe(scene);
    window.addEventListener("load", onLoad, { once: true });
    window.addEventListener("message", onMessage);
    document.addEventListener("visibilitychange", onVisibility);
    preference.addEventListener("change", onPreference);
    schedule();
    return () => {
      disposed = true;
      cancelIdle();
      clearTimeout(timeout);
      observer?.disconnect();
      window.removeEventListener("load", onLoad);
      window.removeEventListener("message", onMessage);
      document.removeEventListener("visibilitychange", onVisibility);
      preference.removeEventListener("change", onPreference);
    };
  }, [sceneSrc]);

  return (
    <div className="artwork-stage">
      <div ref={sceneRef} className="abstract-scene" data-renderer-status={status} aria-hidden="true">
        <div className="abstract-orbit"><span /></div>
        <img className="abstract-sculpture" src={sitePath("/abstract-connections.png")} width="1024" height="1024" alt="" loading="eager" decoding="async" />
        {(status === "loading" || status === "ready") && <iframe ref={frameRef} className="ribbon-frame" src={sceneSrc} title="Decorative interlocking ribbons" tabIndex={-1} aria-hidden="true" referrerPolicy="no-referrer" onError={() => setStatus("failed")} />}
        <span className="scene-mark scene-mark-one">+</span>
        <span className="scene-mark scene-mark-two">+</span>
      </div>
    </div>
  );
};

export default RibbonArtwork;
