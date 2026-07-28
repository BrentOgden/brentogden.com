// src/components/ContactForm.jsx
import React from 'react'
import SEO from '../components/SEO'
import { buildContactSchema, SEO_COPY } from '../config/seo.mjs'

export default function ContactForm({ className = '' }) {
  return (
    <>
      <SEO
        title={SEO_COPY.contact.title}
        description={SEO_COPY.contact.description}
        path={SEO_COPY.contact.path}
        structuredData={buildContactSchema()}
      />
      <section
      id="contact"
      className={`rounded-3xl border border-brand/50 bg-slate-950/70 p-6 text-sm text-slate-100 shadow-lg backdrop-blur-md sm:p-8 ${className}`}
    >
      <div className="mb-6">
        <h1 className="mb-2 text-xl font-semibold text-slate-50 sm:text-2xl">
          Let&apos;s connect
        </h1>
        <p className="max-w-xl text-sm text-slate-300">
          Have a project, role, or idea you&apos;d like to talk through? Send me a quick
          note and I&apos;ll follow up as soon as I can.
        </p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot field */}
        <p className="hidden">
          <label>
            Don&apos;t fill this out:{' '}
            <input name="bot-field" />
          </label>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
            placeholder="What would you like to discuss?"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
            placeholder="Share a bit about your project, role, or idea..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-slate-950 shadow-md transition hover:bg-brandAlt"
          >
            Send message
          </button>
          <p className="text-xs text-slate-400">
            This form is powered by Netlify — you&apos;ll hear back from me soon.
          </p>
        </div>
      </form>
      </section>
    </>
  )
}
