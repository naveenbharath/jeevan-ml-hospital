import SEO from '../components/common/SEO.jsx'
import PageHero from '../components/common/PageHero.jsx'
import ArticleCard from '../components/healthguide/ArticleCard.jsx'
import CTABanner from '../components/home/CTABanner.jsx'
import { healthArticles } from '../data/healthArticles.js'
import './HealthGuide.css'

function HealthGuide() {
  return (
    <>
      <SEO
        title="Health Guide & Wellness Tips | Jeevan Multispeciality Hospital Thanjavur"
        description="Practical health tips on nutrition, fitness, sleep and wellness from the healthcare experts at Jeevan Multispeciality Hospital, serving Thanjavur, Tanjore and Tamil Nadu."
        keywords="Health tips Thanjavur, Wellness guide Tanjore, Jeevan Hospital health guide, Healthcare Services in Thanjavur"
      />
      <PageHero
        title="Health Guide"
        description="Practical tips, insights and guidance for a healthier you and your family, from Jeevan Multispeciality Hospital, Thanjavur."
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
