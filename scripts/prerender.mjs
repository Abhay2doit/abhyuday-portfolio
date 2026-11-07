import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { render, pagePaths, metadataFor, structuredDataFor } from "../dist-ssr/entry-server.js";

const origin = "https://abhay2doit.github.io/abhyuday-portfolio/";
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const template = await readFile("dist/index.html", "utf8");
if (!template.includes("<!--app-html-->")) throw new Error("Missing prerender mount marker");
for (const route of [...pagePaths, "/404/"]) {
  const metadata = metadataFor(route);
  const canonical = new URL(route.slice(1), origin).href;
  let html = template.replace("<!--app-html-->", () => render(route));
  html = html.replace(/<title>.*?<\/title>/s, () => `<title>${escape(metadata.title)}</title>`);
  for (const [key, value] of Object.entries({ description: metadata.description, "og:title": metadata.title, "og:description": metadata.description, "og:type": metadata.type, "og:url": canonical, "twitter:title": metadata.title, "twitter:description": metadata.description })) {
    const attribute = key.startsWith("og:") ? "property" : "name";
    html = html.replace(new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*\\/?>`), () => `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, () => `<link rel="canonical" href="${canonical}" />`);
  const data = route === "/404/" ? '<meta name="robots" content="noindex" />' : `<script type="application/ld+json">${JSON.stringify(structuredDataFor(route)).replaceAll("<", "\\u003c")}</script>`;
  html = html.replace("<!--page-data-->", () => data);
  const filename = route === "/404/" ? "dist/404.html" : path.join("dist", route, "index.html");
  await mkdir(path.dirname(filename), { recursive: true });
  await writeFile(filename, html);
}
const urls = pagePaths.map((route) => `<url><loc>${new URL(route.slice(1), origin).href}</loc></url>`).join("\n");
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile("dist/.nojekyll", "");
console.log(`Pre-rendered ${pagePaths.length} pages, a 404 page, and sitemap.xml`);
