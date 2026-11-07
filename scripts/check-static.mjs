import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { pagePaths } from "../dist-ssr/entry-server.js";

const base = "/abhyuday-portfolio";
const origin = `https://abhay2doit.github.io${base}/`;
const sitemap = await readFile("dist/sitemap.xml", "utf8");
for (const route of pagePaths) {
  const html = await readFile(path.join("dist", route, "index.html"), "utf8");
  const canonical = new URL(route.slice(1), origin).href;
  assert(html.includes(`<link rel="canonical" href="${canonical}"`), `Wrong canonical: ${route}`);
  assert(html.includes(`<meta property="og:url" content="${canonical}"`), `Wrong social URL: ${route}`);
  assert(!html.includes("<!--app-html-->"), `Unrendered page: ${route}`);
  assert(/<h1[ >]/.test(html), `Missing main heading: ${route}`);
  assert(!html.includes('name="robots" content="noindex"'), `Accidental noindex: ${route}`);
  assert(!html.includes("https://abhyuday.dev") && !html.includes("lovable.dev"), `Stale metadata: ${route}`);
  const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  assert(match, `Missing structured data: ${route}`);
  const schema = JSON.parse(match[1]);
  assert(schema["@graph"].some((item) => item["@type"] === "Person" && item.name === "Abhyuday Bhadauriya"));
  assert(sitemap.includes(`<loc>${canonical}</loc>`), `Page absent from sitemap: ${route}`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith(base + "/")) continue;
    const local = href.slice(base.length).split(/[?#]/)[0];
    const target = path.join("dist", local);
    const info = await stat(target).catch(() => null);
    assert(info, `Broken internal link on ${route}: ${href}`);
    if (info.isDirectory()) await stat(path.join(target, "index.html"));
  }
}
const home = await readFile("dist/index.html", "utf8");
for (const text of ["Enterpret", "Observe.AI", "Experience", "Snowflake", "Aug 2019", "Jul 2019", "Sep 2017", "github.com/Abhay2doit"]) assert(home.includes(text), `Missing public profile content: ${text}`);
const notFound = await readFile("dist/404.html", "utf8");
assert(notFound.includes('name="robots" content="noindex"'));
assert(!notFound.includes('id="experience"'));
assert((await stat("dist/social-card.png")).size > 1000);
console.log(`Validated ${pagePaths.length} static pages: profile text, links, canonical URLs, JSON-LD, sitemap, and 404 handling.`);
