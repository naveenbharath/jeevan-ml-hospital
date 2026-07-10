import PageHero from '../components/common/PageHero.jsx'
import DepartmentCard from '../components/departments/DepartmentCard.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { departments } from '../data/departments.js'
import './Departments.css'

function Departments() {
  return (
    <>
      <PageHero
        title="Our Departments"
        description="Comprehensive, specialised care across every major medical discipline — all under one roof."
      />

      <section className="section">
        <div className="container">
          <div className="departments-page__grid">
            {departments.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

export default Departments
