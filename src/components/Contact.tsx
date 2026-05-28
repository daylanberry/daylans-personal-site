import React from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { contactInfo } from "../data/portfolioData";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-copy">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">Let’s build something worth noticing.</h2>
            <p className="section-subtitle">
              I’m looking for a product-focused engineering role where craft,
              accountability, and momentum matter.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-header">
              <div className="cta-icon">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3>Open to full-time roles</h3>
                <p>Frontend, mobile, and full-stack product engineering.</p>
              </div>
            </div>

            <div className="contact-methods">
              <a className="contact-method" href={`mailto:${contactInfo.email}`}>
                <Mail size={20} />
                <span>{contactInfo.email}</span>
                <ArrowUpRight size={16} />
              </a>

              {contactInfo.linkedin ? (
                <a
                  className="contact-method"
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}

              {contactInfo.github ? (
                <a
                  className="contact-method"
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}

              {contactInfo.location ? (
                <div className="contact-method contact-method-static">
                  <MapPin size={20} />
                  <span>{contactInfo.location}</span>
                </div>
              ) : null}
            </div>

            <div className="cta-buttons">
              <a
                href={`mailto:${contactInfo.email}?subject=Engineering Opportunity&body=Hi Daylan,%0D%0A%0D%0AI wanted to reach out about...`}
                className="btn btn-primary"
              >
                <Mail size={18} />
                Start a Conversation
              </a>

              <a
                href="/Daylan_Berry_Resume.pdf"
                download="Daylan_Berry_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
