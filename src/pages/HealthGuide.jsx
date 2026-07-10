import PageHero from '../components/common/PageHero.jsx'
import ArticleCard from '../components/healthguide/ArticleCard.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { healthArticles } from '../data/healthArticles.js'
import './HealthGuide.css'

function HealthGuide() {
  return (
    <>
      <PageHero
        title="Health Guide"
        description="Practical tips, insights and guidance for a healthier you and your family."
      />

      <section className="section">
        <div className="container health-guide-page__grid">
          {healthArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

export default HealthGuide
