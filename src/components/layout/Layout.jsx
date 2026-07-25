import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import OrganizationSchema from '../common/OrganizationSchema.jsx'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <OrganizationSchema />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
