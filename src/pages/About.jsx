import { ShieldCheck, HeartHandshake, Award, Users } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import './About.css'

const stats = [
  { id: 'years', label: 'Years of Service', value: '25+', icon: Award },
  { id: 'doctors', label: 'Expert Doctors', value: '80+', icon: Users },
  { id: 'patients', label: 'Patients Treated', value: '2L+', icon: HeartHandshake },
  { id: 'departments', label: 'Departments', value: '15+', icon: ShieldCheck },
]

function About() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Two decades of compassionate, advanced and patient-first healthcare in the heart of the city."
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__text">
            <span className="about-story__eyebrow">Our Story</span>
            <h2>Protection. Care. Trust. Healing.</h2>
            <p>
              Jeevan Multispeciality Hospital was founded with a simple belief — that every patient
              deserves human-first healthcare. From a single clinic to a full-fledged multispeciality
              hospital, our mission has always been to combine advanced medical technology with genuine
              compassion.
            </p>
            <p>
              Today, our team of experienced specialists, modern infrastructure and round-the-clock
              emergency care make us one of the most trusted names in healthcare in the region.
            </p>
          </div>
          <div className="about-story__stats">
            {stats.map(({ id, label, value, icon: Icon }) => (
              <div key={id} className="about-story__stat">
                <Icon size={24} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted about-values">
        <div className="container about-values__grid">
          <div className="about-values__card">
            <h3>Our Mission</h3>
            <p>
              To deliver accessible, ethical and advanced healthcare that puts patients and their
              families first, every single time.
            </p>
          </div>
          <div className="about-values__card">
            <h3>Our Vision</h3>
            <p>
              To be the most trusted multispeciality hospital known for clinical excellence, innovation
              and compassionate care.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTABanner />
    </>
  )
}

export default About
