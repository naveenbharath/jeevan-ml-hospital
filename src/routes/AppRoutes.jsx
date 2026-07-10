import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import PageLoader from '../components/common/PageLoader.jsx'

const Home = lazy(() => import('../pages/Home.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const Departments = lazy(() => import('../pages/Departments.jsx'))
const Doctors = lazy(() => import('../pages/Doctors.jsx'))
const Services = lazy(() => import('../pages/Services.jsx'))
const HealthGuide = lazy(() => import('../pages/HealthGuide.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="departments" element={<Departments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
          <Route path="health-guide" element={<HealthGuide />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
