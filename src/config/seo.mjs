export const SITE_URL = 'https://brentogden.com'
export const SITE_NAME = 'Brent Ogden'
export const DEFAULT_SOCIAL_IMAGE = '/og-image.png'
export const PERSON_IMAGE = '/brent-ogden.jpg'
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const SEO_COPY = {
  home: {
    title: 'Brent Ogden | React Front-End Developer & UX/UI Engineer',
    description:
      'Front-end developer and UX/UI engineer near Denver building fast, accessible React, JavaScript, and Tailwind experiences for teams and clients.',
    path: '/',
  },
  projects: {
    title: 'Web Development Projects & Case Studies | Brent Ogden',
    description:
      'Explore React, Tailwind, WordPress, API integration, and UI/UX case studies built by front-end developer Brent Ogden.',
    path: '/projects',
  },
  about: {
    title: 'About Brent Ogden | Front-End Developer Near Denver',
    description:
      'Learn about Brent Ogden, a Colorado-based front-end developer and UX/UI engineer focused on React, accessible design, automation, and performance.',
    path: '/about',
  },
  contact: {
    title: 'Contact Brent Ogden | Front-End Developer',
    description:
      'Contact Brent Ogden to discuss front-end development, React, UI/UX engineering, website builds, freelance projects, or open roles.',
    path: '/contact',
  },
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).href
}

export function truncateDescription(value, maxLength = 158) {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  if (text.length <= maxLength) return text

  const truncated = text.slice(0, maxLength - 1)
  const lastSpace = truncated.lastIndexOf(' ')
  return `${truncated.slice(0, lastSpace > 110 ? lastSpace : maxLength - 1)}…`
}

export const PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Brent Ogden',
  url: `${SITE_URL}/`,
  image: absoluteUrl(PERSON_IMAGE),
  jobTitle: 'React Front-End Developer and UX/UI Engineer',
  sameAs: [
    'https://github.com/BrentOgden',
    'https://www.linkedin.com/in/brent-ogden-70398012',
  ],
  knowsAbout: [
    'Front-end development',
    'React',
    'JavaScript',
    'Tailwind CSS',
    'UX/UI engineering',
    'Responsive web design',
    'Web accessibility',
    'Website performance',
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
}

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: 'Brent Ogden Portfolio',
  inLanguage: 'en-US',
  publisher: {
    '@id': PERSON_ID,
  },
}

function baseWebPage({ path, title, description, image = DEFAULT_SOCIAL_IMAGE, type = 'WebPage' }) {
  const url = absoluteUrl(path)

  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(image),
    },
  }
}

export function buildHomeSchema() {
  const page = baseWebPage(SEO_COPY.home)
  page.mainEntity = { '@id': PERSON_ID }

  return {
    '@context': 'https://schema.org',
    '@graph': [WEBSITE_SCHEMA, PERSON_SCHEMA, page],
  }
}

export function buildAboutSchema() {
  const page = baseWebPage({ ...SEO_COPY.about, type: 'ProfilePage' })
  page.mainEntity = { '@id': PERSON_ID }

  return {
    '@context': 'https://schema.org',
    '@graph': [WEBSITE_SCHEMA, PERSON_SCHEMA, page],
  }
}

export function buildContactSchema() {
  const page = baseWebPage({ ...SEO_COPY.contact, type: 'ContactPage' })
  page.about = { '@id': PERSON_ID }

  return {
    '@context': 'https://schema.org',
    '@graph': [WEBSITE_SCHEMA, PERSON_SCHEMA, page],
  }
}

export function buildProjectsSchema(projects = []) {
  const page = baseWebPage({ ...SEO_COPY.projects, type: 'CollectionPage' })
  const itemList = {
    '@type': 'ItemList',
    '@id': `${absoluteUrl(SEO_COPY.projects.path)}#projects`,
    name: 'Brent Ogden project case studies',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projects/${project.id}`),
    })),
  }
  page.mainEntity = { '@id': itemList['@id'] }

  return {
    '@context': 'https://schema.org',
    '@graph': [WEBSITE_SCHEMA, PERSON_SCHEMA, page, itemList],
  }
}

export function buildProjectDescription(project) {
  const summary = project?.caseStudy?.summary || project?.description || ''
  return truncateDescription(`${project?.title || 'Project'} case study: ${summary}`)
}

export function buildProjectSchema(project) {
  const path = `/projects/${project.id}`
  const url = absoluteUrl(path)
  const title = `${project.title} Case Study | Brent Ogden`
  const description = buildProjectDescription(project)
  const image = project.thumbnail || DEFAULT_SOCIAL_IMAGE
  const breadcrumbId = `${url}#breadcrumb`
  const creativeWorkId = `${url}#project`

  const page = baseWebPage({ path, title, description, image })
  page.breadcrumb = { '@id': breadcrumbId }
  page.mainEntity = { '@id': creativeWorkId }

  const creativeWork = {
    '@type': 'CreativeWork',
    '@id': creativeWorkId,
    url,
    name: project.title,
    description,
    image: absoluteUrl(image),
    creator: {
      '@id': PERSON_ID,
    },
    dateCreated: project.year ? `${project.year}-01-01` : undefined,
    keywords: Array.isArray(project.tech) ? project.tech.join(', ') : undefined,
    about: project.type || undefined,
    sameAs:
      project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
  }

  Object.keys(creativeWork).forEach(key => {
    if (!creativeWork[key]) delete creativeWork[key]
  })

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: absoluteUrl('/projects'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: url,
      },
    ],
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [WEBSITE_SCHEMA, PERSON_SCHEMA, page, creativeWork, breadcrumb],
  }
}
