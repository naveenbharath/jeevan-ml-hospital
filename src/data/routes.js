// Single source of truth for public, indexable routes — consumed by the
// sitemap generator (scripts/generate-sitemap.mjs). Keep in sync with the
// routes registered in src/routes/AppRoutes.jsx.
export const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/departments', changefreq: 'monthly', priority: 0.9 },
  { path: '/doctors', changefreq: 'monthly', priority: 0.8 },
  { path: '/services', changefreq: 'monthly', priority: 0.9 },
  { path: '/health-guide', changefreq: 'weekly', priority: 0.6 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
]
