// src/pages/ProjectDetail.jsx
import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import GlassSection from '../components/GlassSection'
import SEO from '../components/SEO'
import { projects } from '../data/projects'
import { buildProjectDescription, buildProjectSchema } from '../config/seo.mjs'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = useMemo(
    () => projects.find(p => p.id === id),
    [id],
  )

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  const showNext = useCallback(() => {
    if (!project?.screenshots) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.screenshots.length)
  }, [project?.screenshots])

  const showPrev = useCallback(() => {
    if (!project?.screenshots) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.screenshots.length) % project.screenshots.length)
  }, [project?.screenshots])

  // Handle keyboard navigation inside the lightbox
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, showNext, showPrev])

  if (!project) {
    return (
      <>
        <SEO
          title="Project Not Found | Brent Ogden"
          description="The requested project case study could not be found on Brent Ogden's portfolio website."
          path={`/projects/${id}`}
          robots="noindex, nofollow"
        />
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
      </>
    )
  }

  const { title, type, year, tech, liveUrl, caseStudy, impact, role, thumbnail, screenshots } =
    project
  const { summary, problem, approach, outcome, highlights } = caseStudy || {}

  return (
    <>
      <SEO
        title={`${title} Case Study | Brent Ogden`}
        description={buildProjectDescription(project)}
        path={`/projects/${project.id}`}
        image={thumbnail}
        imageAlt={`${title} website project preview`}
        imageWidth={1440}
        imageHeight={900}
        type="article"
        structuredData={buildProjectSchema(project)}
      />

      {/* Header / summary with screenshot background */}
      <div className="p-4 flex flex-col items-center bg-slate-800/50 gap-4 text-center">
      <h1 className="text-4xl text-center font-bold text-white text-shadow-white shadow-lg">CASE STUDY -  {title}</h1>
      </div>
      <GlassSection
        className="bg-white/5 h-64 md:rounded-sm text-md relative border-slate-900 overflow-hidden shadow-md shadow-brand/80"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-800 md:bg-slate-900/20" />

        {/* Content wrapper to keep text above overlay */}
        <div className="relative z-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-4 inline-flex items-center gap-2 text-md md:text-sm rounded-lg bg-brand/80 text-white p-4 hover:text-white"
          >
            <FaArrowLeft />
            Back
          </button>

          {/* <p className="mb-1 text-2xl font-semibold uppercase tracking-[0.25em] text-brandAlt">
            Case Study
          </p>
          <h1 className="mb-2 text-2xl font-semibold text-slate-90 sm:text-3xl shadow-lg">
            {title}
          </h1> */}

          {/* <div className="mb-3 flex flex-wrap items-center gap-3 text-md text-slate-300">
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
          )} */}

          {/* <div className="mt-4 flex flex-wrap items-center gap-2 text-md">
            {tech?.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-brand/60 px-2.5 py-1 text-slate-100"
              >
                {tag}
              </span>
            ))}
          </div> */}

          {/* {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-md font-medium text-brand hover:text-brandAlt"
            >
              View live project
              <FaExternalLinkAlt className="text-md" />
            </a>
          )} */}

          {/* {impact && (
            <p className="mt-4 text-md italic text-white/90">
              Impact: {impact}
            </p>
          )} */}
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

      {/* Integrated Screenshots Section */}
      {screenshots && screenshots.length > 0 && (
        <GlassSection className="mt-6 text-sm rounded-md shadow-md shadow-brand">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-50">
              Project Screenshots
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Click on any image to view it in full resolution.
            </p>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-950/40 p-1.5 transition-all duration-300 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-slate-950">
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption || `${title} project screenshot ${index + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-brand/80 px-3 py-1.5 text-xs font-medium text-white border border-white/10">
                      Expand View
                    </span>
                  </div>
                </div>
                {screenshot.caption && (
                  <p className="mt-2 px-1 text-xs text-slate-400 line-clamp-1 group-hover:text-slate-200 transition-colors">
                    {screenshot.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </GlassSection>
      )}

      {/* Lightbox Modal */}
      {isOpen && screenshots && screenshots.length > 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md transition-opacity duration-300">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-50 rounded-full bg-slate-900/80 p-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800"
            aria-label="Close Lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Controls */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={showPrev}
                className="absolute left-4 z-50 rounded-full bg-slate-900/80 p-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800 md:left-8"
                aria-label="Previous Image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 z-50 rounded-full bg-slate-900/80 p-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800 md:right-8"
                aria-label="Next Image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Main Image Container */}
          <div className="relative max-h-[80vh] max-w-[90vw] overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl">
            <img
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].caption || `${title} project screenshot ${currentIndex + 1}`}
              className="h-full max-h-[75vh] w-auto object-contain"
            />
          </div>

          {/* Caption & Counter */}
          <div className="mt-4 text-center max-w-xl px-4">
            {screenshots[currentIndex].caption && (
              <p className="text-sm text-slate-200 font-medium">
                {screenshots[currentIndex].caption}
              </p>
            )}
            <p className="mt-1 text-xs text-slate-500">
              {currentIndex + 1} of {screenshots.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}