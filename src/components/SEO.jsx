import { useEffect, useMemo } from 'react'
import {
  absoluteUrl,
  DEFAULT_SOCIAL_IMAGE,
  SITE_NAME,
} from '../config/seo.mjs'

const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

function upsertMeta(attribute, key, content) {
  if (!content) return

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
  element.setAttribute('data-seo-managed', 'true')
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
  element.setAttribute('data-seo-managed', 'true')
}

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = `${SITE_NAME} portfolio preview`,
  imageWidth = 1200,
  imageHeight = 630,
  imageType = 'image/png',
  type = 'website',
  robots = DEFAULT_ROBOTS,
  structuredData,
}) {
  const schemaJson = useMemo(
    () => (structuredData ? JSON.stringify(structuredData) : ''),
    [structuredData],
  )

  useEffect(() => {
    const canonical = absoluteUrl(path)
    const socialImage = absoluteUrl(image)

    document.documentElement.lang = 'en-US'
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'author', 'Brent Ogden')
    upsertMeta('name', 'robots', robots)
    upsertMeta('name', 'googlebot', robots)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'en_US')
    upsertMeta('property', 'og:image', socialImage)
    upsertMeta('property', 'og:image:secure_url', socialImage)
    upsertMeta('property', 'og:image:type', imageType)
    upsertMeta('property', 'og:image:width', String(imageWidth))
    upsertMeta('property', 'og:image:height', String(imageHeight))
    upsertMeta('property', 'og:image:alt', imageAlt)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', socialImage)
    upsertMeta('name', 'twitter:image:alt', imageAlt)

    upsertCanonical(canonical)

    document.head
      .querySelectorAll('script[data-route-schema]')
      .forEach(element => element.remove())

    if (schemaJson) {
      const schema = document.createElement('script')
      schema.type = 'application/ld+json'
      schema.setAttribute('data-route-schema', 'true')
      schema.textContent = schemaJson
      document.head.appendChild(schema)
    }
  }, [
    description,
    image,
    imageAlt,
    imageHeight,
    imageType,
    imageWidth,
    path,
    robots,
    schemaJson,
    title,
    type,
  ])

  return null
}
