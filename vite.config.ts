import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/abhyuday-portfolio",
  build: {
    manifest: !isSsrBuild,
    rollupOptions: isSsrBuild ? {} : {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ribbon: path.resolve(__dirname, "ribbon-scene.html"),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
