import { Siren, Users, Activity, HeartHandshake } from 'lucide-react'
import Button from '../common/Button.jsx'
import { heroHighlights } from '../../data/whyChooseUs.js'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import './Hero.css'

const icons = { Siren, Users, Activity, HeartHandshake }

function HeroContent() {
  return (
    <div className="hero__content">
      <h1>
        Compassionate Care.
        <br />
        Advanced Excellence.
      </h1>
      <p>
        At Jeevan Multispeciality Hospital, we are committed to providing world-class
        healthcare with compassion, innovation and integrity.
      </p>
      <div className="hero__cta">
        <Button to="/contact#book-appointment" variant="primary" size="lg">
          Book Appointment
        </Button>
        <Button to="/about" variant="outline-primary" size="lg">
          Learn More
        </Button>
      </div>
      <ul className="hero__highlights">
        {heroHighlights.map(({ id, label, icon }) => {
          const Icon = icons[icon]
          return (
            <li key={id}>
              <Icon size={18} />
              <span>{label}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Hero() {
  const isMobile = useMediaQuery('(max-width: 640px)')

  if (isMobile) {
    return (
      <section className="hero hero--mobile">
        <img
          src="/hero-banner-mobile.png"
          alt="Jeevan Multispeciality Hospital building with ambulances"
          className="hero__mobile-img"
        />
        <div className="container">
          <HeroContent />
        </div>
      </section>
    )
  }

  return (
    <section className="hero hero--desktop">
      <div className="container hero__inner">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
