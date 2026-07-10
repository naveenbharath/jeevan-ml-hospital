import { Siren, ScanLine, Pill, ClipboardCheck, Activity, FileCheck2 } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { services } from '../data/services.js'
import './Services.css'

const icons = { Siren, ScanLine, Pill, ClipboardCheck, Activity, FileCheck2 }

function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="From emergency response to preventive care, everything you need for a healthier life."
      />

      <section className="section">
        <div className="container services-page__grid">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <div key={service.id} id={service.id} className="services-page__card">
                <span className="services-page__icon">
                  <Icon size={28} />
                </span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

export default Services
