import * as path from "path";
import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import image from "@rollup/plugin-image";
import gitRevSync from "git-rev-sync";
import pkg from "./package.json";

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    GIT_HASH: `'${gitRevSync.short()}'`,
    SVELTE_APLAYER_VERSION: `'${pkg.version}'`,
  },
  build: {
    outDir: path.resolve(__dirname, "dist", customElement ? 'wc' : 'svelte'),
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "Aplayer",
    },
  },
  plugins: [svelte(), image({})],
});
