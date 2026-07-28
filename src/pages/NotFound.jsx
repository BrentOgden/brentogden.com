import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import GlassSection from '../components/GlassSection'
import SEO from '../components/SEO'
import { DEFAULT_SOCIAL_IMAGE } from '../config/seo.mjs'

export default function NotFound() {
  const location = useLocation()

  return (
    <>
      <SEO
        title="Page Not Found | Brent Ogden"
        description="The requested page could not be found on Brent Ogden's portfolio website."
        path={location.pathname}
        image={DEFAULT_SOCIAL_IMAGE}
        robots="noindex, nofollow"
      />
      <GlassSection className="bg-white/5 text-md">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brandAlt">
          404 error
        </p>
        <h1 className="mb-2 text-2xl font-semibold text-slate-50">
          Page not found
        </h1>
        <p className="mb-5 text-slate-300">
          The page may have moved, been renamed, or never existed.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-full bg-brand/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-brandAlt"
        >
          Return home
        </Link>
      </GlassSection>
    </>
  )
}
