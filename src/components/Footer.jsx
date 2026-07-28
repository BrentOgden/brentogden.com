// src/components/Footer.jsx
import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-16 relative -bottom-16 border-t border-white/10 bg-slate-900/40 backdrop-blur-xl py-8 text-slate-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between">

        {/* Branding + copyright */}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-100 tracking-tight">
            Brent Ogden
          </p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with React · TailwindCSS
          </p>
        </div>

        {/* Contact section */}
        <div className="space-y-3 text-sm">
          <p className="text-slate-100 font-medium">Contact</p>

          <a
            href="tel:7202545454"
            className="flex items-center gap-2 text-slate-300 hover:text-brand transition"
          >
            <FaPhone className="text-brandAlt" />
            <span>720-254-5454</span>
          </a>

          <a
            href="mailto:ogden87@gmail.com"
            className="flex items-center gap-2 text-slate-300 hover:text-brand transition"
          >
            <FaEnvelope className="text-brandAlt" />
            <span>ogden87@gmail.com</span>
          </a>
        </div>

        {/* Social icons */}
        <div className="space-y-3 text-sm">
          <p className="text-slate-100 font-medium">Connect</p>

          <div className="flex items-center gap-4 text-3xl">
            <a
              href="https://github.com/BrentOgden"
              target="_blank"
              aria-label="Brent Ogden on GitHub"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-brandAlt"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/brent-ogden-70398012"
              target="_blank"
              aria-label="Brent Ogden on LinkedIn"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-brandAlt"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
