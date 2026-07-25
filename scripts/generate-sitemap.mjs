// Regenerates public/sitemap.xml from src/data/routes.js before every build,
// so the sitemap never drifts out of sync with the app's actual routes.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { routes } from '../src/data/routes.js'
import { SITE_URL } from '../src/config/seo.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outFile = path.join(__dirname, '..', 'public', 'sitemap.xml')
const today = new Date().toISOString().slice(0, 10)

const urlEntries = routes
  .map(
    ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

writeFileSync(outFile, xml)
console.log(`✓ sitemap.xml generated with ${routes.length} URLs`)
