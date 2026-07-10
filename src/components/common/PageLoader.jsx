import './PageLoader.css'

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading">
      <span className="page-loader__spinner" />
    </div>
  )
}

export default PageLoader
