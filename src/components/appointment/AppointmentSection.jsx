import { Calendar } from 'lucide-react'
import AppointmentForm from './AppointmentForm.jsx'
import './AppointmentSection.css'

function AppointmentSection() {
  return (
    <section id="book-appointment" className="appointment-section section">
      <div className="appointment-card wide-bleed">
        <div className="appointment-card__watermark" aria-hidden="true">
          <Calendar size={220} strokeWidth={1} />
        </div>

        <div className="appointment-card__intro">
          <span className="appointment-card__icon">
            <Calendar size={26} />
          </span>
          <div>
            <h2>
              Book an Appointment
              <br />
              Your Health, Our Priority
            </h2>
            <p>Your health is our priority. Schedule an appointment with our experts.</p>
          </div>
        </div>

        <span className="appointment-card__divider" aria-hidden="true" />

        <AppointmentForm layout="inline" />
      </div>
    </section>
  )
}

export default AppointmentSection
