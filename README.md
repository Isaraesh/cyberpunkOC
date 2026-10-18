# AFTERIMAGE — Cyberpunk 2077 OC archive

A polished, fully static character and lore site. No npm, build process, database, framework, or server-side code required.

## Launch locally
Open `index.html` in a browser. For testing with a local server, run `python -m http.server 8000` in this folder, then visit `http://localhost:8000`.

## Publish on GitHub Pages
1. Create a new public GitHub repository, e.g. `afterimage`.
2. Upload **the contents of this folder** to the repository root (`index.html` should be at the root).
3. In repository **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for GitHub Pages to deploy. Your site URL will usually be `https://YOUR-USERNAME.github.io/afterimage/`.

The CSS and image paths are relative, so the website works on a project repository (not just a root-domain site).

## How to edit

| File | Purpose |
|---|---|
| `index.html` | Site structure, navigation, page sections, metadata |
| `css/styles.css` | Colors, typography, spacing, grids, responsive breakpoints |
| `js/data.js` | **All characters, biographies, specialisations, motivations, relationships** |
| `js/app.js` | Search, automatic profile cards, dossier popups, navigation |
| `assets/characters/` | Six prepared portrait crops based on provided in-game screenshots |

### Typical changes
- **Rename a character:** find the `name` field in `js/data.js`. Also update any literal mentions in other character biographies, relationships, and narrative prose.
- **Change character portrait:** replace `assets/characters/vaessa.webp` (for example) with a new image, or edit that character's `image` path in `js/data.js`. A vertical 3:4 portrait works best.
- **Change lore:** edit `paragraphs`, `summary`, `contradiction`, `motivation`, etc. within `js/data.js`.
- **Add a character:** copy one full character object in `js/data.js`, give it a unique `id`, `number`, and image path; the card, dossier and motivation section update automatically.
- **Edit relationships:** change the `connections` array at the bottom of `js/data.js`.
- **Change the main story:** edit the prose in the `#story` section of `index.html`.
- **Adjust brand colors:** edit CSS variables near the start of `css/styles.css` (`--red`, `--dark`, etc.).

## Editorial notes
- Xinyi's surname **Shen** is currently provisional, as earlier discussed.
- Viva is **Hart**, per the latest user specifications, even though an earlier draft used Laurent.
- Kaya has **no surname**.
- The character images have been cropped into head-and-shoulders reference portraits so the public-facing site does not display the nude source references. Originals are **not** included in the site distribution.
- The storyline is a **proposed first arc**, not irreversible canon.

## Licensing note
Unofficial fan-made project, not affiliated with CD PROJEKT RED. Only publish media you have permission to use.
