"use client"

import { useEffect, useState } from "react"
import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, GraduationCap, Linkedin, Mail, MapPin, Phone, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { content, cvPath, profileHighlights, profileTitle, projectDetails, skillTechnologies, type Locale } from "@/lib/portfolio-content"

const cardClass = "min-w-0 gap-0 rounded-2xl border-border bg-card p-6 shadow-none md:p-7"

export function Portfolio() {
  const [locale, setLocale] = useState<Locale>("vi")
  const t = content[locale]

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-locale")
      if (saved === "vi" || saved === "en") setLocale(saved)
    } catch {
      // The language controls also work when browser storage is unavailable.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.pageDescription)
  }, [locale, t.pageTitle, t.pageDescription])

  function changeLocale(next: Locale) {
    setLocale(next)
    try {
      localStorage.setItem("portfolio-locale", next)
    } catch {
      // Persistence is optional; switching languages does not depend on it.
    }
  }

  return (
    <div className="min-h-screen bg-background px-4 py-6 text-foreground md:px-8 md:py-10">
      <a href="#main" className="sr-only z-50 rounded-lg bg-card p-3 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {t.skip}
      </a>
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-[0.14em]">DC <span className="font-normal text-muted-foreground">/ PORTFOLIO</span></span>
          <div className="flex items-center gap-3">
            <div role="group" aria-label="Ngôn ngữ / Language" className="flex gap-1 rounded-full border border-border bg-card p-1">
              {(["vi", "en"] as const).map((language) => (
                <Button
                  key={language}
                  size="sm"
                  variant={locale === language ? "secondary" : "ghost"}
                  className="h-8 rounded-full px-3"
                  lang={language}
                  aria-label={language === "vi" ? "Tiếng Việt" : "English"}
                  aria-pressed={locale === language}
                  onClick={() => changeLocale(language)}
                >
                  {language.toUpperCase()}
                </Button>
              ))}
            </div>
            <ThemeToggle label={t.theme} />
          </div>
        </header>

        <main id="main" tabIndex={-1} className="grid scroll-mt-6 grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card id="about" className={`${cardClass} md:col-span-2`}>
            <div className="mb-5 flex items-center gap-4">
              <div aria-hidden="true" className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">DC</div>
              <div className="min-w-0">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{t.name}</h1>
                <p className="mt-1 text-sm font-medium text-primary">{profileTitle}</p>
              </div>
            </div>
            <p className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="size-4 shrink-0" />{t.location}</p>
            <h2 className="mb-2 text-sm font-semibold">{t.about}</h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{t.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profileHighlights.map((skill) => <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1">{skill}</Badge>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full"><a href={cvPath} download><ArrowDownToLine aria-hidden="true" />{t.download}</a></Button>
              <Button asChild variant="outline" className="rounded-full"><a href="mailto:ddc150421@gmail.com">{t.contactAction}<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </Card>

          <Card className={`${cardClass} flex flex-col justify-between md:col-span-2 lg:col-span-1`}>
            <div>
              <div className="mb-4 flex items-center gap-2.5"><span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-primary motion-safe:animate-pulse" /><h2 className="font-semibold">{t.status}</h2></div>
              <p className="text-sm leading-7 text-muted-foreground">{t.availability}</p>
            </div>
            <div className="mt-8 border-t border-border pt-5">
              <span className="text-4xl font-semibold tracking-tight">{String(t.projectItems.length).padStart(2, "0")}</span>
              <p className="mt-2 text-sm text-muted-foreground">{t.featured}</p>
            </div>
          </Card>

          <Card id="experience" className={`${cardClass} lg:col-span-2`}>
            <h2 className="mb-5 flex items-center gap-2 font-semibold"><BriefcaseBusiness aria-hidden="true" className="size-4 text-primary" />{t.experience}</h2>
            <h3 className="font-semibold">{t.workRole}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Shipway Delivery Company</p>
            <p className="mt-1 text-xs text-muted-foreground">12/2025 – 04/2026</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.workDescription}</p>
          </Card>

          <Card id="contact" className={cardClass}>
            <h2 className="mb-5 font-semibold">{t.contact}</h2>
            <div className="space-y-5">
              <a href="mailto:ddc150421@gmail.com" className="flex items-start gap-3 rounded-md transition-colors hover:text-primary">
                <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                <div className="min-w-0"><span className="block text-xs text-muted-foreground">{t.email}</span><span className="mt-1 block break-all text-sm">ddc150421@gmail.com</span></div>
              </a>
              <a href="tel:+84397912441" className="flex items-start gap-3 rounded-md transition-colors hover:text-primary">
                <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                <div><span className="block text-xs text-muted-foreground">{t.phone}</span><span className="mt-1 block text-sm">+84 397 912 441</span></div>
              </a>
              <a href="https://www.linkedin.com/in/chinh-dang-17792424b/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-md transition-colors hover:text-primary">
                <Linkedin aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                <div className="min-w-0"><span className="block text-xs text-muted-foreground">LinkedIn</span><span className="mt-1 flex items-center gap-1.5 text-sm">{t.name}<ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" /></span><span className="sr-only"> ({t.newTab})</span></div>
              </a>
            </div>
          </Card>

          <section id="projects" aria-labelledby="projects-title" className="min-w-0 md:col-span-2 lg:col-span-3">
            <h2 id="projects-title" className="mb-4 mt-3 text-lg font-semibold">{t.projects}</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {t.projectItems.map((project, index) => (
                <Card key={project.id} className={`${cardClass} flex flex-col`}>
                  <span aria-hidden="true" className="mb-5 text-sm font-medium text-primary">0{index + 1}</span>
                  <h3 className="text-lg font-semibold leading-7">{project.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-5 text-primary">{project.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p>
                  {project.scope && <p className="mt-4 border-l-2 border-primary/30 pl-3 text-xs leading-6 text-muted-foreground">{project.scope}</p>}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {projectDetails[project.id].technologies.map((skill) => <Badge key={skill} variant="outline" className="rounded-full px-2.5 py-1 text-xs font-normal">{skill}</Badge>)}
                  </div>
                  {projectDetails[project.id].href && <Button asChild variant="outline" className="mt-6 w-fit rounded-full"><a href={projectDetails[project.id].href} target="_blank" rel="noopener noreferrer">{t.demo}<ArrowUpRight aria-hidden="true" /><span className="sr-only"> ({t.newTab})</span></a></Button>}
                </Card>
              ))}
            </div>
          </section>

          <Card id="skills" className={`${cardClass} lg:col-span-2`}>
            <h2 className="mb-5 font-semibold">{t.skills}</h2>
            <div className="space-y-5">
              {t.skillGroups.map((group, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-xs font-medium text-muted-foreground">{group}</h3>
                  <div className="flex flex-wrap gap-1.5">{skillTechnologies[index].map((skill) => <Badge key={skill} variant="secondary" className="rounded-full px-2.5 py-1 text-xs font-normal">{skill}</Badge>)}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card id="education" className={cardClass}>
            <h2 className="mb-5 flex items-center gap-2 font-semibold"><GraduationCap aria-hidden="true" className="size-4 text-primary" />{t.education}</h2>
            <h3 className="font-semibold leading-7">{t.university}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{t.degree}</p>
            <p className="mt-3 text-xs text-muted-foreground">2021–2026</p>
          </Card>

          <Card id="awards" className={`${cardClass} lg:col-span-2`}>
            <h2 className="mb-5 flex items-center gap-2 font-semibold"><Trophy aria-hidden="true" className="size-4 text-primary" />{t.awards}</h2>
            <ul className="space-y-4">{t.awardItems.map((award, index) => <li key={index} className="flex items-start gap-4 text-sm leading-6"><span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{index === 0 ? "2024" : "2023"}</span><span>{award}</span></li>)}</ul>
          </Card>

          <Card id="languages" className={cardClass}>
            <h2 className="mb-5 font-semibold">{t.languages}</h2>
            <dl className="space-y-4 text-sm"><div><dt className="font-medium">{t.vietnamese}</dt><dd className="mt-1 text-muted-foreground">{t.native}</dd></div><div><dt className="font-medium">{t.english}</dt><dd className="mt-1 text-muted-foreground">TOEIC Listening & Reading 700</dd></div></dl>
          </Card>
        </main>

        <footer className="mt-10 flex flex-col gap-2 border-t border-border py-6 text-center text-xs leading-6 text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {t.name}</p>
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  )
}
