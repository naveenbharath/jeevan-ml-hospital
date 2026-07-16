import { ArrowRight } from 'lucide-react'
import Button from '../common/Button.jsx'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner wide-bleed">
      <img src="/doctors-team.png" alt="" className="cta-banner__team" aria-hidden="true" />
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <h2>
            World-class care.
            <br />
            Right here for you.
          </h2>
          <p>Book your appointment today.</p>
          <Button
            to="/contact#book-appointment"
            variant="accent"
            size="lg"
            icon={<ArrowRight size={16} />}
            className="cta-banner__btn"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
