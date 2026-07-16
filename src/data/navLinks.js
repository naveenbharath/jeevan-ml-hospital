export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Departments',
    to: '/departments',
    children: [
      { label: 'Orthopaedics', to: '/departments#orthopaedics' },
      { label: 'Gynaecology', to: '/departments#gynaecology' },
    ],
  },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Services', to: '/services' },
  { label: 'Health Guide', to: '/health-guide' },
  { label: 'Contact Us', to: '/contact' },
]

export const topBarLinks = {
  phone: '+91 98765 43210',
  email: 'info@jeevanhospital.com',
  address: 'Sirkali Main Road, Vellalagaram, Senthangudi, Mayiladuthurai-609001',
}

export const mapLocation = {
  lat: 11.1129015,
  lng: 79.6600341,
  embedUrl: 'https://www.google.com/maps?q=11.1129015,79.6600341&z=16&output=embed',
  directionsUrl:
    "https://www.google.com/maps/place/11%C2%B006'46.5%22N+79%C2%B039'36.1%22E/@11.1129015,79.6574592,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.1129015!4d79.6600341?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",
}

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export const utilityLinks = [
  { label: 'Insurance', to: '/services#insurance' },
  { label: 'Careers', to: '/about#careers' },
  { label: 'Patient Portal', to: '/contact#patient-portal' },
]
