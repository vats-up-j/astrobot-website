# Skill: Build & Deploy

Safe deployment workflow that prevents pushing broken code or conflicting with the daily bot.

## When to trigger
- User says "push", "deploy", "ship it", "commit", "go live"
- Tech Lead agent needs to verify before release
- After any feature is complete

## Steps

1. **Pull latest** (daily bot may have committed)
   ```
   git pull --rebase origin main
   ```
   If there's a conflict, resolve it before continuing. Never force-push.

2. **Build**
   ```
   npm run build
   ```
   Must exit with zero errors. If it fails, fix the issue — do NOT push.

3. **Visual check** — Open the dev server and check changed pages in the browser. Verify at mobile width (375px).

4. **Run multi-agent review** — Before committing, activate:
   - Tech Lead review (build, pipeline, performance)
   - CMO review (brand, copy, conversion, mobile)
   Report results to user.

5. **Commit** — Stage only the relevant files (not `node_modules/`, `dist/`, `.env`). Write a clear imperative commit message.

6. **Push**
   ```
   git push origin main
   ```

7. **Verify** — Confirm push succeeded. Remind user that Cloudflare auto-deploys in ~1 minute.
