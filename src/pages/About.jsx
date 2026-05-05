// src/pages/About.jsx
import React, { useEffect, useRef, useState } from 'react'
import GlassSection from '../components/GlassSection'
import profile from '../assets/images/brentimage.jpg' // update if different
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import { FiCpu, FiTrendingUp, FiMapPin } from 'react-icons/fi'

function FadeInLi({ children, index }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.2,
            },
        )

        observer.observe(el)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <li
            ref={ref}
            className={`transform transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            style={{
                transitionDelay:
                    typeof index === 'number' ? `${index * 80}ms` : undefined,
            }}
        >
            {children}
        </li>
    )
}
function TypewriterParagraph({ text, Icon, delay = 0 }) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [displayedLength, setDisplayedLength] = useState(0)
    const [hasTyped, setHasTyped] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 },
        )

        observer.observe(el)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible || hasTyped) return

        let timeoutId
        let intervalId

        timeoutId = setTimeout(() => {
            const speed = 18 // ms per character
            intervalId = setInterval(() => {
                setDisplayedLength(prev => {
                    if (prev >= text.length) {
                        clearInterval(intervalId)
                        setHasTyped(true)
                        return prev
                    }
                    return prev + 1
                })
            }, speed)
        }, delay)

        return () => {
            clearTimeout(timeoutId)
            if (intervalId) clearInterval(intervalId)
        }
    }, [isVisible, hasTyped, text, delay])

    const shownText = text.slice(0, displayedLength)
    const showCursor = isVisible && !hasTyped

    return (
        <p
            ref={ref}
            className="text-sm leading-relaxed text-slate-300"
        >
            {Icon && (
                <Icon className="mr-2 inline-block align-text-bottom text-brand" />
            )}
            {shownText}
            <span className={`inline-block w-[0.6ch] ${showCursor ? 'opacity-100' : 'opacity-0'} animate-pulse`}>
                |
            </span>
        </p>
    )
}

export default function About() {
    return (
        <div className="space-y-12">
            {/* Hero */}
            <section className="mt-4 grid px-6 items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div>
                    <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                        About Me
                    </h1>
                    <p className="max-w-xl text-md leading-relaxed text-slate-300">
                        I’m Brent Ogden — a Colorado native born in Denver, with a passion
                        for both technology and the outdoors. In my spare time, you’ll find
                        me snowboarding in the winters, hiking in the summers, and cheering
                        on my favorite teams. I’m a life-long, die-hard Denver Broncos fan,
                        and from December through May, you’ll often find me at the 'Loud
                        House' supporting the Colorado Mammoth. Professionally, I bring
                        creativity, technical expertise, and a hands-on approach to every
                        project I take on. I believe that success comes from balancing hard
                        work with personal passion — which is why I’m always looking for
                        opportunities that support both career growth and a healthy
                        work-life balance. Whether building solutions, collaborating with
                        teams, or tackling new challenges, I’m committed to helping my
                        company succeed while still making time for the activities and
                        passions that keep me energized.
                    </p>
                </div>

                <div className="justify-self-center">
                    <img
                        src={profile}
                        alt="Brent Ogden"
                        className="h-96 w-96 rounded-3xl border border-slate-700 object-cover shadow-xl"
                    />
                </div>
            </section>

            {/* About + Story */}
            <GlassSection className="space-y-5 text-slate-300">
                <h2 className="text-xl font-semibold text-slate-50">My Story</h2>

                <TypewriterParagraph
                    Icon={FiCpu}
                    text={`I’m a tech-driven problem solver who thrives in fast-paced environments, whether working independently or collaborating with cross-functional teams. I take pride in learning new skills quickly and delivering efficient, accurate outcomes.`}
                    delay={0}
                />

                <TypewriterParagraph
                    Icon={FiTrendingUp}
                    text={`Over the years, I’ve gained experience across front-end engineering, automation, UI/UX, CMS administration, and process optimization. I love transforming messy, unclear requirements into clean, intuitive interfaces — and I’m always exploring ways to streamline workflows or introduce helpful new tools.`}
                    delay={5000}
                />

                <TypewriterParagraph
                    Icon={FiMapPin}
                    text={`Outside of work, I spend winters snowboarding and summers hiking Colorado’s trails. From December to May you’ll find me at the “Loud House” cheering on the Colorado Mammoth. Balance is important to me — I believe that great work comes from a healthy blend of personal passion, curiosity, and professional drive.`}
                    delay={11000}
                />
            </GlassSection>


            {/* Values */}
            <GlassSection className="space-y-5">
                <h2 className="text-xl font-semibold text-slate-50">
                    Values That Guide My Work
                </h2>

                <ul className="space-y-3 text-sm text-slate-300">
                    <FadeInLi index={0}>
                        •{' '}
                        <strong className="text-slate-100">
                            Clarity &amp; Simplicity:
                        </strong>{' '}
                        Clean architecture, scalable components, and interfaces people enjoy
                        using.
                    </FadeInLi>
                    <FadeInLi index={1}>
                        •{' '}
                        <strong className="text-slate-100">
                            Efficiency &amp; Improvement:
                        </strong>{' '}
                        Whether it’s code or process, I enjoy making things work better.
                    </FadeInLi>
                    <FadeInLi index={2}>
                        • <strong className="text-slate-100">Ownership:</strong> If I’m
                        working on something, I want it to be excellent from the first
                        release.
                    </FadeInLi>
                    <FadeInLi index={3}>
                        • <strong className="text-slate-100">Balance:</strong> A strong life
                        outside of work fuels better work inside of it.
                    </FadeInLi>
                </ul>
            </GlassSection>

            {/* CTA */}
            <section
                id="contact"
                className="mt-4 rounded-3xl border border-brand/50 bg-brand/10 p-6 text-sm text-slate-100 shadow-lg backdrop-blur-md sm:p-8"
            >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="mb-1 text-xl font-semibold text-slate-50 sm:text-2xl">
                            Let&apos;s connect
                        </h2>
                        <p className="max-w-xl text-sm text-slate-100/80">
                            Interested in working together—or just want to chat about a
                            front-end challenge you&apos;re facing? Send me a note with a bit
                            of context, and I&apos;ll get back to you.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:ogden87@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-slate-50 shadow-md transition hover:bg-slate-900"
                        >
                            <FaEnvelope />
                            Email me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/brent-ogden-70398012"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-100/40 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-brandAlt hover:bg-slate-900/80"
                        >
                            <FaLinkedin />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
