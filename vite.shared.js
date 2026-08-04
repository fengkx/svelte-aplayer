import { readFileSync } from "node:fs";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

export const appDefines = {
  SVELTE_APLAYER_VERSION: JSON.stringify(pkg.version),
};
