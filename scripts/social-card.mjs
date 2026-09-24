import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'public');
const output = join(outputDir, 'social-card.png');

const html = String.raw`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face{font-family:Manrope;src:url("file://${process.cwd()}/node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2") format("woff2");font-weight:200 800}
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f5f4ee;color:#192128;font-family:Manrope,Arial,sans-serif;overflow:hidden}
      .card{position:relative;width:1200px;height:630px;padding:58px 66px;border:1px solid #d5d7d0}
      .brand{display:flex;justify-content:space-between;align-items:flex-start;font-size:18px;font-weight:650}
      .mark{font-size:52px;line-height:1;color:#214cdb;font-weight:780}.mark span{font-size:26px;vertical-align:top}
      h1{position:relative;z-index:2;margin:88px 0 0;font-size:78px;line-height:1.05;font-weight:560;letter-spacing:0;max-width:820px}.blue{color:#214cdb}
      p{position:relative;z-index:2;margin:22px 0 0;font-size:22px;line-height:1.35;color:#5d646a;max-width:620px}
      .meta{position:absolute;left:66px;right:66px;bottom:30px;display:flex;justify-content:space-between;border-top:1px solid #d5d7d0;padding-top:20px;font:16px monospace;color:#5d646a}
      svg{position:absolute;right:34px;top:72px;width:560px;height:460px;opacity:.82}
      .grid{stroke:#243c68;stroke-opacity:.14}.a{fill:#2c59ea;stroke:#173cb1}.b{fill:#dae3fb;stroke:#214cdb}.c{fill:#edf0f1;stroke:#62728b}.line{stroke:#f7f7f1;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}.wire{stroke:#214cdb;stroke-width:2;stroke-dasharray:6 8}
    </style>
  </head>
  <body>
    <main class="card">
      <div class="brand"><div><div class="mark">d<span>v</span></div><div>Dharmil Virani</div></div><div>Software Developer</div></div>
      <h1>Complex systems.<br><span class="blue">Considered</span><br>experiences.</h1>
      <p>Rust systems, full-stack product work, and interfaces with clear behavior.</p>
      <svg viewBox="0 0 620 510" aria-hidden="true">
        <path d="M30 345 310 183 590 345 310 507Z" fill="none" class="grid"/>
        <path d="M310 72V435M93 307l217 126 218-126" stroke="#8490a3" stroke-dasharray="4 8"/>
        <path d="m124 319 186-107 186 107v30L310 456 124 349Z" class="c"/>
        <path d="m124 319 186-107 186 107-186 108Z" class="c"/>
        <path d="m208 319 88-50 111 64-87 51Z" fill="#d1dbf9" stroke="#204bdd"/>
        <path d="M201 281v43M421 281v44M310 336v44M310 182v35" class="wire"/>
        <path d="m124 224 186-107 186 107v29L310 361 124 253Z" class="b"/>
        <path d="m124 224 186-107 186 107-186 108Z" class="b"/>
        <path d="m224 224 86-49 87 49-87 50Z" fill="#214cdb" stroke="#163aa8"/>
        <path d="M201 186v43M421 186v43M310 241v45" class="wire"/>
        <path d="m124 130 186-107 186 107v28L310 266 124 158Z" class="a"/>
        <path d="m124 130 186-107 186 107-186 108Z" class="a"/>
        <path d="m197 131 35 20 16-32 24 32 22-29 24 13 15-36 21 12 10-19 54 31" class="line"/>
      </svg>
      <div class="meta"><span>MARKET SYSTEMS / DESKTOP TOOLS / INTERACTION DESIGN</span><span>PORTFOLIO</span></div>
    </main>
  </body>
</html>`;

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.screenshot({ path: output });
await browser.close();
console.log(output);
