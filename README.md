# Ehyun — Technology & Software Solutions

A corporate portfolio/company website for **Ehyun**, built with the same technology stack
as the Halo Noir project, using a distinct design system suited to a B2B software
consultancy: dark "ink" base, electric blue → teal signal gradient, Space Grotesk display
type paired with Inter for body copy.

## Tech Stack

- Next.js 15 (App Router, `src/` directory, TypeScript)
- Tailwind CSS (custom Ehyun design tokens — see `tailwind.config.ts`)
- Framer Motion for animation
- React Hook Form + Zod for the contact form
- Lucide React icons
- Self-hosted Space Grotesk (display) & Inter (body) via `@fontsource`

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Pages

```
/                 Home — hero, approach, services preview, selected work, process preview, why us, CTA
/about            About, Vision, Mission, Mission Principles, Team
/services         All 9 services in full detail
/technology       Technology stack by category
/portfolio        Case study listing
/portfolio/[slug] Individual case study (challenge, objective, approach, solution, outcome)
/process          Full 10-step development process + project management approach
/industries       8 industries supported
/partnership      Engagement models, partnership model, growth roadmap
/contact          Contact form (React Hook Form + Zod, mock submit + success modal)
```

## Korean Language (EN / KO)

The site includes a live EN / KO toggle in the navbar (desktop, top right; mobile, top of
the fullscreen menu) powered by the free **Google Website Translator** widget.

- No content is hardcoded in Korean anywhere. The site's only source of truth is the
  English copy in `src/data/*.ts` and the `.tsx` files — exactly as requested, so you can
  keep editing English content freely and the Korean version will always follow
  automatically on the next page load.
- No API key, cost, or extra setup is required — this is Google's free client-side
  translation widget (the same one used on many WordPress/Shopify sites).
- How it works: `src/components/shared/GoogleTranslateInit.tsx` loads Google's translate
  engine (invisibly) on every page. `src/components/shared/LanguageSwitcher.tsx` is a
  custom EN/KO button styled to match the Ehyun design system — clicking it sets a cookie
  and reloads the page, and Google's engine translates the DOM to Korean before it's
  shown. Google's own visual widget/banner is hidden via CSS in `globals.css`; only your
  custom button is visible.
- The `EHYUN` brand name is wrapped in a `notranslate` span so it never gets garbled by
  machine translation.
- Trade-off to know: this is machine translation, not professionally reviewed Korean. It's
  a fast way to make the site accessible to Korean visitors immediately with zero
  maintenance. If/when you want polished, human-reviewed Korean copy for the Korean client
  specifically, that would mean writing real Korean content into `/ko/...` routes — a
  separate, bigger step from this toggle.

## Content Notes

- All copy is adapted directly from the Ehyun company profile you provided (About, Vision,
  Mission, Services, Technology, Process, Team, Industries, Partnership, Roadmap sections).
- **Portfolio / case studies are placeholder content.** The source material's project
  entries were templates (`[PROJECT NAME 01]`, etc.), so `src/data/portfolio.ts` contains
  six illustrative sample case studies with realistic-sounding but fictional project
  details, clearly noted as a template on the `/portfolio` page. Replace these with real
  client work (with permission) before publishing.
- Contact form submissions are mocked — no email is actually sent. Wire up a real
  endpoint (e.g. Resend, a serverless function, or a form service) before going live.
- No admin dashboard was built for this project since a company portfolio site doesn't
  need one — let me know if you'd like a CMS-style admin added for managing services,
  case studies, and inquiries.

## Suggested Next Steps

- Swap in real logo, real project photography, and real client project details.
- Add a downloadable PDF company profile (the full 20-section version from your original
  document) linked from `/about` or a dedicated `/company-profile` page.
- Consider a Korean-language version for Korean clients, as recommended in your original
  brief — this would need either `next-intl` routing (`/ko/...`) or a separate mirrored
  site.
