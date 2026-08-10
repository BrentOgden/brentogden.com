// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ParallaxBackground from './components/ParallaxBackground'
import Layout from './components/Layout'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'

const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About = lazy(() => import('./pages/About'))
const ContactForm = lazy(() => import('./pages/ContactForm'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
    return (
        <div className="relative min-h-screen text-slate-100">
            <ParallaxBackground />
            <ScrollToTop />
            <Layout>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/contactform" element={<Navigate to="/contact" replace />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
        </div>
    )
}
