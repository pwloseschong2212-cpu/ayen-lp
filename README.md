# Ayen — Landing Page

Personal portfolio landing page for **Ayen**, a landing page designer who turns attention into action.

> *Attention means nothing without action.*

## Stack

Single-page static site — **no build step required**.

- HTML + React 18 (via UMD CDN)
- JSX compiled at runtime by Babel Standalone
- Pure CSS (custom properties, no preprocessor)
- Fonts: Space Grotesk · Instrument Serif · JetBrains Mono (Google Fonts)
- Assets: hero video, funnel video, portrait, secondary photo

## Local development

This is a vanilla static site. You can open it with any static server:

```bash
# Node
npx serve .

# Python
python -m http.server 8000

# Or any other static server
```

Then open `http://localhost:<port>/`.

## Deployment

Configured for **Vercel** as a static site (no build command, no framework).
Vercel will serve `index.html` from the project root.

## Structure

```
ayen-lp/
├── index.html        Entry · loads React, Babel, fonts, styles
├── app.jsx           App shell · Nav, Footer, OperatorCursor, ProgressRail
├── sections.jsx      Sections 1-6, 8, 9 (Hero, Problem, Leak, Diagnosis, Belief, System, About, Contact)
├── mockups.jsx       Section 7 (Selected Work) · sticky pin layout + 4 case mockups
├── tweaks-panel.jsx  Edit-mode panel (Claude Design host only — hidden in normal browsers)
└── assets/           Hero video, funnel video, portrait, about photo
```

## Design philosophy

- **Atmosphere:** cyber-noir background · teal accent · film grain + scanline overlays
- **Type:** Space Grotesk (display) · Instrument Serif (italic accents) · JetBrains Mono (labels)
- **Rhythm:** Attention → Clarity → Trust → Action
- **Custom cursor:** cinematic teal viewfinder (mouse devices only)

---

Built with care — every section earns its scroll.
