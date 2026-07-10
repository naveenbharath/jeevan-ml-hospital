import { Link } from 'react-router-dom'
import './PageHero.css'

function PageHero({ title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <p className="page-hero__breadcrumb">
          <Link to="/">Home</Link> / <span>{title}</span>
        </p>
        <h1>{title}</h1>
        {description && <p className="page-hero__description">{description}</p>}
      </div>
    </section>
  )
}

export default PageHero
