// src/components/ProjectCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project, dense = false }) {
  const {
    id,
    title,
    description,
    tech = [],
    liveUrl,
    impact,
    role,
    year,
    type,
    thumbnail,
  } = project

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-md shadow-md backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand">
      {/* Thumbnail */}
      {thumbnail && (
        <div className="mb-3 overflow-hidden rounded-xl border border-white/5 bg-slate-950/40">
          <img
            src={thumbnail}
            alt={title}
            className="h-40 w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-md font-semibold text-slate-50">{title}</h3>
        {year && (
          <span className="text-sm text-slate-400">{year}</span>
        )}
      </div>

      {/* Type */}
      {!dense && type && (
        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.16em] text-brandAlt">
          {type}
        </p>
      )}

      {/* Description */}
      <p className="mb-2 text-sm leading-relaxed text-slate-300">
        {description}
      </p>

      {/* Impact / Role (only on full cards) */}
      {!dense && impact && (
        <p className="mb-2 text-sm text-emerald-300/90">Impact: {impact}</p>
      )}

      {!dense && role && (
        <p className="mb-2 text-sm text-slate-400">Role: {role}</p>
      )}

      {/* Footer */}
      <div className="mt-2 flex items-end justify-between gap-2">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.slice(0, dense ? 3 : 6).map(tag => (
            <span
              key={tag}
              className="rounded-full bg-brand/60 px-2 py-0.5 text-xs text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col items-end gap-1 text-sm">
          {id && (
            <Link
              to={`/projects/${id}`}
              className="inline-flex items-center gap-1 text-brand transition hover:text-brandAlt"
            >
              Details
              <FaExternalLinkAlt className="text-md" />
            </Link>
          )}
          {!dense && liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 transition hover:text-brandAlt"
            >
              Live site
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
