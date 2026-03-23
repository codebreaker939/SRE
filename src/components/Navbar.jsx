import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { BsLightningChargeFill } from 'react-icons/bs';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" id="logo-link">
          <div className="navbar__logo-icon">
            <BsLightningChargeFill />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">SAI RAM</span>
            <span className="navbar__logo-sub">ELECTRICAL ENTERPRISES</span>
          </div>
        </Link>

        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              {link.label}
              {location.pathname === link.path && <span className="navbar__link-indicator" />}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary navbar__cta-mobile" id="nav-cta-mobile">
            Get Quote
          </Link>
        </div>

        <Link to="/contact" className="btn btn-primary navbar__cta" id="nav-cta">
          Get Quote
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          {isMobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {isMobileOpen && <div className="navbar__overlay" onClick={() => setIsMobileOpen(false)} />}
    </nav>
  );
}
