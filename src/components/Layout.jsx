import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';

function Layout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="page-content">{children || <Outlet />}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Layout;
