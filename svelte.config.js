import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const customElement =
  process.env.CUSTOM_ELEMENT !== "0" && process.env.CUSTOM_ELEMENT !== "false";

const customElementOptions =
  /<svelte:options\s+customElement=\{\{ tag: "s-aplayer", extend: withLegacyDestroy \}\}\s*\/>/;

export default {
  preprocess: [
    {
      markup({ content, filename }) {
        if (customElement || !filename?.endsWith("Aplayer.svelte")) {
          return;
        }

        return {
          code: content.replace(customElementOptions, ""),
        };
      },
    },
    vitePreprocess(),
  ],
  compilerOptions: {
    customElement,
    compatibility: {
      componentApi: 4,
    },
  },
};
