import { fileURLToPath } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { appDefines } from "./vite.shared.js";

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";
// https://vitejs.dev/config/
export default defineConfig({
  define: appDefines,
  build: {
    outDir: fileURLToPath(
      new URL(`./dist/${customElement ? "wc" : "svelte"}`, import.meta.url)
    ),
    lib: {
      entry: fileURLToPath(new URL("./src/main.ts", import.meta.url)),
      cssFileName: "style",
      fileName: (format) => `svelte-aplayer.${format}.js`,
      formats: ["es", "umd"],
      name: "Aplayer",
    },
  },
  plugins: [svelte()],
});
