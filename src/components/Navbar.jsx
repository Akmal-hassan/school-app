import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSend } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Results', path: '/results' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="navbar container">
        <Link to="/" className="brand">
          <div className="brand-mark">CBS</div>
          <div>
            <p className="brand-name">Concept Based School & College</p>
            <p className="brand-subtitle">Parachinar, Khyber Pakhtunkhwa</p>
          </div>
        </Link>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            <FiSend /> Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
