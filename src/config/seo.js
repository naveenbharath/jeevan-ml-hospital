// Central SEO/site configuration. Update SITE_URL once the production
// domain is finalized on Vercel — it feeds robots.txt, sitemap.xml,
// canonical tags, JSON-LD and Open Graph URLs.
export const SITE_URL = 'https://jeevanmultispecialityhospital.com'
export const SITE_NAME = 'Jeevan Multispeciality Hospital'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-banner.jpg`
export const DEFAULT_LOCALE = 'en_IN'

export const ORG = {
  name: SITE_NAME,
  legalName: 'Jeevan Multispeciality Hospital',
  streetAddress: 'Sirkali Main Road, Vellalagaram, Senthangudi',
  addressLocality: 'Mayiladuthurai',
  addressRegion: 'Tamil Nadu',
  postalCode: '609001',
  addressCountry: 'IN',
  telephone: '+91-98765-43210',
  email: 'info@jeevanhospital.com',
  latitude: 11.1129015,
  longitude: 79.6600341,
  mapsUrl:
    "https://www.google.com/maps/place/11%C2%B006'46.5%22N+79%C2%B039'36.1%22E/@11.1129015,79.6574592,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.1129015!4d79.6600341?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",
  sameAs: [
    'https://facebook.com',
    'https://instagram.com',
    'https://twitter.com',
    'https://linkedin.com',
  ],
  medicalSpecialties: ['Orthopedic', 'Gynecologic'],
}
