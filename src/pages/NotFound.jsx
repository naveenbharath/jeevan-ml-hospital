import Button from '../components/common/Button.jsx'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found section">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Button to="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
