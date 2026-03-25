# ITZFIZZ Sky Journey Hero

Scroll-driven hero animation that moves from fog to hanging stats to a mountain reveal. Built with HTML, CSS, and GSAP ScrollTrigger; Tailwind is loaded from the CDN.

## Files
- `index.html` — layer structure and asset references.
- `styles.css` — layout and visual styling (cloud video cover, cards, birds).
- `script.js` — GSAP timeline and ScrollTrigger wiring.
- `tailwind-config.js` — custom colors and fonts for the CDN build.
- `clouds.mp4` — full-screen looping cloud overlay (local asset).

## Run
Open `index.html` in a browser. Keep an internet connection for Tailwind, Google Fonts, and GSAP CDN assets.

## Customize
- Swap `clouds.mp4` for a different cloud clip (similar aspect ratio recommended).
- Change the landscape image inside `#nature-bg img` in `index.html`.
- Tweak animation timings or sequencing in `script.js` as needed.
