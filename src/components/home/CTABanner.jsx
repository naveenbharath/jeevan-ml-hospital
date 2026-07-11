import { Stethoscope } from 'lucide-react'
import Button from '../common/Button.jsx'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div className="cta-banner__icon" aria-hidden="true">
          <Stethoscope size={40} />
        </div>
        <div className="cta-banner__text">
          <h2>World-class care. Right here for you.</h2>
          <p>Book your appointment today and take the first step towards better health.</p>
        </div>
        <Button to="/contact#book-appointment" variant="accent" size="lg">
          Book Appointment
        </Button>
      </div>
    </section>
  )
}

export default CTABanner
