import { Link } from 'react-router-dom'
import { HeartPulse } from 'lucide-react'
import './Logo.css'

function Logo({ variant = 'light' }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Jeevan Multispeciality Hospital, Home">
      <span className="logo__mark">
        <HeartPulse size={22} strokeWidth={2.4} />
      </span>
      <span className="logo__text">
        <span className="logo__brand">Jeevan</span>
        <span className="logo__tagline">Multispeciality Hospital</span>
      </span>
    </Link>
  )
}

export default Logo
