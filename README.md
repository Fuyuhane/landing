# Fuyuhane landing

The static site for [fuyuhane.com](https://fuyuhane.com), presenting the named software projects of Fuyuhane.

## Stack

- Astro 7 with static generation
- Tailwind CSS 4
- TypeScript in strict mode
- pnpm

## Commands

| Command | Action |
|:--------|:-------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the development server |
| `pnpm check` | Run Astro and TypeScript diagnostics |
| `pnpm verify` | Run diagnostics and build the production site |
| `pnpm build` | Build the production site in `dist/` |
| `pnpm preview` | Preview the production build |

The repository uses one package manager. Keep `pnpm-lock.yaml` in sync with `package.json`.
