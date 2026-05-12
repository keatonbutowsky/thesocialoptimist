# The Social Optimist — website

Next.js 15 + Tailwind + MDX. Hosted free on Vercel from this repo.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a case study

Create a new file in `content/portfolio/your-client-slug.mdx`:

```mdx
---
client: "Client Name"
industry: "Lifestyle"            # one of: Lifestyle, F&B, Wellness, etc.
platforms: ["Instagram", "TikTok"]
service_tier: "Social Savvy"     # Social Starter | Social Savvy | Social Optimist
result_type: "Growth"            # Growth | Launch | Community
hero_metric: "+312% reach in 90 days"
summary: "One-sentence pitch shown on the portfolio grid."
date: "2026-05-01"
---

## The challenge
...

## The strategy
...

## The result
...
```

Commit + push to `main` and Vercel auto-deploys in ~30 seconds. No CMS required.

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
