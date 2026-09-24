# Dharmil Virani Portfolio

Astro static portfolio built from Dharmil Virani's resume and local project evidence.

## Run Locally

```bash
npm install
npm run dev
```

Local URL: `http://localhost:4321`

## Verify

```bash
npm run check
npm run build
npm test
```

`npm run social-card` regenerates `public/social-card.png`.

## Content Model

Project case studies live in `src/content/projects/*.md`.

Each case study uses schema-validated frontmatter:

- `title`, `subtitle`, `summary`
- `category`, `tags`, `role`, `context`
- `featured`, `order`, `visual`, `accent`
- `evidence` locators for internal traceability

Featured projects appear in the selected-work grid. Non-featured projects appear in the archive rows.

## Evidence And Boundaries

- Market research: `docs/research.md`
- Structured source ledger: `docs/evidence.json`
- Project definition: `docs/project-definition.json`
- Local project audit: `docs/project-audit.json`

The portfolio does not publish private source code, clinic data, broker data, ISRO internal material, credentials, live-trading claims, fake metrics, or fake testimonials.

## Deployment

The app builds to `dist/` and can be deployed to any static host.

For canonical URLs, Open Graph URLs, and sitemap entries, set:

```bash
SITE_URL=https://your-domain.example npm run build
```

Public deployment was intentionally left out of this build until requested.
