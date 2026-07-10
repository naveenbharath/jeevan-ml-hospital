import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import AppointmentForm from '../components/appointment/AppointmentForm.jsx'
import { topBarLinks } from '../data/navLinks.js'
import './Contact.css'

const details = [
  { icon: Phone, label: 'Phone', value: topBarLinks.phone, href: `tel:${topBarLinks.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: topBarLinks.email, href: `mailto:${topBarLinks.email}` },
  { icon: MapPin, label: 'Address', value: topBarLinks.address },
  { icon: Clock, label: 'Emergency', value: 'Open 24/7, every day' },
]

function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We're here to help. Reach out to us or book an appointment with our specialists."
      />

      <section id="emergency" className="section">
        <div className="container contact-page__grid">
          <div className="contact-page__details">
            <h2>Get in Touch</h2>
            <p>Our team is available around the clock for emergencies and appointment queries.</p>
            <ul>
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <span className="contact-page__icon">
                    <Icon size={18} />
                  </span>
                  <span>
                    <strong>{label}</strong>
                    {href ? <a href={href}>{value}</a> : <span className="contact-page__value">{value}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div id="book-appointment" className="contact-page__form">
            <h2>Book an Appointment</h2>
            <p>Fill in your details and our team will confirm your slot shortly.</p>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
