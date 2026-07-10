import { Siren, CalendarCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './QuickActions.css'

function QuickActions() {
  return (
    <section className="quick-actions">
      <div className="container quick-actions__grid">
        <Link to="/contact#emergency" className="quick-actions__card quick-actions__card--emergency">
          <span className="quick-actions__icon">
            <Siren size={26} />
          </span>
          <span className="quick-actions__text">
            <strong>Emergency Care</strong>
            <span>24/7 Emergency Services. Immediate care when you need it most.</span>
          </span>
          <ArrowRight size={20} className="quick-actions__arrow" />
        </Link>

        <Link to="/contact#book-appointment" className="quick-actions__card quick-actions__card--appointment">
          <span className="quick-actions__icon">
            <CalendarCheck size={26} />
          </span>
          <span className="quick-actions__text">
            <strong>Book an Appointment</strong>
            <span>Schedule your visit with our specialists. Quick, Easy, Convenient.</span>
          </span>
          <ArrowRight size={20} className="quick-actions__arrow" />
        </Link>
      </div>
    </section>
  )
}

export default QuickActions
