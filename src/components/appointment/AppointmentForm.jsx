import { useState } from 'react'
import { User, Phone, Stethoscope, Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import Button from '../common/Button.jsx'
import { departments } from '../../data/departments.js'
import { topBarLinks } from '../../data/navLinks.js'
import { buildWhatsAppLink } from '../../lib/whatsapp.js'
import './AppointmentForm.css'

const TIME_LABELS = {
  morning: 'Morning (9 AM - 12 PM)',
  afternoon: 'Afternoon (12 PM - 4 PM)',
  evening: 'Evening (4 PM - 8 PM)',
}

const initialState = {
  name: '',
  phone: '',
  department: '',
  date: '',
  time: '',
}

function buildEnquiryMessage(form) {
  const departmentName = departments.find((dept) => dept.id === form.department)?.name ?? form.department
  return [
    'New appointment enquiry — Jeevan Multispeciality Hospital',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Department: ${departmentName}`,
    `Preferred date: ${form.date}`,
    `Preferred time: ${TIME_LABELS[form.time] ?? form.time}`,
  ].join('\n')
}

function AppointmentForm({ layout = 'stacked' }) {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const showIcons = layout === 'stacked'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    const whatsappLink = buildWhatsAppLink(topBarLinks.whatsapp, buildEnquiryMessage(form))

    return (
      <div className={`appointment-form appointment-form--${layout} appointment-form--success`}>
        <h3>Thank you, {form.name.split(' ')[0] || 'there'}!</h3>
        <p>Your appointment request has been received. Our team will call you shortly to confirm.</p>
        <Button href={whatsappLink} target="_blank" rel="noreferrer" variant="accent" icon={<MessageCircle size={18} />}>
          Message us on WhatsApp
        </Button>
        <Button variant="primary" onClick={() => { setForm(initialState); setSubmitted(false) }}>
          Book Another Appointment
        </Button>
      </div>
    )
  }

  const dateField = (
    <div className="appointment-form__field">
      <label htmlFor="date">Preferred Date</label>
      <div className="appointment-form__input">
        {showIcons && <Calendar size={18} />}
        <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
      </div>
    </div>
  )

  const timeField = (
    <div className="appointment-form__field">
      <label htmlFor="time">Preferred Time</label>
      <div className="appointment-form__input">
        {showIcons && <Clock size={18} />}
        <select id="time" name="time" value={form.time} onChange={handleChange} required>
          <option value="" disabled>
            Select time
          </option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
          <option value="evening">Evening (4 PM - 8 PM)</option>
        </select>
      </div>
    </div>
  )

  return (
    <form className={`appointment-form appointment-form--${layout}`} onSubmit={handleSubmit}>
      <div className="appointment-form__field">
        <label htmlFor="name">Full Name</label>
        <div className="appointment-form__input">
          {showIcons && <User size={18} />}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="appointment-form__field">
        <label htmlFor="phone">Phone Number</label>
        <div className="appointment-form__input">
          {showIcons && <Phone size={18} />}
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="appointment-form__field">
        <label htmlFor="department">Department</label>
        <div className="appointment-form__input">
          {showIcons && <Stethoscope size={18} />}
          <select id="department" name="department" value={form.department} onChange={handleChange} required>
            <option value="" disabled>
              Select department
            </option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {layout === 'stacked' ? (
        <div className="appointment-form__row">
          {dateField}
          {timeField}
        </div>
      ) : (
        <>
          {dateField}
          {timeField}
        </>
      )}

      <Button
        type="submit"
        variant={layout === 'inline' ? 'accent' : 'primary'}
        size="lg"
        icon={layout === 'inline' ? <ArrowRight size={16} /> : undefined}
        className="appointment-form__submit"
      >
        Book Appointment
      </Button>
    </form>
  )
}

export default AppointmentForm
