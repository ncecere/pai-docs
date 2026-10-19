# Pi Agent Interface docs

The user, administrator and operator documentation for [Pi Agent Interface (PAI)](https://github.com/ncecere/pi-agent-interface), the self-hosted, open-source chat app for [Pi Durable](https://github.com/ncecere/pi-durable-platform) agents: everyone who signs in gets their own agents, with an inbox for the work they do. It's published at <https://docs.pai.bitop.dev>; the product's website is <https://pai.bitop.dev> (a separate repository). Both addresses, the repositories and the version the docs describe are in `lib/site.ts`.

These pages are for the people who use Pi Agent Interface, the administrators who run an instance, and the operators who host it. The product repository's own README, CHANGELOG and code stay the engineering record. The docs describe **v0.5.0**, released on 2026-10-19 (tag `v0.5.0`, commit `df32023`), the latest release; the Releases section's *Unreleased* page says there is nothing newer yet and points at the roadmap. Nothing in them is marked "coming": everything described is built at that tag.

A static site: [Fumadocs](https://fumadocs.dev) on Next.js with `output: "export"`, TypeScript and Tailwind CSS v4, served by nginx in a container. Search is Fumadocs' built-in static index, searched in the browser. No tracking, no cookies, no external fonts or CDNs: Inter is self-hosted. The app's own HTTP API serves its web app and isn't a public contract, so there is no API reference; what the app calls on the agent platform is documented by hand in `content/docs/operate/platform.mdx`.

## Local development

You need Node 22 and npm.

```sh
npm ci
npm run dev          # http://localhost:3000
```

| Command | Does |
|---|---|
| `npm run dev` | Development server with hot reload. |
| `npm run build` | The static export, in `out/`, followed by `check-names` (below). |
| `npm run check:links` | Checks every internal link and anchor in `out/` (run after a build). |
| `npm run typecheck` | TypeScript. |
| `npm start` | Serves `out/` locally. |
| `npm run brand` | Copies `app/brand.css` from `../pai-assets/brand/brand.css`; `npm run brand -- --check` fails if they differ (below). |
| `npm run logo -- face` | Copies the logo from `../pai-assets/logo/face/` (below). |
| `npm run screenshots` | Imports screenshots (below). |
| `npm run screenshots:check` | Lists screenshot slots that are still placeholders. |

`npm run build` runs `scripts/check-names.mjs` afterwards (npm's `postbuild`). It fails the build if a page loads anything from another origin, names a competing chat app or agent inbox, or uses "PAI" bare: in a page title, in a heading 1, or before "Pi Agent Interface" has been written out on that page.

## Layout

```text
lib/site.ts                   the site and product addresses, repositories, the version described and its commit, and the image digest
lib/source.ts                 the docs as a Fumadocs source, and the lighter sidebar tree
lib/mark.json                 the logo's mark as inline SVG markup (written by scripts/sync-logo.mjs)
app/brand.css                 the brand tokens for Tailwind v4, copied verbatim from pai-assets; byte-identical with the website's copy
app/global.css                Tailwind, Fumadocs' CSS, and Fumadocs' variables mapped onto brand.css
app/(home)/page.tsx           the landing page
app/docs/[[...slug]]/page.tsx docs pages
app/api/search/route.ts       the static search index (exported as /api/search)
app/not-found.tsx             the 404 page
content/docs/                 the pages, in MDX, one folder per section (meta.json orders them)
components/logo.tsx           the logo: the "Face" mark (inline SVG from lib/mark.json) beside the name as live text
components/screenshot.tsx     named screenshot slots, with a marked placeholder until an image exists
lib/screenshot-slots.json     the slots and their alt text
lib/screenshots.json          imported screenshots and their sizes (written by the import script)
public/                       favicons, apple-touch-icon, 192/512 icons and og.png, copied from pai-assets
scripts/                      sync-brand, sync-logo, import-screenshots, check-links, check-names
nginx/                        nginx.conf and the site's server block and security headers
Dockerfile                    builds the export, then serves it with nginx
SCREENSHOTS.md                the capture list for the screenshot session
```

The sections are **Get started**, **Use**, **Administer**, **Operate** and **Releases** (`content/docs/meta.json`).

## Writing

- Every claim must be true of the Pi Agent Interface version the docs describe (`lib/site.ts`). Check it against the product repository at that tag (`README.md`, `CHANGELOG.md`, `NOTICE.md`, `.env.example`, `Dockerfile`, `compose.yaml`, `server/*.ts`: `config.ts` for every setting and its checks, `app.ts` for routes and messages) and the web app (`src/routes/**`, `src/components/**`), and use the app's own words for pages and buttons. Read the tag (`git show v0.5.0:<path>`), not a working tree: work for the next release happens on `main`, and `HEAD` may be ahead of the tag.
- Lead with "Pi Agent Interface" in titles and first mentions on each page; "PAI" is fine afterwards. `check-names` enforces it. Don't name competing products. Open Chat Interface, whose web app Pi Agent Interface's is derived from, and the things it works with (Pi Durable, identity providers, Docker, Kubernetes, PostgreSQL) are named.
- Plain, short sentences. Examples are generic: "Example Corp", the app at `https://chat.example.com`, the platform at `https://agents.example.com`.
- Document only what is built at the version described. If something depends on the platform rather than the app (for example private conversations with a team's agent), say so, and say what the app does.
- Use Fumadocs' components where they help: `Callout`, `Steps`, `Tabs`, `Cards`, `Files`.
- Each page has an "Edit on GitHub" link to its file in this repository.

### Brand

`app/brand.css` holds the colours, radii, shadows and fonts as `--pai-*` variables and Tailwind utilities (`bg-brand-surface`, `text-brand-link`, `rounded-card`, `shadow-brand-2`): Open Chat Interface's neutral greys, which Pi Agent Interface's UI inherits (dark by default), with the logo's amber for links. It is a **verbatim copy** of the master in `../pai-assets/brand/brand.css`, shared byte for byte with the website (`../pai-website/app/brand.css`). Never edit it here: change the master, then copy it to both sites.

```sh
npm run brand              # copy the master to app/brand.css
npm run brand -- --check   # fail if app/brand.css differs from the master
```

`app/global.css` maps Fumadocs' theme variables onto the `--pai-*` tokens, as the sister sites do.

### Logo

The logo is "Face": an amber face with two upright eyes on a near-black tile, the app's own Face avatar. Its source, exports and usage rules are in `../pai-assets/logo/` (`logo/face/`, `logo/README.md`). `components/logo.tsx` draws the mark inline from `lib/mark.json` (`mark-small.svg`, 28 px, `aria-hidden`) beside the name as live text. The tile keeps it readable on light pages too; the bare face (`mark-bare.svg`) is for dark surfaces only and isn't used.

```sh
npm run logo -- face
```

rewrites `lib/mark.json` from `face/mark-small.svg` and `mark.svg`, and copies `favicon.ico`, `favicon.svg`, `png/apple-touch-icon.png`, `png/icon-192.png` and `png/icon-512.png` into `public/` unchanged, and `png/og-card.png` to `public/og.png`. Rerun it when the logo changes and commit the results.

### Screenshots

Screenshots come only from the fictional "Example Corp" demo instance, never from a real install. Each image has a named slot in `lib/screenshot-slots.json` (its alt text, the file names it may have, `"phone": true` for phone captures, and optionally a `hold` reason that keeps a capture out) and is placed with `<Screenshot slot="…" />`. Until an image is imported, the slot shows a clearly marked placeholder. `SCREENSHOTS.md` lists, per slot, the file, size, page, URL, persona and the state to set up. **All 31 slots are captured** (27 from the first pass, and four added for v0.2.0: `connect-gate`, `settings-connection`, `chat-agent-picker-teams` and `admin-features-locked`), from the app at v0.3.1. `SCREENSHOTS.md` is kept by hand: when you add or remove a slot, update `lib/screenshot-slots.json` and the table in `SCREENSHOTS.md` together, and its count. When you replace an image, check that its slot's alt text still describes it.

```sh
SCREENSHOTS_DIR=../pai-assets/screenshots npm run screenshots
```

converts each available PNG to WebP (at most 1600 px wide) in `public/images/`, and records its width and height in `lib/screenshots.json`.

## A new release

1. Read the new tag in the product repository (`README.md`, `CHANGELOG.md`, `.env.example`, `deploy/`, `server/`, `src/`), not `main`.
2. Update `lib/site.ts` (`productVersion`, `productReleaseDate`, `describedCommit`, and the image digest from the GitHub Release).
3. Add `content/docs/releases/vX-Y-Z.mdx` from the changelog, add it to `content/docs/releases/meta.json` and the table in `releases/index.mdx`, and reset `unreleased.mdx`.
4. Fix the pages the release changed, then run `npm run build` (it ends with the name check) and `npm run check:links`.

## Container

```sh
docker build -t pai-docs .
docker run --rm -p 8080:8080 --read-only --tmpfs /tmp:uid=101,gid=101 pai-docs
```

nginx (Alpine, pinned by digest) runs as user 101 on port 8080, keeps its pid and temp files under `/tmp` (so the root filesystem can be read-only; mount an `emptyDir` at `/tmp` in Kubernetes), answers `/healthz`, sends security headers and a Content Security Policy, gzips text, and caches hashed assets for a year.

## Deploy

Pushes to `main` run `.github/workflows/publish.yaml`: it type-checks, builds (including `check-names`) and link-checks the site, then builds and pushes a multi-arch image (linux/amd64, linux/arm64):

- `ghcr.io/ncecere/pai-docs:<full commit sha>`
- `ghcr.io/ncecere/pai-docs:latest`

Pull requests run the checks only. Actions are pinned by commit SHA, and Dependabot opens grouped weekly updates for npm, Actions and the Docker base images.

## Licence

- **Code** (the site's source, scripts and configuration): [MIT](LICENSE).
- **Documentation text and images**: [Creative Commons Attribution 4.0 International](LICENSE-CONTENT) (CC BY 4.0).
- Inter is under the SIL Open Font License 1.1.
