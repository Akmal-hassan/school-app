import { motion } from 'framer-motion';

const cards = [
  { label: 'Pass Percentage', value: '96%', detail: 'Highest board results for CBS Parachinar.' },
  { label: 'Students Appeared', value: '294', detail: 'Fully engaged classes across school and college.' },
  { label: 'Students Passed', value: '282', detail: 'Strong academic guidance and preparation.' },
  { label: 'A1 Grades', value: '215', detail: 'Emphasis on excellence and exam readiness.' },
  { label: 'A Grades', value: '61', detail: 'Consistent performance in all subjects.' },
  { label: 'B Grades', value: '6', detail: 'Achievement through personalized support.' }
];

function Results() {
  return (
    <section className="section page-section results-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Results</p>
          <h1>Academic achievements from the latest BISE Kohat results.</h1>
        </div>

        <div className="results-grid">
          {cards.map((card) => (
            <motion.article key={card.label} className="result-card" whileHover={{ y: -8 }}>
              <p className="result-value">{card.value}</p>
              <h3>{card.label}</h3>
              <p>{card.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="progress-section">
          <div className="progress-card">
            <h2>Pass Rate</h2>
            <div className="progress-bar"><span style={{ width: '96%' }} /></div>
            <p>96% of enrolled students passed board examinations.</p>
          </div>
          <div className="progress-card">
            <h2>Grade Distribution</h2>
            <div className="progress-bar alt"><span style={{ width: '80%' }} /></div>
            <p>Majority of students earned A1 and A grades through focused coaching.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
