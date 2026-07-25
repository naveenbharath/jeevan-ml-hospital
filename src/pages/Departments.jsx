import SEO from '../components/common/SEO.jsx'
import PageHero from '../components/common/PageHero.jsx'
import DepartmentCard from '../components/departments/DepartmentCard.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { departments } from '../data/departments.js'
import './Departments.css'

function Departments() {
  return (
    <>
      <SEO
        title="Orthopaedics & Gynaecology Departments | Jeevan Multispeciality Hospital Thanjavur"
        description="Explore the Orthopaedics and Gynaecology departments at Jeevan Multispeciality Hospital. Expert orthopedic surgeons and gynaecologists serving Thanjavur, Tanjore and Mayiladuthurai."
        keywords="Orthopedic Hospital in Thanjavur, Gynaecology Hospital Tanjore, Multispeciality Hospital in Tanjore, Jeevan Hospital departments"
      />
      <PageHero
        title="Our Departments"
        description="Comprehensive, specialised care across every major medical discipline for patients in Thanjavur, Tanjore and Mayiladuthurai — all under one roof."
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
