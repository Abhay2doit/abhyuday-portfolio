import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { AppContent } from "./App";
import { BASE_PATH } from "./data/profile";
export { pagePaths, metadataFor, structuredDataFor } from "./lib/seo";

export const render = (path: string) => renderToString(
  <StaticRouter basename={BASE_PATH} location={`${BASE_PATH}${path}`}><AppContent /></StaticRouter>
);
