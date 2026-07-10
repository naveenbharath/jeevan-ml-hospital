export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Departments',
    to: '/departments',
    children: [
      { label: 'Cardiac Sciences', to: '/departments#cardiac-sciences' },
      { label: 'Brain & Spine', to: '/departments#brain-spine' },
      { label: 'Bone & Joint', to: '/departments#bone-joint' },
      { label: "Women's Health", to: '/departments#womens-health' },
      { label: 'Child Care', to: '/departments#child-care' },
      { label: 'Internal Medicine', to: '/departments#internal-medicine' },
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
  address: 'No 023, Health City, Main Road, Chennai - 600 100',
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
