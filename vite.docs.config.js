import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { appDefines } from "./vite.shared.js";

const targets = ["svelte", "web-component"];
const target = process.env.DOCS_TARGET;
const customElementOptions =
  /<svelte:options\s+customElement=\{\{ tag: "s-aplayer", extend: withLegacyDestroy \}\}\s*\/>/;
const componentModuleId = "virtual:svelte-aplayer-component";
const componentFilename = fileURLToPath(
  new URL("./src/Aplayer.component.svelte", import.meta.url)
);
const sourceFilename = fileURLToPath(
  new URL("./src/Aplayer.svelte", import.meta.url)
);

if (target && !targets.includes(target)) {
  throw new Error(`Unknown docs target: ${target}`);
}

const svelteComponentMode = (mirrorSource) => ({
  name: "svelte-component-mode",
  enforce: "pre",
  resolveId(id) {
    if (id === componentModuleId) {
      return mirrorSource ? componentFilename : sourceFilename;
    }
  },
  async load(id) {
    if (id === componentFilename) {
      this.addWatchFile(sourceFilename);
      const source = await readFile(sourceFilename, "utf8");
      return source.replace(customElementOptions, "");
    }
  },
  handleHotUpdate(context) {
    if (context.file === sourceFilename) {
      const componentModule =
        context.server.moduleGraph.getModuleById(componentFilename);
      return componentModule
        ? [...context.modules, componentModule]
        : context.modules;
    }
  },
});

const docsPaths = () => ({
  name: "docs-paths",
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (request.url === "/" || request.url?.startsWith("/?")) {
        request.url = `/docs/index.html${request.url.slice(1)}`;
      } else if (request.url?.startsWith("/svelte/")) {
        request.url = `/demo${request.url}`;
      } else if (request.url?.startsWith("/web-component/")) {
        request.url = `/demo${request.url}`;
      }
      next();
    });
  },
});

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      define: appDefines,
      optimizeDeps: {
        noDiscovery: true,
      },
      server: {
        port: 5173,
      },
      plugins: [
        docsPaths(),
        svelteComponentMode(true),
        svelte({
          configFile: false,
          preprocess: vitePreprocess(),
          dynamicCompileOptions({ filename }) {
            return {
              customElement: filename === sourceFilename,
            };
          },
          compilerOptions: {
            compatibility: {
              componentApi: 4,
            },
          },
        }),
      ],
    };
  }

  if (!target) {
    throw new Error("DOCS_TARGET is required when building docs");
  }

  return {
    root: fileURLToPath(new URL(`./demo/${target}/`, import.meta.url)),
    base: "./",
    define: appDefines,
    build: {
      outDir: fileURLToPath(new URL(`./docs/${target}/`, import.meta.url)),
      emptyOutDir: true,
    },
    plugins: [
      svelteComponentMode(false),
      svelte({
        configFile: fileURLToPath(
          new URL("./svelte.config.js", import.meta.url)
        ),
      }),
    ],
  };
});
