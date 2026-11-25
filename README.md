# The AI Product Manager — V8

Next.js App Router + React + Tailwind CSS, prepared for GitHub Pages static hosting. This package is intended for the empty repository `TheAIProductManager/website`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Routes: `/`, `/approach/`, `/experience/`.

## Production checks

```bash
npm run typecheck
npm run build
```

Next.js static export writes the deployable site to `out/`. GitHub Pages serves these static files; no Next.js server runtime is required.

## GitHub Pages preview deployment

1. Upload the contents of this project to the `main` branch of `TheAIProductManager/website` (the repository should contain `app/`, `components/`, `public/` if later added, `package.json`, and `.github/` at its root).
2. In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
3. The included workflow installs dependencies, typechecks, exports the site, and deploys `out/` on pushes to `main`.
4. The initial project-site URL will be `https://theaiproductmanager.github.io/website/`. The workflow sets `/website` as the static base path and the markup rewrites internal links to match.

## Custom domain: theaiproductmanager.io

Do not change DNS until you have confirmed the current hosting and captured existing DNS records (especially MX, TXT, and email authentication records). When ready to switch from the project URL to the custom domain:

1. Configure the custom domain in **Settings → Pages**.
2. Add `public/CNAME` containing exactly `theaiproductmanager.io`.
3. Remove `GITHUB_PAGES_BASE_PATH` and `NEXT_PUBLIC_BASE_PATH` from the workflow build environment so the site exports at `/`.
4. Configure the DNS records GitHub Pages specifies for the apex domain, preserve all mail-related records, enable HTTPS, and wait for certificate provisioning.
5. Verify apex and `www` behavior, redirects, HTTPS, all three routes, and asset loading.

## Technical constraints

- `output: "export"` is required; server-side rendering, API routes, middleware, and server runtime features are not available on GitHub Pages.
- `images.unoptimized` keeps Next Image compatible with static export.
- `trailingSlash: true` creates directory-style routes.
- Tailwind CSS v4 is configured through `@tailwindcss/postcss`; the retained custom CSS preserves the existing visual system.
- Google Fonts are externally hosted; a network connection is required to load them.

## Content and design preservation

- The three V7 pages and their approved content, positioning, stories, case studies, and metrics are carried forward.
- The specified Cisco disclaimer was removed; no other intentional editorial changes were made.
- Fig. 001 retains all original labels and captions. The floating visual annotation was repositioned so it no longer competes with the lower-right SVG callout.
- Contact destination remains a pre-existing placeholder and must be configured before public launch.

## Release checklist

- [ ] Run GitHub Actions and inspect the preview deployment.
- [ ] Test `/`, `/approach/`, and `/experience/` on desktop, tablet, and mobile.
- [ ] Inspect Fig. 001 at desktop and mobile widths.
- [ ] Verify keyboard navigation, focus states, and reduced-motion behavior.
- [ ] Confirm the contact destination.
- [ ] Verify current DNS and mail records before custom-domain cutover.
