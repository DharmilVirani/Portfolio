import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const base = process.env.PREVIEW_URL || 'http://localhost:4321';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const [name, width, height] of [['desktop',1440,1000], ['mobile',390,844], ['narrow',320,740]]) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `artifacts/${name}-hero.png` });
  await page.screenshot({ path: `artifacts/${name}-full.png`, fullPage: true });
  console.log(name, await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, projects: document.querySelectorAll('.project-card').length })), errors);
  await page.close();
}
await browser.close();
