// src/pages/Projects.jsx
import React, { useMemo, useState } from 'react'
import GlassSection from '../components/GlassSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-app', label: 'Web Apps & Dashboards' },
  { id: 'marketing', label: 'Marketing & Portfolio Sites' },
  { id: 'tools', label: 'E-commerce & Internal Tools' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects

    const byType = type => type?.toLowerCase() || ''

    switch (activeFilter) {
      case 'web-app':
        // Things that behave more like apps/dashboards
        return projects.filter(p => {
          const t = byType(p.type)
          return (
            t.includes('sports site') ||
            t.includes('companion site') 
            // t.includes('business site') || // jb simply clean, ranger, etc.
            // t.includes('rebuild')
          )
        })

      case 'marketing':
        // Marketing + portfolio style sites
        return projects.filter(p => {
          const t = byType(p.type)
          return (
            t.includes('landing page') ||
            t.includes('consulting site') ||
            t.includes('portfolio') ||
            t.includes('business site')
          )
        })

      case 'tools':
        // Things with forms, auth, ecommerce, integrations, etc.
        return projects.filter(p =>
          p.tech?.some(tag =>
            /Shopify|Forms|Email Integration|Node\/Express|Auth/i.test(tag),
          ),
        )

      default:
        return projects
    }
  }, [activeFilter])

  return (
    <>
      <GlassSection className="bg-white/5">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-brandAlt">
          Project Gallery
        </p>
        <h1 className="mb-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
          Selected work
        </h1>
        <p className="text-md text-slate-300">
          A deeper look at the apps, tools, and sites I&apos;ve built. I&apos;ve
          focused on projects where I owned the front-end experience and worked
          closely with stakeholders to ship real outcomes—not just prototypes.
        </p>
      </GlassSection>

      <section className="space-y-5">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 text-sm">
          {FILTERS.map(f => {
            const active = f.id === activeFilter
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={
                  active
                    ? 'rounded-full bg-brand px-3 py-1 font-medium text-slate-950 shadow-sm'
                    : 'rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-slate-200 transition hover:border-brandAlt'
                }
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
