const path = require("path");
const fs = require("fs");
const { execFileSync } = require("child_process");
const { defineConfig } = require("vite");
const svelte = require("@sveltejs/vite-plugin-svelte");
const image = require("@rollup/plugin-image");

const rootDir = __dirname;
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(rootDir, "package.json"), "utf8")
);
const gitHash = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
  cwd: rootDir,
  encoding: "utf8",
}).trim();

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";
// https://vitejs.dev/config/
module.exports = defineConfig({
  define: {
    GIT_HASH: `'${gitHash}'`,
    SVELTE_APLAYER_VERSION: `'${pkg.version}'`,
  },
  build: {
    outDir: path.resolve(rootDir, "dist", customElement ? "wc" : "svelte"),
    lib: {
      entry: path.resolve(rootDir, "src/main.ts"),
      name: "Aplayer",
    },
  },
  plugins: [svelte.default(), image({})],
});
