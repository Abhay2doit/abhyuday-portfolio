import { profile, SITE_URL, siteUrl } from "@/data/profile";
import { projects } from "@/data/projects";

export const pagePaths = ["/", ...projects.map((project) => `/projects/${project.slug}/`), "/ai-corner/", "/ai-corner/workflows/", "/ai-corner/ideas/"];
export const metadataFor = (path: string) => {
  const project = projects.find((item) => path === `/projects/${item.slug}/`);
  if (project) return { title: `${project.title} | ${profile.name}`, description: `${project.problem} ${project.outcome}`, type: "article" };
  const pages: Record<string, { title: string; description: string }> = {
    "/": { title: `${profile.name} | Applied AI & Forward-Deployed Engineering`, description: profile.description },
    "/ai-corner/": { title: `AI Projects & Architecture | ${profile.name}`, description: "Notes on a spatial MCP command surface, backend gateways, and connected app services." },
    "/ai-corner/workflows/": { title: `Agent Workflow Orchestration | ${profile.name}`, description: "A workflow design covering intent planning, approval checks, MCP tool execution, and task events." },
    "/ai-corner/ideas/": { title: `AI Product Ideas | ${profile.name}`, description: "Ideas for connected apps, reusable agent workflows, action previews, and human review." },
  };
  return { ...(pages[path] ?? { title: `Page not found | ${profile.name}`, description: "This page could not be found. Visit Abhyuday Bhadauriya’s portfolio." }), type: "website" };
};
export const structuredDataFor = (path: string) => {
  const personId = `${SITE_URL}#person`;
  const person = {
    "@type": "Person", "@id": personId, name: profile.name, url: SITE_URL,
    jobTitle: "Solutions Architect, Applied AI and Forward-Deployed Engineering",
    description: profile.description,
    worksFor: { "@type": "Organization", name: "Enterpret", url: "https://www.enterpret.com/" },
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: ["Applied AI", "Forward-deployed engineering", "Enterprise integrations", "Data pipelines", "Python", "Solution architecture"],
  };
  const project = projects.find((item) => path === `/projects/${item.slug}/`);
  const metadata = metadataFor(path);
  const page = path === "/" ? {
    "@type": "ProfilePage", "@id": `${SITE_URL}#profile`, url: SITE_URL,
    name: profile.name, description: profile.description, mainEntity: { "@id": personId },
  } : project ? {
    "@type": "Article", "@id": `${siteUrl(path)}#article`, url: siteUrl(path),
    headline: project.title, description: metadata.description,
    author: { "@id": personId }, mainEntityOfPage: siteUrl(path),
  } : {
    "@type": "CollectionPage", url: siteUrl(path), name: metadata.title,
    description: metadata.description, author: { "@id": personId },
  };
  return { "@context": "https://schema.org", "@graph": [person, page] };
};
