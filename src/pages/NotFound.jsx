import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section page-section notfound-page">
      <div className="container notfound-card">
        <h1>404</h1>
        <p>Page not found. The route you are looking for does not exist.</p>
        <Link to="/" className="button button-secondary">Back Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
