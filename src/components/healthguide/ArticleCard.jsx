import { Link } from 'react-router-dom'
import { ArrowRight, Salad, Sun, Dumbbell, Moon } from 'lucide-react'
import './ArticleCard.css'

const icons = {
  Nutrition: Salad,
  Lifestyle: Sun,
  Fitness: Dumbbell,
  Wellness: Moon,
}

function ArticleCard({ article }) {
  const Icon = icons[article.category] ?? Sun

  return (
    <article id={article.id} className="article-card">
      <div className="article-card__media" aria-hidden="true">
        <Icon size={36} />
      </div>
      <div className="article-card__body">
        <span className="article-card__category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link to={`/health-guide#${article.id}`} className="article-card__link">
          Read More
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard
