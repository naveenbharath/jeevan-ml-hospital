import SectionHeading from '../common/SectionHeading.jsx'
import DepartmentCard from './DepartmentCard.jsx'
import { departments } from '../../data/departments.js'
import './DepartmentsSection.css'

function DepartmentsSection({ limit, compact = false }) {
  const list = limit ? departments.slice(0, limit) : departments

  return (
    <section className="departments-section section">
      <div className="container">
        <SectionHeading
          title="Our Departments"
          align="center"
          viewAllTo={limit && departments.length > limit ? '/departments' : undefined}
        />
        <div className="departments-section__grid">
          {list.map((department) => (
            <DepartmentCard key={department.id} department={department} compact={compact} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentsSection
