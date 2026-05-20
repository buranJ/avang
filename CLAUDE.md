# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173 (HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint check (flat config, ESLint 9+)
```

No test runner is configured. File watching uses polling (100ms) for Windows compatibility.

## Stack

- **React 19** with **React Router 7** (BrowserRouter, client-side routing)
- **Vite** build tool with `@vitejs/plugin-react` (Oxc transformer)
- **JavaScript/JSX** — no TypeScript
- No global state management — all state is local `useState`
- `react-compare-image` for before/after image sliders

## Architecture

### Routing (`src/App.jsx`)

Routes are defined at the top level:
- `/` → `Home`
- `/object` → `Object` (single property detail page)
- `/forever` → `ForeverPage`
- `/objects` → `AllObjects`

Pages are composition containers — they assemble feature components in sequence and always end with `<Footer />`.

### Component organization

```
src/
├── pages/       # Route-level containers (Home, Object, Tech, Media, etc.)
└── components/  # Presentational feature components (one folder per component)
```

Each component folder typically contains a `.jsx` file plus either a `.css` file or a `.module.css` file.

### Styling conventions

Two patterns coexist — do not mix them within a component:

1. **Global CSS** (`.css`) — BEM-style naming (`header__nav`, `nav-item--active`). Used by Header, Hero, Footer, and most components.
2. **CSS Modules** (`.module.css`) — scoped imports (`import styles from "./X.module.css"`). Used by Architecture, Layoutplans, Medialist.

Global CSS variables (colors, fonts, shadows) are defined in `src/index.css`. Dark mode is handled via `@media (prefers-color-scheme: dark)`. Primary responsive breakpoints: **1024px** (desktop→tablet) and **768px** (tablet→mobile).

### Key component patterns

- **Hero** — scroll-triggered counter animations via `IntersectionObserver` and a custom `useCountUp` hook (2500ms eased animation).
- **Architecture** — tab toggle (Fasad / Materials) rendering a horizontal timeline on desktop, vertical on mobile. Uses CSS Modules.
- **Header** — dropdown navigation with hover (desktop) and click (mobile) behavior; hamburger overlay for mobile.
- **BeforeAfter** — wraps `react-compare-image` for interactive slider between two images.

### Data

All content (navigation links, timeline items, statistics) is hardcoded as constants inside each component — there is no API layer or external data source.

### Assets

Static assets live in `public/`: images (`back.jpg`, `image.jpg`, etc.), `fonts/vetren.ttf` (custom serif), `logo.svg`, and `genplan.pdf`.
