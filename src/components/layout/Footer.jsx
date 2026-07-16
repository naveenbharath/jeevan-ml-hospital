import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Navigation } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from '../common/SocialIcons.jsx'
import { topBarLinks, mapLocation } from '../../data/navLinks.js'
import { departments } from '../../data/departments.js'
import './Footer.css'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Departments', to: '/departments' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Health Guide', to: '/health-guide' },
  { label: 'Contact Us', to: '/contact' },
]

const services = [
  { label: 'Emergency Care', to: '/services#emergency-care' },
  { label: 'Diagnostics', to: '/services#diagnostics' },
  { label: 'Pharmacy', to: '/services#pharmacy' },
  { label: 'Health Checkups', to: '/services#health-checkups' },
  { label: 'ICU & Critical Care', to: '/services#icu' },
]

const socials = [
  { label: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { label: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col footer__brand">
          <Logo variant="dark" />
          <p>
            Jeevan Multispeciality Hospital is committed to providing exceptional healthcare with
            compassion, innovation and excellence.
          </p>
          <div className="footer__socials">
            {socials.map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Our Services</h3>
          <ul>
            {services.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Departments</h3>
          <ul>
            {departments.slice(0, 5).map((dept) => (
              <li key={dept.id}>
                <Link to={`/departments#${dept.id}`}>{dept.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contact Us</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              <a href="#location-map">{topBarLinks.address}</a>
            </li>
            <li>
              <Phone size={16} />
              <a href={`tel:${topBarLinks.phone.replace(/\s/g, '')}`}>{topBarLinks.phone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${topBarLinks.email}`}>{topBarLinks.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__map" id="location-map">
        <div className="footer__map-inner">
          <div className="footer__map-heading">
            <h3>Find Us on the Map</h3>
            <a href={mapLocation.directionsUrl} target="_blank" rel="noreferrer" className="footer__map-directions">
              <Navigation size={15} />
              Get Directions
            </a>
          </div>
          <div className="footer__map-frame">
            <iframe
              src={mapLocation.embedUrl}
              title="Jeevan Multispeciality Hospital location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {year} Jeevan Multispeciality Hospital. All Rights Reserved.</p>
          <div className="footer__legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
