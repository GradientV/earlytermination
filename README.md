# Best Background Investigations

Website redesign for Early Termination, LLC / Best Background Investigations. Built with TypeScript, React, Tailwind CSS, and Vite. Ready for Vercel.

## Local development

Uses Node.js 24 LTS, pinned in `package.json` for Vercel and local development.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Import this folder into Vercel. The included `vercel.json` selects Vite, runs `npm run build`, publishes `dist`, and rewrites application routes to `index.html`. No environment variables are required.

Routes: `/`, `/services`, `/about`, `/attorney-services`, `/contact`, `/faq`, `/privacy`. Unknown routes show a custom 404 screen. Service anchors such as `/services#federal` open the relevant details. Contact links preselect a service with `?service=federal`.

Vercel redirects preserve the old `/services-store` and `/background-investigations` URLs by sending visitors to `/services`.

## Contact flow

The form validates required fields, displays a review screen, and builds a `mailto:` draft to `earlytermination1@gmail.com`. Visitors open their email app, review, and send the message. It does **not** send messages from the server, store submissions, or claim delivery. If direct form delivery is wanted, connect a production mail service before changing this behavior or the privacy page.

## Content and assets

The client’s original logo, investigator portraits, and photography are included locally. Photography uses optimized WebP copies. Fonts are self-hosted through Fontsource, with no external font requests or analytics.

See `docs/CONTENT-SOURCES.md` for verified facts and primary sources. The design references were The Smith Restaurant and Carnegie Diner: centered branding, immersive photography, editorial typography, restrained navigation, and rectangular calls to action.

The `.gitignore` was copied from GradientV’s `boncafe` client project, with exclusions added for TypeScript build state and local QA. Original full-size image files are kept in ignored `images-raw/`.

## Validation

`npm run build` performs strict TypeScript checking followed by a Vite production build. Browser QA covers desktop and mobile navigation, service filtering/search, service deep links, accordions, and inquiry validation/review/edit. See `docs/QA.md` for the recorded checks.
