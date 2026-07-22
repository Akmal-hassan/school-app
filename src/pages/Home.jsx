import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCertificate, FaSchool, FaUserGraduate, FaBookOpen, FaLightbulb } from 'react-icons/fa';

const stats = [
  { label: 'Students Appeared', value: '294' },
  { label: 'Passed Students', value: '282' },
  { label: 'Pass Percentage', value: '96%' },
  { label: 'A1 Grades', value: '215' },
  { label: 'A Grades', value: '61' },
  { label: 'B Grades', value: '6' }
];

const programs = [
  { title: 'Primary School', description: 'Foundation for young learners with strong values.' },
  { title: 'Secondary School', description: 'Rigorous academic subjects and exam readiness.' },
  { title: 'Higher Secondary', description: 'Pre-medical, pre-engineering, ICS, commerce.' },
  { title: 'Co-curricular', description: 'Debate, sports, labs, tours and leadership events.' }
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="eyebrow">Premium education in Parachinar</p>
            <h1>Welcome to Concept Based School & College</h1>
            <p className="hero-copy">Inspiring excellence through education with Islamic values, innovation, and leadership.</p>
            <div className="hero-actions">
              <Link to="/admissions" className="button button-primary">Apply Now</Link>
              <Link to="/academics" className="button button-secondary">Explore Programs</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container section-grid">
          {stats.map((stat) => (
            <motion.article key={stat.label} className="stats-card" whileHover={{ y: -6 }}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-grid">
          <div>
            <p className="section-subtitle">Our Mission & Vision</p>
            <h2>Academic excellence, character, and future leadership.</h2>
            <p>Guided by discipline, integrity, and innovation, CBS prepares students for higher education and meaningful careers while strengthening Islamic values.</p>
            <div className="cards-grid">
              <div className="info-card">
                <h3>Mission</h3>
                <p>To nurture academic excellence, discipline, Islamic values, innovation, leadership, creativity and responsible citizenship.</p>
              </div>
              <div className="info-card">
                <h3>Vision</h3>
                <p>To become one of Pakistan’s leading institutions by empowering students with knowledge, skills, confidence and character.</p>
              </div>
            </div>
          </div>
          <div className="feature-tower">
            <div className="feature-card highlight">
              <FaSchool />
              <p>BISE Kohat affiliated education with modern campus facilities.</p>
            </div>
            <div className="feature-card">
              <FaCertificate />
              <p>96% pass rate with outstanding A1 and A grade achievements.</p>
            </div>
            <div className="feature-card">
              <FaLightbulb />
              <p>Innovation-driven teaching, labs, computer science and a vibrant student life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section programs-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Programs at CBS</p>
            <h2>Structured learning for every stage of school and college.</h2>
          </div>
          <div className="programs-grid">
            {programs.map((program) => (
              <motion.div key={program.title} className="program-card" whileHover={{ scale: 1.02 }}>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container split-grid">
          <div>
            <p className="section-subtitle">Leadership message</p>
            <h2>Building confident scholars with faith and academic strength.</h2>
            <p>At CBS, every student is encouraged to think critically, serve the community, and achieve excellence through disciplined study and character-focused leadership.</p>
            <div className="testimonial-card">
              <p>“Our commitment is to deliver world-class education that feels local, relevant and spiritually grounded.”</p>
              <span>Dr. Zahid Khan, Principal</span>
            </div>
          </div>
          <div className="hero-banner-card">
            <p className="hero-banner-title">Why choose CBS?</p>
            <ul>
              <li>Academic success with 96% result rate</li>
              <li>Strong Islamic values and ethical teaching</li>
              <li>Modern labs, library, sports and student development</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
