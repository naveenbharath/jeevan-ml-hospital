import SEO from '../components/common/SEO.jsx'
import Hero from '../components/home/Hero.jsx'
import QuickActions from '../components/home/QuickActions.jsx'
import Specialities from '../components/home/Specialities.jsx'
import DoctorsSection from '../components/doctors/DoctorsSection.jsx'
import DepartmentsSection from '../components/departments/DepartmentsSection.jsx'
import AppointmentSection from '../components/appointment/AppointmentSection.jsx'
import HealthGuideSection from '../components/healthguide/HealthGuideSection.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import CTABanner from '../components/home/CTABanner.jsx'

function Home() {
  return (
    <>
      <SEO
        title="Jeevan Multispeciality Hospital | Best Multispeciality Hospital in Thanjavur"
        description="Jeevan Multispeciality Hospital serves Thanjavur (Tanjore), Mayiladuthurai and Tamil Nadu with 24 hours emergency care, orthopedic and gynaecology specialists, and trusted multispeciality healthcare services. Book your appointment today."
        keywords="Jeevan Multispeciality Hospital, Jeevan Hospital, Hospital in Thanjavur, Best Hospital in Thanjavur, Multispeciality Hospital in Tanjore, 24 Hours Hospital in Thanjavur, Emergency Hospital in Thanjavur"
      />
      <Hero />
      <QuickActions />
      <Specialities />
      <DoctorsSection limit={6} />
      <DepartmentsSection limit={6} />
      <AppointmentSection />
      <HealthGuideSection limit={4} />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}

export default Home
