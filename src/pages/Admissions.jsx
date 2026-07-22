import { motion } from 'framer-motion';

function Admissions() {
  return (
    <section className="section page-section admissions-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Admissions</p>
          <h1>Apply to CBS Parachinar for the upcoming academic year.</h1>
        </div>
        <div className="admissions-grid">
          <div className="admissions-card">
            <h2>Admission Process</h2>
            <ol>
              <li>Submit the online application form.</li>
              <li>Provide academic transcripts and supporting documents.</li>
              <li>Complete the interview and entry assessment.</li>
              <li>Receive admission confirmation and fee details.</li>
            </ol>
          </div>
          <div className="admissions-card highlight-card">
            <h2>Required Documents</h2>
            <ul>
              <li>Previous school report card</li>
              <li>CNIC / B-Form</li>
              <li>Passport photo</li>
              <li>Transfer certificate (if applicable)</li>
            </ul>
          </div>
        </div>

        <div className="section-subgrid">
          <div className="details-card">
            <h2>Scholarships</h2>
            <p>Merit-based scholarships are available for high achievers to encourage excellence and support families.</p>
          </div>
          <div className="details-card">
            <h2>Apply Online</h2>
            <p>Complete the online form and upload documents. Our admissions team will contact you with next steps.</p>
          </div>
        </div>

        <motion.div className="apply-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2>Quick Contact</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Full name" aria-label="Full name" />
              <input type="email" placeholder="Email address" aria-label="Email address" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone number" aria-label="Phone number" />
              <input type="text" placeholder="Program of interest" aria-label="Program of interest" />
            </div>
            <textarea placeholder="Message" aria-label="Message" rows="4"></textarea>
            <button type="submit" className="button button-primary">Submit Inquiry</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Admissions;
