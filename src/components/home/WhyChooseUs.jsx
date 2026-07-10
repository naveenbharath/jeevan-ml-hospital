import { HeartHandshake, ScanHeart, Stethoscope, ShieldCheck, FileCheck2 } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import { whyChooseUs } from '../../data/whyChooseUs.js'
import './WhyChooseUs.css'

const icons = { HeartHandshake, ScanHeart, Stethoscope, ShieldCheck, FileCheck2 }

function WhyChooseUs() {
  return (
    <section className="why-choose-us section section--muted">
      <div className="container">
        <SectionHeading title="Why Choose Jeevan Hospital?" align="center" />
        <div className="why-choose-us__grid">
          {whyChooseUs.map(({ id, title, description, icon }) => {
            const Icon = icons[icon]
            return (
              <div key={id} className="why-choose-us__card">
                <span className="why-choose-us__icon">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
