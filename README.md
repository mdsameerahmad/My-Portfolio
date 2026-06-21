# Md Sameer Ahmad Portfolio

This is a React + Vite personal portfolio for Md Sameer Ahmad. The site is an editorial, Digital Heroes-inspired portfolio with large typography, soft paper backgrounds, sage green accents, rounded navigation, animated hero media, and interactive service rows.

Use this README as the handoff guide before editing the UI. The main goal is to preserve the current layout language and only make scoped changes.

## Tech Stack

- React 18 with TypeScript
- Vite 6
- Motion for React animations
- Lucide React icons
- Radix/shadcn-style UI components in `src/components/ui`
- Main styling in `src/index.css`
- Additional token/global file in `src/styles/globals.css`

## Run Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

The production output folder is `build` because `vite.config.ts` is configured for that output.

## App Structure

Main render order lives in `src/App.tsx`:

1. `Navbar`
2. `Hero` inside `#home`
3. `ImpactNumbers`
4. `WhyWorkWithMe`
5. `Skills` inside `#skills`
6. `PortfolioGrid` inside `#projects`
7. `About`
8. `Contact` inside `#contact`
9. `Footer`
10. `Toaster`

Component files are in `src/components`. Assets are in `src/assets`.

## Current UI Direction

The whole portfolio uses an editorial agency-style layout:

- Warm off-white paper background with subtle radial tones.
- Deep near-black text: `--ink`.
- Sage green as the primary accent: `--sage`, `--sage-soft`, `--sage-pale`.
- Large compressed display typography using `Inter Tight`.
- Editorial serif accents using `Instrument Serif`.
- Monospace labels using `Roboto Mono`.
- Thin sage-tinted divider lines.
- Rounded pill navigation and buttons.
- Minimal cards, no heavy boxed dashboard look.

Do not replace this with a generic Tailwind landing page style. The current look should stay close to the provided Digital Heroes reference: oversized type, editorial spacing, soft circles, and interactive hover signals.

## Hero / Home Page

Hero component: `src/components/Hero.tsx`

Important current behavior:

- Left side has a huge vertical ghost word: `DEVELOPER`.
- Hero title content stays as the portfolio content: `I BUILD MOBILE APPS.`
- Supporting copy should not be rewritten unless requested.
- The hero media card now uses `src/assets/homeVdo.mp4` as an autoplaying, muted, looping, inline video.
- The old portrait image was replaced in the hero media area.
- The green orb behind the media card is part of the composition.
- Floating labels around the media card are intentional: `2,000+ lines`, `ignition`, `55+ commits`, and `15+ builds`.
- Bottom hero elements include the skill ticker, wide CTA, info card, WhatsApp round button, and explore cue.

Hero styling is mostly in `src/index.css`. There are multiple historical hero override blocks near the bottom of the file. The final appended rules are currently the strongest. When editing, check the bottom of `src/index.css` first because later rules win.

Hero visual rules to preserve:

- No overlap between hero buttons and ticker pills.
- The left vertical `DEVELOPER` should remain visible like a tall side label.
- The hero card should stay aligned to the right and visually balanced with the title.
- The video should use `object-fit: cover`, stay muted/autoplay/loop, and keep the dark overlay text readable.

## Skills Hover Interaction

Skills component: `src/components/Skills.tsx`

The skills/service rows have a reference-style hover effect:

- Hovering a row changes the title color.
- The title moves slightly left-to-right.
- A small arrow appears before the active title.
- A glossy circular orb appears on the far right, vertically centered with the hovered row.
- Orb colors alternate by row using `data-orb`: sage, then gold.
- The pale large circle behind the glossy orb should feel like a soft shape, not a shadow.
- Heavy box-shadow/glow behind the orb should stay removed.

Relevant CSS selectors:

- `.service-board`
- `.service-row`
- `.service-row::before` for the large pale circle
- `.service-row::after` for the glossy orb
- `.service-row h3::before` for the arrow
- `.service-row:hover h3` for the slide animation
- `.service-row[data-orb="gold"]` for alternating color

Keep the orb on the right side and centered on the hovered row. Do not place the circle behind the text or over the main content.

## CSS Notes

Main design variables are defined in `src/index.css`:

```css
:root {
  --paper: #f4f0e8;
  --paper-soft: #fbf8f1;
  --ink: #07110d;
  --muted-ink: #5d625b;
  --sage: #3f775d;
  --sage-soft: #a9c2ad;
  --sage-pale: #dce7db;
  --line: rgba(63, 119, 93, 0.22);
  --warm: #9a6a3d;
}
```

Important: because several UI refinements were appended over time, the end of `src/index.css` contains the final behavior for hero video, hero alignment, and skills hover orbs. If something looks wrong, search for the selector and remember later CSS overrides earlier CSS.

Prefer editing or consolidating the final override blocks instead of adding unrelated redesign rules.

## Assets

Current notable assets:

- `src/assets/homeVdo.mp4` - hero/home media video.
- `src/assets/3af4f29f5289be48b1e09dcd206f8d6811c3b883.png` - old hero portrait asset, no longer used in hero after the video swap.
- Project images: `madarsa.png`, `ecomm.png`, `chatbot.png`, `refer.png`, `mlm.png`, `weather.png`, `ai.png`, etc.
- `src/assets/resume.pdf` - resume asset.

Do not import files directly from `build/assets` in source code. If an asset is needed by React, keep it in `src/assets` and import from there.

## Navbar Behavior

Navbar component: `src/components/Navbar.tsx`

- Fixed pill navigation centered near the top.
- Brand mark on the left.
- Active section is tracked from scroll position.
- Links scroll smoothly to `home`, `skills`, `projects`, `about`, and `contact`.
- Mobile menu appears under the pill.
- Hire Me CTA links to WhatsApp.

Preserve the pill style and active sage background.

## Content Sections

- `ImpactNumbers.tsx`: four stat cells below the hero.
- `WhyWorkWithMe.tsx`: editorial reason rows.
- `Skills.tsx`: service rows plus tool cloud.
- `PortfolioGrid.tsx`: selected work/project cards.
- `About.tsx`: personal/about copy and timeline.
- `Contact.tsx`: contact panel and form.
- `Footer.tsx`: footer CTA and social links.

Content should generally remain unchanged unless explicitly requested. Most user requests are UI/UX refinements, not copy rewrites.

## Development Guidance For Future Agents

Before changing UI:

1. Read `src/App.tsx` for section order.
2. Read the target component in `src/components`.
3. Search `src/index.css` for that component's selectors.
4. Check the bottom of `src/index.css` for final override blocks.
5. Keep changes scoped and preserve the Digital Heroes-inspired visual language.
6. Run `npm run build` or `npx vite build --emptyOutDir false` after edits.

Use `npx vite build --emptyOutDir false` if OneDrive locks old files in `build/assets` during cleanup.

## Known Practical Notes

- This workspace is inside OneDrive, so build cleanup can sometimes fail with `EBUSY` on old generated files.
- The source of truth is `src`, not `build`.
- The project uses `build` as the deployment directory.
- Avoid deleting or regenerating unrelated assets.
- Avoid rewriting all CSS unless the user asks for a cleanup pass.