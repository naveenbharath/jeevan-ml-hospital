import { useMemo, useState } from 'react'
import SEO from '../components/common/SEO.jsx'
import PageHero from '../components/common/PageHero.jsx'
import DoctorCard from '../components/doctors/DoctorCard.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { doctors } from '../data/doctors.js'
import { specialities } from '../data/specialities.js'
import './Doctors.css'

function Doctors() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredDoctors = useMemo(() => {
    if (activeFilter === 'all') return doctors
    return doctors.filter((doctor) => doctor.specialityId === activeFilter)
  }, [activeFilter])

  return (
    <>
      <SEO
        title="Our Doctors | Orthopedic & Gynaecology Specialists in Thanjavur"
        description="Meet the experienced orthopedic surgeons and gynaecologists at Jeevan Multispeciality Hospital, serving Thanjavur, Tanjore and Mayiladuthurai with board-certified specialist care."
        keywords="Doctors in Thanjavur, Orthopedic doctors Thanjavur, Gynaecologist in Tanjore, Jeevan Hospital doctors"
      />
      <PageHero
        title="Our Doctors"
        description="Meet our team of experienced, board-certified specialists dedicated to your wellbeing in Thanjavur and Tanjore."
      />

      <section className="section">
        <div className="container">
          <div className="doctors-page__filters">
            <button
              type="button"
              className={activeFilter === 'all' ? 'is-active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            {specialities.map((speciality) => (
              <button
                key={speciality.id}
                type="button"
                className={activeFilter === speciality.id ? 'is-active' : ''}
                onClick={() => setActiveFilter(speciality.id)}
              >
                {speciality.name}
              </button>
            ))}
          </div>

          <div className="doctors-page__grid">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <p className="doctors-page__empty">No doctors found for this speciality yet.</p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

export default Doctors
