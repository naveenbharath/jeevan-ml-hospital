import { Siren, ScanLine, Pill, ClipboardCheck, Activity, FileCheck2 } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import PageHero from '../components/common/PageHero.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { services } from '../data/services.js'
import './Services.css'

const icons = { Siren, ScanLine, Pill, ClipboardCheck, Activity, FileCheck2 }

function Services() {
  return (
    <>
      <SEO
        title="Medical Services | Jeevan Multispeciality Hospital Mayiladuthurai"
        description="24 hours emergency care, diagnostics, pharmacy, ICU and health checkups — explore healthcare services in Mayiladuthurai at Jeevan Multispeciality Hospital, Tamil Nadu."
        keywords="Emergency Hospital in Mayiladuthurai, 24 Hours Hospital in Mayiladuthurai, Healthcare Services in Mayiladuthurai, General Hospital in Mayiladuthurai"
      />
      <PageHero
        title="Our Services"
        description="From 24 hours emergency response to preventive care, comprehensive healthcare services in Mayiladuthurai for a healthier life."
      />

      <section className="section">
        <div className="container services-page__grid">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.id} id={service.id} className="services-page__card">
                <span className="services-page__icon">
                  <Icon size={28} />
                </span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

export default Services
