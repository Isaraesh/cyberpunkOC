# AFTERIMAGE — Cyberpunk 2077 original character archive (v3)

A static, editable site for nine character dossiers, relationships and short virtual-photography stories. No build tools or dependencies.

## GitHub Pages
1. Upload the **contents** of this folder to your GitHub repository's root.
2. Go to **Settings → Pages → Deploy from a branch** and select `main` / `(root)`.
3. Wait for the deployment; then open the published GitHub Pages URL.

## Files
- `index.html` — structural layout and photo-story prompts.
- `js/data.js` — **all nine characters, full biographies, names, professions and connections**. Edit here first.
- `js/app.js` — search, dossier pop-ups, relationships, navigation, back-to-top.
- `css/styles.css` — color palette, typography, responsive design.
- `assets/characters/` — six cropped character portraits and three illustrated placeholders.

## Editing
To add or edit a character, update that object in `js/data.js`. The directory and the pop-up dossiers update automatically. Keep `id` unique. `image` refers to a file in `assets/characters/` (or another relative path). A portrait crop in 3:4 aspect ratio works well. For new image references, replace `ariella.svg`, `syn03.svg`, or `samara.svg` with your own photo and update their `image` paths.

Relationships are stored in `connections` in `js/data.js`:
- `status: "established"` is confirmed canon.
- `status: "suggested"` marks optional ideas pending approval; the website labels these visibly.

Story prompts live inside the `#story` section of `index.html`. There is no overarching plot, by design: use this for 3–9 frame photo episodes.

## Canon updates in v3
Vaessa and Roxanna **Vei**; Xinyi **Xu**; Viva **Laurent**. Xinyi is Vaessa's long-term girlfriend, effectively her spouse without legal marriage. Vaessa also has an acknowledged affair with Ariella Winter; Xinyi sometimes joins them, but remains Vaessa's priority. Reina is an Arasaka informant and **not** involved in their sexual relationships. SYN-03 is Ariella's embodied AI assistant and sexual partner, but does not join Vaessa and Ariella's encounters. See dossiers for all other updates.

The six original portrait images are cropped from the user-supplied game references; the original reference files are not distributed.

Unofficial fan work; not affiliated with CD PROJEKT RED.
