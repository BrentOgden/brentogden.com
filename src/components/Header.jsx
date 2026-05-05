// src/components/Header.jsx
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/images/blogo2.png'

const LINKS = [
  { id: 'home', label: 'Home', to: '/', type: 'nav' },
  { id: 'projects', label: 'Project Gallery', to: '/projects', type: 'nav' },
  { id: 'about', label: 'My Story', to: '/about', type: 'nav' },
  {
    id: 'contact',
    label: "Let’s Connect",
    href: '/contactform',
    type: 'cta',
  },
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      setIsScrolled(scrollTop > 8)

      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100)
      } else {
        setScrollProgress(0)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = 'text-md transition hover:text-brand'
  const active = 'text-md text-brand font-medium'

  const renderDesktopLink = link => {
    if (link.type === 'cta') {
      return (
        <a
          key={link.id}
          href={link.href}
          className="rounded-full border border-brand bg-brand/10 px-4 py-1.5 text-sm font-bold text-brandAlt shadow-sm transition hover:border-white hover:bg-brand/20 hover:text-slate-50"
        >
          {link.label}
        </a>
      )
    }

    if (link.to === '/about') {
      return (
        <NavLink
          key={link.id}
          to={link.to}
          className="text-slate-200 transition hover:text-brandAlt"
        >
          {link.label}
        </NavLink>
      )
    }

    return (
      <NavLink
        key={link.id}
        to={link.to}
        end={link.to === '/'}
        className={({ isActive }) =>
          isActive || (link.to === '/' && location.pathname === '/')
            ? active
            : base
        }
      >
        {link.label}
      </NavLink>
    )
  }

  const handleMobileClick = () => setOpen(false)

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 border-b border-white/10 backdrop-blur-xl shadow-lg'
          : 'bg-slate-950/50 border-b border-transparent backdrop-blur-md'
      }`}
    >
      {/* Top bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        {/* Logo + identity */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center rounded-xl bg-slate-900/60 shadow-md transition-all duration-300 ${
              isScrolled ? 'h-9 w-9 shadow-sm' : 'h-10 w-10 shadow-md'
            }`}
          >
            <img
              src={logo}
              alt="Brent Ogden logo"
              className={`object-contain transition-transform duration-300 ${
                isScrolled ? 'scale-90 opacity-90' : 'scale-100 opacity-100'
              }`}
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brandAlt sm:text-sm">
              Brent Ogden
            </div>
            <p className="text-[0.7rem] text-slate-400 sm:text-sm">
              Front-End Developer & React Specialist
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-slate-300 md:flex">
          {LINKS.map(renderDesktopLink)}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-xl text-slate-200 md:hidden"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`
          md:hidden overflow-hidden border-t border-white/10
          bg-slate-950/95 backdrop-blur-2xl transition-all duration-300
          ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col gap-3 px-6 py-4 items-center text-sm text-slate-200">
          {LINKS.map((link, index) => {
            const delay = `${index * 70}ms`
            const commonClasses = `transform transition-all duration-300 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
            }`

            if (link.type === 'cta') {
              return (
                <div
                  key={link.id}
                  style={{ transitionDelay: delay }}
                  className={commonClasses}
                >
                  <a
                    href={link.href}
                    onClick={handleMobileClick}
                    className="block rounded-full border border-brand bg-brand/15 px-4 py-2 text-center text-[0.9rem] font-semibold text-brandAlt shadow-sm transition hover:border-white hover:bg-brand/25 hover:text-slate-50"
                  >
                    {link.label}
                  </a>
                </div>
              )
            }

            const linkBase = 'text-sm text-slate-200 hover:text-brandAlt'

            if (link.to === '/about') {
              return (
                <div
                  key={link.id}
                  style={{ transitionDelay: delay }}
                  className={commonClasses}
                >
                  <NavLink
                    to={link.to}
                    onClick={handleMobileClick}
                    className={linkBase}
                  >
                    {link.label}
                  </NavLink>
                </div>
              )
            }

            return (
              <div
                key={link.id}
                style={{ transitionDelay: delay }}
                className={commonClasses}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={handleMobileClick}
                  className={({ isActive }) =>
                    isActive ||
                    (link.to === '/' && location.pathname === '/')
                      ? 'text-brand font-medium'
                      : linkBase
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            )
          })}
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div className="h-[2px] w-full bg-slate-900/80">
        <div
          className="h-full bg-brand transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}
