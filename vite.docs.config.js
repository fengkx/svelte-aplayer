import { fileURLToPath } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { appDefines } from "./vite.shared.js";

const targets = {
  svelte: { port: 5173 },
  "web-component": { port: 5174 },
};
const target = process.env.DOCS_TARGET ?? "svelte";

if (!(target in targets)) {
  throw new Error(`Unknown docs target: ${target}`);
}

export default defineConfig({
  root: fileURLToPath(new URL(`./demo/${target}/`, import.meta.url)),
  base: "./",
  define: appDefines,
  build: {
    outDir: fileURLToPath(new URL(`./docs/${target}/`, import.meta.url)),
    emptyOutDir: true,
  },
  server: {
    port: targets[target].port,
  },
  plugins: [
    svelte({
      configFile: fileURLToPath(new URL("./svelte.config.js", import.meta.url)),
    }),
  ],
});
