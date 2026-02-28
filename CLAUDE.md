# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Discover Germany — a travel guide website built with Astro 5, Tailwind CSS 4, and deployed to Cloudflare Pages. Content is markdown-based using Astro's content collections with Zod schemas.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test runner is configured. No linter is configured.

## Architecture

### Content Collections (`src/content/`)

Two collections defined in `src/content/config.ts`:
- **destinations** — Travel destination pages with typed schema (region enum: bavaria/rhineland/northern-germany/central-germany/eastern-germany, budgetPerDay object, highlights array, contentStatus workflow, gradientColors for per-destination theming)
- **blog** — Articles with categories (destination, food, festival, practical, budget, culture)

Both collections use a `draft: true` default. Content status tracks: draft → review → published → needs-update.

### Deployment

Cloudflare Pages via `@astrojs/cloudflare` adapter. Config in `wrangler.jsonc`.

## Content Rules

- All prices in EUR and USD
- 12 German destinations: Berlin, Munich, Hamburg, Cologne, Dresden, Heidelberg, Rothenburg, Black Forest, Rhine Valley, Nuremberg, Stuttgart, Leipzig
- 5 regions: Bavaria, Rhineland, Northern Germany, Central Germany, Eastern Germany
