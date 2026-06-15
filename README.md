# tman1472580.github.io

Personal site for [Tanzim Islam](https://github.com/tman1472580). Static HTML, CSS, and a small dash of vanilla JS — no build step, no dependencies.

Live at **https://tman1472580.github.io** once Pages is enabled.

## Stack

- Plain HTML / CSS / JS
- System font stack (no web fonts to load)
- One inline SVG favicon
- Dark-first with a light theme toggle, respects `prefers-color-scheme`

## Local preview

No build is required. Open `index.html` directly in a browser, or serve the folder for proper relative-path behavior:

```sh
python3 -m http.server 4000
# or
npx serve .
```

Then visit http://localhost:4000.

## Editing

- **Content** → `index.html`. Sections worth customizing are marked with `EDIT:` comments — search for that string.
- **Styles** → `styles.css`. Theme tokens live at the top under `:root` and `[data-theme="light"]`.
- **Behavior** → `script.js` (theme toggle, smooth scroll, reveal-on-scroll, footer year).

## File structure

```
.
├── index.html       page markup and content
├── styles.css       all styles + theme tokens
├── script.js        theme toggle + small interactions
├── favicon.svg      "ti" mark
└── README.md        this file
```

## Deploying

Pushes to the `main` branch are served by GitHub Pages. To enable:

1. GitHub → repo **Settings → Pages**
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` / `/ (root)`
4. Save. The site is usually live within a minute.

## License

Personal site. No license attached — feel free to look, please don't republish wholesale.
