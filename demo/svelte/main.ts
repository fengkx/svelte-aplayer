import { mount } from "svelte";
import App from "./App.svelte";
import "../demo.css";

const target = document.querySelector<HTMLElement>("#app");

if (!target) {
  throw new Error("Missing demo target");
}

mount(App, { target });
