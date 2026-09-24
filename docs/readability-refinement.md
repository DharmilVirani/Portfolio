# Readability and identity refinement — 2026-09-10

Scope: existing editorial portfolio; user confirms colors and normal/large type are good. Small interface text is difficult to read.

- REQ-07: raise interface text below 14px to a 0.875rem floor across breakpoints. Preserve larger type and decorative project miniature artwork. Allow compact rows to wrap.
- REQ-08: email and contact CTA open Gmail compose in a new tab with Dharmil's address encoded in the recipient query. Copy-email remains available. Gmail login/account handling belongs to Google; no email is sent by the portfolio.
- REQ-09: keep GitHub, LinkedIn and resume links visible and emphasize footer actions with bordered buttons.
- REQ-10: original geometric DV monogram with circuit-corner pattern, using the established cobalt color. No external asset or dependency.

Owner: root. Reuse existing project definition and experience contract. Low-risk local refinement; no deployment. Assumption: visible social buttons means always displayed in their existing footer placement, not a new fixed overlay.

Verification: typecheck, production build, existing browser interaction/accessibility suite, screenshots and overflow at desktop, mobile and 320px. Gmail recipient URL checked locally; authenticated Gmail composition is not exercised.

Results: `npm run verify` passed (0 typecheck errors/warnings; production build successful; 16 browser tests passed including axe, no-JS and reduced motion). Captured 1440px, 390px and 320px screenshots with no page errors or horizontal overflow. Reviewed desktop and narrow hero rendering; bounded decorative SVG height to leave room for enlarged scene controls.
