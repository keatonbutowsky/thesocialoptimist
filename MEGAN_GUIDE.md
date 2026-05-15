# How to edit thesocialoptimist.com — Megan's guide

Hi Megan! This is everything you need to update the site yourself. No coding, no GitHub, no command line. Just a web browser.

> **Bookmark this page in your browser:** [https://thesocialoptimist.com/admin](https://thesocialoptimist.com/admin)
>
> That's the editor. Every change you make there shows up on the real site in about 30 seconds.

---

## 1) How to sign in

1. Go to **[thesocialoptimist.com/admin](https://thesocialoptimist.com/admin)** in any browser (Chrome, Safari, whatever).
2. You'll see a **"Login with GitHub"** button. Click it.
3. A new tab opens asking for your email. Enter the email Keaton set you up with, then check that inbox — there'll be a magic-link email from **DecapBridge**. Click the link.
4. The tab will close and you'll land on the editor. You're in.

After this first time, your browser remembers you — next time you visit `/admin`, it just opens straight to the editor.

**If the email doesn't arrive within 2 minutes:**
- Check your spam / promotions folder.
- Still nothing? Text Keaton — he can re-invite you.

---

## 2) What you'll see when you log in

The editor looks like a simple form. Two main areas:

- **Category pages** — these are the four buttons (Restaurants, Med Spa, Hospitality, Live Events) that show up on `/portfolio`. Each one is its own page on the site. You can rename them, reorder them, or add new ones.
- **Videos** — every portfolio video, in a list. Each video has labels, a section it belongs to, the platform (Instagram or TikTok), and the actual .mp4 file.

**Save your work:** Top-right corner there's a **"Save & Publish"** button. Click it when you're done. About 30 seconds later, the live site is updated. That's it.

> **Tip:** If you make a mess and want to start over, just close the browser tab without saving. Nothing is committed until you click Save & Publish.

---

## 3) How to edit an existing video

1. Click **Portfolio** in the left sidebar → **Portfolio Videos**.
2. Scroll down to the **Videos** list. Find the video you want to change.
3. Click on it to expand its details.
4. Change whatever you want:
   - **Top label (brand / client name)** (e.g. "Local Brand") — the first line shown under the video on the site.
   - **Bottom label (content type)** (e.g. "UGC") — the second line.
   - **Section** — pick which category page it appears on (must exactly match one of the Category pages at the top).
   - **Platform** — Instagram or TikTok.
   - **Poster image** — the still that shows before the video plays. Optional.
5. Click **Save & Publish** at the top right.

**To reorder videos:** grab the little drag handle on the left of a video row and drag it up or down.

**To delete a video:** click the trash/x icon on the video row. Then Save & Publish.

---

## 4) How to add a NEW video

1. Click **Portfolio → Portfolio Videos**.
2. Scroll to the **Videos** section and click **"Add Video"** (it's a button at the bottom of the list).
3. Fill in:
   - **Section** — type the exact name of one of your Category pages. Example: `Restaurants`.
   - **Top label (brand / client name)** — e.g. `Local Brand`.
   - **Bottom label (content type)** — e.g. `UGC`.
   - **Platform** — Instagram or TikTok.
   - **Video file (.mp4)** — click "Choose a file" and upload the `.mp4` from your laptop. (If it's still a `.MOV` from your iPhone, you'll need to convert it first — use [cloudconvert.com/mov-to-mp4](https://cloudconvert.com/mov-to-mp4), free, drag and drop.)
   - **Poster image** (optional) — the thumbnail. Click and upload a `.jpg` if you have one.
4. **Save & Publish.**

The video shows up on the site about 30 seconds later, on whatever category page you assigned it to.

> **One rule:** Make sure your filenames are simple — all lowercase, no spaces. Use dashes if you need to. `red-rooster-brunch.mp4` good. `Red Rooster — BRUNCH!.mp4` bad.

---

## 5) How to add a NEW category page (e.g. "Retail")

This is the magic one. Adding a new section automatically creates a new page on the site.

1. Click **Portfolio → Portfolio Videos**.
2. At the top of the page, find the **Category pages** list.
3. Click **"Add Category name"**.
4. Type the new category — e.g. `Retail`.
5. Click **Save & Publish**.

About 30 seconds later, a new page appears at **`thesocialoptimist.com/portfolio/retail`** (the URL is automatically generated from the name you typed — spaces become dashes, all lowercase).

> **One catch:** The new category only shows up on the main `/portfolio` page once you've tagged at least one video with it. So: add the category, then add or re-tag a video to live in that category, then save again.

---

## 6) What you CAN'T do from `/admin` — text Keaton instead

The editor only manages the **portfolio**. Anything else needs a code change. Just text Keaton with what you want changed and he'll handle it:

- Adding a brand-new page like `/blog`, `/pricing`, `/case-studies`
- Changing the homepage hero (the big "social optimists. / creative optimizers." section)
- Changing the footer (the dark-brown bar at the bottom)
- Changing pricing or service tiers
- Changing the About page story
- Changing the navigation menu (Services / Portfolio / About / Contact)
- Adding social media links to the footer (Instagram, TikTok, LinkedIn URLs)
- Changing colors, fonts, logos

For all of these: text Keaton, tell him what you want it to say, and he'll push it live.

---

## 7) If something looks broken on the live site

99% of the time this means a label got typo'd or a video got pointed at the wrong section. Open `/admin`, find the offending video, fix it, Save & Publish.

If the whole site looks wrong (not just one video): text Keaton. He can roll back to the previous version in one click via Vercel.

---

## 8) On your phone

The `/admin` editor works on a phone, but uploading large `.mp4` files over phone data is slow. **Easier on a laptop.** Quick label fixes from your phone? Totally fine.

---

## Cheat sheet — the four things you'll do most

| You want to... | Where to click |
|---|---|
| Change a video's label | Portfolio → Portfolio Videos → click the video → edit Top label or Bottom label → Save & Publish |
| Add a new video | Portfolio → Portfolio Videos → scroll to Videos → "Add Video" → fill in + upload .mp4 → Save & Publish |
| Add a new category (creates a new page) | Portfolio → Portfolio Videos → Category pages → "Add Category name" → type name → Save & Publish |
| Reorder videos within a category | Portfolio → Portfolio Videos → drag video rows up/down → Save & Publish |

That's the whole job. The live site is at thesocialoptimist.com, the editor is at thesocialoptimist.com/admin, and Keaton handles anything outside the portfolio. 💖
