import { Link } from 'react-router-dom'
import { Heart, Brain, Bone, Baby, HeartPulse, Stethoscope, Droplet, Grid2x2, ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import { specialities } from '../../data/specialities.js'
import './Specialities.css'

const icons = { Heart, Brain, Bone, Baby, HeartPulse, Stethoscope, Droplet }

function Specialities() {
  return (
    <section className="specialities section">
      <div className="container">
        <SectionHeading title="Our Specialities" align="center" />
        <div className="specialities__grid">
          {specialities.map(({ id, name, icon }) => {
            const Icon = icons[icon]
            return (
              <Link key={id} to={`/departments#${id}`} className="speciality-card">
                <span className="speciality-card__icon">
                  <Icon size={26} />
                </span>
                <span>{name}</span>
              </Link>
            )
          })}
          <Link to="/departments" className="speciality-card speciality-card--all">
            <span className="speciality-card__icon">
              <Grid2x2 size={26} />
            </span>
            <span>
              View All Departments
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Specialities
