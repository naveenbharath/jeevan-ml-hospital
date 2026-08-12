import { SITE_URL, SITE_NAME, ORG } from '../config/seo.js'
import { departments } from '../data/departments.js'
import { doctors } from '../data/doctors.js'

export function getHospitalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: SITE_NAME,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/hero-banner.jpg`,
    telephone: ORG.telephone,
    email: ORG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.streetAddress,
      addressLocality: ORG.addressLocality,
      addressRegion: ORG.addressRegion,
      postalCode: ORG.postalCode,
      addressCountry: ORG.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ORG.latitude,
      longitude: ORG.longitude,
    },
    hasMap: ORG.mapsUrl,
    sameAs: ORG.sameAs,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    medicalSpecialty: ORG.medicalSpecialties,
    department: departments.map((dept) => ({
      '@type': 'MedicalSpecialty',
      name: dept.name,
      description: dept.description,
    })),
    employee: doctors.map((doctor) => ({
      '@type': 'Physician',
      name: doctor.name,
      jobTitle: doctor.speciality,
      telephone: doctor.phone,
      medicalSpecialty: doctor.speciality,
    })),
    areaServed: [
      { '@type': 'City', name: 'Thanjavur' },
      { '@type': 'City', name: 'Mayiladuthurai' },
      { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
    ],
  }
}
