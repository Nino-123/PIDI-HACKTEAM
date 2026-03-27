# PIDI-HACKTEAM

## CareerAI

**Find the Right Job. Stay Ahead of AI.**

CareerAI is an AI-powered career intelligence platform that helps users upload their CV, extract and analyse skills, find matching job opportunities, identify skill gaps, understand AI disruption risk, and receive actionable career recommendations.

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── figma/
│   │   │   └── index.tsx        # Design tokens + MiniDashboard preview
│   │   ├── ui/
│   │   │   └── index.tsx        # Shared UI primitives (Navbar, StepsBar, etc.)
│   │   ├── DashboardPage.tsx    # Main dashboard with job list + detail panel
│   │   ├── LandingPage.tsx      # Hero, features, CTA
│   │   ├── SkillReviewPage.tsx  # Extracted skill tags, add/remove
│   │   └── UploadPage.tsx       # CV drag-and-drop upload
│   ├── data/
│   │   └── jobs.ts              # Job data, skill data, TypeScript types
│   ├── lib/
│   │   └── utils.ts             # Shared utility functions
│   ├── App.tsx                  # Root component, page routing
│   └── routes.tsx               # Route map (PageKey → path/label)
├── styles/
│   ├── globals.css              # Base reset, tokens, animations
│   └── components.css           # Component-level styles
└── main.tsx                     # ReactDOM entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm build
```

---

## Pages

| Route       | Component          | Description                          |
|-------------|--------------------|--------------------------------------|
| `/`         | `LandingPage`      | Hero, feature cards, bottom CTA      |
| `/upload`   | `UploadPage`       | CV drag-and-drop, upload progress    |
| `/skills`   | `SkillReviewPage`  | Extracted skill tags, edit/add       |
| `/dashboard`| `DashboardPage`    | Job list + detail with AI risk panel |

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for bundling
- **CSS** (no Tailwind — custom design system via CSS variables)
- **Google Fonts** — Syne (headings) + DM Sans (body)
