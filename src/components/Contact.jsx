import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      setIsModalOpen(true);
    } else {
      e.currentTarget.reportValidity();
    }
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const handleConfirmSend = () => {
    const { fullName, email, phone, subject, message } = formData;
    const mailtoBody = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const url = `mailto:yusufnurwahid29@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.open(url, '_blank');
    handleCloseModal();
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form ref={ref} id="email-form" className={inView ? 'in-view' : ''} onSubmit={handleSubmit} noValidate>
          <div className="input-box">
            <div className="input-field">
              <input type="text" id="full-name" name="fullName" value={formData.fullName} onChange={handleChange} required />
              <span>Full Name</span>
            </div>
            <div className="input-field">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <span>Email Address</span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              <span>Phone Number</span>
            </div>
            <div className="input-field">
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              <span>Email Subject</span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            <span>Your Message</span>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div 
            className={`modal-content ${isClosing ? 'zoom-out' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Confirm Your Message</h3>
              <button className="close-button" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="preview-item">
                <strong>From:</strong>
                <p>{formData.fullName} ({formData.email})</p>
              </div>
              <div className="preview-item">
                <strong>Phone:</strong>
                <p>{formData.phone}</p>
              </div>
              <div className="preview-item">
                <strong>Subject:</strong>
                <p>{formData.subject}</p>
              </div>
              <div className="preview-item">
                <strong>Message:</strong>
                <p className="preview-message">{formData.message}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
              <button className="btn" onClick={handleConfirmSend}>Confirm & Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;