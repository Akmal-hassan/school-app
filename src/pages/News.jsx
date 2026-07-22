import { motion } from 'framer-motion';

const news = [
  { title: 'Admissions open for new session', date: 'June 2026' },
  { title: 'Board results celebrate excellence', date: 'May 2026' },
  { title: 'Annual science exhibition showcase', date: 'April 2026' },
  { title: 'Sports week and inter-house games', date: 'March 2026' }
];

function News() {
  return (
    <section className="section page-section news-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">News</p>
          <h1>Latest announcements from CBS Parachinar.</h1>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <motion.article key={item.title} className="news-card" whileHover={{ y: -8 }}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>Stay informed about results, events, admissions, and student achievements.</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
