// src/components/GlassSection.jsx
import React from 'react'

export default function GlassSection({ className = '', children, ...rest }) {
  const base =
    'rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-md backdrop-blur-md sm:p-8'
  const combined = className ? `${base} ${className}` : base

  return (
    <section className={combined} {...rest}>
      {children}
    </section>
  )
}
