// src/pages/Home.jsx
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiGit,
  SiPython,
  SiJquery,
  SiAdobephotoshop,
  SiNpm,
  SiVite,
  SiBootstrap,
  SiWordpress,
  SiShopify,
} from 'react-icons/si'
import GlassSection from '../components/GlassSection'
import ProjectCard from '../components/ProjectCard'
import resumePDF from '../assets/Brent_Ogden_Frontend_Resume.pdf'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { workTimeline } from '../data/experience'

// Map skill.iconKeys → actual icon components
const skillIconMap = {
  python: SiPython,
  html5: SiHtml5,
  javascript: SiJavascript,
  react: SiReact,
  nodejs: SiNodedotjs,
  php: SiPhp,
  github: SiGit,
  css3: SiCss3,
  tailwindcss: SiTailwindcss,
  wordpress: SiWordpress,
  jquery: SiJquery,
  photoshop: SiAdobephotoshop,
  npm: SiNpm,
  vite: SiVite,
  bootstrap: SiBootstrap,
  shopify: SiShopify,
}

// Enrich skills with actual icon components
const skillsWithIcons = skills.map(skill => ({
  ...skill,
  icons: (skill.iconKeys || [])
    .map(key => skillIconMap[key])
    .filter(Boolean),
}))

export default function Home() {
  const featured = projects.slice(0, 3)

  const [activeJobId, setActiveJobId] = React.useState(
    workTimeline[0]?.id ?? null,
  )

  // Separate state for mobile accordion
  const [mobileOpenJobId, setMobileOpenJobId] = React.useState(
    workTimeline[0]?.id ?? null,
  )

  const activeJob =
    workTimeline.find(job => job.id === activeJobId) || workTimeline[0]

  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* Main intro card */}
        <GlassSection className="bg-white/5">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brandAlt">
            Front-End Engineer | React · Tailwind · Python
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            I build fast, modern web
            experiences
            <span className="block text-lg font-semibold pt-2 text-white tracking-wide sm:text-xl">
              prioritizing <span className='text-brand'> React</span> & <span className='text-brand'> Tailwind</span> while focusing on perfomance and usability.
            </span>
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-slate-300">
            I’m a tech-driven problem solver who thrives in fast-paced
            environments, whether working independently or collaborating with a
            team to reach shared goals. I take pride in learning new skills
            quickly and delivering efficient, accurate results. I’m always
            looking for opportunities to improve processes and workflows—and
            I’m not afraid to dive into new tools or technologies to make that
            happen.
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand/60 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[rgba(1,133,228,0.4)] transition hover:bg-brandAlt hover:shadow-[rgba(61,134,202,0.45)]"
            >
              View project gallery
            </a>
            <a
              href="/contactform"
              className="inline-flex items-center gap-2 rounded-full border border-brand/60 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-brandAlt hover:bg-slate-900/80"
            >
              Let&apos;s connect
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1">
              <span className="h-2 w-2 rounded-full animate-pulse bg-emerald-400" />
              Open to remote & Denver-area roles
            </span>
            <span className="text-md font-semibold text-white">
              12+ years experience · React · JS · Tailwind
            </span>
          </div>
        </GlassSection>

        {/* Quick profiles card */}
        <div className="space-y-4">
          <GlassSection>
            <h2 className="mb-3 text-md font-medium text-slate-200">
              Profiles & Resume
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.linkedin.com/in/brent-ogden-70398012"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1.5 text-slate-100 transition hover:bg-brand hover:text-slate-950"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/BrentOgden"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1.5 text-slate-100 transition hover:bg-brand hover:text-slate-950"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={resumePDF}
                download="Brent_Ogden_Frontend_Resume.pdf"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brandAlt/50 bg-brandAlt/10 px-3 py-1.5 text-white transition hover:bg-brandAlt/20"
              >
                <FaFilePdf />
                Resume
              </a>
            </div>
          </GlassSection>

          <GlassSection className="text-slate-300">
            <p className="mb-1 text-lg font-bold uppercase text-brand border-b-2 border-b-brandAlt">
              What I&apos;m great at:
            </p>
            <p className="text-sm leading-relaxed">
              Turning messy requirements into clear front-end experiences,
              tightening up performance and accessibility, and building reusable
              components that make the next project faster.
            </p>
          </GlassSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Featured Projects
            </h2>
            <p className="text-md text-slate-400">
              A quick snapshot of work where I owned the front-end experience.
            </p>
          </div>
          <a
            href="/projects"
            className="md:inline-flex md:items-center text-center md:gap-2 rounded-lg md:rounded-full bg-brand/60 px-4 py-2 md:text-sm font-medium md:text-white shadow-lg shadow-[rgba(1,133,228,0.4)] text-white transition hover:bg-brandAlt md:hover:text-white hover:shadow-[rgba(61,134,202,0.45)]"
          >
            View Projects
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map(p => (
            <ProjectCard key={p.id} project={p} dense />
          ))}
        </div>
      </section>

      {/* My Story */}
      <GlassSection
        id="story"
        className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
      >
        <div>
          <h2 className="mb-3 text-xl font-semibold text-slate-50 sm:text-2xl">
            My Story
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-slate-300">
            For more than a decade, I’ve worked across startups, agencies, and long-term client relationships, creating front-end experiences that balance speed, maintainability, and business impact. I thrive in both IC and team-driven roles, and I care deeply about thoughtful UX, clean code, and predictable workflows.

          </p>
          <p className="mb-3 text-sm leading-relaxed text-slate-300">
            I adapt quickly to new technologies, connect APIs with ease, and automate repetitive tasks so teams can move faster. From content-driven marketing sites to robust React dashboards, I focus on building solutions that scale.

          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            I’m currently based just outside Denver, CO and am open to both remote opportunities and in-office work.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4 text-sm text-slate-300">
          <div className="rounded-2xl bg-slate-950/40 p-4">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-brandAlt">
              Quick snapshot
            </p>
            <ul className="space-y-1.5">
              <li>• 12+ years in frontend and backend development</li>
              <li>• Skilled in React, JS, Tailwind, Node, Python and much more</li>
              <li>• Focused on UI, UX, and performance</li>
              <li>• Vast experience with agencies, designers & product teams</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-950/40 p-4 text-sm">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-brandAlt">
              How I like to work
            </p>
            <p className="text-sm">
              Defining clear requirements from the start, collaborating throughout, and architecting
              production-ready applications from the first deploy. If it doesn't work, it doesn't ship!
              
            </p>
          </div>
        </div>
      </GlassSection>

      {/* Experience / Interactive Resume */}
      <section id="experience" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Experience
            </h2>
            <p className="text-md text-slate-400">
              A timeline of roles where I shipped meaningful features, supported team development, and improved workflows across the organization.
            </p>
          </div>
        </div>

        {/* Desktop / Tablet: original behavior */}
        <GlassSection className="hidden gap-6 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Timeline (left) */}
          <div className="space-y-2">
            {workTimeline.map(job => {
              const isActive = job.id === activeJobId
              return (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setActiveJobId(job.id)}
                  className={`flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left text-sm transition ${
                    isActive
                      ? 'border-brand bg-brand/10 text-slate-50'
                      : 'border-slate-700/60 bg-slate-950/40 text-slate-200 hover:border-brand/60 hover:bg-slate-900'
                  }`}
                >
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandAlt">
                      {job.date}
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      {job.jobtitle}
                    </p>
                    <p className="text-xs text-slate-400">{job.where}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active job detail (right) */}
          <div className="rounded-2xl bg-slate-950/60 p-4 text-sm text-slate-200">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-brandAlt">
              {activeJob.date}
            </p>
            <h3 className="text-base font-semibold text-slate-50">
              {activeJob.jobtitle}
            </h3>
            <p className="mb-3 text-xs text-slate-400">{activeJob.where}</p>
            <div className="h-px w-full bg-slate-700/60" />

            {/* Keep HTML bullets intact */}
            <div
              className="resume-details mt-3 text-sm text-slate-200"
              dangerouslySetInnerHTML={{
                __html: activeJob.jobDescription,
              }}
            />
          </div>
        </GlassSection>

        {/* Mobile: accordion with slide-out details */}
        <GlassSection className="space-y-2 md:hidden">
          {workTimeline.map(job => {
            const isOpen = job.id === mobileOpenJobId
            return (
              <div
                key={job.id}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/60"
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenJobId(prev => (prev === job.id ? null : job.id))
                  }
                  className="flex w-full items-start gap-3 px-3 py-3 text-left text-sm"
                >
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <div className="flex-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brandAlt">
                      {job.date}
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      {job.jobtitle}
                    </p>
                    <p className="text-xs text-slate-400">{job.where}</p>
                  </div>
                  <span
                    className={`mt-1 text-xs text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  >
                    ▶
                  </span>
                </button>

                {/* Sliding details */}
                <div
                  className={`overflow-hidden border-t border-slate-700/60 transition-all duration-300 ${
                    isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 pb-3 pt-2 text-sm text-slate-200">
                    <div
                      className="resume-details text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: job.jobDescription,
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </GlassSection>
      </section>

      {/* Skills – using shared data + icon fonts + tooltips */}
      <section id="skills" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Skills & Experience
            </h2>
            <p className="text-md text-slate-400">
              The creative and technical edge behind every project.
            </p>
          </div>
        </div>

        <GlassSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skillsWithIcons.map(({ name, years, proficiency, icons }) => (
              <div
                key={name}
                className="group relative flex flex-col gap-1 rounded-2xl bg-slate-950/70 px-3 py-3 text-slate-200"
              >
                <div className="flex items-center gap-2">
                  {/* Icons (fallback to initial if no icons defined) */}
                  <div className="flex items-center gap-1 md:text-lg">
                    {icons && icons.length > 0 ? (
                      icons.map((Icon, idx) => (
                        <Icon
                          key={idx}
                          className="text-brand"
                          aria-hidden="true"
                        />
                      ))
                    ) : (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/80 font-semibold text-slate-900">
                        {name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <span className="text-sm font-medium">{name}</span>
                </div>

                {/* Inline meta */}
                <p className="text-sm text-slate-300">
                  {years}+ years · {proficiency}
                </p>

                {/* Tooltip */}
                <div className="pointer-events-none absolute left-0 top-full z-20 mt-1 w-max max-w-xs rounded-md bg-slate-900/95 px-2 py-1 text-[0.7rem] text-slate-100 opacity-0 shadow-lg ring-1 ring-slate-700 transition-opacity duration-150 group-hover:opacity-100">
                  <p className="font-semibold">{name}</p>
                  <p className="text-[0.68rem] text-slate-200">
                    {years}+ years experience · Proficiency: {proficiency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassSection>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mt-4 rounded-3xl border border-brand/50 bg-brand/10 p-6 text-sm text-slate-100 shadow-lg backdrop-blur-md sm:p-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-slate-50 sm:text-2xl">
              Let&apos;s connect
            </h2>
            <p className="max-w-xl text-sm text-slate-100/80">
              Interested in working together—or just want to chat about a
              front-end challenge you&apos;re facing? Send me a note with a bit
              of context, and I&apos;ll get back to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ogden87@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-slate-50 shadow-md transition hover:bg-slate-900"
            >
              <FaEnvelope />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/brent-ogden-70398012"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-100/40 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-brandAlt hover:bg-slate-900/80"
            >
              <FaLinkedin />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
