import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import Button from '../common/Button.jsx'
import { navLinks, topBarLinks } from '../../data/navLinks.js'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contacts">
            <a href={`tel:${topBarLinks.phone.replace(/\s/g, '')}`} className="topbar__item">
              <Phone size={14} />
              {topBarLinks.phone}
            </a>
            <a href={`mailto:${topBarLinks.email}`} className="topbar__item topbar__item--hide-sm">
              <Mail size={14} />
              {topBarLinks.email}
            </a>
            <span className="topbar__item topbar__item--hide-md">
              <MapPin size={14} />
              {topBarLinks.address}
            </span>
          </div>
          <div className="topbar__emergency">24/7 Emergency</div>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar__inner">
          <Logo />

          <nav className="navbar__nav" aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.to} className={link.children ? 'has-children' : ''}>
                  <NavLink to={link.to} end={link.to === '/'}>
                    {link.label}
                    {link.children && <ChevronDown size={14} />}
                  </NavLink>
                  {link.children && (
                    <ul className="dropdown">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to}>{child.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <Button to="/contact#book-appointment" variant="primary" size="sm">
              Book Appointment
            </Button>
            <button
              type="button"
              className="navbar__toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </NavLink>
                {link.children && (
                  <ul className="mobile-menu__sub">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} onClick={() => setMenuOpen(false)}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Button to="/contact#book-appointment" variant="primary" onClick={() => setMenuOpen(false)}>
            Book Appointment
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
