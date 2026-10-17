# ducchinhsero.github.io

Personal portfolio of **Dang Duc Chinh**, a Full Stack Developer based in Da Nang, Vietnam.

## Features

- Vietnamese and English content with a language switcher and saved preference.
- Light and dark themes.
- Work experience, technical skills, education, awards, and selected projects.
- Email and phone contact links.
- Downloadable PDF CV.
- Responsive card layout for mobile, tablet, and desktop.

## Selected projects

- [ZoDaNang](https://zodanang.online) — a full-stack travel discovery platform.
- Edge AI Health Monitoring & Behavior Recognition — graduation thesis.
- Autonomous SUMO Robot — embedded software development.

## Development

Built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui components.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000 in your browser.

## Validation and production

```sh
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

## Content

- `lib/portfolio-content.ts`: Vietnamese and English copy, project technologies, and skills.
- `components/portfolio.tsx`: portfolio layout, contact links, and language controls.
- `app/layout.tsx`: default page metadata and font settings.
- `public/cv/Dang_Duc_Chinh_Full_Stack_Developer_CV.pdf`: downloadable CV.

The current configuration runs as a Next.js application. Publishing to GitHub Pages requires a separate static-export and deployment configuration.
