// src/components/Layout.jsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950/50 text-slate-50">
            

            {/* Background blobs / gradients */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                {/* Brand-tinted glow blobs */}
                <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-[rgba(1,133,228,0.3)] blur-3xl" />
                <div className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-[rgba(61,134,202,0.25)] blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[rgba(1,133,228,0.18)] blur-3xl" />

                {/* Soft radial + vertical gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(15,23,42,0.8),_rgba(15,23,42,.3))]" />
            </div>

            {/* Content container */}
            <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                <Header />
                <main className="mt-6 flex flex-1 flex-col gap-16">{children}</main>
                <Footer />
            </div>
        </div>
    )
}
