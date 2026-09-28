# ⚡ Hammad — Full-Stack Craftsman & AI/ML Engineer Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.18.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-7C3AED?style=for-the-badge)](https://lenis.darkroom.engineering)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> An Awwwards-tier, modern, agency-grade creative engineering and full-stack developer portfolio. Built with **Astro 5 (SSG)**, **Tailwind CSS**, **GSAP + ScrollTrigger**, and **Lenis Smooth Scroll**, featuring selective **React 19 Islands** for interactive modules.

---

## 🌟 Visual & Architectural Highlights

- **Obsidian Luxury Canvas**: Deep cosmic void canvas (`#090A0F`) with subtle ambient glowing orbs and GPU-friendly fixed film-grain noise overlay (`opacity: 0.035`).
- **Double-Bezel (Doppelrand) Architecture**: Major components sit within precision machine-cut outer shells (`p-1.5 rounded-[2rem] bg-white/[0.03] ring-1 ring-white/[0.08]`) enclosing an elevated high-contrast inner core.
- **Button-in-Button Ergonomics**: Trailing icon badges (`↗`) nested in circular spring-animated enclosures with independent translation vectors on hover.
- **Floating Glass Dock Navigation**: Detached floating glass pill with live availability telemetry beacon (`Available for Q2/Q3 Roles`).
- **Zero-JS Static Core**: Pure pre-rendered HTML for hero, manifesto, case studies, capabilities matrix, timeline, and footer.
- **Selective React Islands**: React 19 utilized strictly for interactive state machines:
  - `ProjectFilter.tsx`: Client-side instant category filtering (`client:visible`).
  - `InteractiveSandbox.tsx`: Live developer sandbox running DAG agent refactoring, real-time clinical ML inference, and 5,000 tick/sec WebSocket telemetry (`client:visible`).
  - `ContactForm.tsx`: Interactive inquiry transmitter with single-click email clipboard copy and confirmation toast (`client:idle`).
- **Unified Motion Bridge**: Centralized orchestrator synchronizing Lenis RAF with GSAP ScrollTrigger tickers, with complete accessibility support for `prefers-reduced-motion`.

---

## 🏗️ Project Architecture & Directory Structure

```text
hammad-portfolio/
├── .github/                       # GitHub Actions workflows & issue templates
├── public/
│   ├── favicon.svg                # Custom branded monogram SVG with live beacon
│   └── favicon.ico                # Fallback icon
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   └── AboutSection.astro         # Editorial philosophy, engineering standards & stats
│   │   ├── capabilities/
│   │   │   └── CapabilitiesMatrix.astro   # 4-pillar architectural proficiencies
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx            # [React Island] Inquiry form & clipboard copy
│   │   │   └── ContactLounge.astro        # High-conversion engagement hub & timezone
│   │   ├── experience/
│   │   │   └── ExperienceTimeline.astro   # Stepper trajectory with numbered milestone nodes
│   │   ├── footer/
│   │   │   └── Footer.astro               # Colophon, commit hash telemetry & back-to-top
│   │   ├── hero/
│   │   │   └── Hero.astro                 # Bold typographic identity, CTAs & stats dock
│   │   ├── lab/
│   │   │   ├── InteractiveSandbox.tsx     # [React Island] Multi-tab real-time simulator
│   │   │   └── LabSection.astro           # Editorial sandbox wrapper
│   │   ├── manifesto/
│   │   │   └── Manifesto.astro            # Scroll-triggered editorial typography statement
│   │   ├── navigation/
│   │   │   └── Navbar.astro               # Floating glass pill dock & mobile drawer
│   │   ├── projects/
│   │   │   ├── ProjectCard.astro          # Double-bezel card with problem-solution storytelling
│   │   │   ├── ProjectFilter.tsx          # [React Island] Category filtering tabs
│   │   │   └── ProjectSection.astro       # Case studies showcase container
│   │   └── ui/
│   │       ├── Button.astro               # Reusable button-in-button CTA
│   │       ├── DoubleBezel.astro          # Master double-bezel wrapper
│   │       └── EyebrowTag.astro           # Micro-capsule typography pill
│   ├── data/
│   │   ├── experience.ts                  # Career & education milestones
│   │   ├── projects.ts                    # Case studies data (problem, solution, metrics)
│   │   └── skills.ts                      # 4-pillar skill taxonomy
│   ├── layouts/
│   │   └── BaseLayout.astro               # HTML5 shell, SEO tags, grain overlay & Lenis init
│   ├── pages/
│   │   └── index.astro                    # Unified narrative homepage assembly
│   ├── scripts/
│   │   └── lenis-orchestrator.ts          # Lenis + GSAP ScrollTrigger coordinator
│   └── styles/
│       └── global.css                     # Design tokens, fonts, Lenis CSS & custom utilities
├── astro.config.mjs                       # Astro 5 configuration with React & Tailwind
├── tailwind.config.mjs                    # Obsidian color tokens, typography & bezels
├── package.json                           # Dependency manifest
└── tsconfig.json                          # Strict TypeScript configuration
```

---

## 🚀 Quick Start & Development

### Prerequisites
- **Node.js**: `v20.0.0` or higher (Tested on `v25.8.1`)
- **npm**: `v10.0.0` or higher (Tested on `v11.11.0`)

### Installation
```bash
# Clone the repository
git clone https://github.com/hashirahmad806/Hammad_Portfolio.git
cd Hammad_Portfolio

# Install dependencies
npm install
```

### Local Development
```bash
# Start Astro development server
npm run dev

# Or run in background mode (per AGENTS.md)
npx astro dev --background
```
Open [http://localhost:4321/](http://localhost:4321/) (or [http://localhost:4322/](http://localhost:4322/)) in your browser.

### Production Build
```bash
# Validate TypeScript and compile static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📊 Comprehensive Process, Audit & Future Issues

For an in-depth record of:
1. **Engineering Process Log**: Full architectural decisions and scaffolding history.
2. **Current Limitations & Problem Audit**: Known bottlenecks, mocked states, and real-world edge cases.
3. **Areas for Improvement**: Planned visual, performance, and SEO enhancements.
4. **Actionable GitHub Issues Roadmap**: Pre-formatted issue tickets with acceptance criteria and code snippets.

👉 **See [GITHUB_ISSUES_ROADMAP.md](./GITHUB_ISSUES_ROADMAP.md)**

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
