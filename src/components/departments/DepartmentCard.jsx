import { Link } from 'react-router-dom'
import { HeartPulse, Brain, Bone, HeartHandshake, Baby, Stethoscope } from 'lucide-react'
import './DepartmentCard.css'

const icons = { HeartPulse, Brain, Bone, HeartHandshake, Baby, Stethoscope }

function DepartmentCard({ department, compact = false }) {
  const Icon = icons[department.icon] ?? Stethoscope

  if (compact) {
    return (
      <Link to={`/departments#${department.id}`} id={department.id} className="department-card department-card--compact">
        {department.image ? (
          <span className="department-card__thumb">
            <img src={department.image} alt="" loading="lazy" />
          </span>
        ) : (
          <span className="department-card__icon">
            <Icon size={28} />
          </span>
        )}
        <span className="department-card__name">{department.name}</span>
      </Link>
    )
  }

  return (
    <Link to={`/departments#${department.id}`} id={department.id} className="department-card">
      {department.image && (
        <span className="department-card__media">
          <img src={department.image} alt={department.name} loading="lazy" />
        </span>
      )}
      <span className="department-card__body">
        <span className="department-card__icon">
          <Icon size={28} />
        </span>
        <span className="department-card__name">{department.name}</span>
        <span className="department-card__description">{department.description}</span>
      </span>
    </Link>
  )
}

export default DepartmentCard
