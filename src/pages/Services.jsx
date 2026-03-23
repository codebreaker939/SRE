import { Link } from 'react-router-dom';
import { BsLightningChargeFill, BsBuildings, BsTools, BsArrowRight, BsHouseDoor, BsGear } from 'react-icons/bs';
import { FiLayers, FiZap, FiSettings, FiCheckCircle } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ElectricalBg from '../components/ElectricalBg';
import './Services.css';

export default function Services() {
  const [gridRef, gridVisible] = useScrollReveal(0.05);
  const [processRef, processVisible] = useScrollReveal(0.1);

  const services = [
    {
      icon: <BsHouseDoor />,
      title: 'Residential Unit Wiring',
      desc: 'Complete electrical wiring and installation for individual apartments, flats, and small housing units. From circuit planning to final fixtures, we ensure safe, efficient, and code-compliant installations.',
      features: ['Interior wiring & circuit design', 'Switchboard installation', 'Fixture & lighting setup', 'Earthing & grounding systems'],
      color: 'yellow',
    },
    {
      icon: <BsBuildings />,
      title: 'Multi-flat Projects',
      desc: 'End-to-end electrical contracting for multi-unit housing complexes, residential towers, and apartment buildings. Scalable solutions that handle complex multi-floor electrical distribution.',
      features: ['Multi-floor distribution panels', 'Common area lighting', 'Backup power wiring', 'Meter board installations'],
      color: 'blue',
    },
    {
      icon: <BsGear />,
      title: 'Commercial Electrical Works',
      desc: 'High-capacity electrical installations for schools, offices, retail stores, and commercial establishments. Designed for reliability, safety, and optimal performance.',
      features: ['Heavy-load wiring systems', 'Office & retail fitouts', 'School & institutional wiring', 'HVAC electrical integration'],
      color: 'yellow',
    },
    {
      icon: <FiLayers />,
      title: 'Turnkey Electrical Solutions',
      desc: 'Full-spectrum electrical project management — from planning and design through installation and commissioning. One partner for your entire electrical infrastructure.',
      features: ['Project planning & design', 'Material procurement', 'Installation & commissioning', 'Post-completion support'],
      color: 'blue',
    },
  ];

  const process = [
    { step: '01', title: 'Consultation', desc: 'We understand your requirements and assess the project scope.' },
    { step: '02', title: 'Planning', desc: 'Detailed electrical design and material estimation.' },
    { step: '03', title: 'Execution', desc: 'Professional installation with strict quality controls.' },
    { step: '04', title: 'Delivery', desc: 'Testing, commissioning, and final handover.' },
  ];

  return (
    <main className="services-page" id="services-page">
      {/* Page Header */}
      <section className="page-hero" id="services-hero">
        <div className="page-hero__bg-circuit" />
        <ElectricalBg variant="mixed" />
        <div className="container page-hero__content">
          <span className="section-label">What We Offer</span>
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__subtitle">
            Comprehensive electrical solutions for every scale — from single apartments 
            to large commercial complexes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section" id="services-list-section" ref={gridRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className={`services-list__grid ${gridVisible ? 'animate-fadeInUp' : ''}`}>
            {services.map((service, i) => (
              <div key={i} className={`services-list__card services-list__card--${service.color}`}>
                <div className="services-list__card-header">
                  <div className={`services-list__card-icon services-list__card-icon--${service.color}`}>
                    {service.icon}
                  </div>
                  <h2 className="services-list__card-title">{service.title}</h2>
                </div>
                <p className="services-list__card-desc">{service.desc}</p>
                <div className="services-list__card-features-wrap">
                  <ul className="services-list__card-features">
                    {service.features.map((feat, j) => (
                      <li key={j} className="services-list__card-feature">
                        <FiCheckCircle className={`services-list__card-check services-list__card-check--${service.color}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process section" id="services-process-section" ref={processRef}>
        <ElectricalBg variant="blue" />
        <div className="container">
          <div className={`section-header ${processVisible ? 'animate-fadeInUp' : ''}`}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A structured approach that ensures quality and efficiency at every stage.
            </p>
          </div>

          <div className={`services-process__steps ${processVisible ? 'animate-fadeInUp' : ''}`}>
            {process.map((step, i) => (
              <div key={i} className="services-process__step">
                <div className="services-process__step-num">{step.step}</div>
                <div className="services-process__step-line" />
                <h3 className="services-process__step-title">{step.title}</h3>
                <p className="services-process__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="services-cta section" id="services-cta-section">
        <ElectricalBg variant="mixed" />
        <div className="container">
          <div className="services-cta__inner">
            <FiZap className="services-cta__icon" />
            <h2 className="services-cta__title">Need an Electrical Solution?</h2>
            <p className="services-cta__desc">
              Tell us about your project and get a free consultation and quote from our experts.
            </p>
            <Link to="/contact" className="btn btn-primary" id="services-cta-btn">
              Get Free Quote <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
