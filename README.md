# Fuyuhane Landing

The landing page of [fuyuhane.com](https://fuyuhane.com) — a craft atelier anchored in winter.

## Stack

- **Astro 5** with static generation
- **Tailwind CSS v4**
- **TypeScript** (strict)
- **Bun** runtime

## Commands

| Command | Action |
|:--------|:-------|
| `bun install` | Install dependencies |
| `bun dev` | Start dev server at `localhost:4321` |
| `bun build` | Build production site to `./dist/` |
| `bun preview` | Preview build locally |

## Structure

```
src/
  assets/logos/       # Fuyuhane logo pack + favicon
  content/vessels/    # Vessel markdown content (Kamome, Hayai)
  components/
    layout/           # Nav, Footer
    home/             # Hero, PhilosophyTeaser, VesselPreview
    effects/          # SnowCanvas
    vessels/          # VesselCard
    about/            # TeamMember
  layouts/            # BaseLayout
  pages/              # index, philosophy, about, vessels/
  styles/             # global.css
content.config.ts     # Content collection schemas
```
