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
