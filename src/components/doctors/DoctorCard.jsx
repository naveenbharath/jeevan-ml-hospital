import { Link } from 'react-router-dom'
import './DoctorCard.css'

function getInitials(name) {
  return name
    .replace('Dr.', '')
    .trim()
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function DoctorCard({ doctor }) {
  return (
    <Link to={`/doctors#${doctor.id}`} id={doctor.id} className="doctor-card">
      <span className="doctor-card__avatar" aria-hidden="true">
        {getInitials(doctor.name)}
      </span>
      <span className="doctor-card__name">{doctor.name}</span>
      <span className="doctor-card__speciality">{doctor.speciality}</span>
      <span className="doctor-card__experience">{doctor.experience}</span>
    </Link>
  )
}

export default DoctorCard
