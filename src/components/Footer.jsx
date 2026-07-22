import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">CBS Parachinar</p>
          <p>Premium private institution dedicated to academic excellence, character, and future leadership.</p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p>Parachinar, District Kurram, KPK</p>
          <p>Phone: +92 300 1234567</p>
          <p>Email: info@cbsparachinar.edu.pk</p>
        </div>
        <div>
          <p className="footer-title">Quick links</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/results">Results</Link>
            <Link to="/news">News</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Follow Us</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Concept Based School & College. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
