# How to add, change, or remove a portfolio video

> 👉 **The main guide for Megan is now at `MEGAN_GUIDE.md` in the repo root.** It covers signing in, editing, adding videos, and adding new category pages — everything from the visual editor at [/admin](https://thesocialoptimist.com/admin). Start there.
>
> This file is kept as a backup reference for the direct-file editing path only, in case the CMS is ever down.

---

## Backup: editing manually

You can do all of this from your laptop in Notepad, or right in the GitHub website. No coding needed.

## To add a new video

1. **Save the video as `.mp4`** (not `.MOV`).
   - On iPhone, the easiest way: AirDrop the clip to your laptop, then right-click → "Convert to MP4" in QuickTime, or upload to https://cloudconvert.com/mov-to-mp4 (free).
   - Keep the filename short, all lowercase, no spaces, dashes only. Example: `wedding-smith-teaser.mp4`.

2. **Drop the `.mp4` into this folder:** `public/videos/`.

3. **Open `content/gallery.json`** (in Notepad, VS Code, or on github.com) and add a new block at the bottom of the `items` list. Copy the format of an existing block:

   ```json
   {
     "section": "Wedding",
     "clientType": "Smith Wedding",
     "contentType": "Teaser Content",
     "platform": "Instagram",
     "src": "/videos/wedding-smith-teaser.mp4"
   }
   ```

4. **Save the file** and commit to GitHub. Vercel auto-deploys in about 30 seconds.

## Field reference (what each line means)

| Field | What goes here | Allowed values |
|---|---|---|
| `section` | The category bucket the video appears under | Anything listed in `sections` at the top of `gallery.json` (currently: Wedding, Lifestyle, TikTok UGC, Instagram Reels) |
| `clientType` | Top label shown under the video (uppercase) | Free text — e.g. "Smith Wedding", "Med Spa", "Coffee Shop" |
| `contentType` | Second label shown under the video | Free text — e.g. "Teaser Content", "Founder POV", "UGC Testimonial" |
| `platform` | Used by the platform filter chips | `Instagram` or `TikTok` |
| `src` | The path to the video file | Always `/videos/your-filename.mp4` |
| `poster` *(optional)* | A still image shown before the video plays | `/photos/your-poster.jpg` |
| `aspect` *(optional)* | Video shape | `9:16` (default, vertical), `1:1` (square), or `16:9` (horizontal) |

## To remove a video

1. Delete the matching block in `content/gallery.json`.
2. (Optional) Delete the `.mp4` from `public/videos/`.
3. Save and commit.

## To rename a category

Edit the `sections` array at the top of `content/gallery.json`. Make sure any items pointing to the old name get updated to the new one (do a find-and-replace).

## To reorder categories

Reorder the names in the `sections` array. The page shows them in that order.

## Rules

- Filenames in `public/videos/` should be all lowercase, no spaces (use dashes).
- Commas inside JSON strings are fine. Always end every line inside a block with a comma — except the last line of the block.
- If something looks broken after editing, the most common cause is a missing comma or an extra one after the last item.
