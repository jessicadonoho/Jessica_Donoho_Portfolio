# Jessica Donoho — Portfolio

Hand-coded portfolio site: plain HTML, CSS and JavaScript. No build step and nothing to install.

## Folder map

```
portfolio/
├── index.html            ← home page (hero, work, about, photos, experience, contact)
├── projects.html         ← Projects tab: all case studies
├── trevor-project.html   ← Trevor Project case study
├── ctrl-shift.html       ← ctrl^shift case study
├── refocus.html          ← Focus Friend: Refocus case study
├── CHECKLIST.md          ← to-do list for finishing the site
├── resume.pdf            ← add your resume here (the nav links to it)
├── css/styles.css        ← ALL styling. Colors and fonts are at the top (section 01)
├── js/main.js            ← menu, image placeholders, scroll animations, TOC highlight
├── images/
│   ├── favicon.svg
│   ├── portrait.jpg      ← your photo for the hero
│   ├── photos/           ← photo-01.jpg … photo-06.jpg for the film strip
│   ├── trevor/           ← case study images (names listed below)
│   ├── refocus/          ← Refocus case study images
│   └── ctrl-shift/       ← ctrl^shift case study images
└── .nojekyll             ← tells GitHub Pages to serve files as-is
```

## Adding images

Every `<img>` already points to a file name. Until that file exists, the page shows a dashed
box saying **"add image → images/…"**. Save your file with that exact name and the box goes away.

Trevor Project images (`images/trevor/`):
`cover.png`, `hero-dashboard.png`, `roadmap.png`, `lofi-*.png` / `wireframe-*.png` (wireframe carousels),
`Design System - *.png` (collage), `solution-customize.png`, `solution-dock.png`, `solution-lifeline.png`,
`solution-darkmode.png`, `test-search-before.png`, `test-search-after.png`,
`test-notes-before.png`, `test-notes-after.png`

Compress large images before adding them (for example at squoosh.app). Around 1600px wide is plenty.

## Editing tips

- **Change colors or fonts:** edit the variables in `css/styles.css` → section 01.
- **Add a project:** copy one `<article class="project">` block in `projects.html` (and in `index.html` if it should show on the home page).
- **New case study:** duplicate `trevor-project.html`, rename it, and swap the content.
  Keep the `id`s on sections in sync with the sidebar links.
- **Nav changes:** the header is copied on every page, so update each file.
- Search the HTML for `TODO` (details to fill in) and `DRAFT` (text to rewrite in your voice).

## Preview locally

Open `index.html` in your browser. In VS Code, the **Live Server** extension auto-refreshes as you edit.

## Publish on GitHub Pages

1. Create a repo on GitHub. Name it `YOUR-USERNAME.github.io` to get the site at
   `https://YOUR-USERNAME.github.io`, or use any name to get `.../repo-name`.
2. Upload the contents of this folder (drag and drop on GitHub, or use `git push`).
3. Go to repo **Settings → Pages**, set Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
4. Wait about a minute and your site is live. Each push updates it.
5. Optional: add a custom domain under Settings → Pages.
