import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "./test-results",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },
  webServer: [
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4173",
      url: "http://localhost:4173/tests/e2e/fixture.html",
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "npm run dev:docs -- --host 127.0.0.1",
      url: "http://localhost:5173/",
      reuseExistingServer: !process.env.CI,
    },
  ],
});
