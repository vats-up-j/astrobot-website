# Skill: Pipeline Health

Check if the daily horoscope generation pipeline is running correctly.

## When to trigger
- Tech Lead agent's routine check
- User asks "is the pipeline working?", "is the horoscope updating?"
- Before debugging stale content on the site
- Weekly maintenance

## Steps

1. **Check latest JSON date** — Read `src/data/daily-horoscope.json` and verify the `date` field matches today (or yesterday, accounting for timezone — pipeline runs at 22:00 UTC).

2. **Check JSON validity** — Verify the file contains:
   - `date` field (string, YYYY-MM-DD format)
   - `panchang` object with `tithi`, `nakshatra`, `yoga`, `karana`, `var` (each with `en` and `hi`)
   - `signs` array with exactly 12 entries
   - Each sign has: `id`, `guidance.en`, `guidance.hi`, `probability` (number 60-95)

3. **Check git history** — Look at recent commits for bot activity:
   ```
   git log --oneline --author="github-actions" -5
   ```
   Should see daily commits like "chore: update daily horoscope 2026-04-XX"

4. **Check GitHub Actions** (if `gh` CLI available):
   ```
   gh run list --workflow=daily-build.yml --repo vats-up-j/astrobot-website --limit 5
   ```
   Verify recent runs show "completed / success". If any show "failure", investigate.

5. **Test local generation**:
   ```
   node scripts/generate-daily.mjs
   ```
   Should complete without errors and update the JSON file.

6. **Output format**:
   ```
   ## Pipeline Health — [date]

   ### Status: HEALTHY / DEGRADED / BROKEN

   - JSON date: [date in file] — [CURRENT / STALE by X days]
   - JSON valid: YES / NO [details]
   - Last bot commit: [date] — [OK / OVERDUE]
   - GitHub Action status: [last 3 runs status]
   - Local generation: PASS / FAIL

   ### Action needed: NONE / [fix description]
   ```
