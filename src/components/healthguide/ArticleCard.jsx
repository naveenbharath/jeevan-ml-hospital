import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './ArticleCard.css'

function ArticleCard({ article }) {
  return (
    <article id={article.id} className="article-card">
      <div className="article-card__media">
        <img src={article.image} alt={article.title} loading="lazy" />
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
