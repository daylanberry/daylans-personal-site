import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  Download,
} from "lucide-react";
import { contactInfo } from "../data/portfolioData";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to discuss opportunities or just want to say hello? I'd love
            to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p>
                I'm always open to discussing new opportunities, collaborations,
                or just chatting about frontend development and mobile apps.
                Feel free to reach out through any of the channels below.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={20} />
                  </div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Linkedin size={20} />
                  </div>
                  <div className="method-content">
                    <h4>LinkedIn</h4>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Github size={20} />
                  </div>
                  <div className="method-content">
                    <h4>GitHub</h4>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View my code
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="method-content">
                    <h4>Location</h4>
                    <span>{contactInfo.location}</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Download size={20} />
                  </div>
                  <div className="method-content">
                    <h4>Resume</h4>
                    <a
                      href="/Daylan_Berry_Resume.pdf"
                      download="Daylan_Berry_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-card">
              {!isSubmitted ? (
                <>
                  <h3>Send a Message</h3>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or just say hi!"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h3>Message Sent!</h3>
                  <p>
                    Thanks for reaching out! I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
