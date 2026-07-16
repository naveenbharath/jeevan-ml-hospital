import SectionHeading from '../common/SectionHeading.jsx'
import ArticleCard from './ArticleCard.jsx'
import { healthArticles } from '../../data/healthArticles.js'
import './HealthGuideSection.css'

function HealthGuideSection({ limit }) {
  const list = limit ? healthArticles.slice(0, limit) : healthArticles

  return (
    <section className="health-guide-section section">
      <div className="container">
        <SectionHeading
          title="Compassionate Healthcare for a Better Life"
          description="Tips, insights and guidance for a healthier you and your family."
          align="left"
          viewAllTo={limit && healthArticles.length > limit ? '/health-guide' : undefined}
        />
        <div className="health-guide-section__grid">
          {list.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HealthGuideSection
