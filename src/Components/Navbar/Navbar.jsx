import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo_v_.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <Link to="hero" smooth onClick={closeMenu}>
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <div className="nav-menu-inner">
            <NavLink to="hero" onClick={closeMenu}>Home</NavLink>
            <NavLink to="program" onClick={closeMenu}>Program</NavLink>
            <NavLink to="about" onClick={closeMenu}>About</NavLink>
            <NavLink to="contact" onClick={closeMenu} isButton>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick, isButton = false }) => (
  <Link
    to={to}
    smooth
    offset={isButton ? -260 : -80}
    duration={500}
    className={`nav-link ${isButton ? 'nav-button' : ''}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
