import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 7_000 },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:4322',
    channel: 'chrome',
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run build && node scripts/serve-dist.mjs 4322',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: true,
    timeout: 120_000
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['Pixel 5'], viewport: { width: 390, height: 844 } } }
  ]
});
