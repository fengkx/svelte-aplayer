import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);
const gitHash = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
  cwd: rootDir,
  encoding: "utf8",
}).trim();

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    GIT_HASH: JSON.stringify(gitHash),
    SVELTE_APLAYER_VERSION: JSON.stringify(pkg.version),
  },
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
