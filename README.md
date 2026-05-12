# The Social Optimist — website

Next.js 15 + Tailwind. Hosted free on Vercel from this repo.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a video to /portfolio

Content for the portfolio lives in `content/gallery.json` and `public/videos/`.
The full non-technical workflow (drop an `.mp4`, edit a JSON block, commit)
is documented in [`public/videos/_MEGAN_README.md`](public/videos/_MEGAN_README.md).

Source `.MOV` files can be transcoded to web-safe `.mp4` with the helper script:

```powershell
pwsh scripts/transcode-videos.ps1
```

Requires ffmpeg (`winget install Gyan.FFmpeg`).

## Brand tokens

Defined in `tailwind.config.ts`:

- `pink-cherub` `#FAB6C4`
- `cloud-cotton` `#FFFDE9`
- `dark-brown` `#2A2422`

Fonts via `next/font/google`: **Alice** (display) + **Inter** (body).

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Defaults work. Click Deploy.
4. (Optional) Add a custom domain under Project Settings → Domains. ~$12/yr.
