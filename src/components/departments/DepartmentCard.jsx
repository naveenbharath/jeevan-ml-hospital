import { Link } from 'react-router-dom'
import { HeartPulse, Brain, Bone, HeartHandshake, Baby, Stethoscope } from 'lucide-react'
import './DepartmentCard.css'

const icons = { HeartPulse, Brain, Bone, HeartHandshake, Baby, Stethoscope }

function DepartmentCard({ department, compact = false }) {
  const Icon = icons[department.icon] ?? Stethoscope

  return (
    <Link to={`/departments#${department.id}`} id={department.id} className={`department-card ${compact ? 'department-card--compact' : ''}`}>
      <span className="department-card__icon">
        <Icon size={28} />
      </span>
      <span className="department-card__name">{department.name}</span>
      {!compact && <span className="department-card__description">{department.description}</span>}
    </Link>
  )
}

export default DepartmentCard
