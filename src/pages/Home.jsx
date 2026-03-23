import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsLightningChargeFill, BsArrowRight, BsPeople, BsBuildings, BsTools } from 'react-icons/bs';
import { FiZap, FiCheckCircle, FiAward, FiClock } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ElectricalBg from '../components/ElectricalBg';
import './Home.css';

export default function Home() {
  const [heroRef, heroVisible] = useScrollReveal(0.1);
  const [statsRef, statsVisible] = useScrollReveal(0.15);
  const [servicesRef, servicesVisible] = useScrollReveal(0.1);
  const [whyRef, whyVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible] = useScrollReveal(0.15);

  const [breakers, setBreakers] = useState([
    { id: 1, label: 'MCB 1', rating: 'C16', on: true },
    { id: 2, label: 'MCB 2', rating: 'C10', on: true },
    { id: 3, label: 'MCB 3', rating: 'C32', on: false },
    { id: 4, label: 'MCB 4', rating: 'C20', on: true },
    { id: 5, label: 'MCB 5', rating: 'C10', on: true },
    { id: 6, label: 'MCB 6', rating: 'C16', on: false },
    { id: 7, label: 'MCB 7', rating: 'C25', on: true },
    { id: 8, label: 'MCB 8', rating: 'C32', on: true },
  ]);

  const toggleBreaker = (id) => {
    setBreakers(prev =>
      prev.map(b => b.id === id ? { ...b, on: !b.on } : b)
    );
  };

  const activeCount = breakers.filter(b => b.on).length;

  const stats = [
    { number: '15+', label: 'Years Experience', icon: <FiClock /> },
    { number: '50+', label: 'Projects Delivered', icon: <FiCheckCircle /> },
    { number: '100+', label: 'Skilled Workers', icon: <BsPeople /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FiAward /> },
  ];

  const services = [
    { icon: <BsLightningChargeFill />, title: 'Residential Wiring', desc: 'Complete electrical solutions for apartments, flats, and housing units with precision and safety.' },
    { icon: <BsBuildings />, title: 'Commercial Projects', desc: 'Large-scale electrical installations for schools, retail stores, and commercial buildings.' },
    { icon: <BsTools />, title: 'Multi-flat Projects', desc: 'End-to-end electrical contracts for multi-unit housing complexes and residential towers.' },
    { icon: <FiZap />, title: 'Turnkey Solutions', desc: 'From planning to execution, we handle complete electrical infrastructure setup.' },
  ];

  const whyUs = [
    'Experienced and skilled workforce',
    'Expertise in both small and large-scale projects',
    'Reliable and timely project delivery',
    'Cost-effective solutions',
    'Strong reputation in residential and commercial sectors',
    'Customer-first approach',
  ];

  return (
    <main className="home" id="home-page">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero-section" ref={heroRef}>
        <ElectricalBg variant="mixed" dense />
        <div className="container hero__content">
          <div className={`hero__text ${heroVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Trusted Electrical Contractors
            </div>
            <h1 className="hero__title">
              Powering Spaces with
              <span className="hero__title-accent"> Precision </span>
              &amp;
              <span className="hero__title-accent"> Excellence</span>
            </h1>
            <p className="hero__subtitle">
              SAI RAM ELECTRICAL ENTERPRISES delivers end-to-end electrical solutions
              for residential, commercial, and industrial projects. From detailed wiring
              to large-scale switchgear panels — we build it right.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary" id="hero-cta-quote">
                Get a Free Quote <BsArrowRight />
              </Link>
              <Link to="/projects" className="btn btn-secondary hero__btn-outline" id="hero-cta-projects">
                View Projects
              </Link>
            </div>
          </div>

          {/* Interactive MCB Panel */}
          <div className={`hero__visual ${heroVisible ? 'animate-fadeIn' : ''}`}>
            <div className="mcb-panel">
              <div className="mcb-panel__top-strip">
                <div className="mcb-panel__brand-plate">
                  <BsLightningChargeFill />
                  <span>SAI RAM ELECTRICALS</span>
                </div>
              </div>
              <div className="mcb-panel__header">
                <span className="mcb-panel__label">MAIN DISTRIBUTION BOARD</span>
                <span className={`mcb-panel__live ${activeCount > 0 ? '' : 'mcb-panel__live--off'}`}>
                  <span className="mcb-panel__live-dot" />
                  {activeCount > 0 ? 'LIVE' : 'OFF'}
                </span>
              </div>
              <div className="mcb-panel__busbar">
                <div className="mcb-panel__busbar-line mcb-panel__busbar-line--l" />
                <div className="mcb-panel__busbar-line mcb-panel__busbar-line--n" />
                <div className="mcb-panel__busbar-line mcb-panel__busbar-line--e" />
                <span className="mcb-panel__busbar-label">L</span>
                <span className="mcb-panel__busbar-label">N</span>
                <span className="mcb-panel__busbar-label">E</span>
              </div>
              <div className="mcb-panel__grid">
                {breakers.map(b => (
                  <button
                    key={b.id}
                    className={`mcb ${b.on ? 'mcb--on' : 'mcb--off'}`}
                    onClick={() => toggleBreaker(b.id)}
                    title={`Click to toggle ${b.label}`}
                    id={`mcb-${b.id}`}
                  >
                    <div className="mcb__body">
                      <div className="mcb__window">
                        <span className={`mcb__indicator ${b.on ? 'mcb__indicator--on' : 'mcb__indicator--off'}`} />
                      </div>
                      <div className={`mcb__toggle ${b.on ? 'mcb__toggle--on' : 'mcb__toggle--off'}`}>
                        <div className="mcb__toggle-handle" />
                      </div>
                      <div className="mcb__rating">{b.rating}</div>
                    </div>
                    <span className="mcb__label">{b.label}</span>
                  </button>
                ))}
              </div>
              <div className="mcb-panel__status">
                <span>{activeCount}/{breakers.length} circuits active</span>
                <span className="mcb-panel__status-hint">Click switches to toggle</span>
              </div>
              <div className="mcb-panel__bottom-strip">
                <span>3-PHASE • 415V • 50Hz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats section" id="stats-section" ref={statsRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className={`stats__grid ${statsVisible ? 'animate-fadeInUp' : ''}`}>
            {stats.map((stat, i) => (
              <div key={i} className="stats__item">
                <div className="stats__icon">{stat.icon}</div>
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="home-services section" id="home-services-section" ref={servicesRef}>
        <ElectricalBg variant="blue" />
        <div className="container">
          <div className="section-header">
            <span className="section-label"><FiZap /> What We Do</span>
            <h2 className="section-title">Our Electrical Services</h2>
            <p className="section-subtitle">
              Comprehensive electrical solutions tailored to meet every need —
              from individual homes to large-scale commercial installations.
            </p>
          </div>
          <div className={`home-services__grid ${servicesVisible ? 'animate-fadeInUp' : ''}`}>
            {services.map((service, i) => (
              <div key={i} className="home-services__card card">
                <div className="home-services__card-icon">{service.icon}</div>
                <h3 className="home-services__card-title">{service.title}</h3>
                <p className="home-services__card-desc">{service.desc}</p>
                <Link to="/services" className="home-services__card-link">
                  Learn More <BsArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="home-why section" id="home-why-section" ref={whyRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className="home-why__inner">
            <div className={`home-why__content ${whyVisible ? 'animate-slideInLeft' : ''}`}>
              <span className="section-label"><FiAward /> Why Choose Us</span>
              <h2 className="section-title">
                Built on Trust, Driven by Quality
              </h2>
              <p className="home-why__desc">
                With over a decade of experience in the electrical contracting industry,
                SAI RAM ELECTRICAL ENTERPRISES has earned a reputation for reliability,
                precision, and adherence to safety protocols.
              </p>
              <ul className="home-why__list">
                {whyUs.map((item, i) => (
                  <li key={i} className="home-why__list-item">
                    <FiCheckCircle className="home-why__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary" id="home-why-cta">
                Learn More About Us <BsArrowRight />
              </Link>
            </div>

            <div className={`home-why__visual ${whyVisible ? 'animate-slideInRight' : ''}`}>
              <div className="home-why__meter-box">
                {/* SVG Gauge */}
                <svg className="home-why__gauge" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="#222" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="#FFB300" strokeWidth="10" strokeLinecap="round" strokeDasharray="252" strokeDashoffset="63" />
                  <line x1="20" y1="110" x2="28" y2="104" stroke="#555" strokeWidth="2" />
                  <line x1="42" y1="55" x2="50" y2="60" stroke="#555" strokeWidth="2" />
                  <line x1="100" y1="30" x2="100" y2="40" stroke="#555" strokeWidth="2" />
                  <line x1="158" y1="55" x2="150" y2="60" stroke="#555" strokeWidth="2" />
                  <line x1="180" y1="110" x2="172" y2="104" stroke="#555" strokeWidth="2" />
                  <line x1="100" y1="110" x2="55" y2="52" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="100" cy="110" r="5" fill="#E53935" />
                  <circle cx="100" cy="110" r="2.5" fill="#111" />
                </svg>
                <span className="home-why__meter-value">15+</span>
                <span className="home-why__meter-label">YEARS</span>
                <span className="home-why__meter-sub">OF FIELD EXPERTISE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="home-cta section" id="home-cta-section" ref={ctaRef}>
        <ElectricalBg variant="mixed" />
        <div className="container">
          <div className={`home-cta__inner ${ctaVisible ? 'animate-fadeInUp' : ''}`}>
            <h2 className="home-cta__title">Ready to Power Your Next Project?</h2>
            <p className="home-cta__desc">
              Get in touch with us for a precise quotation and site survey.
              We are ready to build the infrastructure you need.
            </p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn btn-dark" id="home-cta-contact">
                Contact Us Today <BsArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary" id="home-cta-services">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
