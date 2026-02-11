# EPK

EPK is a single-page electronic press kit for **Ashwin Azer / Lucid ASH**, built as a React + TypeScript + Vite site with motion-heavy storytelling sections and embedded media.

## Project purpose

The site is a resource hub for press materials and media kits designed to give journalists, collaborators, and booking contacts a single destination for:

- artist narrative (`THE STORY`)
- streaming + video references (`THE SOUND`)
- visual press assets (`THE LOOK`)
- contact + booking context (`THE BOOK`)

## Tech stack

- **Framework/runtime:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## High-level architecture

`src/App.tsx` composes the page in a linear storytelling flow:

1. `Hero`
2. `Bio`
3. `Music`
4. `Gallery`
5. `Contact`

The app also includes:

- a fixed top progress bar based on `scrollYProgress` from Framer Motion
- a fixed navigation bar anchored to section IDs (`#story`, `#sound`, `#look`, `#book`)
- a desktop-only custom cursor component that reacts to hoverable elements

## Component map

- `src/components/Hero.tsx`: Intro/identity section with parallax motion and mouse-reactive headline movement.
- `src/components/Bio.tsx`: Long-form artist narrative and featured recovery/rebirth visual.
- `src/components/Music.tsx`: Platform links, Spotify embed, YouTube embeds, and a highlighted legal-case callout.
- `src/components/Gallery.tsx`: Press-image grid and a press kit CTA button.
- `src/components/Contact.tsx`: Contact methods plus a presentational booking form (currently `preventDefault` only).
- `src/components/Navigation.tsx`: Top nav with animated links.
- `src/components/CustomCursor.tsx`: Animated cursor ring that scales/changes blend mode on hover targets.

## Assets and scripts

- Image assets are stored in `public/images` and referenced directly by path (e.g. `/images/hero-bg.webp`).
- `scripts/optimize-images.js` uses `sharp` to convert source images into `.webp` assets.

## Development commands

- `npm run dev` — start local development server
- `npm run build` — produce production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript type checking
- `npm run preview` — preview production build locally

## Notes for future contributors

- Most content is currently hard-coded in components. A good refactor path is centralizing copy/content into typed data modules.
- The contact form and “DOWNLOAD PRESS KIT (ZIP)” button are UI-only placeholders and do not currently submit/download anything.
- `@supabase/supabase-js` is installed but not used in the current UI implementation.
