// src/components/ParallaxBackground.jsx
import React, { useEffect, useRef, useState } from 'react'
import bgImage from '../assets/backgrounds/brentimage.jpg'
import noiseTexture from '../assets/backgrounds/noise.png'

export default function ParallaxBackground() {
  const [parallaxY, setParallaxY] = useState(0)
  const scrollYRef = useRef(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY || 0

      // Only schedule one rAF at a time
      if (!tickingRef.current) {
        tickingRef.current = true
        requestAnimationFrame(() => {
          // Use a small factor for subtle, smooth parallax
          setParallaxY(scrollYRef.current * 0.04)
          tickingRef.current = false
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initialize on load
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 – main background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `translate3d(0, ${parallaxY}px, 0) scale(1.04)`,
          // NOTE: no CSS transition here; rAF + transform = smoother
        }}
      />

      {/* Layer 2 – animated brand orbs (very soft, no dark overlay) */}
      <div className="parallax-orb orb-1" />
      <div className="parallax-orb orb-2" />
      <div className="parallax-orb orb-3" />

      {/* Optional Layer 3 – subtle animated noise */}
      {noiseTexture && (
        <div
          className="absolute inset-0 opacity-15 mix-blend-soft-light"
          style={{
            backgroundImage: `url(${noiseTexture})`,
            backgroundSize: '320px 320px',
          }}
        />
      )}
    </div>
  )
}
