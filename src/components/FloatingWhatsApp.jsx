import { FaWhatsapp } from 'react-icons/fa';

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/923001234567?text=Assalamualaikum%20CBS%20Parachinar%20team"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span>Chat</span>
    </a>
  );
}

export default FloatingWhatsApp;
