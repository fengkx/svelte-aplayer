import * as path from "path";
import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import image from "@rollup/plugin-image";

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "dist", "svelte"),
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "Aplayer",
    },
  },
  plugins: [svelte(), image()],
});
