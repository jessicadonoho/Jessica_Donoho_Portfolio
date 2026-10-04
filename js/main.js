/* ==========================================================================
   JESSICA DONOHO — PORTFOLIO SCRIPTS
   Small, dependency-free helpers shared by every page.

   WHAT'S IN HERE:
     1. Mark that JavaScript is running
     2. Mobile menu toggle
     3. Image placeholders (shows file name when an image is missing)
     4. Scroll-reveal (fade things in as you scroll)
     5. Case-study table of contents highlighting
     6. Footer year
     7. Tabs (e.g. Lo-fi / Mid-fi wireframes)
     8. Image carousels (arrow buttons, dots, counter)
     9. Click-to-load embeds (e.g. the Figma prototype)
    10. Hover hints (fade once someone has tried the hi-fi collage)
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. MARK THAT JAVASCRIPT IS RUNNING
     The <html> tag starts with class "no-js". We swap it so CSS knows JS works
     (used by the .reveal animation — without JS, content just shows normally).
     ------------------------------------------------------------------------ */
  document.documentElement.classList.replace("no-js", "js");


  /* ------------------------------------------------------------------------
     2. MOBILE MENU TOGGLE
     On phones, the hamburger button opens/closes the nav links.
     ------------------------------------------------------------------------ */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after tapping a link
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }


  /* ------------------------------------------------------------------------
     3. IMAGE PLACEHOLDERS
     If an <img> inside a <figure> fails to load (because you haven't added
     the file yet), we add .is-missing to the figure. CSS then shows a dashed
     box saying which file to add. Drop the file in /images and it's fixed.
     ------------------------------------------------------------------------ */
  document.querySelectorAll("figure img").forEach((img) => {
    const figure = img.closest("figure");
    figure.dataset.file = img.getAttribute("src");   // file name shown in the box

    const markMissing = () => figure.classList.add("is-missing");
    img.addEventListener("error", markMissing);
    // Catch images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) markMissing();
  });


  /* ------------------------------------------------------------------------
     4. SCROLL-REVEAL
     Anything with class="reveal" fades up the first time it enters the screen.
     ------------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);   // only animate once
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Very old browsers: just show everything
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }


  /* ------------------------------------------------------------------------
     5. CASE-STUDY TABLE OF CONTENTS
     Highlights the link in the sidebar ("trail map") for the section you're
     currently reading. Only runs on pages that have a .toc.
     ------------------------------------------------------------------------ */
  const tocLinks = document.querySelectorAll(".toc a");

  if (tocLinks.length && "IntersectionObserver" in window) {
    const byId = {};
    tocLinks.forEach((a) => (byId[a.getAttribute("href").slice(1)] = a));

    const tocObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tocLinks.forEach((a) => a.classList.remove("is-active"));
          const active = byId[entry.target.id];
          if (active) active.classList.add("is-active");
        });
      },
      // A section counts as "current" when it crosses the upper-middle of the screen
      { rootMargin: "-30% 0px -60% 0px" }
    );

    document.querySelectorAll(".cs-section[id]").forEach((s) => tocObserver.observe(s));
  }


  /* ------------------------------------------------------------------------
     6. FOOTER YEAR — keeps the © year current automatically
     ------------------------------------------------------------------------ */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });


  /* ------------------------------------------------------------------------
     7. TABS
     Markup: a [role="tablist"] of [role="tab"] buttons, each with
     aria-controls pointing at a [role="tabpanel"]. Click or use ← / → keys.
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[role="tablist"]').forEach((list) => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];

    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (e) => {
        const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!step) return;
        const next = tabs[(i + step + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });


  /* ------------------------------------------------------------------------
     8. IMAGE CAROUSELS
     Markup: .carousel > .carousel-frame with .carousel-slide figures and
     .prev / .next buttons, plus .carousel-count and .carousel-dots. Shows one
     slide at a time and wraps around at the ends. Any number of slides works.
     ------------------------------------------------------------------------ */
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".carousel-slide")];
    const count = carousel.querySelector(".carousel-count");
    const dotsWrap = carousel.querySelector(".carousel-dots");
    let current = 0;

    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show image ${i + 1}`);
      dot.addEventListener("click", () => show(i));
      dotsWrap.appendChild(dot);
      return dot;
    });

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, j) => (s.hidden = j !== current));
      dots.forEach((d, j) => d.setAttribute("aria-current", j === current));
      count.textContent = `${current + 1} / ${slides.length}`;
    }

    carousel.querySelector(".prev").addEventListener("click", () => show(current - 1));
    carousel.querySelector(".next").addEventListener("click", () => show(current + 1));
    carousel.addEventListener("keydown", (e) => {
      if (e.target.closest('[role="tab"]')) return;
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });

    show(0);
  });


  /* ------------------------------------------------------------------------
     9. CLICK-TO-LOAD EMBEDS
     Markup: .embed with data-embed-src (and data-embed-title) wrapping a
     .embed-load button. The iframe is only created on click, so heavy embeds
     (and any alerts they throw, like Figma's WebGL error) wait for the visitor.
     ------------------------------------------------------------------------ */
  document.querySelectorAll(".embed[data-embed-src]").forEach((embed) => {
    embed.querySelector(".embed-load").addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = embed.dataset.embedSrc;
      iframe.title = embed.dataset.embedTitle || "Embedded content";
      iframe.allowFullscreen = true;
      embed.replaceChildren(iframe);
    });
  });


  /* ------------------------------------------------------------------------
     10. HOVER HINTS
     The "hover a screen to zoom in" hints fade out for good once someone has
     hovered or focused a screen in any .hifi-collage.
     ------------------------------------------------------------------------ */
  const collages = document.querySelectorAll(".hifi-collage");
  const hintSeen = () => document.body.classList.add("hint-seen");
  collages.forEach((collage) => {
    collage.addEventListener("pointerenter", hintSeen, { once: true });
    collage.addEventListener("focusin", hintSeen, { once: true });
  });
})();
