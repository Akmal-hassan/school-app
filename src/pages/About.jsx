import { motion } from 'framer-motion';

const values = ['Excellence', 'Integrity', 'Discipline', 'Respect', 'Leadership', 'Innovation', 'Teamwork', 'Responsibility'];

function About() {
  return (
    <section className="section page-section about-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">About CBS</p>
          <h1>History, mission and leadership of CBS Parachinar.</h1>
        </div>
        <div className="about-grid">
          <motion.div className="about-card" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2>Our Mission</h2>
            <p>Provide quality education that nurtures academic excellence, discipline, Islamic values, innovation, leadership, creativity and responsible citizenship.</p>
          </motion.div>
          <motion.div className="about-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2>Our Vision</h2>
            <p>To become one of the leading educational institutions in Pakistan by empowering students with knowledge, skills, confidence, and character.</p>
          </motion.div>
        </div>
        <div className="section-subgrid">
          <div>
            <h3>Core Values</h3>
            <div className="values-grid">
              {values.map((value) => (
                <span key={value} className="value-pill">{value}</span>
              ))}
            </div>
          </div>
          <div>
            <h3>Why CBS?</h3>
            <ul className="feature-list">
              <li>High-performance results from BISE Kohat board.</li>
              <li>Strong leadership programs and skill-building activities.</li>
              <li>Modern campus facilities, labs and sports areas.</li>
              <li>Safe, disciplined and values-driven learning environment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
