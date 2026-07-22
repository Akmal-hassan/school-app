import { motion } from 'framer-motion';

const academicBlocks = [
  { title: 'Primary School', text: 'A structured beginning with core literacy, numeracy, and values.' },
  { title: 'Middle School', text: 'Development of strong fundamentals, critical thinking and creativity.' },
  { title: 'Secondary School', text: 'Exam preparation with science, humanities and language arts.' },
  { title: 'Higher Secondary', text: 'Pre-Medical, Pre-Engineering, ICS and Commerce pathways.' }
];

const methodology = [
  'Student-centered lessons with modern teaching tools.',
  'Interactive labs and technology-enabled classrooms.',
  'Assessment driven feedback and continuous improvement.',
  'Holistic development through extracurricular programming.'
];

function Academics() {
  return (
    <section className="section page-section academics-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Academics</p>
          <h1>Programs, curriculum, and teaching excellence at CBS.</h1>
        </div>

        <div className="programs-grid">
          {academicBlocks.map((program) => (
            <motion.article key={program.title} className="program-card" whileHover={{ y: -6 }}>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="section-subgrid">
          <div>
            <h2>Teaching Methodology</h2>
            <ul className="feature-list">
              {methodology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="details-card">
            <h2>Curriculum & Assessment</h2>
            <p>Our curriculum is aligned with BISE Kohat while incorporating modern learning frameworks, continuous assessment, and exam readiness.</p>
            <p>Students experience structured term planning, practical lab sessions, and coaching for high-performance board results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;
