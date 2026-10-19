# ducchinhsero.github.io

Personal portfolio of **Dang Duc Chinh**, a Full Stack Developer, based in Da Nang, Vietnam.

## Features

- Vietnamese and English content with a language switcher and saved preference.
- Light and dark themes.
- Work experience, technical skills, education, awards, and selected projects.
- Email and phone contact links.
- Downloadable English Full Stack Developer CV in PDF format.
- Responsive card layout for mobile, tablet, and desktop.

## Selected projects

- Edge AI Health Monitoring & Behavior Recognition — graduation thesis.
- Autonomous SUMO Robot — embedded software development.
- [ZoDaNang](https://zodanang.online) — a full-stack travel discovery platform deployed on Vercel and Render.

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
```

## Content

- `lib/portfolio-content.ts`: Vietnamese and English copy, project technologies, and skills.
- `components/portfolio.tsx`: portfolio layout, contact links, and language controls.
- `app/layout.tsx`: default page metadata and font settings.
- `public/cv/Dang_Duc_Chinh_Full_Stack_Developer_CV_Portfolio.pdf`: downloadable Full Stack Developer CV.

The Next.js configuration exports the site to `out/`. The GitHub Pages workflow in `.github/workflows/deploy.yml` builds and deploys this static output. To preview a production build locally, serve `out/` with a static web server.
