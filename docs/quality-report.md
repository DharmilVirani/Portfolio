# Portfolio Quality Report

Generated: 2026-09-09

## Verified Scope

- Static Astro portfolio for Dharmil Virani.
- Home page, 404 page, six project case-study routes, robots.txt, sitemap.xml.
- Resume download at `public/Dharmil_Resume.pdf`.
- Social preview asset at `public/social-card.png`.
- Case studies backed by `docs/project-audit.json` and `src/content/projects/*.md`.

## Commands

```bash
npm run check
npm run build
npm test
PREVIEW_URL=http://127.0.0.1:4323 node scripts/capture.mjs
```

Latest verified result:

- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 8 pages built successfully.
- `npm test`: 16 Playwright tests passed across desktop and mobile Chrome profiles.
- screenshot capture: desktop, mobile, and 320px narrow captures completed with no page errors and no horizontal overflow.
- evidence sanity check: 8 records parsed with required fields and claims.
- `npm audit --omit=dev --json`: 0 production vulnerabilities.
- production gzip budget check: CSS total 12.88 KiB, JS asset total 0.00 KiB.

## Automated Browser Coverage

The Playwright suite verifies:

- home positioning, featured work, email link, and resume link;
- project filtering for systems and interfaces;
- deterministic market-event pipeline demo;
- TurboTypist mini interaction and reset behavior;
- axe checks on home, signal case study, and TurboTypist case study;
- horizontal overflow at 320, 390, 768, and 1440 pixel widths;
- reduced-motion behavior;
- no-JS content fallback for home and interactive demos.

## Rendered Artifacts

- `artifacts/desktop-hero.png`
- `artifacts/desktop-full.png`
- `artifacts/mobile-hero.png`
- `artifacts/mobile-full.png`
- `artifacts/narrow-hero.png`
- `artifacts/narrow-full.png`
- `public/social-card.png`

## Limits

- Automated accessibility checks are not a WCAG certification.
- No public deployment was performed.
- Neighboring local projects were inspected but not mutated or runtime-tested.
- Resume facts are treated as owner-provided facts and should be reviewed before any future public launch.
