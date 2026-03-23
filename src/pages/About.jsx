import { BsLightningChargeFill, BsShieldCheck, BsTools, BsPeople, BsCheckCircle, BsAward } from 'react-icons/bs';
import { FiTarget, FiHeart, FiShield, FiAlertTriangle, FiHardDrive, FiTool } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ElectricalBg from '../components/ElectricalBg';
import './About.css';

export default function About() {
  const [founderRef, founderVisible] = useScrollReveal(0.1);
  const [companyRef, companyVisible] = useScrollReveal(0.1);
  const [whyRef, whyVisible] = useScrollReveal(0.1);
  const [commitRef, commitVisible] = useScrollReveal(0.1);
  const [safetyRef, safetyVisible] = useScrollReveal(0.1);

  const whyChoose = [
    { icon: <BsPeople />, title: 'Skilled Workforce', desc: 'Experienced and trained team delivering top-notch results.' },
    { icon: <FiTarget />, title: 'All-Scale Projects', desc: 'Expertise in both small residential and large commercial works.' },
    { icon: <BsTools />, title: 'Timely Delivery', desc: 'Reliable project completion within deadlines, every time.' },
    { icon: <FiHeart />, title: 'Cost-Effective', desc: 'Quality solutions that are always budget-friendly.' },
    { icon: <BsAward />, title: 'Strong Reputation', desc: 'Trusted name in residential and commercial sectors.' },
    { icon: <BsShieldCheck />, title: 'Customer-First', desc: 'Your needs and satisfaction are always our top priority.' },
  ];

  const commitments = [
    { icon: <BsCheckCircle />, text: 'High-quality materials used in every project' },
    { icon: <BsCheckCircle />, text: 'Strict adherence to industry standards and best practices' },
    { icon: <BsCheckCircle />, text: 'Continuous improvement in techniques and tools' },
    { icon: <BsCheckCircle />, text: 'Focus on precision, durability, and long-term performance' },
    { icon: <BsCheckCircle />, text: 'Dedicated supervision and quality checks at every stage' },
  ];

  const safetyMeasures = [
    { icon: <FiShield />, title: 'PPE Equipment', desc: 'Use of proper protective equipment at all times.' },
    { icon: <FiAlertTriangle />, title: 'Safety Standards', desc: 'Strict compliance with electrical safety standards.' },
    { icon: <BsPeople />, title: 'Safety Training', desc: 'Regular training sessions for all team members.' },
    { icon: <FiTool />, title: 'Proper Tools', desc: 'Correct handling of tools and machinery on-site.' },
    { icon: <FiTarget />, title: 'Risk Assessment', desc: 'Comprehensive on-site risk assessment before execution.' },
    { icon: <FiHardDrive />, title: 'Safe Wiring', desc: 'Safe wiring practices to prevent all hazards.' },
  ];

  return (
    <main className="about" id="about-page">
      {/* Page Header */}
      <section className="page-hero" id="about-hero">
        <div className="page-hero__bg-circuit" />
        <ElectricalBg variant="mixed" />
        <div className="container page-hero__content">
          <span className="section-label">Know Our Story</span>
          <h1 className="page-hero__title">About Us</h1>
          <p className="page-hero__subtitle">
            From a single electrician's dream to a trusted enterprise — discover our journey.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="about-founder section" id="founder-section" ref={founderRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className={`about-founder__inner ${founderVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="about-founder__visual">
              <div className="about-founder__industrial-box">
                <div className="about-founder__image-content">
                  <BsLightningChargeFill className="about-founder__bolt" />
                  <span className="about-founder__initials">S.P.</span>
                  <span className="about-founder__name-label">RAI</span>
                </div>
              </div>
              <div className="about-founder__tag">
                <BsAward />
                <span>Founder & Visionary</span>
              </div>
            </div>

            <div className="about-founder__content">
              <span className="section-label" style={{ textAlign: 'left' }}>Founder Story</span>
              <h2 className="about-founder__title">From Passion to Power</h2>
              <div className="about-founder__quote">
                <p>
                  A school dropout with a deep passion for electricity and electrical
                  components, began his journey as a learning electrician. With curiosity and
                  hands-on experience, he developed strong technical skills and an understanding
                  of electrical systems.
                </p>
                <p>
                  As years passed, he built a small team and started taking on residential
                  electrical contracts. His dedication, consistency, and quality work helped
                  him expand into larger projects.
                </p>
                <p>
                  Today, through hard work and vision, he has built not just a business but a
                  growing legacy—handling everything from small residential units to large
                  commercial projects.
                </p>
                <div className="about-founder__signature">
                  <span className="about-founder__sig-name">— S.P. RAI</span>
                  <span className="about-founder__sig-title">Founder, SAI RAM ELECTRICAL ENTERPRISES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-company section" id="company-section" ref={companyRef}>
        <ElectricalBg variant="blue" />
        <div className="container">
          <div className={`section-header ${companyVisible ? 'animate-fadeInUp' : ''}`}>
            <span className="section-label">Our Company</span>
            <h2 className="section-title">About SAI RAM ELECTRICAL ENTERPRISES</h2>
            <p className="section-subtitle">
              Specializing in delivering end-to-end electrical solutions for every scale and need.
            </p>
          </div>

          <div className={`about-company__services ${companyVisible ? 'animate-fadeInUp' : ''}`}>
            {[
              { icon: <BsLightningChargeFill />, name: 'Residential Electrical Installations' },
              { icon: <BsPeople />, name: 'Multi-unit Housing Projects' },
              { icon: <BsTools />, name: 'Commercial Electrical Works' },
              { icon: <BsAward />, name: 'School & Institutional Projects' },
              { icon: <FiHardDrive />, name: 'Retail & Industrial Electrical Setup' },
              { icon: <FiTool />, name: 'Maintenance & Repair Services' },
            ].map((service, i) => (
              <div key={i} className="about-company__service-item">
                <div className="about-company__service-icon">{service.icon}</div>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why section" id="about-why-section" ref={whyRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className={`section-header ${whyVisible ? 'animate-fadeInUp' : ''}`}>
            <span className="section-label">Our Strengths</span>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Six strong reasons clients trust us with their electrical projects.
            </p>
          </div>

          <div className={`about-why__grid ${whyVisible ? 'animate-fadeInUp' : ''}`}>
            {whyChoose.map((item, i) => (
              <div key={i} className="about-why__card card">
                <div className="about-why__card-icon">{item.icon}</div>
                <h3 className="about-why__card-title">{item.title}</h3>
                <p className="about-why__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passion For Perfection */}
      <section className="about-commit section" id="commit-section" ref={commitRef}>
        <ElectricalBg variant="blue" />
        <div className="container">
          <div className={`about-commit__inner ${commitVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="about-commit__content">
              <span className="section-label" style={{ textAlign: 'left' }}>Our Promise</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Passion for Perfection
              </h2>
              <p className="about-commit__desc">
                At SAI RAM ELECTRICAL ENTERPRISES, excellence is not just a goal — it is a standard.
                Every project receives our full dedication to quality.
              </p>
              <ul className="about-commit__list">
                {commitments.map((item, i) => (
                  <li key={i} className="about-commit__list-item">
                    <span className="about-commit__check">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-commit__visual">
              <div className="about-commit__structural-box">
                <BsAward className="about-commit__structural-icon" />
                <span className="about-commit__structural-text">Excellence</span>
                <span className="about-commit__structural-sub">in Every Wire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="about-safety section" id="safety-section" ref={safetyRef}>
        <ElectricalBg variant="mixed" />
        <div className="container">
          <div className={`section-header ${safetyVisible ? 'animate-fadeInUp' : ''}`}>
            <span className="section-label">Safety First</span>
            <h2 className="section-title">Safety Measures in Action</h2>
            <p className="section-subtitle">
              Safety is a top priority in all our operations. We take every measure
              to ensure a secure work environment.
            </p>
          </div>

          <div className={`about-safety__grid ${safetyVisible ? 'animate-fadeInUp' : ''}`}>
            {safetyMeasures.map((item, i) => (
              <div key={i} className="about-safety__card">
                <div className="about-safety__card-icon">{item.icon}</div>
                <h3 className="about-safety__card-title">{item.title}</h3>
                <p className="about-safety__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
