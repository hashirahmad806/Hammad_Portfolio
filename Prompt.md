You are acting as a senior Creative Director, UX/UI Designer, Motion Designer, and Frontend Architect.

I want to build a premium, modern, highly interactive developer/creative portfolio using ASTRO.

IMPORTANT:
Do NOT immediately start coding the complete website.

First analyze the project, establish the architecture, user experience, visual direction, animation system, component structure, and implementation plan. Think like a senior agency team planning a production-quality portfolio before development begins.

==================================================

1. PRIMARY GOAL
   ==================================================

Create a portfolio that feels:

* Premium
* Modern
* Creative
* Technically sophisticated
* Human-designed rather than AI-generated
* Fast and performant
* Highly responsive
* Minimal but visually rich
* Strong typography
* Strong visual hierarchy
* Smooth and cinematic
* Interactive without becoming distracting
* Professional enough for clients and recruiters
* Memorable enough to demonstrate frontend, AI/ML and full-stack capabilities

The website should NOT look like a generic developer portfolio.

Avoid:

* Generic gradient backgrounds everywhere
* Excessive glassmorphism
* Repetitive cards
* Generic dashboard layouts
* Huge meaningless headings
* Excessive rounded containers
* Random animations
* Overuse of glowing effects
* "AI-generated website" visual patterns
* Too many colors
* Animation for the sake of animation

Every visual and motion decision must have a purpose.

==================================================
2. TECHNOLOGY DIRECTION
=======================

Primary framework:

ASTRO

Use Astro as the main application architecture.

Use React components/islands only where interactive behavior genuinely benefits from React.

Preferred stack:

* Astro
* TypeScript
* Tailwind CSS
* React where needed
* shadcn/ui or compatible Radix-based components where appropriate
* GSAP
* GSAP ScrollTrigger
* Lenis for smooth scrolling
* CSS animations/transitions for lightweight interactions
* Lucide icons or another professional icon system
* Modern responsive layout system

Animation architecture:

LENIS
→ smooth scrolling

GSAP
→ major animations
→ timeline animations
→ entrance animations
→ scroll-triggered animations
→ pinned sections
→ image/text reveals
→ horizontal scrolling
→ cinematic transitions
→ micro-interactions where appropriate

GSAP ScrollTrigger
→ scroll-driven experiences

Do NOT use multiple animation libraries unnecessarily.

Do NOT introduce Framer Motion unless there is a very strong architectural reason.

Keep the animation system centralized and reusable.

==================================================
3. GOOGLE STITCH MCP
====================

Use the available Google Stitch MCP as part of the design exploration process.

Before implementing the final UI:

1. Analyze the portfolio requirements.
2. Create several possible visual directions.
3. Use Google Stitch MCP to explore/refine the visual design direction.
4. Compare layouts, typography, spacing, color systems and section composition.
5. Select one coherent design language.
6. Use the selected direction as the visual reference for implementation.

IMPORTANT:

Stitch should be used for DESIGN EXPLORATION and VISUAL DIRECTION.

Do not blindly copy generated designs.

The final implementation must be adapted to the actual Astro architecture, responsive requirements, accessibility requirements and performance constraints.

If the Stitch MCP is available, inspect its capabilities before using it.

If it is not available, do not pretend that it was used. Continue the planning process and clearly identify where Stitch would be used later.

==================================================
4. FIRST: ANALYZE THE PROJECT
=============================

Before changing files:

Inspect:

* Existing project structure
* package.json
* Astro configuration
* Tailwind configuration
* existing components
* existing assets
* fonts
* images
* public directory
* current routing
* existing dependencies
* existing styling architecture

Do not delete or overwrite existing functionality without understanding it.

Create a short architectural assessment.

Explain:

* What already exists
* What should be reused
* What should be refactored
* What should be created
* What should NOT be added

==================================================
5. INFORMATION ARCHITECTURE
===========================

Design a clear portfolio information architecture.

Propose a structure similar to:

HOME
│
├── Hero
│
├── Introduction / Personal Statement
│
├── Selected Work
│   ├── Project 01
│   ├── Project 02
│   ├── Project 03
│   └── Project 04
│
├── Capabilities / Skills
│
├── Development / Engineering
│
├── AI / ML Work
│
├── Experience
│
├── About
│
├── GitHub / Open Source
│
├── Contact
│
└── Footer

However, do NOT blindly follow this structure.

Determine the best information architecture based on the actual portfolio content.

The user should understand within a few seconds:

1. Who I am
2. What I build
3. What technologies I work with
4. What projects I have created
5. Why the projects matter
6. How to contact me

==================================================
6. USER FLOW
============

Design the user journey.

Primary flow:

LANDING
↓
Hero establishes identity
↓
Visual introduction
↓
Selected work creates credibility
↓
Technical capabilities
↓
Experience / achievements
↓
About / personal story
↓
Contact CTA

The experience should feel like a narrative rather than a collection of unrelated sections.

Each section should answer a question.

For example:

Hero:
"Who is this person?"

Selected Work:
"What can they actually build?"

Capabilities:
"What technologies do they understand?"

Experience:
"Can they work professionally?"

About:
"Who is behind the work?"

Contact:
"How can I work with them?"

==================================================
7. HERO DIRECTION
=================

Design a distinctive hero.

Do NOT create a generic:

"Hi, I'm Hashir, a developer."

Instead create a strong visual identity around:

* Name
* Role
* Short positioning statement
* Primary CTA
* Secondary CTA
* Visual interaction
* Subtle motion

Possible positioning:

Frontend Developer
MERN Stack Developer
AI/ML Engineer in Progress

But determine the final hierarchy based on the content.

The hero should immediately establish:

TECHNICAL ABILITY
+
DESIGN SENSE
+
PERSONAL IDENTITY

Use GSAP for the major hero entrance choreography.

Use Lenis for the overall scroll experience.

==================================================
8. TYPOGRAPHY SYSTEM
====================

Create a professional typography system before implementation.

Do not randomly assign fonts.

Select:

* Display font
* Heading font
* Body font
* Monospace/technical font if useful

Typography should create hierarchy between:

* Hero statement
* Section headings
* Project titles
* Metadata
* Body text
* Technical information
* Navigation
* CTA

Consider modern fonts such as:

* Geist
* Inter
* Manrope
* Satoshi
* Plus Jakarta Sans
* Space Grotesk
* DM Sans

Do not automatically use all of them.

Choose a small coherent typography system.

Typography should feel intentional and premium.

==================================================
9. COLOR SYSTEM
===============

Create a restrained professional color system.

Use:

* Primary background
* Secondary background
* Primary text
* Muted text
* Accent
* Border
* Interactive state

Prefer a limited palette.

Do not use gradients everywhere.

If gradients are used, they should have a specific purpose.

Define color tokens so the entire website remains visually consistent.

Support dark/light mode only if it genuinely improves the experience.

Do not add dark mode just because it is common in developer portfolios.

==================================================
10. COMPONENT ARCHITECTURE
==========================

Plan reusable components.

Potential structure:

src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── projects/
│   ├── experience/
│   ├── skills/
│   ├── about/
│   ├── contact/
│   ├── footer/
│   └── ui/
│
├── layouts/
├── pages/
├── data/
├── styles/
├── lib/
└── scripts/

Do not create components simply to increase file count.

Components should represent meaningful reusable UI or behavior.

Separate:

CONTENT
UI
ANIMATION
DATA
LAYOUT

where practical.

==================================================
11. PROJECT SHOWCASE
====================

Projects are one of the most important parts of the portfolio.

Do NOT present projects as simple cards with:

Image
Title
Description
Button

Instead create a more editorial/immersive project presentation.

Each major project should communicate:

* Project name
* Problem
* Solution
* Technology
* Role
* Important technical decisions
* Result
* Live project
* GitHub
* Visual preview

Use visual storytelling.

Possible interaction:

Project preview
→ hover interaction
→ image movement
→ metadata reveal
→ scroll transition
→ detailed project view

Use GSAP where the interaction benefits from motion.

Keep the interaction accessible and performant.

==================================================
12. SCROLL EXPERIENCE
=====================

Lenis should control smooth scrolling.

GSAP ScrollTrigger should control meaningful scroll-based animation.

Possible experiences:

* Hero text reveal
* Section transitions
* Image reveal
* Project image scaling
* Horizontal project showcase
* Pinned storytelling section
* Typography transformation
* Parallax used carefully
* Progressive content reveal

Do NOT animate every element.

Use a motion hierarchy:

LEVEL 1
Subtle CSS transitions

LEVEL 2
GSAP micro-interactions

LEVEL 3
GSAP ScrollTrigger section animations

LEVEL 4
Major cinematic sequences

Only use Level 4 when the content justifies it.

==================================================
13. RESPONSIVE DESIGN
=====================

Design mobile FIRST.

The portfolio must work professionally at:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px+

Do not simply shrink the desktop design.

Create intentional mobile layouts.

For every major animation ask:

"What happens on mobile?"

Disable or simplify expensive animations where necessary.

Touch interaction must work without hover.

==================================================
14. PERFORMANCE
===============

The website should feel premium without becoming slow.

Prioritize:

* Astro static rendering
* islands only when needed
* optimized images
* lazy loading
* responsive image sizes
* minimal JavaScript
* animation cleanup
* GPU-friendly transforms
* avoiding layout thrashing
* avoiding unnecessary React components

GSAP animations should prefer:

transform
opacity
scale
x/y
rotation

Avoid animating expensive layout properties unnecessarily.

Lenis must not negatively affect accessibility or usability.

Respect:

prefers-reduced-motion

==================================================
15. ACCESSIBILITY
=================

The portfolio must remain accessible.

Include:

* semantic HTML
* keyboard navigation
* visible focus states
* appropriate contrast
* alt text
* accessible buttons
* accessible links
* reduced motion support
* logical heading hierarchy

Do not sacrifice accessibility for visual effects.

==================================================
16. DESIGN PERSONALITY
======================

The visual identity should communicate:

"Developer who understands engineering AND design."

Not:

"Developer who downloaded a portfolio template."

The design should feel:

* intentional
* editorial
* sophisticated
* technical
* confident
* minimal
* slightly experimental
* human

Use whitespace intelligently.

Use typography as a design element.

Use composition instead of decoration.

==================================================
17. DEVELOPMENT WORKFLOW
========================

Follow this workflow:

PHASE 1
Inspect existing project.

PHASE 2
Create information architecture.

PHASE 3
Create user flow.

PHASE 4
Define visual direction.

PHASE 5
Use Google Stitch MCP for design exploration if available.

PHASE 6
Define typography and color system.

PHASE 7
Define component architecture.

PHASE 8
Define animation architecture.

PHASE 9
Implement the global layout.

PHASE 10
Implement Hero.

PHASE 11
Implement project showcase.

PHASE 12
Implement remaining sections.

PHASE 13
Implement GSAP + ScrollTrigger.

PHASE 14
Integrate Lenis.

PHASE 15
Responsive optimization.

PHASE 16
Accessibility review.

PHASE 17
Performance review.

PHASE 18
Final visual polish.

==================================================
18. IMPORTANT AGENT RULES
=========================

DO NOT:

* Immediately rewrite the entire project
* Install unnecessary libraries
* Use every animation library
* Add animations without purpose
* Generate generic UI
* Use excessive gradients
* Overuse glassmorphism
* Create huge numbers of components
* Replace working code unnecessarily
* Ignore existing project structure
* Assume design decisions without inspecting the project

DO:

* Inspect first
* Plan first
* Reuse existing code when appropriate
* Keep architecture clean
* Keep dependencies minimal
* Make animation intentional
* Make responsive behavior intentional
* Use semantic HTML
* Maintain accessibility
* Optimize performance
* Use reusable animation utilities
* Keep content separate from presentation
* Build progressively

==================================================
19. OUTPUT REQUIRED BEFORE CODING
=================================

Before writing significant implementation code, produce:

1. Project analysis
2. Recommended information architecture
3. User flow
4. Page/section hierarchy
5. Visual design direction
6. Typography recommendation
7. Color system
8. Component architecture
9. Animation architecture
10. Lenis + GSAP strategy
11. Responsive strategy
12. Performance strategy
13. Accessibility strategy
14. Google Stitch MCP design exploration plan
15. Implementation phases

Then STOP.

Do not start implementing the full website until this planning stage has been reviewed.

The goal is not simply to make a beautiful portfolio.

The goal is to create a portfolio that demonstrates:

DESIGN
+
FRONTEND ENGINEERING
+
MOTION
+
PERFORMANCE
+
TECHNICAL DEPTH

while remaining professional, usable, responsive and maintainable.
