# One-time auth setup for the /admin editor

The TSO admin editor uses [Decap Bridge](https://decapbridge.com) — a free OAuth proxy
for public GitHub repos. You need to register this site once before sign-in works.

## Steps (5 minutes, one-time)

1. Go to **https://decapbridge.com**.
2. Click **Sign in with GitHub**. Authorize with the same account that owns this
   repo (`keatonbutowsky`).
3. Once signed in, click **Add new site**.
4. Fill in:
   - **Site name:** anything — e.g. `TSO`
   - **Site URL:** `https://thesocialoptimist.com`
   - **GitHub repository:** `keatonbutowsky/thesocialoptimist`
5. Click **Add site**.

That's it. No config change needed — the `base_url: https://decapbridge.com`
in `public/admin/config.yml` is already pointing at the bridge, and once the
site is registered, the **Sign In with GitHub** button on `/admin` will work.

## Adding Megan as an editor

After step 5 above, on the Decap Bridge dashboard:
1. Open the site you just registered.
2. Add Megan's GitHub email/username as a collaborator.
3. Then on GitHub itself: invite Megan as a Collaborator on the
   `keatonbutowsky/thesocialoptimist` repo (Settings → Collaborators) so she
   has write access to commit her edits.

## Free tier limits
- 1 site
- Unlimited editors
- Public repos only
- $0/month
