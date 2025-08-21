import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
  MessageCircle,
} from "lucide-react";
import { contactInfo } from "../data/portfolioData";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            I'm actively seeking new opportunities and would love to discuss how
            I can contribute to your team!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Ready to Join Your Team</h3>
              <p>
                I'm actively looking for my next role as a Software Engineer,
                with a focus on frontend development and full-stack
                opportunities. I'm passionate about building user-centric
                applications and would love to bring my experience in modern web
                technologies and mobile development to your organization.
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

          <div className="contact-cta-section">
            <div className="cta-card">
              <div className="cta-icon">
                <MessageCircle size={48} />
              </div>
              <h3>Interested in Hiring?</h3>
              <p>
                I'm available for full-time opportunities and excited to discuss
                how my experience in frontend development, mobile applications,
                and full-stack engineering can help drive your team's success.
                Let's start the conversation!
              </p>

              <div className="cta-buttons">
                <a
                  href={`mailto:${contactInfo.email}?subject=Job Opportunity Discussion&body=Hi Daylan,%0D%0A%0D%0AI'm reaching out regarding a potential opportunity with our team...`}
                  className="btn btn-primary"
                >
                  <Mail size={18} />
                  Discuss Opportunities
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Linkedin size={18} />
                  View Professional Profile
                </a>
              </div>

              <div className="response-note">
                <p>💼 Available for immediate start • Open to relocation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
