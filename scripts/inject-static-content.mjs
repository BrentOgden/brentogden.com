import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SEO_COPY } from '../src/config/seo.mjs'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')

async function loadProjects() {
  const dataFile = join(projectRoot, 'src/data/projects.js')
  const source = await readFile(dataFile, 'utf8')
  const moduleSource = `${source.replace(
    'export const projects =',
    'const projects =',
  )}\nexport default projects;`
  const dataUrl = `data:text/javascript;base64,${Buffer.from(moduleSource).toString('base64')}`
  const module = await import(dataUrl)
  return module.default
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function fallbackShell(content) {
  return `<main data-static-seo-content style="max-width:72rem;margin:0 auto;padding:5rem 1.5rem 3rem;font-family:Lato,Arial,sans-serif;color:#e2e8f0;background:#020617">
    ${content}
    <p style="margin-top:2rem;color:#94a3b8;font-size:.875rem">Interactive portfolio content is loading.</p>
  </main>`
}

function homeFallback() {
  return fallbackShell(`
    <p style="margin:0 0 .75rem;color:#38bdf8;font-weight:700;text-transform:uppercase;letter-spacing:.12em">Front-End Engineer · React · Tailwind · Python</p>
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.05">Brent Ogden — Front-End Developer and UX/UI Engineer near Denver</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.home.description)} I build responsive, accessible web experiences with a focus on usability, performance, and maintainable front-end architecture.</p>
    <nav aria-label="Portfolio pages" style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1.5rem">
      <a href="/projects" style="color:#7dd3fc">View web development projects and case studies</a>
      <a href="/about" style="color:#7dd3fc">About Brent Ogden</a>
      <a href="/contact" style="color:#7dd3fc">Contact Brent Ogden</a>
    </nav>`)
}

function projectsFallback(projects) {
  const items = projects
    .map(project => `<li style="margin-bottom:1rem"><a href="/projects/${escapeHtml(project.id)}" style="color:#7dd3fc;font-weight:700">${escapeHtml(project.title)}</a>${project.caseStudy?.summary || project.description ? `<p style="margin:.35rem 0 0;line-height:1.6">${escapeHtml(project.caseStudy?.summary || project.description)}</p>` : ''}</li>`)
    .join('\n')

  return fallbackShell(`
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.5rem)">Web Development Projects and Case Studies</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.projects.description)}</p>
    <ul style="padding-left:1.25rem;margin-top:2rem">${items}</ul>`)
}

function aboutFallback() {
  return fallbackShell(`
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.5rem)">About Brent Ogden</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.about.description)} My work combines front-end engineering, UX/UI implementation, accessibility, responsive design, workflow automation, and practical problem-solving.</p>
    <p><a href="/projects" style="color:#7dd3fc">Explore selected projects and case studies</a></p>`)
}

function contactFallback() {
  return fallbackShell(`
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.5rem)">Contact Brent Ogden</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.contact.description)}</p>
    <p>The interactive contact form is available when JavaScript loads.</p>`)
}

function projectFallback(project) {
  const description = project.caseStudy?.summary || project.description || `${project.title} web development case study.`
  const technologies = Array.isArray(project.tech) && project.tech.length
    ? `<p><strong>Technologies:</strong> ${escapeHtml(project.tech.join(', '))}</p>`
    : ''

  return fallbackShell(`
    <p><a href="/projects" style="color:#7dd3fc">← Back to projects</a></p>
    <h1 style="margin:1rem 0;font-size:clamp(2rem,5vw,3.5rem)">${escapeHtml(project.title)} Case Study</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(description)}</p>
    ${project.role ? `<p><strong>Role:</strong> ${escapeHtml(project.role)}</p>` : ''}
    ${project.year ? `<p><strong>Year:</strong> ${escapeHtml(project.year)}</p>` : ''}
    ${technologies}`)
}

async function inject(filePath, fallback) {
  const absolutePath = join(projectRoot, filePath)
  const html = await readFile(absolutePath, 'utf8')
  const rootPattern = /<div id="root">[\s\S]*?<\/div>/
  const replacement = `<div id="root">${fallback}</div>`

  if (!rootPattern.test(html)) {
    throw new Error(`Could not find the React root in ${filePath}`)
  }

  await writeFile(absolutePath, html.replace(rootPattern, replacement), 'utf8')
}

async function main() {
  const projects = await loadProjects()

  await inject('index.html', homeFallback())
  await inject('projects.html', projectsFallback(projects))
  await inject('about.html', aboutFallback())
  await inject('contact.html', contactFallback())

  for (const project of projects) {
    await inject(`projects/${project.id}.html`, projectFallback(project))
  }

  console.log(`Injected static fallback content into ${projects.length + 4} canonical route files.`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
