import SectionHeading from '../common/SectionHeading.jsx'
import DoctorCard from './DoctorCard.jsx'
import { doctors } from '../../data/doctors.js'
import './DoctorsSection.css'

function DoctorsSection({ limit }) {
  const list = limit ? doctors.slice(0, limit) : doctors

  return (
    <section className="doctors-section section section--muted">
      <div className="container">
        <SectionHeading
          title="Our Doctors"
          align="center"
          viewAllTo={limit && doctors.length > limit ? '/doctors' : undefined}
        />
        <div className="doctors-section__grid">
          {list.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection
