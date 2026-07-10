import { ShieldCheck, Clock3, Stethoscope } from 'lucide-react'
import AppointmentForm from './AppointmentForm.jsx'
import './AppointmentSection.css'

const points = [
  { icon: ShieldCheck, text: 'Verified & experienced specialists' },
  { icon: Clock3, text: 'Flexible morning, afternoon & evening slots' },
  { icon: Stethoscope, text: 'Care across every major department' },
]

function AppointmentSection() {
  return (
    <section id="book-appointment" className="appointment-section section section--muted">
      <div className="container appointment-section__inner">
        <div className="appointment-section__text">
          <span className="appointment-section__eyebrow">Book an Appointment</span>
          <h2>Your health is our priority.</h2>
          <p>Schedule your visit with our experts. Quick, easy and convenient.</p>
          <ul>
            {points.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={18} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <AppointmentForm />
      </div>
    </section>
  )
}

export default AppointmentSection
