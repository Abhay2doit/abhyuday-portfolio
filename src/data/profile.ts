export const BASE_PATH = "/abhyuday-portfolio";
export const SITE_URL = `https://abhay2doit.github.io${BASE_PATH}/`;
export const profile = {
  name: "Abhyuday Bhadauriya",
  role: "Solutions Architect | Applied AI",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/abhyuday-bhadauriya-softwareengineer/",
  github: "https://github.com/Abhay2doit",
  email: "abhyudaysb@outlook.com",
  description: "Solutions Architect and forward-deployed engineer in Bengaluru, building applied AI solutions, enterprise integrations, and reusable delivery tooling.",
};
export const sitePath = (path = "/") => `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
export const siteUrl = (path = "/") => new URL(path.replace(/^\//, ""), SITE_URL).href;
