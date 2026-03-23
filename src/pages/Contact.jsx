import { useState } from 'react';
import { BsLightningChargeFill, BsTelephone, BsEnvelope, BsGeoAlt, BsClock, BsSend, BsCheckCircleFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ElectricalBg from '../components/ElectricalBg';
import './Contact.css';

export default function Contact() {
  const [formRef, formVisible] = useScrollReveal(0.05);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <BsTelephone />,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      sub: 'Mon - Sat, 9am to 6pm',
    },
    {
      icon: <BsEnvelope />,
      title: 'Email',
      value: 'info@sairamelectrical.com',
      sub: 'We reply within 24 hours',
    },
    {
      icon: <BsGeoAlt />,
      title: 'Location',
      value: 'Kalyan, Maharashtra',
      sub: 'India',
    },
    {
      icon: <BsClock />,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      sub: 'Sunday: Closed',
    },
  ];

  return (
    <main className="contact-page" id="contact-page">
      {/* Page Header */}
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__bg-circuit" />
        <ElectricalBg variant="mixed" />
        <div className="container page-hero__content">
          <span className="section-label">Get in Touch</span>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__subtitle">
            Have a project in mind? Reach out to us for a precise quote and site survey.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section" id="contact-content-section" ref={formRef}>
        <ElectricalBg variant="yellow" />
        <div className="container">
          <div className={`contact-content__grid ${formVisible ? 'animate-fadeInUp' : ''}`}>
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info__title">Let&apos;s Discuss Your Project</h2>
              <p className="contact-info__desc">
                Whether it&apos;s a small residential wiring job or a large commercial installation, 
                we ensure safety and precision. Get in touch with our team.
              </p>

              <div className="contact-info__items">
                {contactInfo.map((item, i) => (
                  <div key={i} className="contact-info__item">
                    <div className="contact-info__item-icon">{item.icon}</div>
                    <div>
                      <span className="contact-info__item-title">{item.title}</span>
                      <span className="contact-info__item-value">{item.value}</span>
                      <span className="contact-info__item-sub">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-info__whatsapp">
                <a href="#" className="btn btn-primary contact-info__whatsapp-btn" id="whatsapp-btn">
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success__icon">
                    <BsCheckCircleFill />
                  </div>
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. A representative will contact you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-form__header">
                    <BsLightningChargeFill className="contact-form__header-icon" />
                    <h3 className="contact-form__title">Request a Quote</h3>
                  </div>
                  
                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="contact-name" className="contact-form__label">Full Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="contact-form__input"
                        required
                      />
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="contact-email" className="contact-form__label">Email</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="contact-form__input"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="contact-phone" className="contact-form__label">Phone</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="contact-form__input"
                      />
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="contact-service" className="contact-form__label">Service Needed</label>
                      <div className="contact-form__select-wrap">
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="contact-form__input contact-form__select"
                        >
                          <option value="">Select a service</option>
                          <option value="residential">Residential Wiring</option>
                          <option value="multi-flat">Multi-flat Projects</option>
                          <option value="commercial">Commercial Works</option>
                          <option value="turnkey">Turnkey Solutions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="contact-message" className="contact-form__label">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Project details..."
                      className="contact-form__input contact-form__textarea"
                      rows="4"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contact-form__submit" id="contact-submit">
                    <BsSend />
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
