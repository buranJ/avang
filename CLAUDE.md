# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, with polling enabled for Windows)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
```

No test suite is configured.

## Tech Stack

- **React 19** with JSX (not TypeScript)
- **Vite 8** as bundler
- **React Router DOM v7** for client-side routing
- **react-compare-image** for before/after sliders
- **react-icons** for icons

## Architecture

Single-page application for a real estate developer (Avangard). Pages compose flat stacks of section components; there is no shared state management — all state is local to components via `useState`.

### Routing (`src/App.jsx`)

| Path | Page |
|------|------|
| `/` | `Home` |
| `/object` | `Object` (single property detail) |
| `/forever` | `ForeverPage` |
| `/objects` | `AllObjects` |

> **Note:** `App.jsx` currently has a duplicate `import Object` and renders `<Object />` and `<Media />` outside `<Routes>` — this is a known issue in the codebase.

### Page → Component structure

- **Home**: Header → Hero → Blok → Consultation → Footer
- **Object**: AboutComplex → InNumbers → BeforeAfter → ParkingLayout → Architecture → Layoutplans → Advantages → Edit → Location → Footer

### Styling conventions

Each component has a co-located CSS file. Most use plain `.css` files with BEM-like class names (e.g., `header__nav`, `nav-item--active`). Newer components (`Architecture`, `Layoutplans`, `Medialist`) use CSS Modules (`.module.css`).

### Assets

Static assets (SVG logo, PNG images) live in `src/assets/`. The logo is referenced via a relative path `./src/assets/logo.svg` directly in JSX — this works in dev but may break in production builds; prefer importing assets at the top of the file instead.

### Language

The UI text is in Russian (Kyrgyzstan/Russia market).
