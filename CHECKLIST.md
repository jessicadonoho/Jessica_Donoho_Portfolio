# Portfolio checklist

## 1. Trevor Project: still to do

### Images (save into `images/trevor/` with these exact names)
Until each file exists, the page shows a dashed "add image →" box. Only use screenshots you're allowed to share, with all real data replaced by dummy data.

- [ ] `cover.png`: thumbnail for the Projects page and home page (landscape, about 4:3)
- [ ] `hero-dashboard.png`: full redesigned dashboard
- [ ] `roadmap.png`: roadmap, FigJam board, or task tracker (optional; delete the `<figure>` if you don't have one)
- [x] Personas: Kim and Alex are on the page, based on `persona1.png` / `persona2.png`. Their photos (`persona-kim.jpg`, `persona-alex.jpg`) are CC0 public-domain images from StockSnap, with sources noted in an HTML comment.
- [ ] Your persona cards say "Persona #1" and "#3". If there's a Persona #2, add it to `images/trevor/` and I can add a third card.
- [x] Wireframe carousels: 4 lo-fi + 4 mid-fi, with captions matched to each frame.
- [x] Design system collage: Colors, Font, Icons, and UI Elements.
- [ ] `solution-customize.png`: column customization modal
- [ ] `solution-dock.png`: expanded monitoring dock
- [ ] `solution-lifeline.png`: Lifeline call monitoring
- [ ] `solution-darkmode.png`: dark mode
- [ ] `test-search-before.png` / `test-search-after.png`
- [ ] `test-notes-before.png` / `test-notes-after.png`

### Content (search `trevor-project.html` for `TODO` and `DRAFT`)
- [ ] **Role title:** match the wording on your resume (hero "My role").
- [ ] **Tools:** add the planning tools you used (Jira, Notion, Trello, Sheets…).
- [ ] **"What I owned":** add one concrete detail per card (e.g. "weekly 30-min standups", "recruited 6 participants in 2 weeks").
- [ ] **Workflow phases:** add week ranges under each phase.
- [ ] **Prioritization:** name the framework if you used one (impact/effort, MoSCoW, RICE) and add a column for it.
- [ ] **Reflection:** rewrite the 3 lessons in your own voice, each with a specific moment from the summer.
- [ ] **Research numbers:** how many interviews and usability test participants? Add them. Numbers make research credible.
- [ ] **Quotes:** confirm you have permission to name Lisa Stewart. If not, make it "Team Lead."
- [ ] **Confidentiality:** have your mentor or manager OK the page before publishing.

## 2. Across the site

### Must-fix before sharing the link
- [ ] **Resume:** add `resume.pdf` to the project root (the nav and contact section link to it; right now they 404).
- [ ] **LinkedIn:** replace `https://www.linkedin.com/in/YOUR-HANDLE` in `index.html` (contact section).
- [ ] **Portrait:** the hero looks for `images/portrait.jpg`. You have `images/photos/jessica_d.jpg`. Either rename or copy it, or change the `src`. Resize it to about 1000px wide first (it's 4632px now).
- [ ] **Photo roll:** the film strip looks for `images/photos/photo-01.jpg` … `photo-06.jpg`. You have `photoex1–5.jpg` plus two Framer-named files. Rename them and update the alt text and captions (they still say "Photo 1 — describe it here").
- [ ] **Compress big images:** `photoex3.jpg` (5184px), `photoex4.jpg` (4608px), `jessica_d.jpg`, and `images/refocus/comparison.png` (8352px) are much bigger than needed. Aim for about 1600px wide max ([squoosh.app](https://squoosh.app)).
- [ ] **Delete stray files:** remove the `.DS_Store` files before uploading to GitHub.
- [ ] Once the new pages are live, take down or redirect the old Framer site so there aren't two versions.

### Refocus page (`refocus.html`)
- [ ] The **reflection** section is new (the Framer page didn't have one) and marked `DRAFT`. Rewrite it in your own words.
- [ ] Say plainly that there was **no usability testing** yet, or run a quick 3-person test on the goals/areas flow and add results. This is the biggest gap next to the other two case studies.
- [ ] Consider adding a one-line **outcome**, even informal (e.g. "shared with 5 Focus Friend users; 4 said they'd use goals").

### ctrl^shift page (`ctrl-shift.html`)
- [ ] **Add hi-fi screenshots.** Right now the only hi-fi image is the hero mockup. There's a `TODO` in the "Hi-fi & testing" section. Add 2–3 hi-fi screens and at least one before/after from testing (e.g. "On This Topic" → "Similar Posts").
- [ ] **Add testing numbers:** participants per round and error rates. The Framer page mentioned tracking error rates, but no numbers are shown.
- [ ] Add a short **competitive analysis** visual (Ground News, Shinigami Eyes). It's listed in the process but not shown.
- [ ] Unused images (`interview.png`, `persona.png`, `user_testing_icon.png`) are decorative icons from Framer. Use them in the process steps or delete them.

## 3. Ways to make the portfolio stronger

**Lead with outcomes.** Recruiters skim. Each project card and case study should say what changed within the first screen. Trevor does this (8 issues, 100%, 95%). Give ctrl^shift and Refocus at least one concrete result each.

**Show your role in every project.** Trevor frames you as the product/workflow lead, which is a strong angle for mission-driven research/PM roles. Keep that thread going: in ctrl^shift, call out decisions *you* made because of research (e.g. cutting "Include" from scheduling).

**Order projects by strength.** The Projects page is Trevor → ctrl^shift → Refocus (real stakeholders → full research + testing → learning project). The home page still has Trevor → Refocus → ctrl^shift. Make them match.

**Keep case studies scannable.** Aim for about 5 minutes to read. Use the TL;DR box, bold key phrases, and let images carry the story. Cut any paragraph that doesn't lead to a decision.

**Accessibility polish.** Every image has alt text now. Check that screenshots with text are big enough to read on a phone. Consider linking large images so they open full-size.

**Add a short "how I work" line to About.** One or two sentences on your research process (e.g. "evidence first, then scope") ties the three projects together.

**Publish and test.**
- [ ] Deploy to GitHub Pages (steps in `README.md`).
- [ ] Open every page on your phone and check the nav, tables, and image grids.
- [ ] Click every link (Projects tab, "next up", "← all projects", resume, email).
- [ ] Ask one designer friend and one non-designer to skim it for 2 minutes and tell you what you do. If they can't say it, tighten the hero.
