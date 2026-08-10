import { execFileSync } from 'node:child_process'
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  absoluteUrl,
  buildAboutSchema,
  buildContactSchema,
  buildHomeSchema,
  buildProjectDescription,
  buildProjectSchema,
  buildProjectsSchema,
  DEFAULT_SOCIAL_IMAGE,
  SEO_COPY,
  SITE_NAME,
  SITE_URL,
} from '../src/config/seo.mjs'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')
const publicDirectory = join(projectRoot, 'public')
const projectPagesDirectory = join(projectRoot, 'projects')

const ROUTE_SOURCE_FILES = {
  '/': ['src/pages/Home.jsx', 'src/config/seo.mjs'],
  '/projects': ['src/pages/Projects.jsx', 'src/data/projects.js', 'src/config/seo.mjs'],
  '/about': ['src/pages/About.jsx', 'src/config/seo.mjs'],
  '/contact': ['src/pages/ContactForm.jsx', 'src/config/seo.mjs'],
}

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

function safeJson(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

function getLastModified(sourceFiles = []) {
  if (!sourceFiles.length) return undefined

  try {
    const date = execFileSync(
      'git',
      ['log', '-1', '--format=%cs', '--', ...sourceFiles],
      {
        cwd: projectRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      },
    ).trim()

    return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined
  } catch {
    return undefined
  }
}

function sitemapEntry(url, lastmod) {
  return [
    '  <url>',
    `    <loc>${url}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n')
}

function routeHtml({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = `${SITE_NAME} portfolio preview`,
  imageWidth = 1200,
  imageHeight = 630,
  imageType = 'image/png',
  type = 'website',
  schema,
  includeNetlifyForm = false,
}) {
  const canonical = absoluteUrl(path)
  const socialImage = absoluteUrl(image)
  const hiddenForm = includeNetlifyForm
    ? `
    <form name="contact" hidden data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
      <input name="name" />
      <input name="email" type="email" />
      <input name="subject" />
      <textarea name="message"></textarea>
    </form>`
    : ''

  return `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#020617" />
    <meta name="color-scheme" content="dark" />
    <meta name="author" content="Brent Ogden" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="google-site-verification" content="saMw9k_um52LTz6gWqv3YBopZr7FOZrboV7zXl4lREY" />

    <title>${escapeHtml(title)}</title>
    <link rel="canonical" href="${canonical}" />

    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:secure_url" content="${socialImage}" />
    <meta property="og:image:type" content="${imageType}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${socialImage}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="manifest" href="/site.webmanifest" />

    <script type="application/ld+json" data-route-schema>${safeJson(schema)}</script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-E3RLFCYBT4"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E3RLFCYBT4');
    </script>
  </head>
  <body class="bg-slate-950 text-slate-50 mt-12">
    <noscript>This portfolio requires JavaScript for its interactive content.</noscript>
    <div id="root"></div>${hiddenForm}
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
}

async function writeRouteFile(relativePath, route) {
  const destination = join(projectRoot, relativePath)
  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, routeHtml(route), 'utf8')
}

async function clearGeneratedProjectPages() {
  await mkdir(projectPagesDirectory, { recursive: true })
  const entries = await readdir(projectPagesDirectory, { withFileTypes: true })
  await Promise.all(
    entries
      .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
      .map(entry => rm(join(projectPagesDirectory, entry.name))),
  )
}

async function main() {
  const projects = await loadProjects()
  await clearGeneratedProjectPages()
  await mkdir(publicDirectory, { recursive: true })

  await writeRouteFile('index.html', {
    ...SEO_COPY.home,
    schema: buildHomeSchema(),
    imageAlt: 'Brent Ogden React front-end developer portfolio preview',
    includeNetlifyForm: true,
  })

  await writeRouteFile('projects.html', {
    ...SEO_COPY.projects,
    schema: buildProjectsSchema(projects),
    imageAlt: 'Brent Ogden web development project gallery preview',
  })

  await writeRouteFile('about.html', {
    ...SEO_COPY.about,
    schema: buildAboutSchema(),
    imageAlt: 'Brent Ogden front-end developer portfolio preview',
  })

  await writeRouteFile('contact.html', {
    ...SEO_COPY.contact,
    schema: buildContactSchema(),
    imageAlt: 'Contact Brent Ogden about front-end development work',
  })

  for (const project of projects) {
    await writeRouteFile(`projects/${project.id}.html`, {
      title: `${project.title} Case Study | Brent Ogden`,
      description: buildProjectDescription(project),
      path: `/projects/${project.id}`,
      image: project.thumbnail || DEFAULT_SOCIAL_IMAGE,
      imageAlt: `${project.title} website project preview`,
      imageWidth: 1440,
      imageHeight: 900,
      type: 'article',
      schema: buildProjectSchema(project),
    })
  }

  const projectLastmod = getLastModified([
    'src/data/projects.js',
    'src/pages/ProjectDetail.jsx',
    'src/config/seo.mjs',
  ])

  const sitemapEntries = [
    sitemapEntry(`${SITE_URL}/`, getLastModified(ROUTE_SOURCE_FILES['/'])),
    sitemapEntry(absoluteUrl('/projects'), getLastModified(ROUTE_SOURCE_FILES['/projects'])),
    sitemapEntry(absoluteUrl('/about'), getLastModified(ROUTE_SOURCE_FILES['/about'])),
    sitemapEntry(absoluteUrl('/contact'), getLastModified(ROUTE_SOURCE_FILES['/contact'])),
    ...projects.map(project =>
      sitemapEntry(absoluteUrl(`/projects/${project.id}`), projectLastmod),
    ),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`

  await writeFile(join(publicDirectory, 'sitemap.xml'), sitemap, 'utf8')

  const routeRewrites = [
    '/contactform /contact 301',
    '/projects/fantasy-central /projects/fantasycentral 301',
    '/projects /projects.html 200!',
    '/about /about.html 200!',
    '/contact /contact.html 200!',
    ...projects.map(
      project =>
        `/projects/${project.id} /projects/${project.id}.html 200!`,
    ),
    '/* /404.html 404',
  ]

  await writeFile(
    join(publicDirectory, '_redirects'),
    `${routeRewrites.join('\n')}\n`,
    'utf8',
  )

  console.log(`Generated SEO metadata and factual sitemap dates for ${sitemapEntries.length} canonical URLs.`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
