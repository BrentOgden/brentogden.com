// src/pages/ProjectDetail.jsx
import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import GlassSection from '../components/GlassSection'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = useMemo(
    () => projects.find(p => p.id === id),
    [id],
  )

  if (!project) {
    return (
      <GlassSection className="bg-white/5 text-md">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 text-sm text-brand hover:text-brandAlt"
        >
          <FaArrowLeft />
          Back
        </button>
        <h1 className="mb-2 text-xl font-semibold text-slate-50">
          Project not found
        </h1>
        <p className="text-slate-300">
          I couldn&apos;t find that project. It may have been renamed or removed.
        </p>
      </GlassSection>
    )
  }

  const { title, type, year, tech, liveUrl, caseStudy, impact, role, thumbnail } =
    project
  const { summary, problem, approach, outcome, highlights } = caseStudy || {}

  return (
    <>
      {/* Header / summary with screenshot background */}
      <GlassSection
        className="bg-white/5 md:rounded-sm text-md relative border-slate-900 overflow-hidden shadow-md shadow-brand/80"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-800 md:bg-slate-900/90" />

        {/* Content wrapper to keep text above overlay */}
        <div className="relative z-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-4 inline-flex items-center gap-2 text-md md:text-sm text-brand hover:text-brandAlt"
          >
            <FaArrowLeft />
            Back
          </button>

          <p className="mb-1 text-md font-semibold uppercase tracking-[0.25em] text-brandAlt">
            Case Study
          </p>
          <h1 className="mb-2 text-2xl font-semibold text-slate-90 sm:text-3xl shadow-lg">
            {title}
          </h1>

          <div className="mb-3 flex flex-wrap items-center gap-3 text-md text-slate-300">
            {type && (
              <span className="rounded-full bg-brand/60 px-3 py-1 text-sm">
                {type}
              </span>
            )}
            {year && (
              <span className="rounded-full bg-brand/60 px-3 py-1 text-md md:text-sm">
                {year}
              </span>
            )}
            {role && (
              <span className="md:text-sm text-md text-slate-200">
                Role:{' '}
                <span className="font-medium text-slate-50">
                  {role}
                </span>
              </span>
            )}
          </div>

          {summary && (
            <p className="max-w-3xl md:text-sm text-md leading-relaxed text-slate-200">
              {summary}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-md">
            {tech?.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-brand/60 px-2.5 py-1 text-slate-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-md font-medium text-brand hover:text-brandAlt"
            >
              View live project
              <FaExternalLinkAlt className="text-md" />
            </a>
          )}

          {impact && (
            <p className="mt-4 text-md italic text-white/90">
              Impact: {impact}
            </p>
          )}
        </div>
      </GlassSection>

      {/* 2-column body: Problem / Approach / Outcome + Highlights */}
      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <GlassSection className="text-sm rounded-md shadow-md shadow-brand">
          <div className="space-y-5">
            {problem && problem.length > 0 && (
              <div>
                <h2 className="mb-2 text-md font-semibold text-slate-50">
                  Problem
                </h2>
                <ul className="space-y-1.5 text-md text-slate-300">
                  {problem.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {approach && approach.length > 0 && (
              <div>
                <h2 className="mb-2 text-md font-semibold text-slate-50">
                  Approach
                </h2>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {approach.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {outcome && outcome.length > 0 && (
              <div>
                <h2 className="mb-2 text-md font-semibold text-slate-50">
                  Outcome
                </h2>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {outcome.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </GlassSection>

        <GlassSection className="text-sm shadow-md rounded-md shadow-brand">
          <h2 className="mb-2 text-md font-semibold text-slate-50">
            Highlights
          </h2>
          {highlights && highlights.length > 0 ? (
            <ul className="mb-4 space-y-1.5 text-slate-300">
              {highlights.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          ) : (
            <p className="mb-4 text-slate-300">
              Key decisions and details from this build.
            </p>
          )}

          <div className="rounded-2xl bg-slate-950/60 p-4 text-sm text-slate-300">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-brandAlt">
              What this project shows
            </p>
            <p>
              This case study highlights how I approach front-end engineering:
              beginning with indentifying the problem, designing a structure that can evolve,
              and shipping a quality result that holds up in production.
            </p>
          </div>
        </GlassSection>
      </section>
    </>
  )
}
