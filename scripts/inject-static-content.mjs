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

function listMarkup(title, items = []) {
  if (!Array.isArray(items) || !items.length) return ''

  return `<section style="margin-top:1.75rem">
    <h2 style="margin:0 0 .65rem;font-size:1.35rem">${escapeHtml(title)}</h2>
    <ul style="padding-left:1.25rem;line-height:1.65">${items
      .map(item => `<li style="margin-bottom:.45rem">${escapeHtml(item)}</li>`)
      .join('')}</ul>
  </section>`
}

function homeFallback() {
  return fallbackShell(`
    <p style="margin:0 0 .75rem;color:#38bdf8;font-weight:700;text-transform:uppercase;letter-spacing:.12em">React Front-End Engineer · UX/UI · Tailwind · Python</p>
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.05">Brent Ogden — React Front-End Developer and UX/UI Engineer near Denver</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.home.description)} I build responsive, accessible web experiences with a focus on usability, performance, maintainable front-end architecture, API integration, and practical automation.</p>
    <section style="margin-top:1.75rem">
      <h2 style="margin:0 0 .75rem;font-size:1.35rem">Front-End Development Focus</h2>
      <ul style="padding-left:1.25rem;line-height:1.65">
        <li>React and JavaScript application development</li>
        <li>Tailwind CSS and responsive UI implementation</li>
        <li>UX/UI engineering, accessibility, and performance</li>
        <li>API integrations, CMS implementations, and workflow automation</li>
      </ul>
    </section>
    <nav aria-label="Portfolio pages" style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1.5rem">
      <a href="/projects" style="color:#7dd3fc">View web development projects and case studies</a>
      <a href="/about" style="color:#7dd3fc">About Brent Ogden</a>
      <a href="/contact" style="color:#7dd3fc">Contact Brent Ogden</a>
    </nav>`)
}

function projectsFallback(projects) {
  const items = projects
    .map(project => {
      const summary = project.caseStudy?.summary || project.description || ''
      const impact = project.impact
        ? `<p style="margin:.35rem 0 0;line-height:1.6"><strong>Impact:</strong> ${escapeHtml(project.impact)}</p>`
        : ''

      return `<li style="margin-bottom:1.5rem"><a href="/projects/${escapeHtml(project.id)}" style="color:#7dd3fc;font-weight:700">${escapeHtml(project.title)} case study</a>${summary ? `<p style="margin:.35rem 0 0;line-height:1.6">${escapeHtml(summary)}</p>` : ''}${impact}</li>`
    })
    .join('\n')

  return fallbackShell(`
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.5rem)">Web Development Projects and Case Studies</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.projects.description)} Each case study outlines the problem, implementation approach, technologies, and outcome.</p>
    <ul style="padding-left:1.25rem;margin-top:2rem">${items}</ul>
    <p><a href="/contact" style="color:#7dd3fc">Contact Brent about front-end development work</a></p>`)
}

function aboutFallback() {
  return fallbackShell(`
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.5rem)">About Brent Ogden</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.about.description)} My work combines front-end engineering, UX/UI implementation, accessibility, responsive design, workflow automation, and practical problem-solving for production websites and applications.</p>
    <section style="margin-top:1.75rem">
      <h2 style="margin:0 0 .75rem;font-size:1.35rem">Technical Focus</h2>
      <p style="max-width:48rem;line-height:1.7">I work across React, JavaScript, Tailwind CSS, HTML, CSS, CMS platforms, API integrations, Python automation, and performance-focused front-end architecture.</p>
    </section>
    <nav aria-label="About page links" style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1.5rem">
      <a href="/projects" style="color:#7dd3fc">Explore selected projects and case studies</a>
      <a href="/contact" style="color:#7dd3fc">Get in touch</a>
    </nav>`)
}

function contactFallback() {
  return fallbackShell(`
    <h1 style="margin:0 0 1rem;font-size:clamp(2rem,5vw,3.5rem)">Contact Brent Ogden</h1>
    <p style="max-width:48rem;line-height:1.7">${escapeHtml(SEO_COPY.contact.description)}</p>
    <p style="max-width:48rem;line-height:1.7">I’m open to conversations about React and front-end engineering roles, UI/UX implementation, freelance website work, and technical web projects.</p>
    <p>The interactive contact form is available when JavaScript loads.</p>
    <p><a href="/projects" style="color:#7dd3fc">Review project case studies</a></p>`)
}

function projectFallback(project) {
  const summary = project.caseStudy?.summary || project.description || `${project.title} web development case study.`
  const technologies = Array.isArray(project.tech) && project.tech.length
    ? `<p><strong>Technologies:</strong> ${escapeHtml(project.tech.join(', '))}</p>`
    : ''
  const liveLink = project.liveUrl && project.liveUrl !== '#'
    ? `<p><a href="${escapeHtml(project.liveUrl)}" rel="noopener noreferrer" style="color:#7dd3fc">View the live ${escapeHtml(project.title)} project</a></p>`
    : ''

  return fallbackShell(`
    <p><a href="/projects" style="color:#7dd3fc">← Back to projects</a></p>
    <h1 style="margin:1rem 0;font-size:clamp(2rem,5vw,3.5rem)">${escapeHtml(project.title)} Case Study</h1>
    <p style="max-width:52rem;line-height:1.7">${escapeHtml(summary)}</p>
    ${project.impact ? `<p style="max-width:52rem;line-height:1.7"><strong>Impact:</strong> ${escapeHtml(project.impact)}</p>` : ''}
    ${project.role ? `<p><strong>Role:</strong> ${escapeHtml(project.role)}</p>` : ''}
    ${project.year ? `<p><strong>Year:</strong> ${escapeHtml(project.year)}</p>` : ''}
    ${technologies}
    ${listMarkup('Problem', project.caseStudy?.problem)}
    ${listMarkup('Approach', project.caseStudy?.approach)}
    ${listMarkup('Outcome', project.caseStudy?.outcome)}
    ${listMarkup('Highlights', project.caseStudy?.highlights)}
    ${liveLink}
    <nav aria-label="Case study links" style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1.5rem">
      <a href="/projects" style="color:#7dd3fc">View all case studies</a>
      <a href="/contact" style="color:#7dd3fc">Contact Brent Ogden</a>
    </nav>`)
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

  console.log(`Injected rich static fallback content into ${projects.length + 4} canonical route files.`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
