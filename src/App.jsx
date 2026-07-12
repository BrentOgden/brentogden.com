// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ParallaxBackground from './components/ParallaxBackground'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
import ContactForm from './pages/ContactForm'
// import Projects2 from './pages/projects_new'

export default function App() {
    return (
        <div className="relative min-h-screen text-slate-100">
            <ParallaxBackground />
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/projects_new" element={<Projects2 />} /> */}
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactform" element={<ContactForm />} />
                </Routes>
            </Layout>
        </div>
    )
}
