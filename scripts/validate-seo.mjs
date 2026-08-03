import { access, readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  absoluteUrl,
  buildProjectDescription,
  DEFAULT_SOCIAL_IMAGE,
  PERSON_IMAGE,
  SEO_COPY,
  SITE_URL,
} from '../src/config/seo.mjs'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')
const publicDirectory = join(projectRoot, 'public')
const errors = []

async function loadProjects() {
  const source = await readFile(join(projectRoot, 'src/data/projects.js'), 'utf8')
  const moduleSource = `${source.replace(
    'export const projects =',
    'const projects =',
  )}\nexport default projects;`
  const dataUrl = `data:text/javascript;base64,${Buffer.from(moduleSource).toString('base64')}`
  const module = await import(dataUrl)
  return module.default
}

function fail(message) {
  errors.push(message)
}

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length
}

function htmlEntityDecode(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
}

function metaContent(html, attribute, key) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapedKey}"\\s+content="([^"]*)"\\s*\\/?>(?:\\s*)`,
    'i',
  )
  return htmlEntityDecode(html.match(pattern)?.[1] || '')
}

function canonicalHref(html) {
  return html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\\/?>(?:\s*)/i)?.[1] || ''
}

function titleText(html) {
  return htmlEntityDecode(html.match(/<title>([^<]+)<\/title>/i)?.[1] || '')
}

async function assertFile(path, label = path) {
  try {
    await access(path)
  } catch {
    fail(`Missing ${label}: ${path}`)
  }
}

async function validateHtmlRoute(route) {
  const file = join(projectRoot, route.file)
  await assertFile(file, `route HTML for ${route.path}`)
  const html = await readFile(file, 'utf8')
  const title = titleText(html)
  const description = metaContent(html, 'name', 'description')
  const canonical = canonicalHref(html)
  const expectedCanonical = absoluteUrl(route.path)

  if (countMatches(html, /<title>/gi) !== 1) {
    fail(`${route.file} must contain exactly one title element.`)
  }
  if (title !== route.title) {
    fail(`${route.file} title mismatch: "${title}".`)
  }
  if (title.length < 30 || title.length > 60) {
    fail(`${route.file} title length is ${title.length}; expected 30–60.`)
  }
  if (description !== route.description) {
    fail(`${route.file} meta description mismatch.`)
  }
  if (description.length < 70 || description.length > 160) {
    fail(`${route.file} meta description length is ${description.length}; expected 70–160.`)
  }
  if (canonical !== expectedCanonical) {
    fail(`${route.file} canonical mismatch: ${canonical}`)
  }

  const requiredMeta = [
    ['property', 'og:title'],
    ['property', 'og:description'],
    ['property', 'og:url'],
    ['property', 'og:image'],
    ['property', 'og:image:type'],
    ['property', 'og:image:width'],
    ['property', 'og:image:height'],
    ['property', 'og:image:alt'],
    ['name', 'twitter:card'],
    ['name', 'twitter:title'],
    ['name', 'twitter:description'],
    ['name', 'twitter:image'],
    ['name', 'robots'],
  ]

  for (const [attribute, key] of requiredMeta) {
    if (!metaContent(html, attribute, key)) {
      fail(`${route.file} is missing ${attribute}="${key}".`)
    }
  }

  if (metaContent(html, 'property', 'og:url') !== expectedCanonical) {
    fail(`${route.file} Open Graph URL does not match its canonical.`)
  }

  const expectedOgType = route.path.startsWith('/projects/') ? 'article' : 'website'
  if (metaContent(html, 'property', 'og:type') !== expectedOgType) {
    fail(`${route.file} Open Graph type must be ${expectedOgType}.`)
  }

  const expectedImageDimensions = route.path.startsWith('/projects/')
    ? ['1440', '900']
    : ['1200', '630']
  if (
    metaContent(html, 'property', 'og:image:width') !== expectedImageDimensions[0] ||
    metaContent(html, 'property', 'og:image:height') !== expectedImageDimensions[1]
  ) {
    fail(`${route.file} Open Graph image dimensions are incorrect.`)
  }

  const schemaText = html.match(
    /<script type="application\/ld\+json" data-route-schema>([\s\S]*?)<\/script>/i,
  )?.[1]

  if (!schemaText) {
    fail(`${route.file} is missing route JSON-LD.`)
  } else {
    try {
      const schema = JSON.parse(schemaText)
      if (schema['@context'] !== 'https://schema.org' || !Array.isArray(schema['@graph'])) {
        fail(`${route.file} JSON-LD does not contain the expected @graph structure.`)
      }
    } catch (error) {
      fail(`${route.file} contains invalid JSON-LD: ${error.message}`)
    }
  }

  const socialImage = metaContent(html, 'property', 'og:image')
  if (socialImage.startsWith(SITE_URL)) {
    const localPath = new URL(socialImage).pathname.replace(/^\//, '')
    await assertFile(join(publicDirectory, localPath), `social image for ${route.path}`)
  }
}

async function main() {
  const projects = await loadProjects()
  const routes = [
    {
      file: 'index.html',
      ...SEO_COPY.home,
    },
    {
      file: 'projects.html',
      ...SEO_COPY.projects,
    },
    {
      file: 'about.html',
      ...SEO_COPY.about,
    },
    {
      file: 'contact.html',
      ...SEO_COPY.contact,
    },
    ...projects.map(project => ({
      file: `projects/${project.id}.html`,
      path: `/projects/${project.id}`,
      title: `${project.title} Case Study | Brent Ogden`,
      description: buildProjectDescription(project),
    })),
  ]

  for (const route of routes) {
    await validateHtmlRoute(route)
  }

  const titles = routes.map(route => route.title)
  const descriptions = routes.map(route => route.description)
  if (new Set(titles).size !== titles.length) fail('Route titles are not unique.')
  if (new Set(descriptions).size !== descriptions.length) fail('Route descriptions are not unique.')

  const expectedUrls = routes.map(route => absoluteUrl(route.path))
  const sitemap = await readFile(join(publicDirectory, 'sitemap.xml'), 'utf8')
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])

  if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) {
    fail('Sitemap URLs do not exactly match the canonical route list.')
  }

  const robots = await readFile(join(publicDirectory, 'robots.txt'), 'utf8')
  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    fail('robots.txt does not declare the canonical sitemap URL.')
  }

  const netlifyConfig = await readFile(join(projectRoot, 'netlify.toml'), 'utf8')
  if (!/pretty_urls\s*=\s*false/.test(netlifyConfig)) {
    fail('netlify.toml must disable Pretty URLs so extensionless canonical routes remain stable.')
  }
  if (!/publish\s*=\s*["']dist["']/.test(netlifyConfig)) {
    fail('netlify.toml must publish the Vite dist directory.')
  }

  const headers = await readFile(join(publicDirectory, '_headers'), 'utf8')
  for (const pdfPattern of ['/*.pdf', '/assets/*.pdf']) {
    if (!headers.includes(`${pdfPattern}\n  X-Robots-Tag: noindex, noarchive`)) {
      fail(`_headers is missing the PDF noindex rule for ${pdfPattern}.`)
    }
  }

  const redirects = await readFile(join(publicDirectory, '_redirects'), 'utf8')
  const forbiddenRedirectPatterns = [
    /^\/index\.html\s/m,
    /^\/projects\/\s/m,
    /^\/about\/\s/m,
    /^\/contact\/\s/m,
    /^\/projects\/[^\s]+\/\s/m,
  ]
  for (const pattern of forbiddenRedirectPatterns) {
    if (pattern.test(redirects)) {
      fail(`_redirects contains a trailing-slash or static-file redirect that can conflict with Netlify route normalization: ${pattern}`)
    }
  }

  const requiredRedirects = [
    '/contactform /contact 301',
    '/projects/fantasy-central /projects/fantasycentral 301',
    '/projects /projects.html 200!',
    '/about /about.html 200!',
    '/contact /contact.html 200!',
    '/* /404.html 404',
    ...projects.map(project =>
      `/projects/${project.id} /projects/${project.id}.html 200!`,
    ),
  ]
  for (const rule of requiredRedirects) {
    if (!redirects.includes(rule)) fail(`Missing redirect/rewrite rule: ${rule}`)
  }

  const sourceFiles = [
    'src/pages/Home.jsx',
    'src/pages/About.jsx',
    'src/pages/ContactForm.jsx',
    'src/pages/Projects.jsx',
  ]
  for (const sourceFile of sourceFiles) {
    const source = await readFile(join(projectRoot, sourceFile), 'utf8')
    if (countMatches(source, /<h1\b/g) !== 1) {
      fail(`${sourceFile} must contain exactly one h1.`)
    }
    if (!source.includes('<SEO')) {
      fail(`${sourceFile} is missing the shared SEO component.`)
    }
  }

  const projectDetailSource = await readFile(
    join(projectRoot, 'src/pages/ProjectDetail.jsx'),
    'utf8',
  )
  if (!projectDetailSource.includes('buildProjectSchema(project)')) {
    fail('ProjectDetail.jsx is missing project-specific structured data.')
  }

  const appSource = await readFile(join(projectRoot, 'src/App.jsx'), 'utf8')
  if (!appSource.includes('path="/contact"')) fail('The canonical /contact route is missing.')
  if (!appSource.includes('path="*"')) fail('The client-side 404 route is missing.')

  const gallerySource = await readFile(join(projectRoot, 'src/pages/Projects.jsx'), 'utf8')
  const caseStudyUrls = [...gallerySource.matchAll(/caseStudyUrl:\s*['"]([^'"]+)['"]/g)].map(
    match => match[1],
  )
  for (const url of caseStudyUrls) {
    const id = url.replace('/projects/', '')
    if (!projects.some(project => project.id === id)) {
      fail(`Gallery case-study URL does not resolve to project data: ${url}`)
    }
  }

  const manifest = JSON.parse(
    await readFile(join(publicDirectory, 'site.webmanifest'), 'utf8'),
  )
  if (!manifest.name || !manifest.short_name || manifest.theme_color !== '#020617') {
    fail('site.webmanifest is missing portfolio identity or the correct theme color.')
  }

  const noIndexFiles = ['404.html', 'success.html']
  for (const fileName of noIndexFiles) {
    const html = await readFile(join(publicDirectory, fileName), 'utf8')
    if (!html.includes('content="noindex, nofollow"')) {
      fail(`${fileName} must be noindex, nofollow.`)
    }
  }

  await assertFile(join(publicDirectory, DEFAULT_SOCIAL_IMAGE.replace(/^\//, '')), 'default social preview image')
  await assertFile(join(publicDirectory, PERSON_IMAGE.replace(/^\//, '')), 'Person schema profile image')

  if (errors.length) {
    console.error(`SEO validation failed with ${errors.length} issue(s):`)
    errors.forEach(error => console.error(`- ${error}`))
    process.exitCode = 1
    return
  }

  console.log(`SEO validation passed for ${routes.length} canonical routes and ${projects.length} project case studies.`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
