import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xvgkpbnz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Form successfully submitted
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Form submission failed
        setSubmitStatus({ type: 'error', message: 'There was a problem sending your message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'There was a problem sending your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Get in touch</h1>
        <p className="contact__description">
          If you want to contact me, fill out the following form and I will do my best to get back to you as soon as I can!
        </p>
        
        {submitStatus && (
          <div className={`contact__status contact__status--${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="contact__input"
              required
              disabled={isSubmitting}
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="contact__input"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="contact__input"
            required
            disabled={isSubmitting}
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="contact__input contact__textarea"
            required
            disabled={isSubmitting}
          />
          
          <button 
            type="submit" 
            className="contact__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;