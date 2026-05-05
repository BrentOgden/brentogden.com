// scripts/generate-thumbnails.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'
import { projects } from '../src/data/projects.js' // <-- keep the .js

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  const thumbsDir = path.join(__dirname, '..', 'public', 'thumbs')

  if (!fs.existsSync(thumbsDir)) {
    fs.mkdirSync(thumbsDir, { recursive: true })
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 },
  })

  try {
    for (const project of projects) {
      if (!project.liveUrl) {
        console.log(`Skipping ${project.id} (no liveUrl)`)
        continue
      }

      const fileName = `${project.id}.png`
      const filePath = path.join(thumbsDir, fileName)

      console.log(`Capturing thumbnail for ${project.title} -> ${fileName}`)

      const page = await browser.newPage()

      await page.goto(project.liveUrl, {
        waitUntil: 'networkidle2',
        timeout: 60000,
      })

      // Scroll a bit in case hero content is lazy loaded
      await page.evaluate(() => {
        window.scrollTo(0, window.innerHeight * 0.25)
      })

      // Simple delay instead of page.waitForTimeout
      await delay(1500)

      await page.screenshot({
        path: filePath,
        fullPage: false,
      })

      await page.close()
    }
  } finally {
    await browser.close()
  }

  console.log('Done generating thumbnails.')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
