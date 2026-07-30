export {};

const componentEntry = "/dist/svelte/svelte-aplayer.es.js";
const { default: Aplayer } = await import(/* @vite-ignore */ componentEntry);
const target = document.querySelector<HTMLElement>("#fixture");

if (!target) {
  throw new Error("Missing fixture target");
}

const component = new Aplayer({
  target,
  props: {
    audio: {
      name: "Published Component",
      artist: "Svelte APlayer",
      url: "data:audio/wav;base64,UklGRg==",
      cover: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E",
    },
  },
});

Object.assign(window, { publishedComponent: component });
