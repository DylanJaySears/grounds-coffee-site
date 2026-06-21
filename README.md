# Grounds Coffee Co. — Website Prototype

Static site prototype for Grounds Coffee Co. No build step, no dependencies —
plain HTML, CSS, and JS.

## Structure

```
index.html        Main page markup
css/styles.css     All site styles
js/main.js         Hero load-in animation trigger + scroll-reveal observer
images/            All photos, drink renders, and topping illustrations
```

## Local preview

Any static file server works. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

(Opening `index.html` directly by double-clicking will also mostly work, but a
local server avoids any quirks with relative paths.)

## Notes on behavior

- The hero drink cups and falling candy toppings start hidden (`opacity:0`)
  and animate in once `js/main.js` adds a `.go` class to `<body>` on page
  load. If you ever see them missing, check that `main.js` is loading
  (open devtools console for errors) — this is the most likely culprit.
- Scroll-reveal (`.rv` → `.vis`) is handled by an `IntersectionObserver` in
  the same file.
- The wave divider between the hero and menu section uses a `<picture>`
  element to swap to a longer image variant at viewports ≥1920px
  (`images/wave-cream-crest-long.png`). Below that, it uses
  `images/wave-cream-crest.png`.

## Deploying to Vercel via GitHub

1. Push this folder to a new GitHub repo:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In the [Vercel dashboard](https://vercel.com/new), import the repo.

3. When prompted for framework settings:
   - **Framework Preset:** Other
   - **Build Command:** leave blank
   - **Output Directory:** leave as default (or set to `.` if it asks)
   - **Install Command:** leave blank

   No `vercel.json` is needed — this is a plain static site, and Vercel
   serves it directly with zero configuration.

4. Click **Deploy**. Every future push to `main` redeploys automatically.

## Image credits / source

All images were extracted from an earlier all-in-one HTML prototype where
they were embedded as base64 data URIs. They're now plain files in
`images/` so the repo stays a reasonable size and loads efficiently.
