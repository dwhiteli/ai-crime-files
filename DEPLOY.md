# Deploy to Netlify (2 minutes)

## Option A: Drag & Drop (no account needed for a quick URL)

1. Go to https://app.netlify.com/drop
2. Drag the entire `ai-crime-files/` folder onto the page
3. Netlify generates a URL instantly (e.g. `https://sparkly-penguin-abc123.netlify.app`)
4. Share that URL with Veronica — she clicks it, done

To rename the URL: create a free Netlify account, claim the site, rename under Site Settings.

## Option B: Netlify CLI (permanent + updatable)

```bash
npm install -g netlify-cli
cd /Users/dwhite/Desktop/Second-Brain/projects/ai-crime-files
netlify deploy --dir . --prod
```

Follow the auth prompt. You'll get a permanent URL you can update any time.

## Updating content later

When new episode content is ready (after Gemini/ChatGPT research):
1. Update `episodes.js` — remove `stub: true` and add `content: [...]` for that episode
2. Re-deploy (drag & drop again, or `netlify deploy --dir . --prod`)
3. Same URL — Veronica's progress is saved in her browser, carries forward automatically

## Veronica's experience

- She clicks the link — full app loads, no install, no login
- She can listen (built-in narration) or read
- Progress saves in her browser automatically
- She can close and return — it picks up where she left off
- Works on phone, tablet, or laptop
