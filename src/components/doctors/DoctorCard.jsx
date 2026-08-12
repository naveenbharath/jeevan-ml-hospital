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
    <div id={doctor.id} className="doctor-card">
      <Link to={`/doctors#${doctor.id}`} className="doctor-card__link">
        <span className="doctor-card__media">
          {doctor.image ? (
            <img src={doctor.image} alt={`${doctor.name}, ${doctor.speciality}`} loading="lazy" />
          ) : (
            <span className="doctor-card__initials" aria-hidden="true">
              {getInitials(doctor.name)}
            </span>
          )}
        </span>
        <span className="doctor-card__body">
          <span className="doctor-card__name">{doctor.name}</span>
          <span className="doctor-card__speciality">{doctor.speciality}</span>
        </span>
      </Link>
      {doctor.phone && (
        <a
          href={`tel:${doctor.phone.replace(/\s/g, '')}`}
          className="doctor-card__phone"
          aria-label={`Call ${doctor.phone}`}
        >
          <span className="doctor-card__phone-icon">📞</span>
          <span>{doctor.phone}</span>
        </a>
      )}
    </div>
  )
}

export default DoctorCard
