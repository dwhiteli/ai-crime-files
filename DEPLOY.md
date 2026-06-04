# AI Crime Files — Deploy & Workflow Notes

## Live Site
https://dwhiteli.github.io/ai-crime-files/

## Repo
https://github.com/dwhiteli/ai-crime-files (PUBLIC)
Branch: main / root path

---

## Adding Podcast Audio (NotebookLM Workflow)

1. Open `notebooklm/ep-XX.md` — copy full contents
2. Go to notebooklm.google.com → New notebook → Add source → paste text
3. Audio Overview → Generate (~5 min)
4. Three-dot menu → Download
5. Rename file: `ep-01.mp3`, `ep-02.mp3`, etc. (zero-padded)
6. Drop in `audio/` folder
7. `git add audio/ep-XX.mp3 && git commit -m "Add Episode XX audio" && git push`

The reader page auto-detects the MP3 and switches from TTS to podcast player. No code changes needed.

---

## Key Files

| File | Purpose |
|------|---------|
| `episodes.js` | All episode data — edit content here |
| `reader.html` / `reader.js` | Episode reader page |
| `index.html` / `app.js` | Episode browse/index page |
| `style.css` | All visual styles |
| `audio/` | MP3 podcast files (ep-01.mp3 … ep-30.mp3) |
| `notebooklm/` | Clean text exports for NotebookLM audio generation |
| `export-notebooklm.js` | Script to regenerate notebooklm/ from episodes.js |

---

## Regenerating NotebookLM Exports

If you update episode content in `episodes.js`, re-run:

```
node export-notebooklm.js
```

This overwrites all 30 files in `notebooklm/`.

---

## Curriculum Structure

| Phase | Days | Theme |
|-------|------|-------|
| I: Orientation | 1–3 | What AI governance is and why it matters |
| II: The Cases | 4–10 | Real harm cases |
| III: The Law Wakes Up | 11–16 | Regulatory landscape |
| IV: Inside the Machine | 17–23 | HR AI systems in depth |
| V: The Investigation | 24–28 | Audit and governance practice |
| VI: The Verdict | 29–30 | SummitPeak capstone |

---

## Progress Tracking
Stored in browser `localStorage` under key `aicf_progress`. Per-episode, keyed by episode ID.
Counts toward the Day X / 30 progress bar in the header.

---

## ICM Definition (Authoritative)
ICM = **Interpretable Context Methodology**

A human operator sits above the workflow. 60/30/10 names the split of what's below:
- 60% code/deterministic logic
- 30% explicit written rules
- 10% AI judgment (ceiling) — the algorithm's bounded share of the decision weight

The human is not inside any layer. The human is above the stack, applying the rules, weighing the bounded AI signal, and accountable for the decision.

Plus two operating principles:
- Observe before you build
- Factory first (governance structure before the system runs)

---

## Legacy: Netlify Option (no longer primary — GitHub Pages is live)

For a quick share URL without GitHub Pages:
1. Go to https://app.netlify.com/drop
2. Drag the entire `ai-crime-files/` folder onto the page
3. Netlify generates a URL instantly
