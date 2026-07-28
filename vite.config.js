import { readdirSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDirectory = dirname(fileURLToPath(import.meta.url))

function htmlInputs() {
  const files = [
    resolve(rootDirectory, 'index.html'),
    resolve(rootDirectory, 'projects.html'),
    resolve(rootDirectory, 'about.html'),
    resolve(rootDirectory, 'contact.html'),
  ]
  const projectPagesDirectory = resolve(rootDirectory, 'projects')

  for (const entry of readdirSync(projectPagesDirectory, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(resolve(projectPagesDirectory, entry.name))
    }
  }

  return Object.fromEntries(
    files.map(file => [
      relative(rootDirectory, file).replace(/\.html$/, ''),
      file,
    ]),
  )
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: htmlInputs(),
    },
  },
})
