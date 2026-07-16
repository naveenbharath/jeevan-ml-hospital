import { HeartHandshake, ScanHeart, Stethoscope, ShieldCheck, FileCheck2 } from 'lucide-react'
import PulseDivider from '../common/PulseDivider.jsx'
import { whyChooseUs } from '../../data/whyChooseUs.js'
import './WhyChooseUs.css'

const icons = { HeartHandshake, ScanHeart, Stethoscope, ShieldCheck, FileCheck2 }

function WhyChooseUs() {
  return (
    <section className="why-choose-us section">
      <div className="why-choose-us__card wide-bleed">
        <div className="why-choose-us__heading">
          <h2>
            Why Choose
            <br />
            Jeevan Hospital?
          </h2>
          <PulseDivider />
        </div>

        <div className="why-choose-us__grid">
          {whyChooseUs.map(({ id, title, description, icon }) => {
            const Icon = icons[icon]
            return (
              <div key={id} className="why-choose-us__item">
                <Icon size={30} strokeWidth={1.6} />
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
