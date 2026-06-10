# Design Direction
**Project:** CLOSED — 1985 | AI + Design Project Website
**Designer:** Ellie Dalseg

---

## Project Mood
The site should feel like an extension of the game itself — not a portfolio presenting the game, but a world that continues it. Dark, dingy, abandoned. The aesthetic of a shuttered 1985 shopping mall at midnight. Atmospheric and slightly unsettling from the moment someone lands on it, but clear and readable enough that the research and process still comes through. The goal is for visitors to feel a mix of unease and genuine inspiration — a little afraid, but also impressed and motivated.

---

## Visual Keywords
- Abandoned
- Dingy
- Liminal
- Retro horror
- PS1 / PS2 era
- Analog decay
- Claustrophobic
- Immersive
- Scratchy / distressed
- Warm darkness

---

## Color Direction
Pull directly from the game's palette. Nothing bright, nothing modern, nothing happy.

**Primary palette:**
- Black / near-black — dominant background (`#050102`, `#0a0a0a`)
- Dirty warm brown — walls, surfaces, text containers (`#251a10`, `#3a2818`)
- Muted olive / sickly yellow-green — liminal space accent, The Backrooms reference (`#b8a860`, `#8a9030`)
- Desaturated gray — secondary text, UI elements (`#c8c8c8`, `#a89878`)
- Warm cream / aged parchment — body text, readable content (`#d8c8a8`)

**Accent:**
- Deep blood red — used sparingly for highlights, warnings, hover states, important text (`#c82020`, `#8a0010`)
- Dim orange — flickering light color, secondary accent (`#ff6b3a`, `#b03000`)
- Emergency exit green — harsh, unsettling, not fresh or hopeful; use for exit/escape-related UI moments only (`#00ee30`) — this is the exact green from the game's EXIT sign glow
- Dark industrial green — door panels, locked elements, maintenance areas (`#142814`)
- Swamp/mold green — stagnant water, decay, background texture accents (`#162010`)

**Hard avoids:**
- No pinks
- No purples
- No blues (including teal, cyan, navy)
- No bright or saturated colors of any kind
- No white backgrounds
- No neon

---

## Typography Direction
Two font roles that work together:

**Display / Headings:**
A horror-style distressed serif — something that looks burned, cracked, or aged. Should evoke Silent Hill's title treatment or old horror movie posters. Could be a free Google Font like *Creepster*, *Nosifer*, or a custom CSS text-shadow treatment to distress a serif. Uppercase, wide letter-spacing. Used for section titles, the game title, major headings.

**Body / UI:**
`Courier New` or another monospace font — matches the game's in-game UI exactly. Used for all body text, captions, labels, navigation, subtitles. Should feel like a security monitor readout or a typewritten report. Uppercase preferred for short labels and UI elements; mixed case for longer reading text.

**General rules:**
- Letter-spacing should be generous on headings (feels like the game's HUD)
- No sans-serif system fonts (no Inter, Helvetica, etc.)
- No rounded or friendly typefaces

---

## Layout Direction
The site should feel like an immersive experience, not a scrolling portfolio. Full-screen sections. Animated transitions. Feels like entering something, not reading something.

**Entry / Landing:**
Opens exactly like the game's title screen. "CLOSED — 1985" title with the same jitter animation and chromatic aberration effect from the game. Dark background with VHS static noise. Navigation presented as game-style menu buttons (PLAY / RESEARCH / PROCESS / ABOUT), not a standard nav bar.

**Navigation:**
Game-menu style. Could use the same Courier New uppercase style as the in-game HUD. Possibly with a cursor indicator or flickering selection highlight instead of standard hover states.

**Sections (full-screen each):**
1. **Title Screen** — game title, menu buttons, VHS static background
2. **Play the Game** — embedded iframe or prominent link to closed1985.netlify.app, with atmospheric framing
3. **About the Project** — what it is, why I made it, the inquiry question
4. **Research** — all 6 sources with summaries and reflections, presented as case files or VHS tape labels
5. **Process** — weekly timeline, ChatGPT vs. Claude comparison, 40+ versions, notebook notes, evolution screenshots
6. **The Game** — screenshots, gameplay videos, Harold's design evolution, final product details
7. **What I Learned** — takeaways, reflection, what this means for the future of game design

**Transitions:**
VHS static flashes or screen flicker between sections. Fade to black. Nothing smooth or clean — everything should feel slightly glitchy or analog.

**Atmosphere:**
Consider a subtle scanline overlay across the whole site (like the game's `#scanlines` div). Vignette on the edges of sections. Noise texture on backgrounds. Flickering light effects on key elements.

---

## Image / Media Direction
- **Game screenshots** — multiple rooms, Harold appearing in hallways, VHS tape screens, death screen, win screen. Should be full-bleed or large-format.
- **Process progression** — side-by-side comparisons: ChatGPT version vs. early Claude version vs. final version. Shows the evolution clearly.
- **Gameplay videos** — early demo, V8, V19, and final version. Embedded YouTube or similar. Framed like VHS tapes or security monitor footage.
- **VHS tape content** — the 7 tape texts could be displayed as actual VHS screen recreations (static background, monospace text, REC indicator).
- **Research visuals** — NotebookLM mind maps, screenshots from sources, any photos of the physical playtest notebook.
- **Harold evolution** — if screenshots exist of his early vs. final design, this is strong visual evidence of the iteration process.

All images should feel like they were pulled from a security monitor or an old VHS tape — slightly desaturated, slightly degraded. No clean, bright, high-contrast photography.

---

## References
- **Silent Hill (PS1/PS2)** — overall aesthetic, title treatment, warm dark palette, distressed serif typography
- **Resident Evil (PS1)** — dingy corridors, warm brown/yellow interiors, low-poly texture quality as aesthetic
- **Slender: The Eight Pages** — scratchy handwritten elements, warning text style, minimalist horror
- **The Backrooms** — sickly yellow-green liminal space color, fluorescent overhead lighting, endless empty corridors
- **CLOSED — 1985 (the game itself)** — the primary reference for everything. The site should feel like the game's UI extended into a webpage.

---

## Avoid
- Pinks, purples, blues of any shade
- Bright, saturated, or neon colors
- White or light backgrounds
- Clean, minimal, modern design
- Sans-serif fonts (Inter, Helvetica, etc.)
- Happy, inviting, or friendly tone
- Standard portfolio layout (top nav, hero image, card grid, footer)
- Smooth, polished transitions — keep everything slightly glitchy
- Anything that breaks the game's world or aesthetic

---

## Notes for the Coding Agent
- The game is a single HTML file using Three.js with a PS1-style render pipeline — the site should feel visually consistent with the game's UI layer (see the game's CSS for exact color values, font choices, and effects like `#scanlines`, `#vignette`, `#noise`)
- The game uses `Courier New` monospace throughout its HUD — match this for body text
- Key game CSS values to reuse: background `#050102`, text `#d8c8a8`, accent red `#c82020`, orange `#ff6b3a`, stamp color `#ff6b3a`
- The game's title uses a CSS `jitter` animation (random translate on a loop) and chromatic aberration via `text-shadow: 4px 0 #00aaff, -4px 0 #ff00aa` — use this on the site's main title
- The game has a `repeating-linear-gradient` scanline overlay and a `radial-gradient` vignette — both should be applied site-wide
- The canvas noise overlay from the game (`#noise`) creates the film grain effect — replicate this or use a CSS equivalent
- Full-screen sections with VHS static flash transitions between them
- The site must be responsive but the immersive feel is the priority
- The playable game should be embeddable via iframe pointing to `https://closed1985.netlify.app/` or the HTML file can be self-hosted
- Content source: `project-interview.md` and the Milanote board export contain all text content for every section
