import { Siren, Users, Activity, HeartHandshake, Building2 } from 'lucide-react'
import Button from '../common/Button.jsx'
import { heroHighlights } from '../../data/whyChooseUs.js'
import './Hero.css'

const icons = { Siren, Users, Activity, HeartHandshake }

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
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

        <div className="hero__media" aria-hidden="true">
          <div className="hero__media-frame">
            <Building2 size={96} strokeWidth={1.4} />
          </div>
          <div className="hero__media-badge">
            <HeartHandshake size={28} />
            <div>
              <strong>25+ Years</strong>
              <span>of Trusted Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
