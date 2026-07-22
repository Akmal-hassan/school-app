function Contact() {
  return (
    <section className="section page-section contact-page">
      <div className="container contact-grid">
        <div>
          <p className="section-subtitle">Contact</p>
          <h1>Get in touch with CBS Parachinar.</h1>
          <div className="contact-card">
            <h2>Office</h2>
            <p>Parachinar, District Kurram, Khyber Pakhtunkhwa</p>
            <p>Phone: +92 300 1234567</p>
            <p>Email: info@cbsparachinar.edu.pk</p>
            <p>Office Hours: Mon - Fri, 8:00 AM - 3:30 PM</p>
          </div>
          <div className="contact-card">
            <h2>Reach us</h2>
            <p>WhatsApp: +92 300 1234567</p>
            <p>Social: Facebook | Instagram | Twitter</p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your name" aria-label="Your name" />
          <input type="email" placeholder="Your email" aria-label="Your email" />
          <input type="tel" placeholder="Phone number" aria-label="Phone number" />
          <textarea placeholder="Message" aria-label="Message" rows="6"></textarea>
          <button type="submit" className="button button-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
