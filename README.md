# AFTERIMAGE — edition 10

A static Night City character archive with ten portrait dossiers, 46 story ideas and a Vaessa-only 3D studio.

## GitHub Pages

1. Extract this ZIP. Upload its **contents** to the root of your GitHub repository. Keep all folders and filenames intact.
2. In Settings → Pages, choose Deploy from a branch, then your branch and /(root).
3. Open the published URL after deployment. For a project repository it will usually be https://YOUR-NAME.github.io/YOUR-REPOSITORY/. All site and model paths are relative, so project subfolders work.
4. Keep the included .nojekyll file. No build step, npm installation, backend, API key or external CDN is required.

## Preview on a Windows PC

Extract the complete ZIP, then double-click **START-WEBSITE.cmd**. Keep its window open while using the site. It opens http://127.0.0.1:8768/ in your browser. Press Ctrl+C in the window to stop. This local-only launcher uses built-in Windows PowerShell and requires no Node or Python installation.

The archive and notebook also open from index.html directly. The 3D viewer needs HTTP because browsers restrict local module/model loading; use the launcher or GitHub Pages.

## Mobile

Open the GitHub Pages URL on your phone. The layout adapts to narrow screens. In the studio, tap Enter the 3D view, drag the model to rotate and pinch to zoom. Use the arrow, auto-rotate and reset controls below it. Lighting and full-look/portrait controls are below the viewer on mobile. Tested in responsive Chromium at desktop and phone sizes; physical iOS/Android devices were not available for testing.

## What's new

- Modern dark/light layouts, lavender accents, cinematic portrait hero and responsive card gallery.
- Search characters, sort by name and save favourite characters locally in Your collection.
- Dossier deep links, copy-link button, previous/next dossier controls and keyboard navigation.
- Search the 46 ideas, filter by type, save ideas and use Find me a story for a random matching concept.
- Shared theme preference, scroll progress, subtle reveals and reduced-motion support.
- Vaessa 3D studio: full 360° orbit, zoom, rotation buttons, auto-rotation toggle, reset, full-look/portrait focus, three lighting moods and fullscreen where supported.

## The first 3D test

This edition includes **one real outfit**, Miniskirt - Purple. There are no pretend outfit-switching controls. Additional outfits can be exported and added later. The model uses Vaessa's actual NPV mesh components and appearance chunk masks, exported from the existing project in a separate workspace. The NPV project, archives and installed game files were read only; no game was launched.

- Model: assets/models/vaessa-purple.glb
- Size: 5.26 MiB (5,514,236 bytes).
- Geometry: 287,459 triangles; 62 mesh primitives; 35 materials.
- Draco-compressed geometry; embedded, downsampled textures; static bind pose.
- Loaded only after the visitor presses Enter the 3D view. The archive and notebook don't fetch the model or renderer.
- The renderer caps resolution on phones, stops drawing when the view is hidden, and renders on demand when rotation is paused.
- Game shaders don't run in browsers. Skin, hair, makeup, layered materials and chrome are adapted PBR approximations, so the result will differ from an in-game screenshot. Facial shape, outfit geometry and source textures are from the NPV, not an AI-generated mesh.
- Technical inventory: assets/models/vaessa-purple-info.json.

## Editing

- js/data.js — biographies, relationships, portraits and personal details. Lore is unchanged from v9.
- js/ideas.js — all 46 existing ideas, unchanged.
- css/modern.css — edition 10 design and mobile layouts.
- js/app.js — character search, collection and dossier interactions.
- js/ideas-page.js — notebook interactions.
- studio.html, js/studio.js, js/studio-viewer.mjs — the 3D studio.
- js/vendor/ — pinned local rendering dependencies and decoder.

Saved characters and ideas belong to this browser's local storage, not a shared online account. Clearing browser data removes them.

## Third-party libraries

Three.js 0.180.0 is bundled locally under its MIT license (js/vendor/three/LICENSE.txt). The included Draco decoder is distributed with Three.js; its license is in js/vendor/draco/LICENSE.txt. Rendering documentation: [Three.js](https://threejs.org/docs/).

Unofficial Cyberpunk 2077 original-character fan project; not affiliated with CD PROJEKT RED.
