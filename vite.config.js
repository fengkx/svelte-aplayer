import * as path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import image from "@rollup/plugin-image";
import pkg from "./package.json";
import git from "async-git";
import dts from "vite-plugin-dts";

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    GIT_HASH: `'${await git.short}'`,
    SVELTE_APLAYER_VERSION: `'${pkg.version}'`,
  },
  build: {
    outDir: path.resolve(__dirname, "dist", customElement ? "wc" : "svelte"),
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "Aplayer",
    },
  },
  plugins: [
    svelte(),
    image({}),
    // dts({
    //   outputDir: ["dist", "types"],
    // }),
  ],
});
