import { BsCheckCircleFill, BsArrowRepeat, BsGeoAlt, BsImageFill } from 'react-icons/bs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ElectricalBg from '../components/ElectricalBg';
import './Projects.css';

export default function Projects() {
  const [completedRef, completedVisible] = useScrollReveal(0.05);
  const [ongoingRef, ongoingVisible] = useScrollReveal(0.05);

  const completedProjects = [
    { name: 'VASANT VALLEY', location: 'Kalyan' },
    { name: 'NARAYANA SCHOOL', location: 'Kalyan' },
    { name: 'VIBGYOR SCHOOL', location: 'Kalyan' },
    { name: 'DMART', location: 'Badlapur' },
    { name: 'REGENCY ANTILLIA', location: 'Kalyan' },
  ];

  const ongoingProjects = [
    { name: 'NANCY HILL VIEW', location: 'Pune' },
    { name: 'SAGAR HEIGHTS', location: 'Kalyan' },
    { name: 'MOHAN GREEN', location: 'Ambernath' },
  ];

  return (
    <main className="projects-page" id="projects-page">
      {/* Page Header */}
      <section className="page-hero" id="projects-hero">
        <div className="page-hero__bg-circuit" />
        <ElectricalBg variant="mixed" />
        <div className="container page-hero__content">
          <span className="section-label">Our Portfolio</span>
          <h1 className="page-hero__title">Projects</h1>
          <p className="page-hero__subtitle">
            A showcase of our completed and ongoing electrical projects across Maharashtra.
          </p>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="projects-section section" id="completed-section" ref={completedRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className={`section-header ${completedVisible ? 'animate-fadeInUp' : ''}`}>
            <span className="section-label">Done & Delivered</span>
            <h2 className="section-title">Completed Projects</h2>
            <p className="section-subtitle">
              Projects successfully delivered with quality and precision.
            </p>
          </div>

          <div className={`projects-grid ${completedVisible ? 'animate-fadeInUp' : ''}`}>
            {completedProjects.map((project, i) => (
              <div key={i} className="project-card project-card--completed" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="project-card__image">
                  <div className="project-card__image-placeholder">
                    <BsImageFill className="project-card__image-icon" />
                    <span className="project-card__coming-soon">Image Incoming</span>
                  </div>
                </div>
                <div className="project-card__info">
                  <div className="project-card__status project-card__status--completed">
                    <BsCheckCircleFill />
                    <span>Completed</span>
                  </div>
                  <h3 className="project-card__name">{project.name}</h3>
                  <div className="project-card__location">
                    <BsGeoAlt />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="projects-section section" id="ongoing-section" ref={ongoingRef}>
        <ElectricalBg variant="blue" />
        <div className="container">
          <div className={`section-header ${ongoingVisible ? 'animate-fadeInUp' : ''}`}>
            <span className="section-label" style={{ color: 'var(--blue-dark)' }}>In Progress</span>
            <h2 className="section-title">Ongoing Projects</h2>
            <p className="section-subtitle">
              Currently under execution with our dedicated teams on site.
            </p>
          </div>

          <div className={`projects-grid projects-grid--ongoing ${ongoingVisible ? 'animate-fadeInUp' : ''}`}>
            {ongoingProjects.map((project, i) => (
              <div key={i} className="project-card project-card--ongoing" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="project-card__image">
                  <div className="project-card__image-placeholder project-card__image-placeholder--ongoing">
                    <BsImageFill className="project-card__image-icon" />
                    <span className="project-card__coming-soon">Work In Progress</span>
                  </div>
                  <div className="project-card__pulse-solid" />
                </div>
                <div className="project-card__info">
                  <div className="project-card__status project-card__status--ongoing">
                    <BsArrowRepeat />
                    <span>Ongoing</span>
                  </div>
                  <h3 className="project-card__name">{project.name}</h3>
                  <div className="project-card__location">
                    <BsGeoAlt />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
