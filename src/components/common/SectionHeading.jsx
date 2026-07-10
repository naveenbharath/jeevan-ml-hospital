import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './SectionHeading.css'

function SectionHeading({ eyebrow, title, description, align = 'center', viewAllTo }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading__text">
        {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {viewAllTo && (
        <Link to={viewAllTo} className="section-heading__link">
          View All
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  )
}

export default SectionHeading
