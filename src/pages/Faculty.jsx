import { motion } from 'framer-motion';

const faculty = [
  { name: 'Dr. Zahid Khan', role: 'Principal', focus: 'Academic Leadership & Character Education' },
  { name: 'Ms. Ayesha Iqbal', role: 'Vice Principal', focus: 'Student Development' },
  { name: 'Mr. Imran Ali', role: 'Head of Science', focus: 'Physics, Chemistry & Labs' },
  { name: 'Ms. Hina Riaz', role: 'Head of Commerce', focus: 'Commerce & Accounting' }
];

function Faculty() {
  return (
    <section className="section page-section faculty-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Faculty</p>
          <h1>Experienced educators shaping talent at CBS.</h1>
        </div>
        <div className="faculty-grid">
          {faculty.map((member) => (
            <motion.article key={member.name} className="faculty-card" whileHover={{ y: -10 }}>
              <div className="teacher-avatar" />
              <h3>{member.name}</h3>
              <p className="teacher-role">{member.role}</p>
              <p>{member.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
