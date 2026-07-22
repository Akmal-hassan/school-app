import { motion } from 'framer-motion';

const lifeHighlights = [
  'Sports and athletics',
  'Computer and science labs',
  'Library research',
  'Debating society',
  'Annual functions',
  'Educational tours'
];

function StudentLife() {
  return (
    <section className="section page-section student-life-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Student Life</p>
          <h1>Dynamic experiences beyond the classroom.</h1>
        </div>
        <div className="life-grid">
          {lifeHighlights.map((item) => (
            <motion.div key={item} className="life-card" whileHover={{ y: -8 }}>
              <h3>{item}</h3>
              <p>Engaging activities that support personal growth, teamwork and confidence.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
