import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  use: { baseURL: "http://127.0.0.1:3461" },
  webServer: {
    command: "pnpm exec next start -p 3461",
    url: "http://127.0.0.1:3461",
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 5"] } },
  ],
})
