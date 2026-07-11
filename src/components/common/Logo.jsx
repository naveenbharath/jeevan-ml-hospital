import { Link } from 'react-router-dom'
import './Logo.css'

function Logo({ variant = 'light' }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Jeevan Multispeciality Hospital, Home">
      <img src="/logo.png" alt="" className="logo__mark" width={60} height={60} />
      <span className="logo__text">
        <span className="logo__brand">Jeevan</span>
        <span className="logo__tagline">Multispeciality Hospital</span>
        <span className="logo__slogan">We Care For You</span>
      </span>
    </Link>
  )
}

export default Logo
