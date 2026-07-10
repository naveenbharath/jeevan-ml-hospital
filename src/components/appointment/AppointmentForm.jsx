import { useState } from 'react'
import { User, Phone, Stethoscope, Calendar, Clock } from 'lucide-react'
import Button from '../common/Button.jsx'
import { departments } from '../../data/departments.js'
import './AppointmentForm.css'

const initialState = {
  name: '',
  phone: '',
  department: '',
  date: '',
  time: '',
}

function AppointmentForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="appointment-form appointment-form--success">
        <h3>Thank you, {form.name.split(' ')[0] || 'there'}!</h3>
        <p>Your appointment request has been received. Our team will call you shortly to confirm.</p>
        <Button variant="primary" onClick={() => { setForm(initialState); setSubmitted(false) }}>
          Book Another Appointment
        </Button>
      </div>
    )
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="appointment-form__field">
        <label htmlFor="name">Full Name</label>
        <div className="appointment-form__input">
          <User size={18} />
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
          <Phone size={18} />
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
          <Stethoscope size={18} />
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

      <div className="appointment-form__row">
        <div className="appointment-form__field">
          <label htmlFor="date">Preferred Date</label>
          <div className="appointment-form__input">
            <Calendar size={18} />
            <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
          </div>
        </div>

        <div className="appointment-form__field">
          <label htmlFor="time">Preferred Time</label>
          <div className="appointment-form__input">
            <Clock size={18} />
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
      </div>

      <Button type="submit" variant="primary" size="lg" className="appointment-form__submit">
        Book Appointment
      </Button>
    </form>
  )
}

export default AppointmentForm
