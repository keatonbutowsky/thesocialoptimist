# TSO Website — Handoff

Last updated: 2026-05-12

## TL;DR

The Social Optimist marketing site is **live in production** at https://thesocialoptimist.com with auto-deploy on push, a custom domain with valid SSL, and a no-code visual editor at `/admin` for Megan to manage portfolio videos.

## Stack & where things live

| Layer | Service | URL / path |
|---|---|---|
| Source | GitHub (public) | https://github.com/keatonbutowsky/thesocialoptimist |
| Hosting | Vercel Hobby (free) | Vercel project `thesocialoptimist` under team `keatonbutowskys-projects` |
| Custom domain | GoDaddy DNS → Vercel | https://thesocialoptimist.com |
| CMS auth bridge | DecapBridge (free public-repo tier) | https://decapbridge.com — site ID `3768a2d4-8693-45a5-a4f7-a62346ccf748` |
| Visual editor | Decap CMS | https://thesocialoptimist.com/admin |
| Local working copy | Windows | `C:\Users\keato\ClaudeProjects\thesocialoptimist` |
| Raw video source | Local | `C:\Users\keato\ClaudeProjects\TSO\UGC` (uncommitted, ignored by git) |

GitHub account used: `keatonbutowsky` (keatonbutowsky@gmail.com).

## Tech stack

- **Next.js 16.2.6** (App Router) + React 18.3 + TypeScript 5.6
- **Tailwind CSS 3.4** with brand tokens (`pink-cherub #FAB6C4`, `cloud-cotton #FFFDE9`, `dark-brown #2A2422`)
- **Fonts:** Alice (display) + Inter (body) via `next/font/google`
- **No database, no API routes** — all content is static. Portfolio data is a single `content/gallery.json` file.
- **Videos:** H.264 `.mp4`s in `public/videos/` (transcoded from `.MOV` source with `scripts/transcode-videos.ps1` using ffmpeg).

## DNS configuration (GoDaddy)

| Type | Name | Value | Notes |
|---|---|---|---|
| A | @ | `216.198.79.1` | Vercel apex IP. Replaces GoDaddy's default parked-page record. |
| CNAME | www | `fdc87f9f222ded71.vercel-dns-017.com` | Vercel-issued, site-specific. |
| NS × 2 | @ | `ns45.domaincontrol.com.`, `ns46.domaincontrol.com.` | GoDaddy's nameservers — left alone so future email/MX records can be added at GoDaddy. |

Vercel auto-redirects apex → `www` (307). To flip canonical direction, change in Vercel: Project → Settings → Domains → Edit.

## Editing portfolio content — the Megan workflow

**Primary path (recommended for Megan):**
1. Go to https://thesocialoptimist.com/admin
2. Click "Login" — opens DecapBridge auth, sign in with the Google/Microsoft account registered at decapbridge.com
3. Click "Portfolio" → "Portfolio Videos"
4. Edit fields, drag-reorder, click "Add video +" (uploads `.mp4` via drag-drop directly to `public/videos/` and inserts a row), or X to delete
5. Click "Save & Publish" — commits to GitHub on `main`, Vercel auto-deploys, change is live in ~30s

**Backup path (manual JSON):** edit `content/gallery.json` directly via the github.com web editor or in Notepad. Format reference is in `public/videos/_MEGAN_README.md`.

### Adding Megan as a CMS editor (when ready)

1. In DecapBridge dashboard → site → Collaborators → invite Megan's email
2. On GitHub → repo Settings → Collaborators → invite Megan as a Collaborator with write access
3. Megan signs up at decapbridge.com once with the same email she was invited to
4. After that she can log into `/admin` and edit

## Routine maintenance

| What | Where | How often |
|---|---|---|
| Refresh DecapBridge PAT | https://github.com/settings/personal-access-tokens — token "TSO Decap Bridge" | Every ~30 days (current expiration); regenerate with same Contents + Pull requests scopes on `thesocialoptimist` repo, paste new token into DecapBridge dashboard |
| Transcode new `.MOV` clips | `scripts/transcode-videos.ps1` — edit the filename map at the top, then `pwsh scripts/transcode-videos.ps1` | When Megan exports new videos that aren't already `.mp4` |
| Add/remove dependencies | `npm install <pkg>` locally → commit `package.json` + `package-lock.json` | As needed |
| Vercel security gates | Check Vercel deploy logs if a build fails — they block vulnerable Next.js versions | If a build errors with "Vulnerable version of Next.js detected", run `npm install next@latest` |

## Local dev

```powershell
cd C:\Users\keato\ClaudeProjects\thesocialoptimist
npm install
npm run dev   # http://localhost:3000
```

Production build sanity check:
```powershell
npm run build
```

## Key files to know

| File | Purpose |
|---|---|
| `content/gallery.json` | All portfolio video data (sections + items). The CMS reads/writes this. |
| `content/gallery.ts` | Thin TypeScript loader that re-exports `gallery.json` with types. |
| `public/admin/index.html` | Decap CMS bootstrap — loads the CMS bundle from unpkg.com, pins config.yml path. |
| `public/admin/config.yml` | Decap CMS schema. DecapBridge `git-gateway` PKCE backend. Editing this changes the form fields Megan sees. |
| `public/admin/SETUP.md` | One-time setup notes for the auth bridge. |
| `public/videos/_MEGAN_README.md` | Non-technical instructions Megan can read directly. |
| `scripts/transcode-videos.ps1` | ffmpeg one-shot for `.MOV → .mp4`. Edit filename map at top. |
| `components/GalleryGrid.tsx` | Filters + grid for `/portfolio`. Imports from `@/content/gallery`. |
| `tailwind.config.ts` | Brand colors + fonts. |
| `app/portfolio/page.tsx` | Portfolio page hero + the GalleryGrid mount. |
| `next.config.mjs` | Next.js config. Vercel strips trailing slashes by default — that's why `public/admin/index.html` has a `<link rel="cms-config-url">` pinning the config path. |

## Pending / nice-to-have (not done)

- Round-trip test of CMS save (edit → Save & Publish → confirm commit + auto-deploy) — needs a small real edit by Keaton or Megan
- Flip apex/www canonical direction if preferred (currently apex 307s to www)
- Custom favicon + Open Graph image (currently a pink dot)
- Vercel Web Analytics (one-click enable in project dashboard)
- Photo-only portfolio section (currently video-only)
- Custom email on the domain (separate from this stack)

## Recovery / "if something breaks"

- **`/admin` shows config error:** check that `public/admin/config.yml` is unchanged and the `<link rel="cms-config-url">` tag in `index.html` still points to `/admin/config.yml`. The trailing-slash strip on Vercel is the recurring footgun.
- **DNS stops resolving:** GoDaddy DNS records can be re-set from the table above. Vercel domain status is at Project → Settings → Domains.
- **CMS login fails after working before:** the DecapBridge PAT may have expired. Regenerate at github.com/settings/personal-access-tokens with Contents + Pull requests scopes, paste into DecapBridge dashboard.
- **Vercel deploy fails on a vulnerable-version warning:** `npm install next@latest`, commit, push.
- **Sign-in works but commits fail:** check that the PAT scopes include "Pull requests" — DecapBridge uses PR-style commits internally.
