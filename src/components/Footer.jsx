import { Link } from 'react-router-dom';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <BsLightningChargeFill />
              </div>
              <div>
                <span className="footer__logo-name">SAI RAM</span>
                <span className="footer__logo-sub">ELECTRICAL ENTERPRISES</span>
              </div>
            </Link>
            <p className="footer__desc">
              Delivering reliable, high-quality electrical solutions for residential, 
              commercial, and industrial projects across Maharashtra.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Facebook" id="social-facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer__social" aria-label="Instagram" id="social-instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer__social" aria-label="LinkedIn" id="social-linkedin">
                <FaLinkedinIn />
              </a>
              <a href="#" className="footer__social" aria-label="WhatsApp" id="social-whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/projects" className="footer__link">Projects</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <Link to="/services" className="footer__link">Residential Wiring</Link>
            <Link to="/services" className="footer__link">Commercial Works</Link>
            <Link to="/services" className="footer__link">Multi-flat Projects</Link>
            <Link to="/services" className="footer__link">Turnkey Solutions</Link>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <div className="footer__contact-item">
              <FiPhone className="footer__contact-icon" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="footer__contact-item">
              <FiMail className="footer__contact-icon" />
              <span>info@sairamelectrical.com</span>
            </div>
            <div className="footer__contact-item">
              <FiMapPin className="footer__contact-icon" />
              <span>Kalyan, Maharashtra, India</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} SAI RAM ELECTRICAL ENTERPRISES. All rights reserved.</p>
          <p className="footer__bottom-tagline">Powered by Passion. Driven by Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
